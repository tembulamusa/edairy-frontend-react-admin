
import { List, DataTable, TextField, DateField, EditButton, DeleteButton, TextInput, required } from 'react-admin';
import { CreateButton } from '../../../../components/forms/FormUtils';

export const DepartmentList = () => (
    <List 
        title="Departments"
        actions={
            <CreateButton resource="departments" title="Department">
                <TextInput source="name" validate={required()} fullWidth />
                <TextInput source="code" validate={required()} fullWidth />
                <TextInput source="head_of_department" fullWidth />
            </CreateButton>
        }
    >
        <DataTable>
            <DataTable.Col source="created_at" label="Created At">
                <DateField source="created_at" />
            </DataTable.Col>
            <DataTable.Col source="name" label="Name" />
            <DataTable.Col source="code" label="Code" />
            <DataTable.Col source="head_of_department" label="Head of Department" />
            <DataTable.Col label="Actions">
                <EditButton />
                <DeleteButton />
            </DataTable.Col>
        </DataTable>
    </List>
);
