
import { List, DataTable, TextField, DateField, EditButton, DeleteButton } from 'react-admin';

export const DirectorManagementList = () => (
    <List title="Directors and Management">
        <DataTable>
            <DataTable.Col source="CreatedAt" label="Created At">
                <DateField source="CreatedAt" />
            </DataTable.Col>
            <DataTable.Col source="FullName" label="Full Name" />
            <DataTable.Col source="Position" label="Position" />
            <DataTable.Col source="IDNumber" label="ID Number" />
            <DataTable.Col source="Phone" label="Phone" />
            <DataTable.Col source="Email" label="Email" />
            <DataTable.Col label="Actions">
                <EditButton />
                <DeleteButton />
            </DataTable.Col>
        </DataTable>
    </List>
);
