
import { List, DataTable, DateField, ReferenceField, TextField, EditButton, ShowButton } from 'react-admin';

export const RouteCenterList = () => (
    <List title="Route Centers">
        <DataTable>
            <DataTable.Col source="created_at" label="Created At">
                <DateField source="created_at" />
            </DataTable.Col>
            <DataTable.Col source="route_name" label="Route" />
            <DataTable.Col source="center" label="Center" />
            <DataTable.Col label="Actions">
                <EditButton />
                <ShowButton />
            </DataTable.Col>
        </DataTable>
    </List>
);
