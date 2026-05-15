import { List, DataTable, DateField, EditButton, DeleteButton } from "react-admin";

export const OrganizationAddressesList = () => (
    <List title={"Organization Addresses"}>
        <DataTable>

            <DataTable.Col source="AddressType" label="Type" />
            <DataTable.Col source="City" label="City" />
            <DataTable.Col source="Country" label="Country" />
            <DataTable.Col source="Line1" label="Line 1" />
            <DataTable.Col source="Line2" label="Line 2" />
            <DataTable.Col source="State" label="State" />
            <DataTable.Col label="Actions">
                <EditButton />
                <DeleteButton />
            </DataTable.Col>
        </DataTable>
    </List>
);
