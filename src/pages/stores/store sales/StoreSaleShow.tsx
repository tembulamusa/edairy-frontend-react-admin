import { Show, SimpleShowLayout, TextField, NumberField, DateField } from 'react-admin';
import { Card, CardContent, Typography, Box } from '@mui/material';
import { ListBreadcrumbs } from '../../../../ListBreadcrumbs';

export const StoreSaleShow = () => (
    <Show title="Store Sale Details">
        <Box sx={{ p: { xs: 2, md: 3 } }}>
            <Box sx={{ mb: 3 }}>
                <Typography variant="h4" sx={{ fontWeight: 800, mb: 0.5, color: 'text.primary', letterSpacing: '-0.5px' }}>
                    Store Sale Details
                </Typography>
                <ListBreadcrumbs />
            </Box>
            <Box display="flex" justifyContent="center">
                <Card sx={{ width: '100%', maxWidth: 800, boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.05), 0 4px 6px -4px rgb(0 0 0 / 0.05)', borderRadius: 3 }}>
                    <CardContent>
                        <SimpleShowLayout>
                            <TextField source="id" />
                            <DateField source="created_at" label="Date & Time" showTime={true} options={{ hour12: false }} />
                            <TextField source="reference" label="Reference" />
                            <TextField source="store_name" label="Store" />
                            <TextField source="sale_type" label="Sale Type" />
                            <TextField source="customer_type" label="Customer Type" />
                            <NumberField source="total_amount" label="Total Amount" options={{ style: 'currency', currency: 'KES' }} />
                            <NumberField source="amount_paid" label="Amount Paid" options={{ style: 'currency', currency: 'KES' }} />
                            <NumberField source="amount_due" label="Amount Due" options={{ style: 'currency', currency: 'KES' }} />
                            <DateField source="updated_at" showTime />
                        </SimpleShowLayout>
                    </CardContent>
                </Card>
            </Box>
        </Box>
    </Show>
);