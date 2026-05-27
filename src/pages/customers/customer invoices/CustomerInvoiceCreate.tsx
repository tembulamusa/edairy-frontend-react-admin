import { useMemo, useState } from 'react';
import { Create, useGetList, useNotify, useRedirect, useRefresh } from 'react-admin';
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Box,
    Button,
    Card,
    CardContent,
    Checkbox,
    CircularProgress,
    Divider,
    Stack,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Typography,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { ListBreadcrumbs } from '../../../../ListBreadcrumbs';
import {
    transporterCreateMainSx,
    transporterCreateWrapperSx,
} from '../../transporters/shared/transporter-page-layout';
import {
    buildInvoiceGeneratePayloads,
    formatBillingLabel,
    groupBillingsByCustomerId,
    resolveBillingId,
    type CustomerBillingRow,
} from './customer-invoice-create.utils';
import { createCustomerInvoicesForCustomers } from './customer-invoice-create-submit';

const formatCustomerLabel = (customer: {
    full_names?: string;
    full_name?: string;
    customer_no?: string;
    id?: number | string;
}) =>
    String(customer.full_names ?? customer.full_name ?? customer.customer_no ?? customer.id ?? 'Customer');

export const CustomerInvoiceCreate = () => {
    const notify = useNotify();
    const redirect = useRedirect();
    const refresh = useRefresh();
    const [selectedBillIds, setSelectedBillIds] = useState<Set<number>>(() => new Set());
    const [generating, setGenerating] = useState(false);

    const { data: customers = [], isLoading: customersLoading } = useGetList('customers', {
        pagination: { page: 1, perPage: 1000 },
        sort: { field: 'full_names', order: 'ASC' },
    });

    const { data: billings = [], isLoading: billingsLoading } = useGetList('customer-billings', {
        pagination: { page: 1, perPage: 2000 },
        sort: { field: 'id', order: 'DESC' },
    });

    const isLoading = customersLoading || billingsLoading;

    const billingsByCustomer = useMemo(
        () => groupBillingsByCustomerId(billings as CustomerBillingRow[]),
        [billings]
    );

    const customersWithBills = useMemo(
        () =>
            customers.filter((customer) => {
                const customerId = Number(customer.id);
                return (billingsByCustomer.get(customerId) ?? []).length > 0;
            }),
        [customers, billingsByCustomer]
    );

    const allBillIds = useMemo(
        () =>
            customersWithBills
                .flatMap((customer) => billingsByCustomer.get(Number(customer.id)) ?? [])
                .map((bill) => resolveBillingId(bill))
                .filter((id): id is number => id != null),
        [customersWithBills, billingsByCustomer]
    );

    const allSelected = allBillIds.length > 0 && allBillIds.every((id) => selectedBillIds.has(id));
    const someSelected = allBillIds.some((id) => selectedBillIds.has(id));

    const getCustomerBillIds = (customerId: number) =>
        (billingsByCustomer.get(customerId) ?? [])
            .map((bill) => resolveBillingId(bill))
            .filter((id): id is number => id != null);

    const isCustomerSelected = (customerId: number) => {
        const billIds = getCustomerBillIds(customerId);
        return billIds.length > 0 && billIds.every((id) => selectedBillIds.has(id));
    };

    const isCustomerIndeterminate = (customerId: number) => {
        const billIds = getCustomerBillIds(customerId);
        const selectedCount = billIds.filter((id) => selectedBillIds.has(id)).length;
        return selectedCount > 0 && selectedCount < billIds.length;
    };

    const toggleBill = (billId: number) => {
        setSelectedBillIds((current) => {
            const next = new Set(current);
            if (next.has(billId)) {
                next.delete(billId);
            } else {
                next.add(billId);
            }
            return next;
        });
    };

    const toggleCustomer = (customerId: number) => {
        const billIds = getCustomerBillIds(customerId);
        const selectAll = !isCustomerSelected(customerId);

        setSelectedBillIds((current) => {
            const next = new Set(current);
            billIds.forEach((billId) => {
                if (selectAll) {
                    next.add(billId);
                } else {
                    next.delete(billId);
                }
            });
            return next;
        });
    };

    const toggleAll = () => {
        setSelectedBillIds(allSelected ? new Set() : new Set(allBillIds));
    };

    const handleGenerate = async () => {
        const payloads = buildInvoiceGeneratePayloads(customersWithBills, billingsByCustomer, selectedBillIds);

        if (payloads.length === 0) {
            notify('Select at least one bill to generate invoices', { type: 'warning' });
            return;
        }

        setGenerating(true);
        try {
            await createCustomerInvoicesForCustomers(payloads);
            const invoiceCount = payloads.length;
            notify(
                invoiceCount === 1
                    ? 'Customer invoice generated successfully'
                    : `${invoiceCount} customer invoices generated successfully`,
                { type: 'success' }
            );
            refresh();
            redirect('list', 'customer-invoices');
        } catch (error) {
            notify(
                error instanceof Error ? error.message : 'Failed to generate customer invoices',
                { type: 'error' }
            );
        } finally {
            setGenerating(false);
        }
    };

    return (
        <Create resource="customer-invoices" title={false} sx={transporterCreateMainSx} redirect={false}>
            <Box sx={transporterCreateWrapperSx}>
                <ListBreadcrumbs />
                <Card elevation={0} sx={{ borderRadius: 3, overflow: 'hidden', width: '100%' }}>
                    <CardContent sx={{ p: 4 }}>
                        <Typography variant="h5" fontWeight="bold">
                            Generate Customer Invoices
                        </Typography>
                        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                            Select customers and their bills to generate invoices. Use Select All or pick individual
                            bills per customer.
                        </Typography>
                        <Divider sx={{ mb: 3 }} />

                        {isLoading ? (
                            <Box sx={{ display: 'flex', justifyContent: 'center', py: 6 }}>
                                <CircularProgress />
                            </Box>
                        ) : customersWithBills.length === 0 ? (
                            <Typography color="text.secondary">
                                No customer bills found. Generate customer billings first.
                            </Typography>
                        ) : (
                            <>
                                <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 2 }}>
                                    <Checkbox
                                        checked={allSelected}
                                        indeterminate={someSelected && !allSelected}
                                        onChange={toggleAll}
                                    />
                                    <Typography fontWeight="bold">Select all customers and bills</Typography>
                                </Stack>

                                {customersWithBills.map((customer) => {
                                    const customerId = Number(customer.id);
                                    const customerBills = billingsByCustomer.get(customerId) ?? [];

                                    return (
                                        <Accordion
                                            key={customerId}
                                            defaultExpanded
                                            disableGutters
                                            sx={{
                                                mb: 1,
                                                border: '1px solid',
                                                borderColor: 'divider',
                                                '&:before': { display: 'none' },
                                            }}
                                        >
                                            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                                <Checkbox
                                                    checked={isCustomerSelected(customerId)}
                                                    indeterminate={isCustomerIndeterminate(customerId)}
                                                    onClick={(event) => event.stopPropagation()}
                                                    onChange={() => toggleCustomer(customerId)}
                                                    sx={{ mr: 1 }}
                                                />
                                                <Box>
                                                    <Typography fontWeight="bold">
                                                        {formatCustomerLabel(customer)}
                                                    </Typography>
                                                    <Typography variant="body2" color="text.secondary">
                                                        {customerBills.length} bill
                                                        {customerBills.length === 1 ? '' : 's'}
                                                    </Typography>
                                                </Box>
                                            </AccordionSummary>
                                            <AccordionDetails sx={{ pt: 0 }}>
                                                <Table size="small">
                                                    <TableHead>
                                                        <TableRow sx={{ backgroundColor: '#fafafa' }}>
                                                            <TableCell padding="checkbox" />
                                                            <TableCell sx={{ fontWeight: 'bold' }}>
                                                                Billing Period
                                                            </TableCell>
                                                            <TableCell sx={{ fontWeight: 'bold' }}>
                                                                Deliveries
                                                            </TableCell>
                                                            <TableCell sx={{ fontWeight: 'bold' }}>Amount</TableCell>
                                                        </TableRow>
                                                    </TableHead>
                                                    <TableBody>
                                                        {customerBills.map((bill) => {
                                                            const billId = resolveBillingId(bill);
                                                            if (!billId) {
                                                                return null;
                                                            }

                                                            const checked = selectedBillIds.has(billId);

                                                            return (
                                                                <TableRow
                                                                    key={billId}
                                                                    hover
                                                                    selected={checked}
                                                                    sx={{ cursor: 'pointer' }}
                                                                    onClick={() => toggleBill(billId)}
                                                                >
                                                                    <TableCell
                                                                        padding="checkbox"
                                                                        onClick={(event) => event.stopPropagation()}
                                                                    >
                                                                        <Checkbox
                                                                            checked={checked}
                                                                            onChange={() => toggleBill(billId)}
                                                                        />
                                                                    </TableCell>
                                                                    <TableCell>{formatBillingLabel(bill)}</TableCell>
                                                                    <TableCell>
                                                                        {bill.total_deliveries ?? '—'}
                                                                    </TableCell>
                                                                    <TableCell>
                                                                        {bill.total_amount ?? bill.TotalAmount ?? '—'}
                                                                    </TableCell>
                                                                </TableRow>
                                                            );
                                                        })}
                                                    </TableBody>
                                                </Table>
                                            </AccordionDetails>
                                        </Accordion>
                                    );
                                })}
                            </>
                        )}

                        <Stack direction="row" justifyContent="space-between" sx={{ mt: 4 }}>
                            <Button
                                variant="contained"
                                sx={{
                                    backgroundColor: 'grey.500',
                                    color: 'white',
                                    '&:hover': { backgroundColor: 'grey.700' },
                                }}
                                onClick={() => redirect('list', 'customer-invoices')}
                                disabled={generating}
                            >
                                Cancel
                            </Button>
                            <Button
                                variant="contained"
                                onClick={handleGenerate}
                                disabled={generating || isLoading || customersWithBills.length === 0}
                            >
                                {generating ? 'Generating...' : 'Generate Invoices'}
                            </Button>
                        </Stack>
                    </CardContent>
                </Card>
            </Box>
        </Create>
    );
};
