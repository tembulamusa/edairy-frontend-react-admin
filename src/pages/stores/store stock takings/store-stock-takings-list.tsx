import { List, DataTable, EditButton, DeleteButton, DateField } from "react-admin";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

export const StoreStockTakingsList = () => (
    <List title="Store Stock Takings">
        <DataTable>
            <DataTable.Col source="StockTakeNo" label="Stock Take No" />
            <DataTable.Col source="StoreName" label="Store" />
            <DataTable.Col source="ItemName" label="Item" />
            <DataTable.Col source="SystemQuantity" label="System Quantity" />
            <DataTable.Col source="PhysicalQuantity" label="Physical Quantity" />
            <DataTable.Col source="VarianceQuantity" label="Variance" />
            <DataTable.Col source="Remarks" label="Remarks" />
            <DataTable.Col source="StockTakeDate" label="Date">
                <DateField source="StockTakeDate" />
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