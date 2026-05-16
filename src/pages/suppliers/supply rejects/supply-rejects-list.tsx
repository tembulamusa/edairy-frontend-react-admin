import { List, DataTable, NumberField, EditButton, DeleteButton, DateField } from "react-admin";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

export const SupplyRejectsList = () => (
    <List title="Supply Rejects">
        <DataTable>
            <DataTable.Col source="created_at" label="Date">
                <DateField source="created_at" />
            </DataTable.Col>
            <DataTable.Col source="supply_id" label="Supply ID">
                <NumberField source="supply_id" />
            </DataTable.Col>
            <DataTable.Col source="item_name" label="Item Name" />
            <DataTable.Col source="vendor_name" label="Vendor Name" />
            <DataTable.Col source="quantity" label="Quantity">
                <NumberField source="quantity" />
            </DataTable.Col>
            <DataTable.Col source="reason" label="Reason" />
            <DataTable.Col label="Actions">
                <EditButton
                    label=""
                    icon={<EditOutlinedIcon fontSize="small" />}
                    sx={{ minWidth: 0, p: 0.5 }}
                />
                <DeleteButton
                    label=""
                    icon={<DeleteOutlineIcon fontSize="small" />}
                    sx={{ minWidth: 0, p: 0.5 }}
                />
            </DataTable.Col>
        </DataTable>
    </List>
);
