import { Show, SimpleShowLayout, TextField, NumberField, DateField } from 'react-admin';
import { Card, CardContent, Typography, Box } from '@mui/material';
import { ListBreadcrumbs } from '../../../../ListBreadcrumbs';

export const PurchaseOrderShow = () => (
    <Show title="Purchase Order">
        <Box sx={{ p: { xs: 2, md: 3 } }}>
            <Box sx={{ mb: 3 }}>
                <Typography variant="h4" sx={{ fontWeight: 800, mb: 0.5, color: 'text.primary', letterSpacing: '-0.5px' }}>
                    Purchase Order Details
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                    View purchase order information.
                </Typography>
                <Box mt={1}>
                    <ListBreadcrumbs />
                </Box>
            </Box>
            <Box display="flex" justifyContent="center">
                <Card sx={{ width: '100%', maxWidth: 850, boxShadow: '0 4px 24px 0 rgb(34 41 47 / 10%)', borderRadius: 3, border: '1px solid', borderColor: 'divider' }}>
                    <CardContent sx={{ p: { xs: 2, md: 4 } }}>
                    <SimpleShowLayout>
                        <TextField source="id" />
                        <DateField source="po_date" label="Date" />
                        <TextField source="po_number" label="Order Number" />
                        <TextField source="supplier_name" label="Supplier" />
                        <TextField source="status" label="Status" />
                        <NumberField source="total_amount" label="Total Amount" />
                    </SimpleShowLayout>
                    </CardContent>
                </Card>
            </Box>
        </Box>
    </Show>
);