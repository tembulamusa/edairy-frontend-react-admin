import { List, DataTable, EditButton, DeleteButton } from "react-admin";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

export const MilkDeliveryShiftsList = () => (
    <List title="Milk Delivery Shifts">
        <DataTable>
            <DataTable.Col source="Name" label="Name" />
            <DataTable.Col source="Description" label="Description" />
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
