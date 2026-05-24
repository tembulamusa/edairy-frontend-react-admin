import * as React from 'react';
import {
    List,
    Datagrid,
    TextField,
    NumberField,
    DateField,
    EditButton,
    DeleteButton,
    TextInput,
    TopToolbar,
    FilterButton,
    CreateButton,
    ExportButton
} from 'react-admin';
import { Box } from '@mui/material';
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { ListBreadcrumbs } from '../../../../ListBreadcrumbs';

const filters = [
    <TextInput label="Search" source="q" alwaysOn />,
];

const ListActions = () => (
    <TopToolbar>
        <FilterButton />
        <CreateButton />
        <ExportButton />
    </TopToolbar>
);

export const SupplyRejectsList = () => (
    <Box sx={{ p: { xs: 2, md: 3 } }}>
        <ListBreadcrumbs />
        <List filters={filters} actions={<ListActions />}>
            <Datagrid rowClick="show">
                <DateField source="created_at" label="Date" showTime />
                <NumberField source="supply_id" label="Supply ID" />
                <TextField source="item_name" label="Item Name" />
                <TextField source="vendor_name" label="Vendor Name" />
                <NumberField source="quantity" label="Quantity" />
                <TextField source="reason" label="Reason" />
                <EditButton label="" icon={<EditOutlinedIcon fontSize="small" />} sx={{ minWidth: 0, p: 0.5 }} />
                <DeleteButton label="" icon={<DeleteOutlineIcon fontSize="small" />} sx={{ minWidth: 0, p: 0.5 }} />
            </Datagrid>
        </List>
    </Box>
);
