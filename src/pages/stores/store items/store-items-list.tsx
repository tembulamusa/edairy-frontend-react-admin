import { DataTable, FunctionField } from 'react-admin';
import { Box } from '@mui/material';
import defaultThumbnail from '../../../assets/logo.png';
import { StoresListWrapper } from '../shared/stores-list-layout';

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

export const StoreItemsList = () => (
    <StoresListWrapper title="Store Items" subtitle="Manage sellable items, SKUs, and default pricing">
        <DataTable.Col source="inventory_name" label="Name" />
        <DataTable.Col label="Item">
            <FunctionField
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
        </DataTable.Col>
        <DataTable.Col source="sku" label="SKU" />
        <DataTable.Col source="default_buying_price" label="Buying Price" />
        <DataTable.Col source="default_selling_price" label="Selling Price" />
        <DataTable.Col source="default_selling_price_credit" label="Credit Price" />
        <DataTable.Col source="reorder_point" label="Reorder Point" />
        <DataTable.Col source="status" label="Status" />
    </StoresListWrapper>
);
