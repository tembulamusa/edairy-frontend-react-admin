import { Show, SimpleShowLayout, TextField, NumberField, DateField } from 'react-admin';
import { Card, CardContent, Typography, Box } from '@mui/material';
import { ListBreadcrumbs } from '../../../../ListBreadcrumbs';

export const StoreStockTakingShow = () => (
    <Show title="Store Stock Taking Details">
        <Box sx={{ p: { xs: 2, md: 3 } }}>
            <Box sx={{ mb: 3 }}>
                <Typography variant="h4" sx={{ fontWeight: 800, mb: 0.5, color: 'text.primary', letterSpacing: '-0.5px' }}>
                    Store Stock Taking Details
                </Typography>
                <ListBreadcrumbs />
            </Box>
            <Box display="flex" justifyContent="center">
                <Card sx={{ width: '100%', maxWidth: 800, boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.05), 0 4px 6px -4px rgb(0 0 0 / 0.05)', borderRadius: 3 }}>
                    <CardContent>
                        <SimpleShowLayout>
                            <TextField source="id" />
                            <TextField source="stock_take_no" label="Stock Take No" />
                            <DateField source="stock_take_date" label="Date" />
                            <TextField source="store_name" label="Store" />
                            <TextField source="item_name" label="Item" />
                            <NumberField source="system_quantity" label="System Quantity" />
                            <NumberField source="physical_quantity" label="Physical Quantity" />
                            <NumberField source="variance_quantity" label="Variance" />
                            <TextField source="remarks" label="Remarks" />
                            <DateField source="created_at" showTime />
                            <DateField source="updated_at" showTime />
                        </SimpleShowLayout>
                    </CardContent>
                </Card>
            </Box>
        </Box>
    </Show>
);