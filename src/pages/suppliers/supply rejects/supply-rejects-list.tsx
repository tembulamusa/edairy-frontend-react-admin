import { List, DataTable, NumberField, EditButton, DeleteButton, DateField } from "react-admin";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

export const SupplyRejectsList = () => (
    <List title="Supply Rejects">
        <DataTable>
            <DataTable.Col source="CreatedAt" label="Date">
                <DateField source="CreatedAt" />
            </DataTable.Col>
            <DataTable.Col source="SupplyID" label="Supply ID">
                <NumberField source="SupplyID" />
            </DataTable.Col>
            <DataTable.Col source="ItemName" label="Item Name" />
            <DataTable.Col source="VendorName" label="Vendor Name" />
            <DataTable.Col source="Quantity" label="Quantity">
                <NumberField source="Quantity" />
            </DataTable.Col>
            <DataTable.Col source="Reason" label="Reason" />
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
