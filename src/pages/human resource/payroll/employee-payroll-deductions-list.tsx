import * as React from 'react';
import {
    List,
    Datagrid,
    TextField,
    NumberField,
    ReferenceField,
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
import { ListBreadcrumbs } from '../../../../ListBreadcrumbs';

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

export const EmployeePayrollDeductionsList = () => (
    <Box sx={{ p: { xs: 2, md: 3 } }}>
        <ListBreadcrumbs />
        <List actions={<ListActions />} filters={filters}>
            <Datagrid rowClick="show">
                <ReferenceField source="employee_id" reference="employees">
                    <TextField source="first_name" label="Employee First Name" />
                </ReferenceField>
                <TextField source="deduction_name" label="Deduction Name" />
                <TextField source="month" label="Month" />
                <TextField source="year" label="Year" />
                <NumberField source="amount" label="Amount" />
                <DateField source="created_at" label="Created At" showTime />
                <EditButton label="" icon={<EditOutlinedIcon fontSize="small" />} sx={{ minWidth: 0, p: 0.5 }} />
                <DeleteButton label="" icon={<DeleteOutlineIcon fontSize="small" />} sx={{ minWidth: 0, p: 0.5 }} />
            </Datagrid>
        </List>
    </Box>
);
