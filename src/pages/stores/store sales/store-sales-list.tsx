import * as React from 'react';
import {
    List,
    Datagrid,
    TextField,
    DateField,
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
    <TextInput label="Reference" source="reference" />,
];

export const StoreSalesList = () => (
    <Box sx={{ p: { xs: 2, md: 3 } }}>
        <ListBreadcrumbs />
        <List actions={<ListActions />} filters={filters}>
            <Datagrid rowClick="show">
                <DateField source="created_at" label="Date & Time" showTime={true} options={{ hour12: false }} />
                <TextField source="reference" label="Reference" />
                <TextField source="store_name" label="Store" />
                <TextField source="sale_type" label="Sale Type" />
                <TextField source="customer_type" label="Customer Type" />
                <NumberField source="total_amount" label="Total Amount" options={{ style: 'currency', currency: 'KES' }} />
                <NumberField source="amount_paid" label="Amount Paid" options={{ style: 'currency', currency: 'KES' }} />
                <NumberField source="amount_due" label="Amount Due" options={{ style: 'currency', currency: 'KES' }} />
                <EditButton label="" icon={<EditOutlinedIcon fontSize="small" />} sx={{ minWidth: 0, p: 0.5 }} />
                <DeleteButton label="" icon={<DeleteOutlineIcon fontSize="small" />} sx={{ minWidth: 0, p: 0.5 }} />
            </Datagrid>
        </List>
    </Box>
);
