import { List, DataTable, DateField, EditButton, DeleteButton, TextInput, required } from "react-admin";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { CreateButton } from "../../../components/forms/FormUtils";

export const EmployeeLeaveApplicationsList = () => (
    <List
        title="Employee Leave Applications"
        actions={
            <CreateButton resource="employee-leave-applications" title="Employee Leave Application">
                <TextInput source="application_no" label="Application No" validate={[required()]} fullWidth />
                <TextInput source="employee_name" label="Employee Name" validate={[required()]} fullWidth />
                <TextInput source="leave_type" label="Leave Type" validate={[required()]} fullWidth />
                <TextInput source="days_applied" label="Days Applied" validate={[required()]} fullWidth />
                <TextInput source="days_approved" label="Days Approved" fullWidth />
                <TextInput source="start_date" label="Start Date" validate={[required()]} fullWidth />
                <TextInput source="end_date" label="End Date" validate={[required()]} fullWidth />
                <TextInput source="return_date" label="Return Date" fullWidth />
                <TextInput source="status" label="Status" fullWidth />
            </CreateButton>
        }
    >
        <DataTable>
            <DataTable.Col source="application_no" label="Application No" />
            <DataTable.Col source="employee_name" label="Employee Name" />
            <DataTable.Col source="leave_type" label="Leave Type" />
            <DataTable.Col source="days_applied" label="Days Applied" />
            <DataTable.Col source="days_approved" label="Days Approved" />
            <DataTable.Col source="start_date" label="Start Date">
                <DateField source="start_date" />
            </DataTable.Col>
            <DataTable.Col source="end_date" label="End Date">
                <DateField source="end_date" />
            </DataTable.Col>
            <DataTable.Col source="return_date" label="Return Date">
                <DateField source="return_date" />
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
