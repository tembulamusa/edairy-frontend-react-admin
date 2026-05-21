import { DataTable } from 'react-admin';
import { ProduceListWrapper } from '../shared/produce-list-layout';

export const MemberPaymentsList = () => (
    <ProduceListWrapper title="Member Payments" subtitle="Manage member payment records">
        <DataTable.Col source="id" label="ID" />
        <DataTable.Col source="member_id" label="Member ID" />
        <DataTable.Col source="amount" label="Amount" />
        <DataTable.Col source="payment_date" label="Payment Date" />
        <DataTable.Col source="reference" label="Reference" />
    </ProduceListWrapper>
);
