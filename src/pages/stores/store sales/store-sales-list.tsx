import { List, DataTable, DateField, NumberField } from "react-admin";

const formatCurrency = (value: number | string | undefined | null) => {
    if (value === undefined || value === null || value === "") {
        return "KES 0.00";
    }
    const numeric = Number(value);
    if (Number.isNaN(numeric)) {
        return String(value);
    }
    return `KES ${numeric.toLocaleString()}`;
};

export const StoreSalesList = () => (
    <List title="Store Sales">
        <DataTable>
            <DataTable.Col source="CreatedAt" label="Date & Time">
                <DateField source="CreatedAt" showTime={true} options={{ hour12: false }} />
            </DataTable.Col>
            <DataTable.Col source="Reference" label="Reference" />
            <DataTable.Col source="StoreName" label="Store" />
            <DataTable.Col source="SaleType" label="Sale Type" />
            <DataTable.Col source="CustomerType" label="Customer Type" />
            <DataTable.Col source="TotalAmount" label="Total Amount">
                <NumberField source="TotalAmount" options={{ style: 'currency', currency: 'KES' }} />
            </DataTable.Col>
            <DataTable.Col source="AmountPaid" label="Amount Paid">
                <NumberField source="AmountPaid" options={{ style: 'currency', currency: 'KES' }} />
            </DataTable.Col>
            <DataTable.Col source="AmountDue" label="Amount Due">
                <NumberField source="AmountDue" options={{ style: 'currency', currency: 'KES' }} />
            </DataTable.Col>
        </DataTable>
    </List>
);
