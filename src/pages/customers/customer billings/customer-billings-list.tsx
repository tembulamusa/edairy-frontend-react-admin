import { DataTable, NumberField } from 'react-admin';
import { CustomersListWrapper } from '../shared/customers-list-layout';

export const CustomerBillingList = () => (
    <CustomersListWrapper
        title="Customer Billings"
        subtitle="View and manage billing summaries by pay period"
    >
        <DataTable.Col source="pay_date_range_name" label="Billing Period" />
        <DataTable.Col source="total_deliveries" label="Total Deliveries">
            <NumberField source="total_deliveries" />
        </DataTable.Col>
        <DataTable.Col source="total_amount" label="Total Amount">
            <NumberField source="total_amount" />
        </DataTable.Col>
    </CustomersListWrapper>
);
