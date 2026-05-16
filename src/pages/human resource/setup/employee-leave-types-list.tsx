import { List, DataTable, EditButton, DeleteButton } from "react-admin";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

export const EmployeeLeaveTypesList = () => (
    <List title="Employee Leave Types">
        <DataTable>
            <DataTable.Col source="code" label="Code" />
            <DataTable.Col source="description" label="Description" />
            <DataTable.Col source="days" label="Days" />
            <DataTable.Col source="gender" label="Gender" />
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
