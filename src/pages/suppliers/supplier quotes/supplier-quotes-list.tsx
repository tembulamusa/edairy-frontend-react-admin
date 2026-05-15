import { List, DataTable, EditButton, DeleteButton } from "react-admin";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

export const SupplierQuoteList = () => (
    <List title="Supplier Quotes">
        <DataTable>
            <DataTable.Col source="VendorName" label="Vendor Name" />
            <DataTable.Col source="Description" label="Description" />
            <DataTable.Col source="Status" label="Status" />
            <DataTable.Col source="RfqNo" label="RFQ No" />
            <DataTable.Col source="SupplierQuoteRef" label="Quote Reference" />
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
