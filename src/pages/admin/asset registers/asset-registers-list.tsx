import { List, DataTable, DateField, EditButton, DeleteButton, TextInput, required } from 'react-admin';
import { CreateButton } from '../../../components/forms/FormUtils';

export const AssetRegisterList = () => (
    <List 
        title="Asset Registers"
        actions={
            <CreateButton resource="asset-registers" title="Asset Register">
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
