import { List, DataTable, EditButton, DeleteButton } from "react-admin";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

export const SupplierQuoteList = () => (
    <List title="Supplier Quotes">
        <DataTable>
            <DataTable.Col source="vendor_name" label="Vendor Name" />
            <DataTable.Col source="description" label="Description" />
            <DataTable.Col source="status" label="Status" />
            <DataTable.Col source="rfq_no" label="RFQ No" />
            <DataTable.Col source="supplier_quote_ref" label="Quote Reference" />
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
