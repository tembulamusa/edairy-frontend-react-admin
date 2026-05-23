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
import { transporterCreateMainSx, transporterCreateWrapperSx } from '../../transporters/shared/transporter-page-layout';
import { useStoreChoices } from '../shared/use-store-choices';
import type { StoreItemRecord, StoreStockRecord } from '../store sales/pos/store-sale-pos-utils';
import { InterstoreTransferItemPicker } from './InterstoreTransferItemPicker';
import { submitInterstoreTransfer } from './interstore-transfer-submit';
import type { InterstoreTransferDraft, InterstoreTransferErrors, TransferLineSelection } from './interstore-transfer.types';
import {
    buildTransferLines,
    buildTransferLinesFromProducts,
    buildTransferProductsFromStocks,
    hasTransferErrors,
    initialInterstoreTransferDraft,
    INTERSTORE_TRANSFER_STATUS_PENDING,
    normalizeScalarId,
    selectionsFromLines,
    todayIsoDate,
    validateInterstoreTransfer,
} from './interstore-transfer-utils';

type InterstoreTransferFormContentProps = {
    mode: 'create' | 'edit';
};

const parseRecordItems = (record: Record<string, unknown> | undefined) => {
    const raw = record?.items ?? record?.transfer_items ?? record?.inter_store_transfer_items;
    if (!Array.isArray(raw)) {
        return [];
    }
    return raw as Array<{ item_id?: number; quantity?: number | string }>;
};

const formatTransferDate = (value: unknown) => {
    if (!value) {
        return '';
    }
    if (value instanceof Date) {
        return value.toLocaleDateString('en-CA');
    }
    return String(value).slice(0, 10);
};

const parseStoreField = (value: unknown) => normalizeScalarId(value);

const toDraftValues = (values: InterstoreTransferDraft): InterstoreTransferDraft => ({
    reference: String(values.reference ?? '').trim(),
    from_store_id: parseStoreField(values.from_store_id),
    to_store_id: parseStoreField(values.to_store_id),
    transfer_date: formatTransferDate(values.transfer_date),
    status: String(values.status ?? INTERSTORE_TRANSFER_STATUS_PENDING).trim() || INTERSTORE_TRANSFER_STATUS_PENDING,
});

const InterstoreTransferFormContent = ({ mode }: InterstoreTransferFormContentProps) => {
    const notify = useNotify();
    const redirect = useRedirect();
    const refresh = useRefresh();
    const isEdit = mode === 'edit';
    const record = useRecordContext<Record<string, unknown>>();
    const recordId = record?.id;

    const form = useForm<InterstoreTransferDraft>({
        defaultValues: initialInterstoreTransferDraft(),
    });

    const reference = form.watch('reference');
    const fromStoreId = form.watch('from_store_id');
    const toStoreId = form.watch('to_store_id');
    const transferDate = form.watch('transfer_date');
    const status = form.watch('status');

    const values = useMemo(
        () =>
            toDraftValues({
                reference,
                from_store_id: fromStoreId,
                to_store_id: toStoreId,
                transfer_date: transferDate,
                status,
            }),
        [reference, fromStoreId, toStoreId, transferDate, status]
    );

    const [lineSelections, setLineSelections] = useState<TransferLineSelection>({});
    const [errors, setErrors] = useState<InterstoreTransferErrors>({});
    const [saving, setSaving] = useState(false);
    const editHydratedRef = useRef(false);
    const previousFromStoreRef = useRef('');

    const { choices: storeChoices, nameLookup, isLoading: storesLoading } = useStoreChoices();

    const { data: storeItems = [], isLoading: itemsLoading } = useGetList('store-items', {
        pagination: { page: 1, perPage: 500 },
        sort: { field: 'id', order: 'ASC' },
    });

    const { data: storeStocks = [], isLoading: stocksLoading } = useGetList('store-stocks', {
        pagination: { page: 1, perPage: 1000 },
        sort: { field: 'id', order: 'ASC' },
    });

    const fromStoreName = useMemo(() => {
        if (!values.from_store_id) {
            return '';
        }
        return (
            nameLookup.get(values.from_store_id) ??
            String(record?.from_store_name ?? '').trim()
        );
    }, [nameLookup, values.from_store_id, record?.from_store_name]);

    const products = useMemo(
        () =>
            buildTransferProductsFromStocks(
                storeStocks as StoreStockRecord[],
                values.from_store_id,
                fromStoreName,
                storeItems as StoreItemRecord[]
            ),
        [storeStocks, storeItems, values.from_store_id, fromStoreName]
    );

    const lines = useMemo(
        () => buildTransferLines(products, lineSelections),
        [products, lineSelections]
    );

    useEffect(() => {
        const current = values.from_store_id;
        if (previousFromStoreRef.current && previousFromStoreRef.current !== current) {
            setLineSelections({});
        }
        previousFromStoreRef.current = current;
    }, [values.from_store_id]);

    useEffect(() => {
        if (!isEdit || !record || editHydratedRef.current) {
            return;
        }

        const fromStoreIdValue = String(record.from_store_id ?? '');
        const storeLabel =
            nameLookup.get(fromStoreIdValue) ?? String(record.from_store_name ?? '').trim();
        const catalog = buildTransferProductsFromStocks(
            storeStocks as StoreStockRecord[],
            fromStoreIdValue,
            storeLabel,
            storeItems as StoreItemRecord[]
        );
        const quantityByItem = new Map(
            parseRecordItems(record).map((item) => [Number(item.item_id) || 0, Number(item.quantity) || 0])
        );

        const hydratedLines = buildTransferLinesFromProducts(catalog).map((line) => {
            const qty = quantityByItem.get(line.itemId);
            if (!qty) {
                return line;
            }
            const capped = Math.min(qty, line.maxQuantity);
            return {
                ...line,
                selected: capped > 0,
                quantity: capped > 0 ? String(capped) : '',
            };
        });

        form.reset({
            reference: String(record.reference ?? ''),
            from_store_id: fromStoreIdValue,
            to_store_id: String(record.to_store_id ?? ''),
            transfer_date: String(record.transfer_date ?? todayIsoDate()).slice(0, 10),
            status: String(record.status ?? INTERSTORE_TRANSFER_STATUS_PENDING),
        });
        setLineSelections(selectionsFromLines(hydratedLines));
        editHydratedRef.current = true;
    }, [isEdit, record, storeItems, storeStocks, nameLookup, form]);

    const loadingCatalog = Boolean(values.from_store_id) && (itemsLoading || stocksLoading);

    const handleToggle = (itemId: number, selected: boolean) => {
        setLineSelections((current) => ({
            ...current,
            [itemId]: {
                selected,
                quantity: selected ? current[itemId]?.quantity || '1' : '',
            },
        }));
        setErrors((current) => ({ ...current, lines: undefined, [`line_${itemId}_quantity`]: undefined }));
    };

    const handleQuantityChange = (itemId: number, quantity: string) => {
        const product = products.find((entry) => entry.itemId === itemId);
        const maxQuantity = product?.balance ?? 0;

        setLineSelections((current) => {
            const selected = current[itemId]?.selected ?? true;

            if (!quantity.trim()) {
                return { ...current, [itemId]: { selected, quantity: '' } };
            }

            const numeric = Number(quantity);
            if (!Number.isFinite(numeric)) {
                return { ...current, [itemId]: { selected, quantity } };
            }

            if (numeric < 1) {
                return { ...current, [itemId]: { selected: true, quantity } };
            }

            return {
                ...current,
                [itemId]: {
                    selected: true,
                    quantity: String(Math.min(Math.floor(numeric), maxQuantity)),
                },
            };
        });
        setErrors((current) => ({ ...current, [`line_${itemId}_quantity`]: undefined, lines: undefined }));
    };

    const handleSubmit = async () => {
        const draft = toDraftValues(form.getValues());
        const formErrors = validateInterstoreTransfer(draft, lines);
        setErrors(formErrors);

        if (hasTransferErrors(formErrors)) {
            notify('Please complete all required fields before submitting.', { type: 'warning' });
            return;
        }

        setSaving(true);
        try {
            const result = await submitInterstoreTransfer(
                draft,
                lines,
                isEdit && recordId != null ? (recordId as string | number) : undefined
            );
            notify(result.message, { type: 'success' });
            refresh();
            redirect('list', 'inter-store-transfers');
        } catch (error) {
            notify(
                error instanceof Error ? error.message : 'Failed to save inter store transfer',
                { type: 'error' }
            );
        } finally {
            setSaving(false);
        }
    };

    const title = isEdit ? 'Edit Inter Store Transfer' : 'New Inter Store Transfer';
    const subtitle = isEdit
        ? 'Update transfer details and line items.'
        : 'Move stock from one store to another.';

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

                    <FormProvider {...form}>
                        <Stack spacing={3}>
                            <Grid container spacing={2}>
                                <Grid size={{ xs: 12, md: 6 }}>
                                    <TextInput
                                        source="reference"
                                        label="Reference"
                                        fullWidth
                                        variant="outlined"
                                        helperText={errors.reference}
                                        error={Boolean(errors.reference)}
                                    />
                                </Grid>
                                <Grid size={{ xs: 12, md: 6 }}>
                                    <DateInput
                                        source="transfer_date"
                                        label="Transfer Date"
                                        fullWidth
                                        variant="outlined"
                                        helperText={errors.transfer_date}
                                        error={Boolean(errors.transfer_date)}
                                    />
                                </Grid>
                                <Grid size={{ xs: 12, md: 6 }}>
                                    <SelectInput
                                        source="from_store_id"
                                        label="From Store"
                                        choices={storeChoices}
                                        optionText="name"
                                        optionValue="id"
                                        parse={parseStoreField}
                                        format={parseStoreField}
                                        emptyText="Select source store"
                                        disabled={storesLoading}
                                        fullWidth
                                        variant="outlined"
                                        helperText={errors.from_store_id}
                                        error={Boolean(errors.from_store_id)}
                                    />
                                </Grid>
                                <Grid size={{ xs: 12, md: 6 }}>
                                    <SelectInput
                                        source="to_store_id"
                                        label="To Store"
                                        choices={storeChoices}
                                        optionText="name"
                                        optionValue="id"
                                        parse={parseStoreField}
                                        format={parseStoreField}
                                        emptyText="Select destination store"
                                        disabled={storesLoading}
                                        fullWidth
                                        variant="outlined"
                                        helperText={errors.to_store_id}
                                        error={Boolean(errors.to_store_id)}
                                    />
                                </Grid>
                                <TextInput
                                    source="status"
                                    defaultValue={INTERSTORE_TRANSFER_STATUS_PENDING}
                                    sx={{ display: 'none' }}
                                />
                            </Grid>

                            <InterstoreTransferItemPicker
                                lines={lines}
                                errors={errors}
                                loading={loadingCatalog}
                                fromStoreSelected={Boolean(values.from_store_id)}
                                onToggle={handleToggle}
                                onQuantityChange={handleQuantityChange}
                            />

                            <Stack direction="row" justifyContent="space-between" alignItems="center">
                                <Button
                                    variant="outlined"
                                    onClick={() => redirect('list', 'inter-store-transfers')}
                                    disabled={saving}
                                >
                                    Cancel
                                </Button>
                                <Button variant="contained" onClick={handleSubmit} disabled={saving}>
                                    {saving ? 'Saving...' : isEdit ? 'Save Changes' : 'Save Transfer'}
                                </Button>
                            </Stack>
                        </Stack>
                    </FormProvider>
                </CardContent>
            </Card>
        </Box>
    );
};

export const InterstoreTransferCreate = () => (
    <Create title={false} resource="inter-store-transfers" sx={transporterCreateMainSx}>
        <InterstoreTransferFormContent mode="create" />
    </Create>
);

export const InterstoreTransferEdit = () => (
    <Edit title={false} resource="inter-store-transfers" sx={transporterCreateMainSx}>
        <InterstoreTransferFormContent mode="edit" />
    </Edit>
);
