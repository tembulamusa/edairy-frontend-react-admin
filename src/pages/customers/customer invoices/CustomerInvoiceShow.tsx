import { Show, SimpleShowLayout, TextField, NumberField, DateField } from 'react-admin';
import { Card, CardContent, Typography, Box } from '@mui/material';
import { ListBreadcrumbs } from '../../../../ListBreadcrumbs';

export const CustomerInvoiceShow = () => (
    <Show title="Customer Invoice">
        <Box sx={{ p: { xs: 2, md: 3 } }}>
            <Box sx={{ mb: 3 }}>
                <Typography variant="h4" sx={{ fontWeight: 800, mb: 0.5, color: 'text.primary', letterSpacing: '-0.5px' }}>
                    Customer Invoice Details
                </Typography>
                <ListBreadcrumbs />
            </Box>
            <Box display="flex" justifyContent="center">
                <Card sx={{ width: '100%', maxWidth: 800, boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.05), 0 4px 6px -4px rgb(0 0 0 / 0.05)', borderRadius: 3 }}>
                    <CardContent>
                        <SimpleShowLayout>
                            <TextField source="id" />
                            <TextField source="invoice_no" label="Invoice No" />
                            <TextField source="customer_name" label="Customer Name" />
                            <DateField source="invoice_date" label="Invoice Date" />
                            <DateField source="due_date" label="Due Date" />
                            <NumberField source="gross_amount" label="Gross Amount" />
                            <NumberField source="tax_amount" label="Tax Amount" />
                            <NumberField source="total_amount" label="Total Amount" />
                            <NumberField source="balance" label="Balance" />
                            <TextField source="status" label="Status" />
                            <DateField source="created_at" showTime />
                            <DateField source="updated_at" showTime />
                        </SimpleShowLayout>
                    </CardContent>
            </Card>
        </Box>
        </Box>
    </Show>
);