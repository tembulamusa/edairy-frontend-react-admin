import { List, DataTable, DateField, EditButton, DeleteButton, TextInput, required } from "react-admin";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { CreateButton } from "../../../../components/forms/FormUtils";

export const EmployeeExitDetailsList = () => (
    <List 
        title="Employee Exit Details"
        actions={
            <CreateButton resource="employee-exit-details" title="Employee Exit Detail">
                <TextInput source="employee_name" label="Employee Name" validate={[required()]} fullWidth />
                <TextInput source="contract_type" label="Contract Type" validate={[required()]} fullWidth />
                <TextInput source="contract_end_date" label="Contract End Date" validate={[required()]} fullWidth />
                <TextInput source="date_of_leaving" label="Date of Leaving" validate={[required()]} fullWidth />
                <TextInput source="exit_category" label="Exit Category" validate={[required()]} fullWidth />
                <TextInput source="reasons" label="Reasons" validate={[required()]} fullWidth />
            </CreateButton>
        }
    >
        <DataTable>
            <DataTable.Col source="employee_name" label="Employee Name" />
            <DataTable.Col source="contract_type" label="Contract Type" />
            <DataTable.Col source="contract_end_date" label="Contract End Date">
                <DateField source="contract_end_date" />
            </DataTable.Col>
            <DataTable.Col source="date_of_leaving" label="Date of Leaving">
                <DateField source="date_of_leaving" />
            </DataTable.Col>
            <DataTable.Col source="exit_category" label="Exit Category" />
            <DataTable.Col source="reasons" label="Reasons" />
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
