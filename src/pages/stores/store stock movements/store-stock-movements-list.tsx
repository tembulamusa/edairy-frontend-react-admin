import { List, DataTable, DateField } from "react-admin";

export const StoreStockMovementsList = () => (
    <List title="Store Stock Movements">
        <DataTable>
            <DataTable.Col source="transaction_date" label="Date">
                <DateField source="transaction_date" />
            </DataTable.Col>
            <DataTable.Col source="store_name" label="Store" />
            <DataTable.Col source="item_name" label="Item" />
            <DataTable.Col source="movement_type" label="Movement Type" />
            <DataTable.Col source="qty_in" label="Qty In" />
            <DataTable.Col source="qty_out" label="Qty Out" />
            <DataTable.Col source="balance_after" label="Balance After" />
            <DataTable.Col source="unit_cost" label="Unit Cost" />
            <DataTable.Col source="selling_price" label="Selling Price" />
            <DataTable.Col source="remarks" label="Remarks" />
        </DataTable>
    </List>
);