import { List, DataTable, DateField, NumberField, EditButton, DeleteButton } from "react-admin";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

export const CustomerPaymentList = () => (
    <List title="Customer Payments">
        <DataTable>
            <DataTable.Col source="ReceiptNumber" label="Receipt Number" />
            <DataTable.Col source="CustomerName" label="Customer Name" />
            <DataTable.Col source="InvoiceNo" label="Invoice No" />
            <DataTable.Col source="PaymentDate" label="Payment Date">
                <DateField source="PaymentDate" />
            </DataTable.Col>
            <DataTable.Col source="Amount" label="Amount">
                <NumberField source="Amount" />
            </DataTable.Col>
            <DataTable.Col source="PaymentMethod" label="Payment Method" />
            <DataTable.Col source="Notes" label="Notes" />
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
