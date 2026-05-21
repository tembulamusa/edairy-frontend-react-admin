import * as React from 'react';
import {
    List,
    Datagrid,
    TextField,
    EmailField,
    NumberField,
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
    <TextInput label="Customer No" source="CustomerNo" />,
];

export const CustomerList = () => (
    <Box sx={{ p: { xs: 2, md: 3 } }}>
        <ListBreadcrumbs />
        <List actions={<ListActions />} filters={filters}>
            <Datagrid rowClick="show">
                <TextField source="CustomerNo" label="No." />
                <TextField source="FullNames" label="Name" />
                <TextField source="Phone" label="Phone" />
                <EmailField source="EmailAddress" label="Email" />
                <TextField source="KraPin" label="KRA PIN" />
                <TextField source="Status" label="Status" />
                <NumberField source="CreditLimit" label="Limit" />
                <TextField source="PostalTown" label="Town" />
                <NumberField source="Rate" label="Rate" />
                <EditButton label="" icon={<EditOutlinedIcon fontSize="small" />} sx={{ minWidth: 0, p: 0.5 }} />
                <DeleteButton label="" icon={<DeleteOutlineIcon fontSize="small" />} sx={{ minWidth: 0, p: 0.5 }} />
            </Datagrid>
        </List>
    </Box>
);
