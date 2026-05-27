import { DataTable } from 'react-admin';
import { ProduceListWrapper } from '../shared/produce-list-layout';

export const MemberDeductionsList = () => (
    <ProduceListWrapper title="Member Deductions" subtitle="Manage member deduction records">
        <DataTable.Col source="id" label="ID" />
        <DataTable.Col source="member_id" label="Member ID" />
        <DataTable.Col source="amount" label="Amount" />
        <DataTable.Col source="deduction_date" label="Deduction Date" />
        <DataTable.Col source="deduction_type" label="Deduction Type" />
    </ProduceListWrapper>
);
