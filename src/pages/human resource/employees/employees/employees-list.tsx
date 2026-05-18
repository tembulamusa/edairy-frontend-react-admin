import { List, DataTable, EditButton, DeleteButton, FunctionField, TextInput, required } from "react-admin";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import { CreateButton } from "../../../../components/forms/FormUtils";

export const EmployeesList = () => (
    <List
        title="Employees"
        actions={
            <CreateButton resource="employees" title="Employee">
                <TextInput source="employee_no" label="Employee No" validate={[required()]} fullWidth />
                <TextInput source="surname" label="Surname" validate={[required()]} fullWidth />
                <TextInput source="first_name" label="First Name" validate={[required()]} fullWidth />
                <TextInput source="middle_name" label="Middle Name" fullWidth />
                <TextInput source="department_name" label="Department" validate={[required()]} fullWidth />
                <TextInput source="job_position_name" label="Job Position" validate={[required()]} fullWidth />
                <TextInput source="status" label="Status" fullWidth />
            </CreateButton>
        }
    >
        <DataTable>
            <DataTable.Col source="employee_no" label="Employee No" />
            <DataTable.Col source="surname" label="Surname" />
            <DataTable.Col source="first_name" label="First Name" />
            <DataTable.Col source="middle_name" label="Middle Name" />
            <DataTable.Col source="department_name" label="Department" />
            <DataTable.Col source="job_position_name" label="Job Position" />
            <DataTable.Col source="status" label="Status">
                <FunctionField
                    render={(record: { status?: string | number }) =>
                        record?.status === 1 || record?.status === "1" ? (
                            <CheckCircleOutlineIcon sx={{ color: "success.main" }} fontSize="small" />
                        ) : (
                            <CancelOutlinedIcon sx={{ color: "error.main" }} fontSize="small" />
                        )
                    }
                />
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
