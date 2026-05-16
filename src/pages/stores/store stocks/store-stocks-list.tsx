import { List, DataTable, EditButton, DeleteButton } from "react-admin";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

export const StoreStocksList = () => (
    <List title="Store Stocks">
        <DataTable>
            <DataTable.Col source="item_name" label="Item" />
            <DataTable.Col source="store_name" label="Store" />
            <DataTable.Col source="quantity" label="Quantity" />
            <DataTable.Col source="unit" label="Unit" />
            <DataTable.Col source="buying_price" label="Buying Price" />
            <DataTable.Col source="selling_price" label="Selling Price" />
            <DataTable.Col source="credit_selling_price" label="Credit Selling Price" />
        </DataTable>
    </List>
);