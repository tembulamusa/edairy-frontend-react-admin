import * as React from 'react';
import {
    List,
    Datagrid,
    TextField,
    NumberField,
    FunctionField,
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

type SupplierRecord = {
    supplier_type?: string;
    company_name?: string;
    full_name?: string;
};

const ListActions = () => (
    <TopToolbar>
        <FilterButton />
        <CreateButton />
        <ExportButton />
    </TopToolbar>
);

const filters = [
    <TextInput label="Search" source="q" alwaysOn />,
    <TextInput label="Supplier Code" source="supplier_code" />,
];

export const SuppliersList = () => (
    <Box sx={{ p: { xs: 2, md: 3 } }}>
        <ListBreadcrumbs />
        <List actions={<ListActions />} filters={filters}>
            <Datagrid rowClick="show">
                <TextField source="supplier_code" label="Supplier Code" />
                <TextField source="supplier_type" label="Type" />
                <FunctionField
                    label="Name"
                    render={(record: SupplierRecord) =>
                        String(record?.supplier_type).toLowerCase() === "company"
                            ? record.company_name
                            : record.full_name
                    }
                />
                <TextField source="category_name" label="Category" />
                <TextField source="email_address" label="Email" />
                <TextField source="phone_no" label="Phone" />
                <NumberField source="current_balance" label="Balance" />
                <TextField source="status" label="Status" />
                <EditButton label="" icon={<EditOutlinedIcon fontSize="small" />} sx={{ minWidth: 0, p: 0.5 }} />
                <DeleteButton label="" icon={<DeleteOutlineIcon fontSize="small" />} sx={{ minWidth: 0, p: 0.5 }} />
            </Datagrid>
        </List>
    </Box>
);
