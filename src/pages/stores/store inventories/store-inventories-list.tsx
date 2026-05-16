import { List, DataTable, EditButton, DeleteButton, FunctionField } from "react-admin";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";

type StoreInventoryRecord = {
    IsActive?: number | boolean;
};

export const StoreInventoriesList = () => (
    <List title="Store Inventories">
        <DataTable>
            <DataTable.Col source="inventory_name" label="Inventory Name" />
            <DataTable.Col source="category_name" label="Category" />
            <DataTable.Col source="description" label="Description" />
            <DataTable.Col label="Active">
                <FunctionField
                    render={(record: StoreInventoryRecord) =>
                        record?.is_active === 1 || record?.is_active === true ? (
                            <CheckCircleOutlineIcon sx={{ color: "success.main" }} fontSize="small" />
                        ) : (
                            <CancelOutlinedIcon sx={{ color: "error.main" }} fontSize="small" />
                        )
                    }
                />
            </DataTable.Col>
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