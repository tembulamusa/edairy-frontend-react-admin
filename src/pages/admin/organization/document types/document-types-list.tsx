
import { List, DataTable, TextField, DateField, EditButton, DeleteButton } from 'react-admin';

export const DocumentTypeList = () => (
    <List title="Document Types">
        <DataTable>
            <DataTable.Col source="CreatedAt" label="Created At">
                <DateField source="CreatedAt" />
            </DataTable.Col>
            <DataTable.Col source="Name" label="Name" />
            <DataTable.Col source="Description" label="Description" />
            <DataTable.Col label="Actions">
                <EditButton />
                <DeleteButton />
            </DataTable.Col>
        </DataTable>
    </List>
);
