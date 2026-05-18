
import { List, DataTable, TextField, DateField, EditButton, DeleteButton, TextInput, required } from 'react-admin';
import { CreateButton } from '../../../../components/forms/FormUtils';

export const DocumentTypeList = () => (
    <List 
        title="Document Types"
        actions={
            <CreateButton resource="document-types" title="Document Type">
                <TextInput source="name" validate={required()} fullWidth />
                <TextInput source="description" fullWidth />
            </CreateButton>
        }
    >
        <DataTable>
            <DataTable.Col source="created_at" label="Created At">
                <DateField source="created_at" />
            </DataTable.Col>
            <DataTable.Col source="name" label="Name" />
            <DataTable.Col source="description" label="Description" />
            <DataTable.Col label="Actions">
                <EditButton />
                <DeleteButton />
            </DataTable.Col>
        </DataTable>
    </List>
);
