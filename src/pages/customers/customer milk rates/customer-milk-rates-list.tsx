import { DataTable, DateField, NumberField, TextField } from 'react-admin';
import { CustomersListWrapper } from '../shared/customers-list-layout';

export const CustomerMilkRateList = () => (
    <CustomersListWrapper title="Customer Milk Rates" subtitle="Manage milk rates by customer, grade, and pay period">
        <DataTable.Col source="customer_name" label="Customer">
            <TextField source="customer_name" />
        </DataTable.Col>
        <DataTable.Col source="grade_name" label="Grade">
            <TextField source="grade_name" />
        </DataTable.Col>
        <DataTable.Col source="pay_date_range_name" label="Customer Pay Date Range">
            <TextField source="pay_date_range_name" />
        </DataTable.Col>
        <DataTable.Col source="rate" label="Rate">
            <NumberField source="rate" />
        </DataTable.Col>
        <DataTable.Col source="created_at" label="Created At">
            <DateField source="created_at" />
        </DataTable.Col>
    </CustomersListWrapper>
);
