import { DataTable, DateField } from 'react-admin';
import { ProduceListWrapper } from '../shared/produce-list-layout';

export const StrayMilkCollectionsList = () => (
    <ProduceListWrapper title="Stray Milk Collections" subtitle="Manage stray milk collection records">
        <DataTable.Col source="member_no" label="Member No" />
        <DataTable.Col source="member_name" label="Member Name" />
        <DataTable.Col source="member_route_name" label="Member Route" />
        <DataTable.Col source="journal_route_name" label="Journal Route" />
        <DataTable.Col source="quantity" label="Quantity" />
        <DataTable.Col source="journal_date" label="Date">
            <DateField source="journal_date" />
        </DataTable.Col>
        <DataTable.Col source="milk_delivery_shift" label="Milk Delivery Shift" />
    </ProduceListWrapper>
);
