
import { List, DataTable, TextField, DateField, EditButton, DeleteButton, TextInput, required } from 'react-admin';
import { CreateButton } from '../../../../components/forms/FormUtils';

export const OrganizationDetailsList = () => (
    <List 
        title="Organization Details"
        actions={
            <CreateButton resource="organization-details" title="Organization Detail">
                <TextInput source="name" validate={required()} fullWidth />
                <TextInput source="registration_number" validate={required()} fullWidth />
                <TextInput source="tax_id" fullWidth />
                <TextInput source="address" fullWidth />
                <TextInput source="phone" fullWidth />
                <TextInput source="email" fullWidth />
            </CreateButton>
        }
    >
        <DataTable>
            <DataTable.Col source="created_at" label="Created At">
                <DateField source="created_at" />
            </DataTable.Col>
            <DataTable.Col source="name" label="Name" />
            <DataTable.Col source="registration_number" label="Registration Number" />
            <DataTable.Col source="tax_id" label="Tax ID" />
            <DataTable.Col source="address" label="Address" />
            <DataTable.Col source="phone" label="Phone" />
            <DataTable.Col source="email" label="Email" />
            <DataTable.Col label="Actions">
                <EditButton />
                <DeleteButton />
            </DataTable.Col>
        </DataTable>
    </List>
);
