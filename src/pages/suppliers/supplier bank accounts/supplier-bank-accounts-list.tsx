import * as React from 'react';
import {
    List,
    Datagrid,
    TextField,
    NumberField,
    DateField,
    EditButton,
    DeleteButton,
    TextInput
} from 'react-admin';
import { Box } from '@mui/material';
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { ListBreadcrumbs } from '../../../../ListBreadcrumbs';

const filters = [
    <TextInput label="Search" source="q" alwaysOn />,
];

export const SupplierBankAccountList = () => (
    <Box sx={{ p: { xs: 2, md: 3 } }}>
        <ListBreadcrumbs />
        <List filters={filters}>
            <Datagrid rowClick="edit">
                <NumberField source="supplier_id" label="Supplier ID" />
                <TextField source="account_type" label="Account Type" />
                <TextField source="bank_name" label="Bank Name" />
                <TextField source="account_name" label="Account Name" />
                <TextField source="account_number" label="Account Number" />
                <TextField source="status" label="Status" />
                <DateField source="created_at" label="Created At" showTime />
                <EditButton label="" icon={<EditOutlinedIcon fontSize="small" />} sx={{ minWidth: 0, p: 0.5 }} />
                <DeleteButton label="" icon={<DeleteOutlineIcon fontSize="small" />} sx={{ minWidth: 0, p: 0.5 }} />
            </Datagrid>
        </List>
    </Box>
);
