import { DataTable, DateField, NumberField } from 'react-admin';
import { CustomersListWrapper } from '../shared/customers-list-layout';

export const CustomerMilkRateList = () => (
    <CustomersListWrapper title="Customer Milk Rates" subtitle="Manage milk rates by customer, grade, and pay period">
        <DataTable.Col source="customer_name" label="Customer" />
        <DataTable.Col source="grade_name" label="Grade" />
        <DataTable.Col source="pay_date_range_name" label="Customer Pay Date Range" />
        <DataTable.Col source="pay_date_range_start" label="Period Start">
            <DateField source="pay_date_range_start" />
        </DataTable.Col>
        <DataTable.Col source="pay_date_range_end" label="Period End">
            <DateField source="pay_date_range_end" />
        </DataTable.Col>
        <DataTable.Col source="rate" label="Rate">
            <NumberField source="rate" />
        </DataTable.Col>
    </CustomersListWrapper>
);
