
import { List, DataTable, DateField, ReferenceField, TextField } from 'react-admin';

export const MemberBankAccountList = () => (
    <List title="Member Bank Accounts">
        <DataTable>
            {/* <DataTable.NumberCol source="id" label="ID" /> */}
            <DataTable.Col source="CreatedAt" label="Created At" />
            <DataTable.Col source="MemberNo" label="Member Number" />
            <DataTable.Col source="BankName" label="Bank" />
            <DataTable.Col source="AccountNumber" label="Account Number" />
            <DataTable.Col source="AccountName" label="Account Name" />
        </DataTable>
    </List>
);
