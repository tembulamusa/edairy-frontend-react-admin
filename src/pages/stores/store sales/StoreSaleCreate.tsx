import { Create, SimpleForm, TextInput, NumberInput, DateInput, required } from 'react-admin';
import { Card, CardContent, Typography, Box } from '@mui/material';
import { ListBreadcrumbs } from '../../../../ListBreadcrumbs';

export const StoreSaleCreate = () => (
    <Create title="Create Store Sale">
        <Box sx={{ p: { xs: 2, md: 3 } }}>
            <Box sx={{ mb: 3 }}>
                <Typography variant="h4" sx={{ fontWeight: 800, mb: 0.5, color: 'text.primary', letterSpacing: '-0.5px' }}>
                    New Store Sale
                </Typography>
                <ListBreadcrumbs />
            </Box>
            <Box display="flex" justifyContent="center">
                <Card sx={{ width: '100%', maxWidth: 800, boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.05), 0 4px 6px -4px rgb(0 0 0 / 0.05)', borderRadius: 3 }}>
                    <CardContent>
                        <SimpleForm>
                            <TextInput source="reference" label="Reference" validate={required()} fullWidth />
                            <TextInput source="store_name" label="Store" validate={required()} fullWidth />
                            <TextInput source="sale_type" label="Sale Type" validate={required()} fullWidth />
                            <TextInput source="customer_type" label="Customer Type" fullWidth />
                            <NumberInput source="total_amount" label="Total Amount" validate={required()} fullWidth />
                            <NumberInput source="amount_paid" label="Amount Paid" validate={required()} fullWidth />
                            <NumberInput source="amount_due" label="Amount Due" fullWidth />
                        </SimpleForm>
                    </CardContent>
                </Card>
            </Box>
        </Box>
    </Create>
);