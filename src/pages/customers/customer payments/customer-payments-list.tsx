import { List, DataTable, DateField, NumberField, EditButton, DeleteButton, TextInput, required } from "react-admin";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { CreateButton } from "../../../components/forms/FormUtils";

export const CustomerPaymentList = () => (
    <List 
        title="Customer Payments"
        actions={
            <CreateButton resource="customer-payments" title="Customer Payment">
                <TextInput source="receipt_number" label="Receipt Number" validate={[required()]} fullWidth />
                <TextInput source="customer_name" label="Customer Name" validate={[required()]} fullWidth />
                <TextInput source="invoice_no" label="Invoice No" validate={[required()]} fullWidth />
                <TextInput source="payment_date" label="Payment Date" validate={[required()]} fullWidth />
                <TextInput source="amount" label="Amount" validate={[required()]} fullWidth />
                <TextInput source="payment_method" label="Payment Method" validate={[required()]} fullWidth />
                <TextInput source="notes" label="Notes" validate={[required()]} fullWidth />
            </CreateButton>
        }
    >
        <DataTable>
            <DataTable.Col source="receipt_number" label="Receipt Number" />
            <DataTable.Col source="customer_name" label="Customer Name" />
            <DataTable.Col source="invoice_no" label="Invoice No" />
            <DataTable.Col source="payment_date" label="Payment Date">
                <DateField source="payment_date" />
            </DataTable.Col>
            <DataTable.Col source="amount" label="Amount">
                <NumberField source="amount" />
            </DataTable.Col>
            <DataTable.Col source="payment_method" label="Payment Method" />
            <DataTable.Col source="notes" label="Notes" />
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
