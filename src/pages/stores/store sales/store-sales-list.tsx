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
            <DataTable.Col source="created_at" label="Date & Time">
                <DateField source="created_at" showTime={true} options={{ hour12: false }} />
            </DataTable.Col>
            <DataTable.Col source="reference" label="Reference" />
            <DataTable.Col source="store_name" label="Store" />
            <DataTable.Col source="sale_type" label="Sale Type" />
            <DataTable.Col source="customer_type" label="Customer Type" />
            <DataTable.Col source="total_amount" label="Total Amount">
                <NumberField source="total_amount" options={{ style: 'currency', currency: 'KES' }} />
            </DataTable.Col>
            <DataTable.Col source="amount_paid" label="Amount Paid">
                <NumberField source="amount_paid" options={{ style: 'currency', currency: 'KES' }} />
            </DataTable.Col>
            <DataTable.Col source="amount_due" label="Amount Due">
                <NumberField source="amount_due" options={{ style: 'currency', currency: 'KES' }} />
            </DataTable.Col>
        </DataTable>
    </List>
);
