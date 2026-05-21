import * as React from 'react';
import {
    List,
    Datagrid,
    TextField,
    NumberField,
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

export const StoreStockMovementsList = () => (
    <Box sx={{ p: { xs: 2, md: 3 } }}>
        <ListBreadcrumbs />
        <List actions={<ListActions />} filters={filters}>
            <Datagrid rowClick="show">
                <DateField source="transaction_date" label="Date" />
                <TextField source="store_name" label="Store" />
                <TextField source="item_name" label="Item" />
                <TextField source="movement_type" label="Movement Type" />
                <NumberField source="qty_in" label="Qty In" />
                <NumberField source="qty_out" label="Qty Out" />
                <NumberField source="balance_after" label="Balance After" />
                <NumberField source="unit_cost" label="Unit Cost" />
                <NumberField source="selling_price" label="Selling Price" />
                <TextField source="remarks" label="Remarks" />
                <EditButton label="" icon={<EditOutlinedIcon fontSize="small" />} sx={{ minWidth: 0, p: 0.5 }} />
                <DeleteButton label="" icon={<DeleteOutlineIcon fontSize="small" />} sx={{ minWidth: 0, p: 0.5 }} />
            </Datagrid>
        </List>
    </Box>
);