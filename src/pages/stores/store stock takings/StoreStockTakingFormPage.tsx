import { useEffect, useMemo, useRef, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import {
    Create,
    DateInput,
    Edit,
    SelectInput,
    TextInput,
    useGetList,
    useNotify,
    useRecordContext,
    useRedirect,
    useRefresh,
} from 'react-admin';
import {
    Box,
    Button,
    Card,
    CardContent,
    Divider,
    Grid,
    Stack,
    Typography,
} from '@mui/material';
import { ListBreadcrumbs } from '../../../../ListBreadcrumbs';
import { CreateSuccessBanner } from '../../../components/forms/CreateSuccessBanner';
import { useRedirectToCreateWithReload } from '../../../components/forms/redirect-to-create-with-reload';
import { WizardCreateActions } from '../../../components/forms/WizardCreateActions';
import { transporterCreateMainSx, transporterCreateWrapperSx } from '../../transporters/shared/transporter-page-layout';
import { normalizeStoreId, useStoreChoices } from '../shared/use-store-choices';
import type { StoreItemRecord, StoreStockRecord } from '../store sales/pos/store-sale-pos-utils';
import { StoreStockTakingItemList } from './StoreStockTakingItemList';
import { submitStockTaking } from './store-stock-taking-submit';
import type {
    StockTakingDraft,
    StockTakingErrors,
    StockTakingLineSelection,
} from './store-stock-taking.types';
import {
    buildStockTakingLines,
    hasStockTakingErrors,
    initialStockTakingDraft,
    selectionsFromLines,
    todayIsoDate,
    validateStockTaking,
} from './store-stock-taking-utils';

type StoreStockTakingFormContentProps = {
    mode: 'create' | 'edit';
};

const parseRecordItems = (record: Record<string, unknown> | undefined) => {
    const raw = record?.items ?? record?.stock_take_items ?? record?.store_stock_taking_items;
    if (!Array.isArray(raw)) {
        if (record?.item_id != null) {
            return [
                {
                    item_id: record.item_id,
                    system_quantity: record.system_quantity,
                    physical_quantity: record.physical_quantity,
                },
            ];
        }
        return [];
    }
    return raw as Array<{
        item_id?: number;
        system_quantity?: number | string;
        physical_quantity?: number | string;
    }>;
};

const formatStockTakeDate = (value: unknown) => {
    if (!value) {
        return '';
    }
    if (value instanceof Date) {
        return value.toLocaleDateString('en-CA');
    }
    return String(value).slice(0, 10);
};

const parseStoreField = (value: unknown) => normalizeStoreId(value);

const toDraftValues = (values: StockTakingDraft): StockTakingDraft => ({
    stock_take_no: String(values.stock_take_no ?? '').trim(),
    stock_take_date: formatStockTakeDate(values.stock_take_date),
    store_id: parseStoreField(values.store_id),
    remarks: String(values.remarks ?? ''),
});

const StoreStockTakingFormContent = ({ mode }: StoreStockTakingFormContentProps) => {
    const notify = useNotify();
    const redirect = useRedirect();
    const redirectToCreateWithReload = useRedirectToCreateWithReload();
    const refresh = useRefresh();
    const isEdit = mode === 'edit';
    const record = useRecordContext<Record<string, unknown>>();
    const recordId = record?.id;

    const form = useForm<StockTakingDraft>({
        defaultValues: initialStockTakingDraft(),
    });

    const storeId = form.watch('store_id');
    const stockTakeNo = form.watch('stock_take_no');
    const stockTakeDate = form.watch('stock_take_date');
    const remarks = form.watch('remarks');

    const values = useMemo(
        () =>
            toDraftValues({
                stock_take_no: stockTakeNo,
                stock_take_date: stockTakeDate,
                store_id: storeId,
                remarks,
            }),
        [stockTakeNo, stockTakeDate, storeId, remarks]
    );

    const [lineSelections, setLineSelections] = useState<StockTakingLineSelection>({});
    const [errors, setErrors] = useState<StockTakingErrors>({});
    const [saving, setSaving] = useState(false);
    const editHydratedRef = useRef(false);
    const previousStoreRef = useRef('');

    const { choices: storeChoices, nameLookup, isLoading: storesLoading } = useStoreChoices();

    const { data: storeItems = [], isLoading: itemsLoading } = useGetList('store-items', {
        pagination: { page: 1, perPage: 500 },
        sort: { field: 'id', order: 'ASC' },
    });

    const { data: storeStocks = [], isLoading: stocksLoading } = useGetList('store-stocks', {
        pagination: { page: 1, perPage: 1000 },
        sort: { field: 'id', order: 'ASC' },
    });

    const storeName = useMemo(() => {
        if (!values.store_id) {
            return '';
        }
        return nameLookup.get(values.store_id) ?? String(record?.store_name ?? '').trim();
    }, [nameLookup, values.store_id, record?.store_name]);

    const lines = useMemo(
        () =>
            buildStockTakingLines(
                storeStocks as StoreStockRecord[],
                values.store_id,
                storeName,
                storeItems as StoreItemRecord[],
                lineSelections
            ),
        [storeStocks, storeItems, values.store_id, storeName, lineSelections]
    );

    useEffect(() => {
        const current = values.store_id;
        if (previousStoreRef.current && previousStoreRef.current !== current) {
            setLineSelections({});
        }
        previousStoreRef.current = current;
    }, [values.store_id]);

    useEffect(() => {
        if (!isEdit || !record || editHydratedRef.current) {
            return;
        }

        const storeIdValue = String(record.store_id ?? '');
        const storeLabel = nameLookup.get(storeIdValue) ?? String(record.store_name ?? '').trim();
        const catalog = buildStockTakingLines(
            storeStocks as StoreStockRecord[],
            storeIdValue,
            storeLabel,
            storeItems as StoreItemRecord[],
            {}
        );

        const quantityByItem = new Map(
            parseRecordItems(record).map((item) => [
                Number(item.item_id) || 0,
                String(item.physical_quantity ?? ''),
            ])
        );

        const hydratedLines = catalog.map((line) => {
            const physicalQuantity = quantityByItem.get(line.itemId) ?? '';
            const selected = Boolean(physicalQuantity.trim());
            return {
                ...line,
                selected,
                physicalQuantity: selected ? physicalQuantity : '',
            };
        });

        form.reset({
            stock_take_no: String(record.stock_take_no ?? ''),
            stock_take_date: String(record.stock_take_date ?? todayIsoDate()).slice(0, 10),
            store_id: storeIdValue,
            remarks: String(record.remarks ?? ''),
        });
        setLineSelections(selectionsFromLines(hydratedLines));
        editHydratedRef.current = true;
    }, [isEdit, record, storeItems, storeStocks, nameLookup, form]);

    const loadingCatalog = Boolean(values.store_id) && (itemsLoading || stocksLoading);

    const handleToggle = (itemId: number, selected: boolean) => {
        setLineSelections((current) => ({
            ...current,
            [itemId]: {
                selected,
                physicalQuantity: selected ? current[itemId]?.physicalQuantity || '' : '',
            },
        }));
        setErrors((current) => ({
            ...current,
            lines: undefined,
            [`line_${itemId}_physical`]: undefined,
        }));
    };

    const handlePhysicalQuantityChange = (itemId: number, quantity: string) => {
        setLineSelections((current) => {
            const selected = current[itemId]?.selected ?? true;

            if (!quantity.trim()) {
                return {
                    ...current,
                    [itemId]: { selected, physicalQuantity: '' },
                };
            }

            return {
                ...current,
                [itemId]: { selected: true, physicalQuantity: quantity },
            };
        });
        setErrors((current) => ({ ...current, [`line_${itemId}_physical`]: undefined, lines: undefined }));
    };

    const handleSubmit = async (addAnother = false) => {
        const draft = toDraftValues(form.getValues());
        const formErrors = validateStockTaking(draft, lines);
        setErrors(formErrors);

        if (hasStockTakingErrors(formErrors)) {
            notify('Please complete all required fields before submitting.', { type: 'warning' });
            return;
        }

        setSaving(true);
        try {
            const result = await submitStockTaking(
                draft,
                lines,
                isEdit && recordId != null ? (recordId as string | number) : undefined
            );
            refresh();
            if (isEdit) {
                notify(result.message, { type: 'success' });
                redirect('list', 'store-stock-takings');
            } else if (addAnother) {
                redirectToCreateWithReload('store-stock-takings', result.message);
            } else {
                notify(result.message, { type: 'success' });
                redirect('list', 'store-stock-takings');
            }
        } catch (error) {
            notify(error instanceof Error ? error.message : 'Failed to save stock taking', { type: 'error' });
        } finally {
            setSaving(false);
        }
    };

    const title = isEdit ? 'Edit Stock Taking' : 'New Stock Taking';
    const subtitle = isEdit
        ? 'Update stock take details and physical counts.'
        : 'Record physical stock counts against system balances for a store.';

    return (
        <Box sx={transporterCreateWrapperSx}>
            <ListBreadcrumbs />
            <Card elevation={0} sx={{ borderRadius: 3, overflow: 'hidden', width: '100%' }}>
                <CardContent sx={{ p: 4 }}>
                    <Typography variant="h5" fontWeight="bold">
                        {title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                        {subtitle}
                    </Typography>
                    <Divider sx={{ mb: 3 }} />
                    {!isEdit ? <CreateSuccessBanner /> : null}

                    <FormProvider {...form}>
                        <Stack spacing={3}>
                            <Grid container spacing={2}>
                                <Grid size={{ xs: 12, md: 6 }}>
                                    <TextInput
                                        source="stock_take_no"
                                        label="Stock Take No"
                                        fullWidth
                                        variant="outlined"
                                        helperText={errors.stock_take_no}
                                        error={Boolean(errors.stock_take_no)}
                                    />
                                </Grid>
                                <Grid size={{ xs: 12, md: 6 }}>
                                    <DateInput
                                        source="stock_take_date"
                                        label="Stock Take Date"
                                        fullWidth
                                        variant="outlined"
                                        helperText={errors.stock_take_date}
                                        error={Boolean(errors.stock_take_date)}
                                    />
                                </Grid>
                                <Grid size={{ xs: 12, md: 6 }}>
                                    <SelectInput
                                        source="store_id"
                                        label="Store"
                                        choices={storeChoices}
                                        optionText="name"
                                        optionValue="id"
                                        parse={parseStoreField}
                                        format={parseStoreField}
                                        emptyText="Select store"
                                        disabled={storesLoading}
                                        fullWidth
                                        variant="outlined"
                                        helperText={errors.store_id}
                                        error={Boolean(errors.store_id)}
                                    />
                                </Grid>
                                <Grid size={{ xs: 12 }}>
                                    <TextInput
                                        source="remarks"
                                        label="Remarks"
                                        multiline
                                        rows={3}
                                        fullWidth
                                        variant="outlined"
                                    />
                                </Grid>
                            </Grid>

                            <StoreStockTakingItemList
                                lines={lines}
                                errors={errors}
                                loading={loadingCatalog}
                                storeSelected={Boolean(values.store_id)}
                                onToggle={handleToggle}
                                onPhysicalQuantityChange={handlePhysicalQuantityChange}
                            />

                            {isEdit ? (
                                <Stack direction="row" justifyContent="space-between" alignItems="center">
                                    <Button
                                        variant="outlined"
                                        onClick={() => redirect('list', 'store-stock-takings')}
                                        disabled={saving}
                                    >
                                        Cancel
                                    </Button>
                                    <Button
                                        variant="contained"
                                        onClick={() => handleSubmit(false)}
                                        disabled={saving}
                                    >
                                        {saving ? 'Saving...' : 'Save Changes'}
                                    </Button>
                                </Stack>
                            ) : (
                                <WizardCreateActions
                                    saving={saving}
                                    showBack={false}
                                    showNext={false}
                                    onCancel={() => redirect('list', 'store-stock-takings')}
                                    onBack={() => undefined}
                                    onNext={() => undefined}
                                    onSave={() => handleSubmit(false)}
                                    onSaveAndAddNew={() => handleSubmit(true)}
                                    saveLabel="Save"
                                    saveAndAddLabel="Save and Add New"
                                />
                            )}
                        </Stack>
                    </FormProvider>
                </CardContent>
            </Card>
        </Box>
    );
};

export const StoreStockTakingCreate = () => (
    <Create title={false} resource="store-stock-takings" sx={transporterCreateMainSx} redirect={false}>
        <StoreStockTakingFormContent mode="create" />
    </Create>
);

export const StoreStockTakingEdit = () => (
    <Edit title={false} resource="store-stock-takings" sx={transporterCreateMainSx}>
        <StoreStockTakingFormContent mode="edit" />
    </Edit>
);
