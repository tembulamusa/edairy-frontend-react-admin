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

export const EmployeePayslipsList = () => (
    <Box sx={{ p: { xs: 2, md: 3 } }}>
        <ListBreadcrumbs />
        <List actions={<ListActions />} filters={filters}>
            <Datagrid rowClick="show">
                <ReferenceField source="employee_id" reference="employees">
                    <TextField source="first_name" label="Employee First Name" />
                </ReferenceField>
                <TextField source="payroll_month" label="Payroll Month" />
                <TextField source="payroll_year" label="Payroll Year" />
                <NumberField source="gross_pay" label="Gross Pay" />
                <NumberField source="net_pay" label="Net Pay" />
                <DateField source="created_at" label="Created At" showTime />
                <EditButton label="" icon={<EditOutlinedIcon fontSize="small" />} sx={{ minWidth: 0, p: 0.5 }} />
                <DeleteButton label="" icon={<DeleteOutlineIcon fontSize="small" />} sx={{ minWidth: 0, p: 0.5 }} />
            </Datagrid>
        </List>
    </Box>
);
