import { List, DataTable, EditButton, DeleteButton } from 'react-admin';

export const PermissionList = () => (
    <List title="Permissions">
        <DataTable>
            <DataTable.Col source="name" label="Name" />
            <DataTable.Col source="guard_name" label="Guard Name" />
            <DataTable.Col label="Actions">
                <EditButton />
                <DeleteButton />
            </DataTable.Col>
        </DataTable>
    </List>
);
