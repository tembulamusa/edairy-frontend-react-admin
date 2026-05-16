
import { List, DataTable, DateField, ReferenceField, TextField } from 'react-admin';

export const MemberBankAccountList = () => (
    <List title="Member Bank Accounts">
        <DataTable>
            {/* <DataTable.NumberCol source="id" label="ID" /> */}
            {/* <DataTable.Col source="created_at" label="Created At" /> */}
            <DataTable.Col source="member_no" label="Member Number" />
            <DataTable.Col source="bank_name" label="Bank" />
            <DataTable.Col source="account_number" label="Account Number" />
            <DataTable.Col source="account_name" label="Account Name" />
        </DataTable>
    </List>
);
