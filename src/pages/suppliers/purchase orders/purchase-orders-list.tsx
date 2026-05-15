import { List, DataTable, EditButton, DeleteButton, DateField } from "react-admin";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

export const PurchaseOrdersList = () => (
    <List title="Purchase Orders">
        <DataTable>
            <DataTable.Col source="PoDate" label="Date">
                <DateField source="PoDate" />
            </DataTable.Col>
            <DataTable.Col source="PoNumber" label="Order Number" />
            <DataTable.Col source="SupplierName" label="Supplier" />
            <DataTable.Col source="Status" label="Status" />
            <DataTable.Col source="TotalAmount" label="Total Amount" />
        </DataTable>
    </List>
);
