import { DataTable } from 'react-admin';
import { ProduceListWrapper } from '../../produce/shared/produce-list-layout';

export const MemberPayrollList = () => (
    <ProduceListWrapper title="Member Payroll" subtitle="Manage member payroll records">
        <DataTable.Col source="id" label="ID" />
        <DataTable.Col source="member_id" label="Member ID" />
        <DataTable.Col source="period" label="Period" />
        <DataTable.Col source="gross_amount" label="Gross Amount" />
        <DataTable.Col source="net_amount" label="Net Amount" />
        <DataTable.Col source="status" label="Status" />
    </ProduceListWrapper>
);
