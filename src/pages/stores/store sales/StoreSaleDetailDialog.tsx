import {
    Box,
    Button,
    CircularProgress,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Divider,
    Grid,
    Stack,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Typography,
} from '@mui/material';
import { useGetOne } from 'react-admin';
import { formatMoney } from './pos/store-sale-pos-utils';

type StoreSaleDetailDialogProps = {
    open: boolean;
    saleId: string | number | null;
    onClose: () => void;
};

type StoreSaleItemRecord = {
    item_name?: string;
    item_id?: number | string;
    sku?: string;
    quantity?: number | string;
    unit_price?: number | string;
    amount?: number | string;
    line_total?: number | string;
    unit?: string;
};

type StoreSaleRecord = Record<string, unknown> & {
    id?: string | number;
    reference?: string;
    created_at?: string;
    store_name?: string;
    sale_type?: string;
    customer_type?: string;
    member_name?: string;
    customer_name?: string;
    payment_mode_name?: string;
    total_amount?: number | string;
    amount_paid?: number | string;
    amount_due?: number | string;
    items?: StoreSaleItemRecord[];
    store_sale_items?: StoreSaleItemRecord[];
};

const parseAmount = (value: unknown) => {
    const numeric = Number(value);
    return Number.isFinite(numeric) ? numeric : null;
};

const formatDateTime = (value?: string) => {
    if (!value) return '—';
    const date = new Date(value);
    if (Number.isNaN(date.getTime())) return value;
    return date.toLocaleString(undefined, { hour12: false });
};

const getSaleItems = (record?: StoreSaleRecord): StoreSaleItemRecord[] => {
    if (!record) return [];
    const items = record.items ?? record.store_sale_items;
    return Array.isArray(items) ? items : [];
};

const DetailField = ({ label, value }: { label: string; value?: string }) => (
    <Box>
        <Typography variant="overline" color="text.secondary">
            {label}
        </Typography>
        <Typography variant="body1" fontWeight={500}>
            {value || '—'}
        </Typography>
    </Box>
);

const StoreSaleDetailContent = ({
    saleId,
    onClose,
}: {
    saleId: string | number;
    onClose: () => void;
}) => {
    const { data: rawData, isLoading, error } = useGetOne('store-sales', { id: saleId });
    const data = rawData as StoreSaleRecord | undefined;

    const items = getSaleItems(data);
    const totalAmount = parseAmount(data?.total_amount);
    const amountPaid = parseAmount(data?.amount_paid);
    const amountDue = parseAmount(data?.amount_due);

    return (
        <>
            <DialogTitle sx={{ pb: 1 }}>
                {data?.reference ? `Store Sale — ${data.reference}` : 'Store Sale Details'}
            </DialogTitle>
            <DialogContent dividers>
                {isLoading ? (
                    <Box sx={{ py: 6, textAlign: 'center' }}>
                        <CircularProgress size={32} />
                    </Box>
                ) : error ? (
                    <Typography color="error">Failed to load store sale details.</Typography>
                ) : (
                    <Stack spacing={3}>
                        <Grid container spacing={2}>
                            <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                                <DetailField label="Reference" value={String(data?.reference ?? '')} />
                            </Grid>
                            <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                                <DetailField label="Date & Time" value={formatDateTime(data?.created_at)} />
                            </Grid>
                            <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                                <DetailField label="Store" value={String(data?.store_name ?? '')} />
                            </Grid>
                            <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                                <DetailField label="Sale Type" value={String(data?.sale_type ?? '')} />
                            </Grid>
                            <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                                <DetailField label="Customer Type" value={String(data?.customer_type ?? '')} />
                            </Grid>
                            <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                                <DetailField
                                    label="Customer / Member"
                                    value={String(data?.member_name ?? data?.customer_name ?? '')}
                                />
                            </Grid>
                            <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                                <DetailField label="Payment Mode" value={String(data?.payment_mode_name ?? '')} />
                            </Grid>
                            <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                                <DetailField
                                    label="Total Amount"
                                    value={totalAmount !== null ? formatMoney(totalAmount) : undefined}
                                />
                            </Grid>
                            <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                                <DetailField
                                    label="Amount Paid"
                                    value={amountPaid !== null ? formatMoney(amountPaid) : undefined}
                                />
                            </Grid>
                            <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                                <DetailField
                                    label="Amount Due"
                                    value={amountDue !== null ? formatMoney(amountDue) : undefined}
                                />
                            </Grid>
                        </Grid>

                        <Divider />

                        <Box>
                            <Typography variant="subtitle1" fontWeight={700} sx={{ mb: 1.5 }}>
                                Items
                            </Typography>
                            {items.length === 0 ? (
                                <Typography variant="body2" color="text.secondary">
                                    No line items recorded for this sale.
                                </Typography>
                            ) : (
                                <Box sx={{ overflowX: 'auto' }}>
                                    <Table size="small">
                                        <TableHead>
                                            <TableRow>
                                                <TableCell>Item</TableCell>
                                                <TableCell>SKU</TableCell>
                                                <TableCell align="right">Qty</TableCell>
                                                <TableCell align="right">Unit Price</TableCell>
                                                <TableCell align="right">Amount</TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {items.map((item, index) => {
                                                const quantity = parseAmount(item.quantity);
                                                const unitPrice = parseAmount(item.unit_price);
                                                const lineAmount =
                                                    parseAmount(item.amount ?? item.line_total) ??
                                                    (quantity !== null && unitPrice !== null
                                                        ? quantity * unitPrice
                                                        : null);

                                                return (
                                                    <TableRow key={`${item.item_id ?? item.item_name ?? index}`}>
                                                        <TableCell>
                                                            {item.item_name || `Item ${item.item_id ?? index + 1}`}
                                                        </TableCell>
                                                        <TableCell>{item.sku || '—'}</TableCell>
                                                        <TableCell align="right">
                                                            {quantity !== null ? quantity : '—'}
                                                            {item.unit ? ` ${item.unit}` : ''}
                                                        </TableCell>
                                                        <TableCell align="right">
                                                            {unitPrice !== null ? formatMoney(unitPrice) : '—'}
                                                        </TableCell>
                                                        <TableCell align="right">
                                                            {lineAmount !== null ? formatMoney(lineAmount) : '—'}
                                                        </TableCell>
                                                    </TableRow>
                                                );
                                            })}
                                        </TableBody>
                                    </Table>
                                </Box>
                            )}
                        </Box>
                    </Stack>
                )}
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose}>Close</Button>
            </DialogActions>
        </>
    );
};

export const StoreSaleDetailDialog = ({ open, saleId, onClose }: StoreSaleDetailDialogProps) => (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="md">
        {open && saleId != null ? <StoreSaleDetailContent saleId={saleId} onClose={onClose} /> : null}
    </Dialog>
);
