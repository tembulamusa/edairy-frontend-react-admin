
import { List, DataTable, TextField, DateField, EditButton, DeleteButton, TextInput, required } from 'react-admin';
import { CreateButton } from '../../../../components/forms/FormUtils';

export const BankList = () => (
    <List 
        title="Banks"
        actions={
            <CreateButton resource="banks" title="Bank">
                <TextInput source="name" validate={required()} fullWidth />
                <TextInput source="code" validate={required()} fullWidth />
                <TextInput source="swift_code" fullWidth />
            </CreateButton>
        }
    >
        <DataTable>
            <DataTable.Col source="created_at" label="Created At">
                <DateField source="created_at" />
            </DataTable.Col>
            <DataTable.Col source="name" label="Name" />
            <DataTable.Col source="code" label="Code" />
            <DataTable.Col source="swift_code" label="Swift Code" />
            <DataTable.Col label="Actions">
                <EditButton />
                <DeleteButton />
            </DataTable.Col>
        </DataTable>
    </List>
);
