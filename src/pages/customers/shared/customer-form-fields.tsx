import type { ReactNode } from 'react';
import { useEffect } from 'react';
import { useFormContext } from 'react-hook-form';
import {
    DateInput,
    NumberInput,
    ReferenceInput,
    SelectInput,
    TextInput,
    required,
    useGetList,
    useRecordContext,
} from 'react-admin';
import Grid from '@mui/material/Grid';
import { useLocation } from 'react-router-dom';
import { nextCustomerNoFromRecords } from './customer-utils';
import { parseReferenceId } from './customer-milk-rate-transform';
import { formatCustomerPayDateRangeLabel } from './customer-pay-date-range-label';
const gridField = (child: ReactNode) => (
    <Grid size={{ xs: 12, md: 6 }}>{child}</Grid>
);

const customerTypeOptionText = (record: { name?: string; type_code?: string; id?: number }) => {
    const name = record.name?.trim();
    const code = record.type_code?.trim();
    if (name && code) {
        return `${name} (${code})`;
    }
    return name || code || String(record.id ?? '');
};

const customerPayDateRangeOptionText = (record: {
    name?: string;
    start_date?: string;
    end_date?: string;
    rate?: number | string;
    Rate?: number | string;
    id?: number;
}) => formatCustomerPayDateRangeLabel(record);

const CustomerPayDateRangeSelect = () => {
    const { setValue, watch } = useFormContext();
    const payDateRangeId = watch('customer_pay_date_range_id');

    const { data: payDateRanges = [] } = useGetList('customer-pay-date-ranges', {
        pagination: { page: 1, perPage: 500 },
        sort: { field: 'id', order: 'DESC' },
    });

    useEffect(() => {
        const selectedId = parseReferenceId(payDateRangeId);
        if (!selectedId) {
            return;
        }

        const selected = payDateRanges.find((range) => Number(range.id) === selectedId);
        const rangeRate = selected?.rate ?? selected?.Rate;
        if (rangeRate != null && rangeRate !== '') {
            setValue('rate', rangeRate, { shouldValidate: true, shouldDirty: true });
        }
    }, [payDateRangeId, payDateRanges, setValue]);

    return (
        <ReferenceInput source="customer_pay_date_range_id" reference="customer-pay-date-ranges">
            <SelectInput
                label="Customer Pay Date Range"
                optionText={customerPayDateRangeOptionText}
                validate={required()}
                fullWidth
                variant="outlined"
            />
        </ReferenceInput>
    );
};

const CustomerNoField = () => {
    const record = useRecordContext();
    const isEdit = Boolean(record?.id);
    const location = useLocation();
    const { setValue } = useFormContext();

    const { data: customers = [], isLoading } = useGetList('customers', {
        pagination: { page: 1, perPage: 1000 },
        sort: { field: 'id', order: 'DESC' },
    });

    useEffect(() => {
        if (isEdit || isLoading) {
            return;
        }

        const generated = nextCustomerNoFromRecords(customers);
        setValue('customer_no', generated, { shouldValidate: true, shouldDirty: false });
    }, [isEdit, isLoading, customers, location.key, setValue]);

    return (
        <TextInput
            source="customer_no"
            label="Customer No"
            validate={required()}
            fullWidth
            variant="outlined"
            readOnly={isEdit}
            helperText={isEdit ? undefined : 'Auto-generated; you can edit before saving'}
        />
    );
};

export const CustomerTypeFormFields = () => (
    <Grid container spacing={2} alignItems="flex-start">
        {gridField(<TextInput source="name" label="Name" validate={required()} fullWidth variant="outlined" />)}
        <Grid size={{ xs: 12 }}>
            <TextInput source="description" label="Description" multiline rows={3} fullWidth variant="outlined" />
        </Grid>
    </Grid>
);

export const CustomerMilkRateFormFields = () => (
    <Grid container spacing={2} alignItems="flex-start">
        {gridField(
            <ReferenceInput source="customer_id" reference="customers">
                <SelectInput
                    label="Customer"
                    optionText={(record) =>
                        String(record.full_names ?? record.full_name ?? record.customer_no ?? record.id ?? '')
                    }
                    validate={required()}
                    fullWidth
                    variant="outlined"
                />
            </ReferenceInput>
        )}
        {gridField(
            <ReferenceInput source="grade_id" reference="product-grades">
                <SelectInput
                    label="Grade"
                    optionText="name"
                    validate={required()}
                    fullWidth
                    variant="outlined"
                />
            </ReferenceInput>
        )}
        {gridField(<CustomerPayDateRangeSelect />)}
        {gridField(
            <NumberInput source="rate" label="Rate" validate={required()} fullWidth variant="outlined" />
        )}
    </Grid>
);

const CustomerPayDateRangeFields = ({ showRate }: { showRate: boolean }) => (
    <Grid container spacing={2} alignItems="flex-start">
        {gridField(
            <TextInput source="name" label="Period Name" validate={required()} fullWidth variant="outlined" />
        )}
        {gridField(
            <DateInput source="start_date" label="Start Date" validate={required()} fullWidth variant="outlined" />
        )}
        {gridField(
            <DateInput source="end_date" label="End Date" validate={required()} fullWidth variant="outlined" />
        )}
        {showRate && gridField(<NumberInput source="rate" label="Rate" fullWidth variant="outlined" />)}
        <Grid size={{ xs: 12 }}>
            <TextInput source="description" label="Description" multiline rows={3} fullWidth variant="outlined" />
        </Grid>
    </Grid>
);

export const CustomerPayDateRangeCreateFormFields = () => (
    <CustomerPayDateRangeFields showRate={false} />
);

export const CustomerPayDateRangeFormFields = () => <CustomerPayDateRangeFields showRate />;

export const CustomerFormFields = () => (
    <Grid container spacing={2} alignItems="flex-start">
        {gridField(<CustomerNoField />)}
        {gridField(
            <TextInput source="full_names" label="Full Names" validate={required()} fullWidth variant="outlined" />
        )}
        {gridField(<TextInput source="phone" label="Phone" fullWidth variant="outlined" />)}
        {gridField(
            <TextInput source="email_address" label="Email" type="email" fullWidth variant="outlined" />
        )}
        {gridField(<TextInput source="kra_pin" label="KRA PIN" fullWidth variant="outlined" />)}
        {gridField(
            <ReferenceInput source="customer_type_id" reference="customer-types">
                <SelectInput
                    label="Customer Type"
                    optionText={customerTypeOptionText}
                    validate={required()}
                    fullWidth
                    variant="outlined"
                />
            </ReferenceInput>
        )}
        {gridField(<NumberInput source="rate" label="Milk Rate" fullWidth variant="outlined" />)}
        {gridField(
            <ReferenceInput source="customer_pay_date_range_id" reference="customer-pay-date-ranges">
                <SelectInput
                    label="Pay Date Range"
                    optionText={customerPayDateRangeOptionText}
                    fullWidth
                    variant="outlined"
                />
            </ReferenceInput>
        )}
        {gridField(<NumberInput source="credit_limit" label="Credit Limit" fullWidth variant="outlined" />)}
        {gridField(
            <NumberInput source="terms" label="Payment Period (days)" fullWidth variant="outlined" />
        )}
        {gridField(<TextInput source="postal_town" label="Town" fullWidth variant="outlined" />)}
    </Grid>
);

export const CustomerBillingFormFields = () => (
    <Grid container spacing={2} alignItems="flex-start">
        {gridField(
            <TextInput
                source="pay_date_range_name"
                label="Billing Period"
                validate={required()}
                fullWidth
                variant="outlined"
            />
        )}
        {gridField(
            <NumberInput
                source="total_deliveries"
                label="Total Deliveries"
                validate={required()}
                fullWidth
                variant="outlined"
            />
        )}
        {gridField(
            <NumberInput source="total_amount" label="Total Amount" validate={required()} fullWidth variant="outlined" />
        )}
    </Grid>
);

export const CustomerPaymentFormFields = () => (
    <Grid container spacing={2} alignItems="flex-start">
        {gridField(
            <TextInput source="receipt_number" label="Receipt Number" validate={required()} fullWidth variant="outlined" />
        )}
        {gridField(
            <ReferenceInput source="customer_id" reference="customers">
                <SelectInput
                    label="Customer"
                    optionText={(record) =>
                        String(record.full_names ?? record.full_name ?? record.customer_no ?? record.id ?? '')
                    }
                    validate={required()}
                    fullWidth
                    variant="outlined"
                />
            </ReferenceInput>
        )}
        {gridField(
            <TextInput source="invoice_no" label="Invoice No" validate={required()} fullWidth variant="outlined" />
        )}
        {gridField(
            <DateInput source="payment_date" label="Payment Date" validate={required()} fullWidth variant="outlined" />
        )}
        {gridField(
            <NumberInput source="amount" label="Amount" validate={required()} fullWidth variant="outlined" />
        )}
        {gridField(
            <TextInput source="payment_method" label="Payment Method" validate={required()} fullWidth variant="outlined" />
        )}
        <Grid size={{ xs: 12 }}>
            <TextInput source="notes" label="Notes" multiline rows={3} fullWidth variant="outlined" />
        </Grid>
    </Grid>
);

export const CustomerInvoiceFormFields = () => (
    <Grid container spacing={2} alignItems="flex-start">
        {gridField(
            <TextInput source="invoice_no" label="Invoice No" validate={required()} fullWidth variant="outlined" />
        )}
        {gridField(
            <ReferenceInput source="customer_id" reference="customers">
                <SelectInput
                    label="Customer"
                    optionText={(record) =>
                        String(record.full_names ?? record.full_name ?? record.customer_no ?? record.id ?? '')
                    }
                    validate={required()}
                    fullWidth
                    variant="outlined"
                />
            </ReferenceInput>
        )}
        {gridField(
            <DateInput source="invoice_date" label="Invoice Date" validate={required()} fullWidth variant="outlined" />
        )}
        {gridField(
            <DateInput source="due_date" label="Due Date" validate={required()} fullWidth variant="outlined" />
        )}
        {gridField(
            <NumberInput source="gross_amount" label="Gross Amount" validate={required()} fullWidth variant="outlined" />
        )}
        {gridField(
            <NumberInput source="tax_amount" label="Tax Amount" validate={required()} fullWidth variant="outlined" />
        )}
        {gridField(
            <NumberInput source="total_amount" label="Total Amount" validate={required()} fullWidth variant="outlined" />
        )}
        {gridField(
            <NumberInput source="balance" label="Balance" validate={required()} fullWidth variant="outlined" />
        )}
        {gridField(<TextInput source="status" label="Status" validate={required()} fullWidth variant="outlined" />)}
    </Grid>
);