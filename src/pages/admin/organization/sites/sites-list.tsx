
import { List, DataTable, TextField, DateField, EditButton, DeleteButton } from 'react-admin';

export const SiteList = () => (
    <List title="Sites">
        <DataTable>
            <DataTable.Col source="CreatedAt" label="Created At">
                <DateField source="CreatedAt" />
            </DataTable.Col>
            <DataTable.Col source="Name" label="Name" />
            <DataTable.Col source="Location" label="Location" />
            <DataTable.Col source="SiteType" label="Site Type" />
            <DataTable.Col label="Actions">
                <EditButton />
                <DeleteButton />
            </DataTable.Col>
        </DataTable>
    </List>
);
