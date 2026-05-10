import { List, DataTable, DateField } from "react-admin";

export const InterstoreTransferList = () => (
    <List title="Interstore Transfers">
        <DataTable>
            <DataTable.Col source="CreatedAt" label="Created Date & Time">
                <DateField source="CreatedAt" showTime={true} options={{ hour12: false }} />
            </DataTable.Col>
            <DataTable.Col source="Reference" label="Reference" />
            <DataTable.Col source="FromStoreName" label="From Store" />
            <DataTable.Col source="ToStoreName" label="To Store" />
            <DataTable.Col source="TransferDate" label="Transfer Date">
                <DateField source="TransferDate" />
            </DataTable.Col>
            <DataTable.Col source="Status" label="Status" />
        </DataTable>
    </List>
);
