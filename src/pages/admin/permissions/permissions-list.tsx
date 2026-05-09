import { List, DataTable, EditButton, DeleteButton } from 'react-admin';

export const PermissionList = () => (
    <List title="Permissions">
        <DataTable>
            <DataTable.Col source="Name" label="Name" />
            <DataTable.Col source="GuardName" label="Guard Name" />
            <DataTable.Col label="Actions">
                <EditButton />
                <DeleteButton />
            </DataTable.Col>
        </DataTable>
    </List>
);
