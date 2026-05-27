import { DataTable, DateField, NumberField } from 'react-admin';
import { CustomersListWrapper } from '../shared/customers-list-layout';

export const CustomerPaymentList = () => (
    <CustomersListWrapper
        title="Customer Payments"
        subtitle="Record and track payments received from customers"
    >
        <DataTable.Col source="receipt_number" label="Receipt Number" />
        <DataTable.Col source="customer_name" label="Customer" />
        <DataTable.Col source="invoice_no" label="Invoice No" />
        <DataTable.Col source="payment_date" label="Payment Date">
            <DateField source="payment_date" />
        </DataTable.Col>
        <DataTable.Col source="amount" label="Amount">
            <NumberField source="amount" />
        </DataTable.Col>
        <DataTable.Col source="payment_method" label="Payment Method" />
        <DataTable.Col source="notes" label="Notes" />
    </CustomersListWrapper>
);
