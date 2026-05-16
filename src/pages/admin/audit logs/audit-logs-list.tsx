import { List, DataTable, TextField, DateField, EditButton, DeleteButton } from 'react-admin';

export const AuditLogList = () => (
    <List title="Audit Logs">
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
