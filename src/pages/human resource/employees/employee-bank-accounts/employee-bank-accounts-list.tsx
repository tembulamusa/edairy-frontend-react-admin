import { List, DataTable, EditButton, DeleteButton, TextInput, required } from "react-admin";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { CreateButton } from "../../../../components/forms/FormUtils";

export const EmployeeBankAccountsList = () => (
    <List 
        title="Employee Bank Accounts"
        actions={
            <CreateButton resource="employee-bank-accounts" title="Employee Bank Account">
                <TextInput source="account_name" label="Account Name" validate={[required()]} fullWidth />
                <TextInput source="bank_name" label="Bank" validate={[required()]} fullWidth />
                <TextInput source="account_number" label="Account Number" validate={[required()]} fullWidth />
            </CreateButton>
        }
    >
        <DataTable>
            <DataTable.Col source="account_name" label="Account Name" />
            <DataTable.Col source="bank_name" label="Bank" />
            <DataTable.Col source="account_number" label="Account Number" />
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
