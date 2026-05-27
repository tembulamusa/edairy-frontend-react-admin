import { useMemo, useState } from 'react';
import { Create, useGetList, useNotify, useRedirect, useRefresh } from 'react-admin';
import { Box, Card, CardContent, Divider, Grid, Stack, Typography } from '@mui/material';
import { ListBreadcrumbs } from '../../../../../ListBreadcrumbs';
import { CreateSuccessBanner } from '../../../../components/forms/CreateSuccessBanner';
import { useRedirectToCreateWithReload } from '../../../../components/forms/redirect-to-create-with-reload';
import { WizardCreateActions } from '../../../../components/forms/WizardCreateActions';
import { transporterCreateMainSx } from '../../../transporters/shared/transporter-page-layout';
import { PosProductGrid } from './PosProductGrid';
import { PosCartPanel } from './PosCartPanel';
import type { SaleType, StoreSalePosDraft, StoreSalePosErrors } from './store-sale-pos.types';
import { submitStoreSalePos } from './store-sale-pos-submit';
import {
    addProductToCart,
    buildPosProducts,
    calcCartTotals,
    hasPosErrors,
    initialStoreSalePosDraft,
    syncCartPrices,
    updateCartLineQuantity,
    validateStoreSalePos,
    withSyncedAmountPaid,
    type PosProduct,
    type StoreItemRecord,
    type StoreStockRecord,
} from './store-sale-pos-utils';

export const StoreSalePosCreate = () => {
    const notify = useNotify();
    const redirect = useRedirect();
    const redirectToCreateWithReload = useRedirectToCreateWithReload();
    const refresh = useRefresh();

    const [values, setValues] = useState<StoreSalePosDraft>(initialStoreSalePosDraft);
    const [errors, setErrors] = useState<StoreSalePosErrors>({});
    const [search, setSearch] = useState('');
    const [saving, setSaving] = useState(false);

    const { data: storeItems = [], isLoading: itemsLoading } = useGetList('store-items', {
        pagination: { page: 1, perPage: 500 },
        sort: { field: 'id', order: 'ASC' },
    });

    const { data: stores = [] } = useGetList('stores', {
        pagination: { page: 1, perPage: 200 },
        sort: { field: 'id', order: 'ASC' },
    });

    const { data: storeStocks = [], isLoading: stocksLoading } = useGetList('store-stocks', {
        pagination: { page: 1, perPage: 1000 },
        sort: { field: 'id', order: 'ASC' },
    });

    const selectedStoreName = useMemo(() => {
        const store = stores.find((entry) => String(entry.id) === values.store_id);
        return store ? String(store.name ?? '') : '';
    }, [stores, values.store_id]);

    const products = useMemo(
        () =>
            buildPosProducts(
                storeItems as StoreItemRecord[],
                storeStocks as StoreStockRecord[],
                values.store_id,
                selectedStoreName
            ),
        [storeItems, storeStocks, values.store_id, selectedStoreName]
    );

    const updateField = <K extends keyof StoreSalePosDraft>(field: K, value: StoreSalePosDraft[K]) => {
        setValues((current) => {
            let next: StoreSalePosDraft = { ...current, [field]: value };

            if (field === 'store_id') {
                next = withSyncedAmountPaid({ ...next, cart: [] });
            }

            if (field === 'sale_type') {
                next = withSyncedAmountPaid({
                    ...next,
                    cart: syncCartPrices(next.cart, products, value as SaleType),
                    payment_mode_id: value === 'CREDIT' ? '' : next.payment_mode_id,
                });
            }

            if (field === 'customer_type') {
                next = { ...next, party_id: '' };
            }

            return next;
        });
        setErrors((current) => ({ ...current, [field]: undefined }));
    };

    const handleAddProduct = (product: PosProduct) => {
        setValues((current) => {
            const nextCart = addProductToCart(current.cart, product, current.sale_type);
            if (nextCart === current.cart) {
                const inCart = current.cart.find((line) => line.itemId === product.itemId)?.quantity ?? 0;
                const available = Math.max(product.balance - inCart, 0);
                notify(
                    available <= 0
                        ? `No more stock available for ${product.itemName} (${product.balance}).`
                        : `Cannot add more — only ${product.balance} available in this store.`,
                    { type: 'warning' }
                );
                return current;
            }
            return withSyncedAmountPaid({ ...current, cart: nextCart });
        });
        setErrors((current) => ({ ...current, cart: undefined }));
    };

    const handleQuantityChange = (itemId: number, quantity: number) => {
        setValues((current) =>
            withSyncedAmountPaid({
                ...current,
                cart: updateCartLineQuantity(current.cart, itemId, quantity),
            })
        );
    };

    const handleRemoveLine = (itemId: number) => {
        setValues((current) =>
            withSyncedAmountPaid({
                ...current,
                cart: current.cart.filter((line) => line.itemId !== itemId),
            })
        );
    };

    const handleReset = () => {
        setValues(initialStoreSalePosDraft());
        setErrors({});
        setSearch('');
    };

    const handleSubmit = async (addAnother: boolean) => {
        const formErrors = validateStoreSalePos(values);
        setErrors(formErrors);

        if (hasPosErrors(formErrors)) {
            notify('Please complete all required fields before submitting.', { type: 'warning' });
            return;
        }

        setSaving(true);
        try {
            const result = await submitStoreSalePos(values);
            refresh();
            if (addAnother) {
                redirectToCreateWithReload('store-sales', result.message);
            } else {
                notify(result.message, { type: 'success' });
                redirect('list', 'store-sales');
            }
        } catch (error) {
            notify(error instanceof Error ? error.message : 'Failed to record store sale', { type: 'error' });
        } finally {
            setSaving(false);
        }
    };

    const { total } = calcCartTotals(values.cart);
    const loadingCatalog = itemsLoading || (Boolean(values.store_id) && stocksLoading);

    return (
        <Create title={false} resource="store-sales" sx={transporterCreateMainSx} redirect={false}>
            <Box sx={{ width: '100%', maxWidth: 1600, px: 2, pb: 2 }}>
                <ListBreadcrumbs />
                <Card elevation={0} sx={{ borderRadius: 3, overflow: 'hidden' }}>
                    <CardContent sx={{ p: { xs: 2, md: 3 } }}>
                        <Typography variant="h5" fontWeight="bold">
                            Store Sales POS
                        </Typography>
                        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                            Select a store, add items from stock balances, and complete the sale.
                        </Typography>
                        <Divider sx={{ mb: 3 }} />
                        <CreateSuccessBanner />

                        <Grid container spacing={3}>
                            <Grid size={{ xs: 12, lg: 4 }}>
                                <Card variant="outlined" sx={{ borderRadius: 2, position: { lg: 'sticky' }, top: 16 }}>
                                    <CardContent>
                                        <PosCartPanel
                                            transactionDate={values.transaction_date}
                                            storeId={values.store_id}
                                            saleType={values.sale_type}
                                            customerType={values.customer_type}
                                            partyId={values.party_id}
                                            paymentModeId={values.payment_mode_id}
                                            cart={values.cart}
                                            errors={errors}
                                            onStoreChange={(value) => updateField('store_id', value)}
                                            onTransactionDateChange={(value) =>
                                                updateField('transaction_date', value)
                                            }
                                            onSaleTypeChange={(value) => updateField('sale_type', value)}
                                            onCustomerTypeChange={(value) => updateField('customer_type', value)}
                                            onPartyChange={(value) => updateField('party_id', value)}
                                            onPaymentModeChange={(value) => updateField('payment_mode_id', value)}
                                            onQuantityChange={handleQuantityChange}
                                            onRemoveLine={handleRemoveLine}
                                        />
                                        <Box sx={{ mt: 2, pt: 2, borderTop: '1px solid', borderColor: 'divider' }}>
                                            <Stack direction="row" justifyContent="space-between" sx={{ mb: 2 }}>
                                                <Typography variant="subtitle1" fontWeight={700}>
                                                    Total
                                                </Typography>
                                                <Typography variant="subtitle1" fontWeight={700} color="primary">
                                                    KES {total.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                                                </Typography>
                                            </Stack>
                                            <WizardCreateActions
                                                saving={saving}
                                                showBack={false}
                                                showNext={false}
                                                onCancel={() => redirect('list', 'store-sales')}
                                                onBack={() => undefined}
                                                onNext={() => undefined}
                                                onSave={() => handleSubmit(false)}
                                                onSaveAndAddNew={() => handleSubmit(true)}
                                                saveLabel="Complete Sale"
                                                saveAndAddLabel="Complete & New Sale"
                                            />
                                        </Box>
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid size={{ xs: 12, lg: 8 }}>
                                <Stack spacing={1} sx={{ mb: 2 }}>
                                    <Typography variant="h6" fontWeight={700}>
                                        Items
                                    </Typography>
                                </Stack>
                                <PosProductGrid
                                    products={products}
                                    cart={values.cart}
                                    saleType={values.sale_type}
                                    search={search}
                                    storeSelected={Boolean(values.store_id)}
                                    loading={loadingCatalog}
                                    onSearchChange={setSearch}
                                    onAddProduct={handleAddProduct}
                                />
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>
            </Box>
        </Create>
    );
};
