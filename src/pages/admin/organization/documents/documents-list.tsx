
import { List, DataTable, TextField, DateField, EditButton, DeleteButton } from 'react-admin';

export const DocumentList = () => (
    <List title="Documents">
        <DataTable>
            <DataTable.Col source="CreatedAt" label="Created At">
                <DateField source="CreatedAt" />
            </DataTable.Col>
            <DataTable.Col source="Title" label="Title" />
            <DataTable.Col source="DocumentType" label="Type" />
            <DataTable.Col source="ExpiryDate" label="Expiry Date">
                <DateField source="ExpiryDate" />
            </DataTable.Col>
            <DataTable.Col source="File" label="File" />
            <DataTable.Col label="Actions">
                <EditButton />
                <DeleteButton />
            </DataTable.Col>
        </DataTable>
    </List>
);
