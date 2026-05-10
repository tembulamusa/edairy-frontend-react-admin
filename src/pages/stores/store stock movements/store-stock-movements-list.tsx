import { List, DataTable, DateField } from "react-admin";

export const StoreStockMovementsList = () => (
    <List title="Store Stock Movements">
        <DataTable>
            <DataTable.Col source="TransactionDate" label="Date">
                <DateField source="TransactionDate" />
            </DataTable.Col>
            <DataTable.Col source="StoreName" label="Store" />
            <DataTable.Col source="ItemName" label="Item" />
            <DataTable.Col source="MovementType" label="Movement Type" />
            <DataTable.Col source="QtyIn" label="Qty In" />
            <DataTable.Col source="QtyOut" label="Qty Out" />
            <DataTable.Col source="BalanceAfter" label="Balance After" />
            <DataTable.Col source="UnitCost" label="Unit Cost" />
            <DataTable.Col source="SellingPrice" label="Selling Price" />
            <DataTable.Col source="Remarks" label="Remarks" />
        </DataTable>
    </List>
);