import { DataTable, NumberField } from 'react-admin';
import { CustomersListWrapper } from '../shared/customers-list-layout';

export const CustomerList = () => (
    <CustomersListWrapper title="Customers" subtitle="Manage customer accounts for deliveries and billing">
        <DataTable.Col source="customer_no" label="No." />
        <DataTable.Col source="full_names" label="Name" />
        <DataTable.Col source="phone" label="Phone" />
        <DataTable.Col source="email_address" label="Email" />
        <DataTable.Col source="kra_pin" label="KRA PIN" />
        <DataTable.Col source="pay_date_range_name" label="Pay Date Range" />
        <DataTable.Col source="credit_limit" label="Limit">
            <NumberField source="credit_limit" />
        </DataTable.Col>
        <DataTable.Col source="terms" label="Payment Period (days)">
            <NumberField source="terms" />
        </DataTable.Col>
        <DataTable.Col source="postal_town" label="Town" />
        <DataTable.Col source="rate" label="Milk Rate">
            <NumberField source="rate" />
        </DataTable.Col>
    </CustomersListWrapper>
);
