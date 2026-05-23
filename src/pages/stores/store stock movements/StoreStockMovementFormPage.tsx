import { useEffect, useMemo, useRef, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import {
    Create,
    DateInput,
    SelectInput,
    TextInput,
    useGetList,
    useNotify,
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
import { normalizeStoreId, useStoreChoices } from '../shared/use-store-choices';
import type { StoreItemRecord, StoreStockRecord } from '../store sales/pos/store-sale-pos-utils';
import { StoreStockMovementItemList } from './StoreStockMovementItemList';
import { submitStockMovement } from './store-stock-movement-submit';
import type {
    MovementDirection,
    MovementLineSelection,
    StockMovementDraft,
    StockMovementErrors,
} from './store-stock-movement.types';
import {
    buildMovementLines,
    hasStockMovementErrors,
    initialStockMovementDraft,
    movementDirectionChoices,
    validateStockMovement,
} from './store-stock-movement-utils';

const formatTransactionDate = (value: unknown) => {
    if (!value) {
        return '';
    }
    if (value instanceof Date) {
        return value.toLocaleDateString('en-CA');
    }
    return String(value).slice(0, 10);
};

const parseStoreField = (value: unknown) => normalizeStoreId(value);

const parseReferenceField = (value: unknown) => normalizeStoreId(value);

const toDraftValues = (values: StockMovementDraft): StockMovementDraft => ({
    transaction_date: formatTransactionDate(values.transaction_date),
    store_id: parseStoreField(values.store_id),
    movement_type_id: parseReferenceField(values.movement_type_id),
    movement_direction: (values.movement_direction ?? 'OUT') as MovementDirection,
    remarks: String(values.remarks ?? ''),
});

export const StoreStockMovementFormContent = () => {
    const notify = useNotify();
    const redirect = useRedirect();
    const refresh = useRefresh();

    const form = useForm<StockMovementDraft>({
        defaultValues: initialStockMovementDraft(),
    });

    const storeId = form.watch('store_id');
    const transactionDate = form.watch('transaction_date');
    const movementTypeId = form.watch('movement_type_id');
    const movementDirection = form.watch('movement_direction');
    const remarks = form.watch('remarks');

    const values = useMemo(
        () =>
            toDraftValues({
                transaction_date: transactionDate,
                store_id: storeId,
                movement_type_id: movementTypeId,
                movement_direction: movementDirection,
                remarks,
            }),
        [transactionDate, storeId, movementTypeId, movementDirection, remarks]
    );

    const [lineSelections, setLineSelections] = useState<MovementLineSelection>({});
    const [errors, setErrors] = useState<StockMovementErrors>({});
    const [saving, setSaving] = useState(false);
    const previousStoreRef = useRef('');

    const { choices: storeChoices, nameLookup, isLoading: storesLoading } = useStoreChoices();

    const { data: movementTypes = [], isLoading: movementTypesLoading } = useGetList(
        'store-stock-movement-types',
        {
            pagination: { page: 1, perPage: 200 },
            sort: { field: 'id', order: 'ASC' },
        }
    );

    const movementTypeChoices = useMemo(
        () =>
            movementTypes.map((type) => ({
                id: String(type.id),
                name: String(type.movement_name ?? type.id),
            })),
        [movementTypes]
    );

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
        return nameLookup.get(values.store_id) ?? '';
    }, [nameLookup, values.store_id]);

    const direction = values.movement_direction;

    const lines = useMemo(
        () =>
            buildMovementLines(
                storeStocks as StoreStockRecord[],
                values.store_id,
                storeName,
                storeItems as StoreItemRecord[],
                direction,
                lineSelections
            ),
        [storeStocks, storeItems, values.store_id, storeName, direction, lineSelections]
    );

    useEffect(() => {
        const current = values.store_id;
        if (previousStoreRef.current && previousStoreRef.current !== current) {
            setLineSelections({});
        }
        previousStoreRef.current = current;
    }, [values.store_id]);

    useEffect(() => {
        setLineSelections({});
    }, [direction]);

    const loadingCatalog = Boolean(values.store_id) && (itemsLoading || stocksLoading);

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
        const product = lines.find((entry) => entry.itemId === itemId);
        const maxQuantity = product?.maxQuantity ?? 0;

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

            const capped =
                direction === 'OUT'
                    ? Math.min(Math.floor(numeric), maxQuantity)
                    : Math.floor(numeric);

            return {
                ...current,
                [itemId]: {
                    selected: true,
                    quantity: String(capped),
                },
            };
        });
        setErrors((current) => ({ ...current, [`line_${itemId}_quantity`]: undefined, lines: undefined }));
    };

    const handleSubmit = async () => {
        const draft = toDraftValues(form.getValues());
        const formErrors = validateStockMovement(draft, lines, draft.movement_direction);
        setErrors(formErrors);

        if (hasStockMovementErrors(formErrors)) {
            notify('Please complete all required fields before submitting.', { type: 'warning' });
            return;
        }

        setSaving(true);
        try {
            const result = await submitStockMovement(draft, lines);
            notify(result.message, { type: 'success' });
            refresh();
            redirect('list', 'store-stock-movements');
        } catch (error) {
            notify(error instanceof Error ? error.message : 'Failed to save stock movement', {
                type: 'error',
            });
        } finally {
            setSaving(false);
        }
    };

    return (
        <Box sx={transporterCreateWrapperSx}>
            <ListBreadcrumbs />
            <Card elevation={0} sx={{ borderRadius: 3, overflow: 'hidden', width: '100%' }}>
                <CardContent sx={{ p: 4 }}>
                    <Typography variant="h5" fontWeight="bold">
                        New Stock Movement
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                        Record manual stock in or out entries in the ledger.
                    </Typography>
                    <Divider sx={{ mb: 3 }} />

                    <FormProvider {...form}>
                        <Stack spacing={3}>
                            <Grid container spacing={2}>
                                <Grid size={{ xs: 12, md: 6 }}>
                                    <DateInput
                                        source="transaction_date"
                                        label="Transaction Date"
                                        fullWidth
                                        variant="outlined"
                                        helperText={errors.transaction_date}
                                        error={Boolean(errors.transaction_date)}
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
                                <Grid size={{ xs: 12, md: 6 }}>
                                    <SelectInput
                                        source="movement_type_id"
                                        label="Movement Type"
                                        choices={movementTypeChoices}
                                        optionText="name"
                                        optionValue="id"
                                        parse={parseReferenceField}
                                        format={parseReferenceField}
                                        emptyText="Select movement type"
                                        disabled={movementTypesLoading}
                                        fullWidth
                                        variant="outlined"
                                        helperText={errors.movement_type_id}
                                        error={Boolean(errors.movement_type_id)}
                                    />
                                </Grid>
                                <Grid size={{ xs: 12, md: 6 }}>
                                    <SelectInput
                                        source="movement_direction"
                                        label="Direction"
                                        choices={movementDirectionChoices}
                                        optionText="name"
                                        optionValue="id"
                                        fullWidth
                                        variant="outlined"
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

                            <StoreStockMovementItemList
                                lines={lines}
                                errors={errors}
                                loading={loadingCatalog}
                                storeSelected={Boolean(values.store_id)}
                                direction={direction}
                                onToggle={handleToggle}
                                onQuantityChange={handleQuantityChange}
                            />

                            <Stack direction="row" justifyContent="space-between" alignItems="center">
                                <Button
                                    variant="outlined"
                                    onClick={() => redirect('list', 'store-stock-movements')}
                                    disabled={saving}
                                >
                                    Cancel
                                </Button>
                                <Button variant="contained" onClick={handleSubmit} disabled={saving}>
                                    {saving ? 'Saving...' : 'Save Movement'}
                                </Button>
                            </Stack>
                        </Stack>
                    </FormProvider>
                </CardContent>
            </Card>
        </Box>
    );
};

export const StoreStockMovementCreate = () => (
    <Create title={false} resource="store-stock-movements" sx={transporterCreateMainSx}>
        <StoreStockMovementFormContent />
    </Create>
);
