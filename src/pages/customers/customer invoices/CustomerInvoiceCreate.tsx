import { Create, SimpleForm, TextInput, NumberInput, DateInput, required } from 'react-admin';
import { Card, CardContent, Typography, Box } from '@mui/material';
import { ListBreadcrumbs } from '../../../../ListBreadcrumbs';

export const CustomerInvoiceCreate = () => (
    <Create title="Create Customer Invoice">
        <Box sx={{ p: { xs: 2, md: 3 } }}>
            <Box sx={{ mb: 3 }}>
                <Typography variant="h4" sx={{ fontWeight: 800, mb: 0.5, color: 'text.primary', letterSpacing: '-0.5px' }}>
                    New Customer Invoice
                </Typography>
                <ListBreadcrumbs />
            </Box>
            <Box display="flex" justifyContent="center">
                <Card sx={{ width: '100%', maxWidth: 800, boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.05), 0 4px 6px -4px rgb(0 0 0 / 0.05)', borderRadius: 3 }}>
                    <CardContent>
                        <SimpleForm>
                            <TextInput source="invoice_no" label="Invoice No" validate={required()} fullWidth />
                            <TextInput source="customer_name" label="Customer Name" validate={required()} fullWidth />
                            <DateInput source="invoice_date" label="Invoice Date" validate={required()} fullWidth />
                            <DateInput source="due_date" label="Due Date" validate={required()} fullWidth />
                            <NumberInput source="gross_amount" label="Gross Amount" validate={required()} fullWidth />
                            <NumberInput source="tax_amount" label="Tax Amount" validate={required()} fullWidth />
                            <NumberInput source="total_amount" label="Total Amount" validate={required()} fullWidth />
                            <NumberInput source="balance" label="Balance" validate={required()} fullWidth />
                            <TextInput source="status" label="Status" validate={required()} fullWidth />
                        </SimpleForm>
                    </CardContent>
            </Card>
        </Box>
        </Box>
    </Create>
);