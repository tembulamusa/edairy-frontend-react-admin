import { useMemo } from 'react';
import {
    Box,
    Divider,
    IconButton,
    MenuItem,
    Stack,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    TextField,
    Typography,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import type { CustomerType, PosCartLine, SaleType, StoreSalePosErrors } from './store-sale-pos.types';
import {
    calcCartTotals,
    customerTypeChoices,
    formatMoney,
    partyResourceByCustomerType,
} from './store-sale-pos-utils';
import { useStoreChoices } from '../../shared/use-store-choices';
import { useWizardListChoices } from '../../../produce/milk journals/create wizard/use-wizard-list-choices';

type PosCartPanelProps = {
    transactionDate: string;
    storeId: string;
    saleType: SaleType;
    customerType: CustomerType;
    partyId: string;
    paymentModeId: string;
    cart: PosCartLine[];
    errors: StoreSalePosErrors;
    onStoreChange: (value: string) => void;
    onTransactionDateChange: (value: string) => void;
    onSaleTypeChange: (value: SaleType) => void;
    onCustomerTypeChange: (value: CustomerType) => void;
    onPartyChange: (value: string) => void;
    onPaymentModeChange: (value: string) => void;
    onQuantityChange: (itemId: number, quantity: number) => void;
    onRemoveLine: (itemId: number) => void;
};

const formatMemberLabel = (record: Record<string, unknown>) => {
    const memberNo = record.member_no ? `${record.member_no} — ` : '';
    const name = record.full_name || record.name || `Member ${record.id}`;
    return `${memberNo}${name}`;
};

const formatCustomerLabel = (record: Record<string, unknown>) =>
    String(record.full_name ?? record.name ?? record.id);

const formatTransporterLabel = (record: Record<string, unknown>) => {
    const no = record.transporter_no ? `${record.transporter_no} — ` : '';
    return `${no}${record.name ?? record.company_name ?? record.id}`;
};

const formatSupplierLabel = (record: Record<string, unknown>) => {
  const code = record.supplier_code ? `${record.supplier_code} — ` : '';
  const name =
    record.company_name ??
    record.full_name ??
    record.name ??
    record.supplier_name ??
    record.id;
  return `${code}${name}`;
};

const formatEmployeeLabel = (record: Record<string, unknown>) => {
    const no = record.employee_no ? `${record.employee_no} — ` : '';
    const name = [record.first_name, record.surname].filter(Boolean).join(' ') || record.name || record.id;
    return `${no}${name}`;
};

export const PosCartPanel = ({
    transactionDate,
    storeId,
    saleType,
    customerType,
    partyId,
    paymentModeId,
    cart,
    errors,
    onStoreChange,
    onTransactionDateChange,
    onSaleTypeChange,
    onCustomerTypeChange,
    onPartyChange,
    onPaymentModeChange,
    onQuantityChange,
    onRemoveLine,
}: PosCartPanelProps) => {
    const { choices: storeChoices, isLoading: storesLoading } = useStoreChoices();
    const { choices: memberChoices, isLoading: membersLoading } = useWizardListChoices(
        'members',
        formatMemberLabel
    );
    const { choices: customerChoices, isLoading: customersLoading } = useWizardListChoices(
        'customers',
        formatCustomerLabel
    );
    const { choices: transporterChoices, isLoading: transportersLoading } = useWizardListChoices(
        'transporters',
        formatTransporterLabel
    );
    const { choices: supplierChoices, isLoading: suppliersLoading } = useWizardListChoices(
        'suppliers',
        formatSupplierLabel
    );
    const { choices: employeeChoices, isLoading: employeesLoading } = useWizardListChoices(
        'employees',
        formatEmployeeLabel
    );
    const { choices: paymentModeChoices, isLoading: paymentModesLoading } = useWizardListChoices(
        'payment-modes',
        (record) => String(record.name ?? record.id)
    );

    const partyConfig = partyResourceByCustomerType[customerType];

    const partyChoices = useMemo(() => {
        switch (customerType) {
            case 'MEMBER':
                return memberChoices;
            case 'CUSTOMER':
                return customerChoices;
            case 'TRANSPORTER':
                return transporterChoices;
            case 'SUPPLIER':
            case 'VENDOR':
                return supplierChoices;
            case 'EMPLOYEE':
                return employeeChoices;
            default:
                return [];
        }
    }, [
        customerType,
        memberChoices,
        customerChoices,
        transporterChoices,
        supplierChoices,
        employeeChoices,
    ]);

    const partyLoading = useMemo(() => {
        switch (customerType) {
            case 'MEMBER':
                return membersLoading;
            case 'CUSTOMER':
                return customersLoading;
            case 'TRANSPORTER':
                return transportersLoading;
            case 'SUPPLIER':
            case 'VENDOR':
                return suppliersLoading;
            case 'EMPLOYEE':
                return employeesLoading;
            default:
                return false;
        }
    }, [
        customerType,
        membersLoading,
        customersLoading,
        transportersLoading,
        suppliersLoading,
        employeesLoading,
    ]);

    const { total, itemCount } = calcCartTotals(cart);

    return (
        <Stack spacing={2}>
            <Typography variant="h6" fontWeight={700}>
                Sale Details
            </Typography>

            <TextField
                fullWidth
                size="small"
                type="date"
                label="Transaction Date"
                value={transactionDate}
                onChange={(event) => onTransactionDateChange(event.target.value)}
                error={Boolean(errors.transaction_date)}
                helperText={errors.transaction_date}
                InputLabelProps={{ shrink: true }}
            />

            <TextField
                select
                fullWidth
                size="small"
                label="Store"
                value={storeId}
                onChange={(event) => onStoreChange(event.target.value)}
                error={Boolean(errors.store_id)}
                helperText={errors.store_id}
                disabled={storesLoading}
            >
                <MenuItem value="">Select store</MenuItem>
                {storeChoices.map((choice) => (
                    <MenuItem key={choice.id} value={choice.id}>
                        {choice.name}
                    </MenuItem>
                ))}
            </TextField>

            <TextField
                select
                fullWidth
                size="small"
                label="Sale Type"
                value={saleType}
                onChange={(event) => onSaleTypeChange(event.target.value as SaleType)}
                error={Boolean(errors.sale_type)}
                helperText={errors.sale_type}
            >
                <MenuItem value="CASH">Cash</MenuItem>
                <MenuItem value="CREDIT">Credit</MenuItem>
            </TextField>

            <TextField
                select
                fullWidth
                size="small"
                label="Customer Type"
                value={customerType}
                onChange={(event) => onCustomerTypeChange(event.target.value as CustomerType)}
                error={Boolean(errors.customer_type)}
                helperText={errors.customer_type}
            >
                {customerTypeChoices.map((choice) => (
                    <MenuItem key={choice.id} value={choice.id}>
                        {choice.name}
                    </MenuItem>
                ))}
            </TextField>

            {partyConfig ? (
                <TextField
                    select
                    fullWidth
                    size="small"
                    label={partyConfig.label}
                    value={partyId}
                    onChange={(event) => onPartyChange(event.target.value)}
                    error={Boolean(errors.party_id)}
                    helperText={errors.party_id}
                    disabled={partyLoading}
                >
                    <MenuItem value="">Select {partyConfig.label.toLowerCase()}</MenuItem>
                    {partyChoices.map((choice) => (
                        <MenuItem key={choice.id} value={choice.id}>
                            {choice.label}
                        </MenuItem>
                    ))}
                </TextField>
            ) : null}

            <Divider />

            <Typography variant="subtitle1" fontWeight={700}>
                Cart ({itemCount} items)
            </Typography>

            {errors.cart ? (
                <Typography variant="body2" color="error">
                    {errors.cart}
                </Typography>
            ) : null}

            {cart.length === 0 ? (
                <Box
                    sx={{
                        py: 4,
                        textAlign: 'center',
                        color: 'text.secondary',
                        border: '1px dashed',
                        borderColor: 'divider',
                        borderRadius: 2,
                    }}
                >
                    <Typography variant="body2">Tap an item to add it to the cart.</Typography>
                </Box>
            ) : (
                <Box sx={{ overflowX: 'auto' }}>
                    <Table size="small">
                        <TableHead>
                            <TableRow>
                                <TableCell>Item</TableCell>
                                <TableCell align="right">Qty</TableCell>
                                <TableCell align="right">Price</TableCell>
                                <TableCell align="right">Total</TableCell>
                                <TableCell align="center" />
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {cart.map((line) => (
                                <TableRow key={line.itemId}>
                                    <TableCell sx={{ maxWidth: 120 }}>
                                        <Typography variant="body2" fontWeight={600} noWrap title={`${line.itemName} (${line.maxQuantity})`}>
                                            {line.itemName} ({line.maxQuantity})
                                        </Typography>
                                        {errors[`line_${line.itemId}_quantity`] ? (
                                            <Typography variant="caption" color="error" display="block">
                                                {errors[`line_${line.itemId}_quantity`]}
                                            </Typography>
                                        ) : null}
                                    </TableCell>
                                    <TableCell align="right">
                                        <Stack direction="row" alignItems="center" justifyContent="flex-end" spacing={0.5}>
                                            <IconButton
                                                size="small"
                                                onClick={() => onQuantityChange(line.itemId, line.quantity - 1)}
                                            >
                                                <RemoveIcon fontSize="small" />
                                            </IconButton>
                                            <Typography variant="body2" sx={{ minWidth: 16, textAlign: 'center' }}>
                                                {line.quantity}
                                            </Typography>
                                            <IconButton
                                                size="small"
                                                onClick={() => onQuantityChange(line.itemId, line.quantity + 1)}
                                                disabled={line.quantity >= line.maxQuantity}
                                            >
                                                <AddIcon fontSize="small" />
                                            </IconButton>
                                        </Stack>
                                    </TableCell>
                                    <TableCell align="right">{formatMoney(line.unitPrice)}</TableCell>
                                    <TableCell align="right">{formatMoney(line.lineTotal)}</TableCell>
                                    <TableCell align="center">
                                        <IconButton size="small" color="error" onClick={() => onRemoveLine(line.itemId)}>
                                            <DeleteOutlineIcon fontSize="small" />
                                        </IconButton>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </Box>
            )}

            <Divider />

            <Stack spacing={1}>
                <Stack direction="row" justifyContent="space-between">
                    <Typography color="text.secondary">Total</Typography>
                    <Typography fontWeight={700}>{formatMoney(total)}</Typography>
                </Stack>
                <Stack direction="row" justifyContent="space-between">
                    <Typography color="text.secondary">Amount Paid</Typography>
                    <Typography fontWeight={700}>{formatMoney(total)}</Typography>
                </Stack>
            </Stack>

            <TextField
                select
                fullWidth
                size="small"
                label="Payment Mode"
                value={paymentModeId}
                onChange={(event) => onPaymentModeChange(event.target.value)}
                error={Boolean(errors.payment_mode_id)}
                helperText={errors.payment_mode_id}
                disabled={paymentModesLoading || saleType === 'CREDIT'}
            >
                <MenuItem value="">Select payment mode</MenuItem>
                {paymentModeChoices.map((choice) => (
                    <MenuItem key={choice.id} value={choice.id}>
                        {choice.label}
                    </MenuItem>
                ))}
            </TextField>
        </Stack>
    );
};
