import { List, DataTable, DateField, EditButton, DeleteButton, TextInput, required } from "react-admin";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { CreateButton } from "../../../../components/forms/FormUtils";

export const EmployeeQualificationsList = () => (
    <List
        title="Employee Qualifications"
        actions={
            <CreateButton resource="employee-qualifications" title="Employee Qualification">
                <TextInput source="employee_name" label="Name" validate={[required()]} fullWidth />
                <TextInput source="qualification" label="Qualification" validate={[required()]} fullWidth />
                <TextInput source="institution" label="Institution" validate={[required()]} fullWidth />
                <TextInput source="start_date" label="Start Date" validate={[required()]} fullWidth />
                <TextInput source="end_date" label="End Date" validate={[required()]} fullWidth />
                <TextInput source="score" label="Score" validate={[required()]} fullWidth />
            </CreateButton>
        }
    >
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
