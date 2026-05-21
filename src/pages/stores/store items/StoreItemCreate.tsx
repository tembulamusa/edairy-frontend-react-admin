import { Create, SimpleForm, TextInput, NumberInput, required } from 'react-admin';
import { Card, CardContent, Typography, Box } from '@mui/material';
import { ListBreadcrumbs } from '../../../../ListBreadcrumbs';

export const StoreItemCreate = () => (
    <Create title="Create Store Item">
        <Box sx={{ p: { xs: 2, md: 3 } }}>
            <Box sx={{ mb: 3 }}>
                <Typography variant="h4" sx={{ fontWeight: 800, mb: 0.5, color: 'text.primary', letterSpacing: '-0.5px' }}>
                    New Store Item
                </Typography>
                <ListBreadcrumbs />
            </Box>
            <Box display="flex" justifyContent="center">
                <Card sx={{ width: '100%', maxWidth: 800, boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.05), 0 4px 6px -4px rgb(0 0 0 / 0.05)', borderRadius: 3 }}>
                    <CardContent>
                        <SimpleForm>
                            <TextInput source="inventory_name" label="Inventory Name" validate={required()} fullWidth />
                            <TextInput source="item_name" label="Item Name" validate={required()} fullWidth />
                            <TextInput source="sku" label="SKU" validate={required()} fullWidth />
                            <TextInput source="thumbnail" label="Thumbnail URL" fullWidth />
                            <NumberInput source="default_buying_price" label="Default Buying Price" fullWidth />
                            <NumberInput source="default_selling_price" label="Default Selling Price" fullWidth />
                            <NumberInput source="default_selling_price_credit" label="Default Credit Price" fullWidth />
                            <NumberInput source="reorder_point" label="Reorder Point" fullWidth />
                            <TextInput source="status" label="Status" fullWidth />
                        </SimpleForm>
                    </CardContent>
                </Card>
            </Box>
        </Box>
    </Create>
);