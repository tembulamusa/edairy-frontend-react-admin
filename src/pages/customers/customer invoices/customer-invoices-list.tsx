import { DataTable, DateField, NumberField } from 'react-admin';
import { CustomersListWrapper } from '../shared/customers-list-layout';

export const CustomerInvoiceList = () => (
    <CustomersListWrapper
        title="Customer Invoices"
        subtitle="Manage customer invoices, balances, and payment status"
    >
        <DataTable.Col source="invoice_no" label="Invoice No" />
        <DataTable.Col source="customer_name" label="Customer" />
        <DataTable.Col source="invoice_date" label="Invoice Date">
            <DateField source="invoice_date" />
        </DataTable.Col>
        <DataTable.Col source="due_date" label="Due Date">
            <DateField source="due_date" />
        </DataTable.Col>
        <DataTable.Col source="gross_amount" label="Gross Amount">
            <NumberField source="gross_amount" />
        </DataTable.Col>
        <DataTable.Col source="tax_amount" label="Tax Amount">
            <NumberField source="tax_amount" />
        </DataTable.Col>
        <DataTable.Col source="total_amount" label="Total Amount">
            <NumberField source="total_amount" />
        </DataTable.Col>
        <DataTable.Col source="balance" label="Balance">
            <NumberField source="balance" />
        </DataTable.Col>
        <DataTable.Col source="status" label="Status" />
    </CustomersListWrapper>
);
