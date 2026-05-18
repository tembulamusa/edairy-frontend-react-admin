
import { List, DataTable, TextField, DateField, EditButton, DeleteButton, TextInput, required } from 'react-admin';
import { CreateButton } from '../../../../components/forms/FormUtils';

export const DocumentList = () => (
    <List 
        title="Documents"
        actions={
            <CreateButton resource="documents" title="Document">
                <TextInput source="title" validate={required()} fullWidth />
                <TextInput source="document_type" validate={required()} fullWidth />
            </CreateButton>
        }
    >
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
