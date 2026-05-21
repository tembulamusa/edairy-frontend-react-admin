import { DataTable, DateField } from 'react-admin';
import { ProduceListWrapper } from '../shared/produce-list-layout';

export const MilkLocalSalesList = () => (
    <ProduceListWrapper title="Milk Local Sales" subtitle="Manage local milk sale records">
        <DataTable.Col source="transaction_date" label="Transaction Date">
            <DateField source="transaction_date" />
        </DataTable.Col>
        <DataTable.Col source="quantity" label="Quantity" />
        <DataTable.Col source="rate" label="Rate" />
        <DataTable.Col source="amount" label="Amount" />
        <DataTable.Col source="grade_name" label="Grade Name" />
        <DataTable.Col source="ref_number" label="Ref Number" />
        <DataTable.Col source="transporter_name" label="Transporter" />
    </ProduceListWrapper>
);
