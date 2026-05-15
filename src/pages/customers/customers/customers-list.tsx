import { List, DataTable, EditButton, DeleteButton } from "react-admin";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

export const CustomerList = () => (
    <List title="Customers">
        <DataTable>
            <DataTable.Col source="CustomerNo" label="No." />
            <DataTable.Col source="FullNames" label="Name" />
            <DataTable.Col source="Phone" label="Phone" />
            <DataTable.Col source="EmailAddress" label="Email" />
            <DataTable.Col source="KraPin" label="KRA PIN" />
            <DataTable.Col source="Status" label="Status" />
            <DataTable.Col source="CreditLimit" label="Limit" />
            <DataTable.Col source="PostalTown" label="Town" />
            <DataTable.Col source="Rate" label="Rate" />
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
