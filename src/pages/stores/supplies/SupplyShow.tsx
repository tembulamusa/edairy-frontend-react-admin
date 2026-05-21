import { Show, SimpleShowLayout, TextField, NumberField, DateField, BooleanField } from 'react-admin';
import { Card, CardContent, Typography, Box } from '@mui/material';
import { ListBreadcrumbs } from '../../../../ListBreadcrumbs';

export const SupplyShow = () => (
    <Show title="Supply Details">
        <Box sx={{ p: { xs: 2, md: 3 } }}>
            <Box sx={{ mb: 3 }}>
                <Typography variant="h4" sx={{ fontWeight: 800, mb: 0.5, color: 'text.primary', letterSpacing: '-0.5px' }}>
                    Supply Details
                </Typography>
                <ListBreadcrumbs />
            </Box>
            <Box display="flex" justifyContent="center">
                <Card sx={{ width: '100%', maxWidth: 800, boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.05), 0 4px 6px -4px rgb(0 0 0 / 0.05)', borderRadius: 3 }}>
                    <CardContent>
                        <SimpleShowLayout>
                            <TextField source="id" />
                            <TextField source="reference" label="Reference" />
                            <DateField source="supplied_date" label="Supplied Date" />
                            <TextField source="vendor_name" label="Vendor Name" />
                            <TextField source="store_name" label="Store" />
                            <NumberField source="item_count" label="Items" />
                            <NumberField source="total_amount" label="Total Amount" />
                            <BooleanField source="settled" label="Settled" />
                        </SimpleShowLayout>
                    </CardContent>
                </Card>
            </Box>
        </Box>
    </Show>
);