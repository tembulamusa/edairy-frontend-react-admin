import { List, DataTable, DateField } from "react-admin";

export const DailyMilkVariancesList = () => (
    <List title="Daily Milk Variances">
        <DataTable>
            <DataTable.Col source="day" label="Day">
                <DateField source="day" />
            </DataTable.Col>
            <DataTable.Col source="month" label="Month" />
            <DataTable.Col source="transporter" label="Transporter" />
            <DataTable.Col source="field_collections" label="Field Collections" />
            <DataTable.Col source="mcc" label="MCC" />
            <DataTable.Col source="cash_sales" label="Cash Sales" />
            <DataTable.Col source="credit_sales" label="Credit Sales" />
            <DataTable.Col source="rejects" label="Rejects" />
            <DataTable.Col source="balance" label="Balance" />
        </DataTable>
    </List>
);
