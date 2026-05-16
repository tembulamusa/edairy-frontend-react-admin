import { List, DataTable, DateField, EditButton, DeleteButton } from "react-admin";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

export const EmployeeQualificationsList = () => (
    <List title="Employee Qualifications">
        <DataTable>
            <DataTable.Col source="employee_name" label="Name" />
            <DataTable.Col source="qualification" label="Qualification" />
            <DataTable.Col source="institution" label="Institution" />
            <DataTable.Col source="start_date" label="Start Date">
                <DateField source="start_date" />
            </DataTable.Col>
            <DataTable.Col source="end_date" label="End Date">
                <DateField source="end_date" />
            </DataTable.Col>
            <DataTable.Col source="score" label="Score" />
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
