import { List, DataTable, NumberField, EditButton, DeleteButton } from "react-admin";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

export const CustomerBillingList = () => (
    <List title="Customer Billings">
        <DataTable>
            <DataTable.Col source="PayDateRangeName" label="Billing Period" />
            <DataTable.Col source="TotalDeliveries" label="Total Deliveries">
                <NumberField source="TotalDeliveries" />
            </DataTable.Col>
            <DataTable.Col source="TotalAmount" label="Total Amount">
                <NumberField source="TotalAmount" />
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
