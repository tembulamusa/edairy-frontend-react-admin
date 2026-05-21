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
    <TextInput label="Invoice No" source="invoice_no" />,
];

export const CustomerInvoiceList = () => (
    <Box sx={{ p: { xs: 2, md: 3 } }}>
        <ListBreadcrumbs />
        <List actions={<ListActions />} filters={filters}>
            <Datagrid rowClick="show">
                <TextField source="invoice_no" label="Invoice No" />
                <TextField source="customer_name" label="Customer Name" />
                <DateField source="invoice_date" label="Invoice Date" />
                <DateField source="due_date" label="Due Date" />
                <NumberField source="gross_amount" label="Gross Amount" />
                <NumberField source="tax_amount" label="Tax Amount" />
                <NumberField source="total_amount" label="Total Amount" />
                <NumberField source="balance" label="Balance" />
                <TextField source="status" label="Status" />
                <EditButton label="" icon={<EditOutlinedIcon fontSize="small" />} sx={{ minWidth: 0, p: 0.5 }} />
                <DeleteButton label="" icon={<DeleteOutlineIcon fontSize="small" />} sx={{ minWidth: 0, p: 0.5 }} />
            </Datagrid>
        </List>
    </Box>
);
