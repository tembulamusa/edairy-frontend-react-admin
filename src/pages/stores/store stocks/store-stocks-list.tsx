import { List, DataTable, EditButton, DeleteButton } from "react-admin";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

export const StoreStocksList = () => (
    <List title="Store Stocks">
        <DataTable>
            <DataTable.Col source="ItemName" label="Item" />
            <DataTable.Col source="StoreName" label="Store" />
            <DataTable.Col source="Quantity" label="Quantity" />
            <DataTable.Col source="Unit" label="Unit" />
            <DataTable.Col source="BuyingPrice" label="Buying Price" />
            <DataTable.Col source="SellingPrice" label="Selling Price" />
            <DataTable.Col source="CreditSellingPrice" label="Credit Selling Price" />
        </DataTable>
    </List>
);