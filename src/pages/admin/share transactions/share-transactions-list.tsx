import { List, DataTable, DateField, EditButton, DeleteButton, TextInput, required } from 'react-admin';
import { CreateButton } from '../../../components/forms/FormUtils';

export const ShareTransactionList = () => (
    <List 
        title="Share Transactions"
        actions={
            <CreateButton resource="share-transactions" title="Share Transaction">
                <TextInput source="name" validate={required()} fullWidth />
            </CreateButton>
        }
    >
        <DataTable>
            <DataTable.Col source="id" label="ID" />
            <DataTable.Col source="created_at" label="Created At">
                <DateField source="created_at" />
            </DataTable.Col>
            <DataTable.Col source="name" label="Name" />
            <DataTable.Col label="Actions">
                <EditButton />
                <DeleteButton />
            </DataTable.Col>
        </DataTable>
    </List>
);
