import { List, DataTable, DateField, EditButton, DeleteButton } from "react-admin";

export const OrganizationAddressesList = () => (
    <List title={"Organization Addresses"}>
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
