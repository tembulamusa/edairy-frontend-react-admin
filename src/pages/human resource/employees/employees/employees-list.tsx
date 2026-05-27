import * as React from 'react';
import {
    List,
    Datagrid,
    TextField,
    EmailField,
    DateField,
    TopToolbar,
    FilterButton,
    CreateButton,
    ExportButton,
    EditButton,
    DeleteButton,
    TextInput
} from 'react-admin';
import { Box } from '@mui/material';
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { ListBreadcrumbs } from '../../../../../ListBreadcrumbs';

const ListActions = () => (
    <TopToolbar>
        <FilterButton />
        <CreateButton />
        <ExportButton />
    </TopToolbar>
);

const employeeFilters = [
    <TextInput label="Search" source="q" alwaysOn />,
    <TextInput label="Employee No" source="employee_no" />,
    <TextInput label="First Name" source="first_name" />,
];

export const EmployeesList = () => (
    <Box sx={{ p: { xs: 2, md: 3 } }}>
        <ListBreadcrumbs />
        <List actions={<ListActions />} filters={employeeFilters}>
            <Datagrid rowClick="show">
                <TextField source="employee_no" label="Employee No" />
                <TextField source="first_name" label="First Name" />
                <TextField source="middle_name" label="Middle Name" />
                <TextField source="surname" label="Surname" />
                <TextField source="id_no" label="ID No" />
                <TextField source="gender" label="Gender" />
                <TextField source="department_name" label="Department" />
                <TextField source="job_position_name" label="Job Position" />
                <TextField source="phone" label="Phone" />
                <EmailField source="email" label="Email" />
                <DateField source="date_of_birth" label="Date of Birth" />
                <EditButton label="" icon={<EditOutlinedIcon fontSize="small" />} sx={{ minWidth: 0, p: 0.5 }} />
                <DeleteButton label="" icon={<DeleteOutlineIcon fontSize="small" />} sx={{ minWidth: 0, p: 0.5 }} />
            </Datagrid>
        </List>
    </Box>
);