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
import { Box } from "@mui/material";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import defaultThumbnail from "../../../assets/logo.png";
import { ListBreadcrumbs } from '../../../../ListBreadcrumbs';

type StoreItemRecord = {
    thumbnail?: string;
    item_name?: string;
    inventory_name?: string;
};

const getImageUrl = (thumbnail?: string) => {
    if (!thumbnail) return defaultThumbnail;
    if (thumbnail.startsWith('http')) return thumbnail;
    return `http://192.168.1.10/${thumbnail}`;
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
    <TextInput label="SKU" source="sku" />,
];

export const StoreItemsList = () => (
    <Box sx={{ p: { xs: 2, md: 3 } }}>
        <ListBreadcrumbs />
        <List actions={<ListActions />} filters={filters}>
            <Datagrid rowClick="show">
                <TextField source="inventory_name" label="Name" />
                <FunctionField
                    label="Item"
                    render={(record: StoreItemRecord) => (
                        <Box display="flex" alignItems="center" gap={1}>
                            <img
                                src={getImageUrl(record?.thumbnail)}
                                alt={record?.item_name || record?.inventory_name || 'Item'}
                                style={{ maxWidth: 40, maxHeight: 40, objectFit: 'cover' }}
                                onError={(e) => {
                                    (e.target as HTMLImageElement).src = defaultThumbnail;
                                }}
                            />
                            <span>{record?.item_name || record?.inventory_name}</span>
                        </Box>
                    )}
                />
                <TextField source="sku" label="SKU" />
                <NumberField source="default_buying_price" label="Buying Price" />
                <NumberField source="default_selling_price" label="Selling Price" />
                <NumberField source="default_selling_price_credit" label="Credit Price" />
                <NumberField source="reorder_point" label="Reorder Point" />
                <TextField source="status" label="Status" />
                <EditButton label="" icon={<EditOutlinedIcon fontSize="small" />} sx={{ minWidth: 0, p: 0.5 }} />
                <DeleteButton label="" icon={<DeleteOutlineIcon fontSize="small" />} sx={{ minWidth: 0, p: 0.5 }} />
            </Datagrid>
        </List>
    </Box>
);
