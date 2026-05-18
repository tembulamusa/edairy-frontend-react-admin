
import { List, DataTable, DateField, ReferenceField, TextInput, TextField, SelectField, required } from 'react-admin';
import { CreateButton } from '../../../components/forms/FormUtils';

export const MemberBankAccountList = () => (
    <List title="Member Bank Accounts"
        actions={
            <CreateButton resource="dividend-declarations" title="Dividend Declaration">
                <TextInput source="moses" validate={[]} fullWidth />
            </CreateButton>
        }>
        <DataTable>
            <DataTable.Col source="member_no" label="Member Number" />
            <DataTable.Col source="bank_name" label="Bank" />
            <DataTable.Col source="account_number" label="Account Number" />
            <DataTable.Col source="account_name" label="Account Name" />
        </DataTable>
    </List>
);
