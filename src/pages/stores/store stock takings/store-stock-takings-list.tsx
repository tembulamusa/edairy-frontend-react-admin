import { List, DataTable, EditButton, DeleteButton, DateField } from "react-admin";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

export const StoreStockTakingsList = () => (
    <List title="Store Stock Takings">
        <DataTable>
            <DataTable.Col source="stock_take_no" label="Stock Take No" />
            <DataTable.Col source="store_name" label="Store" />
            <DataTable.Col source="item_name" label="Item" />
            <DataTable.Col source="system_quantity" label="System Quantity" />
            <DataTable.Col source="physical_quantity" label="Physical Quantity" />
            <DataTable.Col source="variance_quantity" label="Variance" />
            <DataTable.Col source="remarks" label="Remarks" />
            <DataTable.Col source="stock_take_date" label="Date">
                <DateField source="stock_take_date" />
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