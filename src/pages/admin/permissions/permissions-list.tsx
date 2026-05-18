import { List, DataTable, EditButton, DeleteButton, TextInput, required } from 'react-admin';
import { CreateButton } from '../../../components/forms/FormUtils';

export const PermissionList = () => (
    <List 
        title="Permissions"
        actions={
            <CreateButton resource="permissions" title="Permission">
                <TextInput source="name" validate={required()} fullWidth />
                <TextInput source="guard_name" fullWidth />
            </CreateButton>
        }
    >
        <DataTable>
            <DataTable.Col source="name" label="Name" />
            <DataTable.Col source="guard_name" label="Guard Name" />
            <DataTable.Col label="Actions">
                <EditButton />
                <DeleteButton />
            </DataTable.Col>
        </DataTable>
    </List>
);
