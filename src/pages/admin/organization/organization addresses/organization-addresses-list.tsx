import { List, DataTable, DateField, EditButton, DeleteButton, TextInput, required } from "react-admin";
import { CreateButton } from "../../../../components/forms/FormUtils";

export const OrganizationAddressesList = () => (
    <List 
        title={"Organization Addresses"}
        actions={
            <CreateButton resource="organization-addresses" title="Organization Address">
                <TextInput source="address_type" validate={required()} fullWidth />
                <TextInput source="city" validate={required()} fullWidth />
                <TextInput source="country" validate={required()} fullWidth />
                <TextInput source="line1" validate={required()} fullWidth />
                <TextInput source="state" fullWidth />
            </CreateButton>
        }
    >
        <DataTable>

            <DataTable.Col source="address_type" label="Type" />
            <DataTable.Col source="city" label="City" />
            <DataTable.Col source="country" label="Country" />
            <DataTable.Col source="line1" label="Line 1" />
            <DataTable.Col source="line2" label="Line 2" />
            <DataTable.Col source="state" label="State" />
            <DataTable.Col label="Actions">
                <EditButton />
                <DeleteButton />
            </DataTable.Col>
        </DataTable>
    </List>
);
