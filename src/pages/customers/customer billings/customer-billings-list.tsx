import { List, DataTable, NumberField, EditButton, DeleteButton, TextInput, required } from "react-admin";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { CreateButton } from "../../../components/forms/FormUtils";

export const CustomerBillingList = () => (
    <List 
        title="Customer Billings"
        actions={
            <CreateButton resource="customer-billings" title="Customer Billing">
                <TextInput source="pay_date_range_name" label="Billing Period" validate={[required()]} fullWidth />
                <TextInput source="total_deliveries" label="Total Deliveries" validate={[required()]} fullWidth />
                <TextInput source="total_amount" label="Total Amount" validate={[required()]} fullWidth />
            </CreateButton>
        }
    >
        <DataTable>
            <DataTable.Col source="pay_date_range_name" label="Billing Period" />
            <DataTable.Col source="total_deliveries" label="Total Deliveries">
                <NumberField source="total_deliveries" />
            </DataTable.Col>
            <DataTable.Col source="total_amount" label="Total Amount">
                <NumberField source="total_amount" />
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
