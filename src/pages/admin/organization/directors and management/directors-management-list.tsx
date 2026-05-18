
import { List, DataTable, TextField, DateField, EditButton, DeleteButton, TextInput, required } from 'react-admin';
import { CreateButton } from '../../../../components/forms/FormUtils';

export const DirectorManagementList = () => (
    <List 
        title="Directors and Management"
        actions={
            <CreateButton resource="directors-management" title="Director/Management">
                <TextInput source="full_name" validate={required()} fullWidth />
                <TextInput source="position" validate={required()} fullWidth />
                <TextInput source="idnumber" fullWidth />
                <TextInput source="phone" fullWidth />
                <TextInput source="email" fullWidth />
            </CreateButton>
        }
    >
        <DataTable>
            <DataTable.Col source="created_at" label="Created At">
                <DateField source="created_at" />
            </DataTable.Col>
            <DataTable.Col source="full_name" label="Full Name" />
            <DataTable.Col source="position" label="Position" />
            <DataTable.Col source="idnumber" label="ID Number" />
            <DataTable.Col source="phone" label="Phone" />
            <DataTable.Col source="email" label="Email" />
            <DataTable.Col label="Actions">
                <EditButton />
                <DeleteButton />
            </DataTable.Col>
        </DataTable>
    </List>
);
