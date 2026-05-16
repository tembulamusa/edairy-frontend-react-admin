import { List, DataTable, DateField } from "react-admin";

export const InterstoreTransferList = () => (
    <List title="Interstore Transfers">
        <DataTable>
            <DataTable.Col source="created_at" label="Created Date & Time">
                <DateField source="created_at" showTime={true} options={{ hour12: false }} />
            </DataTable.Col>
            <DataTable.Col source="reference" label="Reference" />
            <DataTable.Col source="from_store_name" label="From Store" />
            <DataTable.Col source="to_store_name" label="To Store" />
            <DataTable.Col source="transfer_date" label="Transfer Date">
                <DateField source="transfer_date" />
            </DataTable.Col>
            <DataTable.Col source="status" label="Status" />
        </DataTable>
    </List>
);
