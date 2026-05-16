import { List, DataTable, DateField, NumberField, EditButton, DeleteButton } from "react-admin";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

export const CustomerInvoiceList = () => (
    <List title="Customer Invoices">
        <DataTable>
            <DataTable.Col source="invoice_no" label="Invoice No" />
            <DataTable.Col source="customer_name" label="Customer Name" />
            <DataTable.Col source="invoice_date" label="Invoice Date">
                <DateField source="invoice_date" />
            </DataTable.Col>
            <DataTable.Col source="due_date" label="Due Date">
                <DateField source="due_date" />
            </DataTable.Col>
            <DataTable.Col source="gross_amount" label="Gross Amount">
                <NumberField source="gross_amount" />
            </DataTable.Col>
            <DataTable.Col source="tax_amount" label="Tax Amount">
                <NumberField source="tax_amount" />
            </DataTable.Col>
            <DataTable.Col source="total_amount" label="Total Amount">
                <NumberField source="total_amount" />
            </DataTable.Col>
            <DataTable.Col source="balance" label="Balance">
                <NumberField source="balance" />
            </DataTable.Col>
            <DataTable.Col source="status" label="Status" />
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
