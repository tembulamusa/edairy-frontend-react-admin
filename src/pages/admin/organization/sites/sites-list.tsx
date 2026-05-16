
import { List, DataTable, TextField, DateField, EditButton, DeleteButton } from 'react-admin';

export const SiteList = () => (
    <List title="Sites">
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
