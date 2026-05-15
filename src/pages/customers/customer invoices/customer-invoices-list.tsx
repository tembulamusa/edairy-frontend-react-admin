import { List, DataTable, DateField, NumberField, EditButton, DeleteButton } from "react-admin";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

export const CustomerInvoiceList = () => (
    <List title="Customer Invoices">
        <DataTable>
            <DataTable.Col source="InvoiceNo" label="Invoice No" />
            <DataTable.Col source="CustomerName" label="Customer Name" />
            <DataTable.Col source="InvoiceDate" label="Invoice Date">
                <DateField source="InvoiceDate" />
            </DataTable.Col>
            <DataTable.Col source="DueDate" label="Due Date">
                <DateField source="DueDate" />
            </DataTable.Col>
            <DataTable.Col source="GrossAmount" label="Gross Amount">
                <NumberField source="GrossAmount" />
            </DataTable.Col>
            <DataTable.Col source="TaxAmount" label="Tax Amount">
                <NumberField source="TaxAmount" />
            </DataTable.Col>
            <DataTable.Col source="TotalAmount" label="Total Amount">
                <NumberField source="TotalAmount" />
            </DataTable.Col>
            <DataTable.Col source="Balance" label="Balance">
                <NumberField source="Balance" />
            </DataTable.Col>
            <DataTable.Col source="Status" label="Status" />
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
