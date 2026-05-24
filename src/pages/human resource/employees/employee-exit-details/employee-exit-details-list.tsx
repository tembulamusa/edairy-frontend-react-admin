import * as React from 'react';
import {
    List,
    Datagrid,
    TextField,
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

const filters = [
    <TextInput label="Search" source="q" alwaysOn />,
];

export const EmployeeExitDetailsList = () => (
    <Box sx={{ p: { xs: 2, md: 3 } }}>
        <ListBreadcrumbs />
        <List actions={<ListActions />} filters={filters}>
            <Datagrid rowClick="show">
                <TextField source="employee_no" label="Employee No" />
                <TextField source="employee_name" label="Employee Name" />
                <TextField source="contract_type" label="Contract Type" />
                <DateField source="contract_end_date" label="Contract End Date" />
                <DateField source="date_of_leaving" label="Date of Leaving" />
                <TextField source="exit_category" label="Exit Category" />
                <TextField source="reasons" label="Reasons" />
                <EditButton label="" icon={<EditOutlinedIcon fontSize="small" />} sx={{ minWidth: 0, p: 0.5 }} />
                <DeleteButton label="" icon={<DeleteOutlineIcon fontSize="small" />} sx={{ minWidth: 0, p: 0.5 }} />
            </Datagrid>
        </List>
    </Box>
);
