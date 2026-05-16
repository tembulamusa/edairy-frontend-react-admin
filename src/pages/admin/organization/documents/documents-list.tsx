
import { List, DataTable, TextField, DateField, EditButton, DeleteButton } from 'react-admin';

export const DocumentList = () => (
    <List title="Documents">
        <DataTable>
            <DataTable.Col source="created_at" label="Created At">
                <DateField source="created_at" />
            </DataTable.Col>
            <DataTable.Col source="title" label="Title" />
            <DataTable.Col source="document_type" label="Type" />
            <DataTable.Col source="expiry_date" label="Expiry Date">
                <DateField source="expiry_date" />
            </DataTable.Col>
            <DataTable.Col source="file" label="File" />
            <DataTable.Col label="Actions">
                <EditButton />
                <DeleteButton />
            </DataTable.Col>
        </DataTable>
    </List>
);
