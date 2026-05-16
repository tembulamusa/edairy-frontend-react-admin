
import { List, DataTable, TextField, DateField, EditButton, DeleteButton } from 'react-admin';

export const OrganizationDetailsList = () => (
    <List title="Organization Details">
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
