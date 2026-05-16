import { List, DataTable } from "react-admin";

export const PaymentTermsList = () => (
    <List title="Payment Terms">
        <DataTable>
            <DataTable.Col source="id" label="ID" />
            <DataTable.Col source="name" label="Name" />
            <DataTable.Col source="description" label="Description" />
        </DataTable>
    </List>
);
