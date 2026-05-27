import { DataTable, DateField, NumberField } from 'react-admin';
import { CustomersListWrapper } from '../shared/customers-list-layout';

export const CustomerPayDateRangeList = () => (
    <CustomersListWrapper
        title="Customer Pay Date Ranges"
        subtitle="Define billing periods used for customer billings and collections"
    >
        <DataTable.Col source="name" label="Period Name" />
        <DataTable.Col source="start_date" label="Start Date">
            <DateField source="start_date" />
        </DataTable.Col>
        <DataTable.Col source="end_date" label="End Date">
            <DateField source="end_date" />
        </DataTable.Col>
        <DataTable.Col source="rate" label="Rate">
            <NumberField source="rate" />
        </DataTable.Col>
        <DataTable.Col source="description" label="Description" />
    </CustomersListWrapper>
);
