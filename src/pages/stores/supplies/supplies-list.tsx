import { List, DataTable, DateField, NumberField, BooleanField, EditButton, DeleteButton } from "react-admin";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

export const SuppliesList = () => (
    <List title="Supplies">
        <DataTable>
            <DataTable.Col source="reference" label="Reference" />
            <DataTable.Col source="supplied_date" label="Supplied Date">
                <DateField source="supplied_date" />
            </DataTable.Col>
            <DataTable.Col source="vendor_name" label="Vendor Name" />
            <DataTable.Col source="store_name" label="Store" />
            <DataTable.Col source="item_count" label="Items">
                <NumberField source="item_count" />
            </DataTable.Col>
            <DataTable.Col source="total_amount" label="Total Amount">
                <NumberField source="total_amount" />
            </DataTable.Col>
            <DataTable.Col source="settled" label="Settled">
                <BooleanField source="settled" />
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
