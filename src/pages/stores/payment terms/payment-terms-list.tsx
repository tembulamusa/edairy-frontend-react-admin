import { List, DataTable } from "react-admin";

export const PaymentTermsList = () => (
    <List title="Payment Terms">
        <DataTable>
            <DataTable.Col source="ID" label="ID" />
            <DataTable.Col source="Name" label="Name" />
            <DataTable.Col source="Description" label="Description" />
        </DataTable>
    </List>
);
