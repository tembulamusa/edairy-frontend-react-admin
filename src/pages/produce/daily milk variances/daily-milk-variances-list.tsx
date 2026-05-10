import { List, DataTable, DateField } from "react-admin";

export const DailyMilkVariancesList = () => (
    <List title="Daily Milk Variances">
        <DataTable>
            <DataTable.Col source="Day" label="Day">
                <DateField source="Day" />
            </DataTable.Col>
            <DataTable.Col source="Month" label="Month" />
            <DataTable.Col source="Transporter" label="Transporter" />
            <DataTable.Col source="FieldCollections" label="Field Collections" />
            <DataTable.Col source="MCC" label="MCC" />
            <DataTable.Col source="CashSales" label="Cash Sales" />
            <DataTable.Col source="CreditSales" label="Credit Sales" />
            <DataTable.Col source="Rejects" label="Rejects" />
            <DataTable.Col source="Balance" label="Balance" />
        </DataTable>
    </List>
);
