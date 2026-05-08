
import { List, DataTable, TextField, DateField, EditButton, DeleteButton } from 'react-admin';

export const OrganizationDetailsList = () => (
    <List title="Organization Details">
        <DataTable>
            <DataTable.Col source="CreatedAt" label="Created At">
                <DateField source="CreatedAt" />
            </DataTable.Col>
            <DataTable.Col source="Name" label="Name" />
            <DataTable.Col source="RegistrationNumber" label="Registration Number" />
            <DataTable.Col source="TaxID" label="Tax ID" />
            <DataTable.Col source="Address" label="Address" />
            <DataTable.Col source="Phone" label="Phone" />
            <DataTable.Col source="Email" label="Email" />
            <DataTable.Col label="Actions">
                <EditButton />
                <DeleteButton />
            </DataTable.Col>
        </DataTable>
    </List>
);
