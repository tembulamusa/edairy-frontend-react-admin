import { List, DataTable, DateField, EditButton, DeleteButton } from "react-admin";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

export const EmployeeExitDetailsList = () => (
    <List title="Employee Exit Details">
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
