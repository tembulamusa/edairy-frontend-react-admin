
import { List, DataTable, TextField, DateField, EditButton, DeleteButton, TextInput, required } from 'react-admin';
import { CreateButton } from '../../../../components/forms/FormUtils';

export const SiteList = () => (
    <List 
        title="Sites"
        actions={
            <CreateButton resource="sites" title="Site">
                <TextInput source="name" validate={required()} fullWidth />
                <TextInput source="location" validate={required()} fullWidth />
                <TextInput source="site_type" fullWidth />
            </CreateButton>
        }
    >
        <DataTable>
            <DataTable.Col source="created_at" label="Created At">
                <DateField source="created_at" />
            </DataTable.Col>
            <DataTable.Col source="name" label="Name" />
            <DataTable.Col source="location" label="Location" />
            <DataTable.Col source="site_type" label="Site Type" />
            <DataTable.Col label="Actions">
                <EditButton />
                <DeleteButton />
            </DataTable.Col>
        </DataTable>
    </List>
);
