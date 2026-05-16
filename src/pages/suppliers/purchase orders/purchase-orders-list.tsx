import { List, DataTable, EditButton, DeleteButton, DateField } from "react-admin";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

export const PurchaseOrdersList = () => (
    <List title="Purchase Orders">
        <DataTable>
            <DataTable.Col source="po_date" label="Date">
                <DateField source="po_date" />
            </DataTable.Col>
            <DataTable.Col source="po_number" label="Order Number" />
            <DataTable.Col source="supplier_name" label="Supplier" />
            <DataTable.Col source="status" label="Status" />
            <DataTable.Col source="total_amount" label="Total Amount" />
        </DataTable>
    </List>
);
