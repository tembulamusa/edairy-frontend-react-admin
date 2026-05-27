import { DataTable, DateField, TextField } from 'react-admin';
import { CustomersListWrapper } from '../shared/customers-list-layout';

export const CustomerPayDateRangeList = () => (
    <CustomersListWrapper
        title="Customer Pay Date Ranges"
        subtitle="Define billing periods used for customer billings and collections"
    >
        <DataTable.Col source="name" label="Period Name">
            <TextField source="name" />
        </DataTable.Col>
        <DataTable.Col source="start_date" label="Start Date">
            <DateField source="start_date" />
        </DataTable.Col>
        <DataTable.Col source="end_date" label="End Date">
            <DateField source="end_date" />
        </DataTable.Col>
        <DataTable.Col source="created_at" label="Created At">
            <DateField source="created_at" />
        </DataTable.Col>
    </CustomersListWrapper>
);
