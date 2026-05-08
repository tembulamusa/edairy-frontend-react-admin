
import { List, DataTable, DateField, TextField, EditButton } from 'react-admin';

export const RouteList = () => (
    <List title="Routes">
        <DataTable>
            <DataTable.Col source="CreatedAt" label="Created At">
                <DateField source="CreatedAt" />
            </DataTable.Col>
            <DataTable.Col source="LocationName" label="Location" />
            <DataTable.Col source="Code" label="Route Code" />
            <DataTable.Col source="Name" label="Route Name" />
            <DataTable.Col source="Description" label="Description" />
            <DataTable.Col label="Actions">
                <EditButton />
            </DataTable.Col>
        </DataTable>
    </List>
);
