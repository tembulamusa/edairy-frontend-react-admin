import { List, DataTable, EditButton, DeleteButton } from "react-admin";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

export const CustomerList = () => (
    <List title="Customers">
        <DataTable>
            <DataTable.Col source="customer_no" label="No." />
            <DataTable.Col source="full_names" label="Name" />
            <DataTable.Col source="phone" label="Phone" />
            <DataTable.Col source="email_address" label="Email" />
            <DataTable.Col source="kra_pin" label="KRA PIN" />
            <DataTable.Col source="status" label="Status" />
            <DataTable.Col source="credit_limit" label="Limit" />
            <DataTable.Col source="postal_town" label="Town" />
            <DataTable.Col source="rate" label="Rate" />
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
