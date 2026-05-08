
import { List, DataTable, DateField, ReferenceField, TextField, EditButton, ShowButton } from 'react-admin';

export const RouteCenterList = () => (
    <List title="Route Centers">
        <DataTable>
            <DataTable.Col source="CreatedAt" label="Created At">
                <DateField source="CreatedAt" />
            </DataTable.Col>
            <DataTable.Col source="RouteName" label="Route" />
            <DataTable.Col source="Center" label="Center" />
            <DataTable.Col label="Actions">
                <EditButton />
                <ShowButton />
            </DataTable.Col>
        </DataTable>
    </List>
);
