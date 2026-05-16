import { List, DataTable, EditButton, DeleteButton, FunctionField } from "react-admin";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";

export const EmployeesList = () => (
    <List title="Employees">
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
