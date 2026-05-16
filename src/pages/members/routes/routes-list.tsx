
import { List, DataTable, DateField, TextField, EditButton } from 'react-admin';

export const RouteList = () => (
    <List title="Routes">
        <DataTable>
            <DataTable.Col source="created_at" label="Created At">
                <DateField source="created_at" />
            </DataTable.Col>
            <DataTable.Col source="location_name" label="Location" />
            <DataTable.Col source="code" label="Route Code" />
            <DataTable.Col source="name" label="Route Name" />
            <DataTable.Col source="description" label="Description" />
            <DataTable.Col label="Actions">
                <EditButton />
            </DataTable.Col>
        </DataTable>
    </List>
);
