
import { List, DataTable, TextField, DateField, EditButton, DeleteButton } from 'react-admin';

export const DirectorManagementList = () => (
    <List title="Directors and Management">
        <DataTable>
            <DataTable.Col source="created_at" label="Created At">
                <DateField source="created_at" />
            </DataTable.Col>
            <DataTable.Col source="full_name" label="Full Name" />
            <DataTable.Col source="position" label="Position" />
            <DataTable.Col source="idnumber" label="ID Number" />
            <DataTable.Col source="phone" label="Phone" />
            <DataTable.Col source="email" label="Email" />
            <DataTable.Col label="Actions">
                <EditButton />
                <DeleteButton />
            </DataTable.Col>
        </DataTable>
    </List>
);
