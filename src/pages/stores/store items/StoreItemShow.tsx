import { Show, SimpleShowLayout, TextField, NumberField, DateField, FunctionField } from 'react-admin';
import { Card, CardContent, Typography, Box } from '@mui/material';
import defaultThumbnail from "../../../assets/logo.png";
import { ListBreadcrumbs } from '../../../../ListBreadcrumbs';

const getImageUrl = (thumbnail?: string) => {
    if (!thumbnail) return defaultThumbnail;
    if (thumbnail.startsWith('http')) return thumbnail;
    return `http://192.168.1.10/${thumbnail}`;
};

export const StoreItemShow = () => (
    <Show title="Store Item Details">
        <Box sx={{ p: { xs: 2, md: 3 } }}>
            <Box sx={{ mb: 3 }}>
                <Typography variant="h4" sx={{ fontWeight: 800, mb: 0.5, color: 'text.primary', letterSpacing: '-0.5px' }}>
                    Store Item Details
                </Typography>
                <ListBreadcrumbs />
            </Box>
            <Box display="flex" justifyContent="center">
                <Card sx={{ width: '100%', maxWidth: 800, boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.05), 0 4px 6px -4px rgb(0 0 0 / 0.05)', borderRadius: 3 }}>
                    <CardContent>
                        <SimpleShowLayout>
                            <TextField source="id" />
                            <FunctionField
                                label="Image"
                                render={(record: any) => (
                                    <img
                                        src={getImageUrl(record?.thumbnail)}
                                        alt={record?.item_name || 'Item'}
                                        style={{ maxWidth: 200, maxHeight: 200, objectFit: 'cover', borderRadius: 8 }}
                                        onError={(e) => { (e.target as HTMLImageElement).src = defaultThumbnail; }}
                                    />
                                )}
                            />
                            <TextField source="inventory_name" label="Inventory Name" />
                            <TextField source="item_name" label="Item Name" />
                            <TextField source="sku" label="SKU" />
                            <NumberField source="default_buying_price" label="Buying Price" />
                            <NumberField source="default_selling_price" label="Selling Price" />
                            <NumberField source="default_selling_price_credit" label="Credit Price" />
                            <NumberField source="reorder_point" label="Reorder Point" />
                            <TextField source="status" label="Status" />
                        </SimpleShowLayout>
                    </CardContent>
                </Card>
            </Box>
        </Box>
    </Show>
);