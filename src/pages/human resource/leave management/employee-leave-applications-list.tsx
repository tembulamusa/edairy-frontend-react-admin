import { List, Datagrid, TextField, DateField, EditButton, DeleteButton, TextInput, required, TopToolbar, FilterButton, ExportButton } from "react-admin";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { Box } from '@mui/material';
import { ListBreadcrumbs } from '../../../../ListBreadcrumbs';
import { CreateButton } from "../../../components/forms/FormUtils";

const ListActions = () => (
    <TopToolbar>
        <FilterButton />
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
        <ExportButton />
    </TopToolbar>
);

const filters = [
    <TextInput label="Search" source="q" alwaysOn />,
    <TextInput label="Application No" source="application_no" />,
];

export const EmployeeLeaveApplicationsList = () => (
    <Box sx={{ p: { xs: 2, md: 3 } }}>
        <ListBreadcrumbs />
        <List
            title="Employee Leave Applications"
            actions={<ListActions />}
            filters={filters}
        >
            <Datagrid rowClick="show">
            <TextField source="application_no" label="Application No" />
            <TextField source="employee_name" label="Employee Name" />
            <TextField source="leave_type" label="Leave Type" />
            <TextField source="days_applied" label="Days Applied" />
            <TextField source="days_approved" label="Days Approved" />
            <DateField source="start_date" label="Start Date" />
            <DateField source="end_date" label="End Date" />
            <DateField source="return_date" label="Return Date" />
            <TextField source="status" label="Status" />
            <EditButton label="" icon={<EditOutlinedIcon fontSize="small" />} sx={{ minWidth: 0, p: 0.5 }} />
            <DeleteButton label="" icon={<DeleteOutlineIcon fontSize="small" />} sx={{ minWidth: 0, p: 0.5 }} />
        </Datagrid>
    </List>
    </Box>
);
