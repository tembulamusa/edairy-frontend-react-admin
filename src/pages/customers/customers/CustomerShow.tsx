import { Show, SimpleShowLayout, TextField, EmailField, NumberField, DateField } from 'react-admin';
import { Card, CardContent, Typography, Box } from '@mui/material';
import { ListBreadcrumbs } from '../../../../ListBreadcrumbs';

export const CustomerShow = () => (
    <Show title="Customer Details">
        <Box sx={{ p: { xs: 2, md: 3 } }}>
            <Box sx={{ mb: 3 }}>
                <Typography variant="h4" sx={{ fontWeight: 800, mb: 0.5, color: 'text.primary', letterSpacing: '-0.5px' }}>
                    Customer Details
                </Typography>
                <ListBreadcrumbs />
            </Box>
            <Box display="flex" justifyContent="center">
                <Card sx={{ width: '100%', maxWidth: 800, boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.05), 0 4px 6px -4px rgb(0 0 0 / 0.05)', borderRadius: 3 }}>
                    <CardContent>
                        <SimpleShowLayout>
                            <TextField source="id" />
                            <TextField source="CustomerNo" label="Customer No." />
                            <TextField source="FullNames" label="Full Name" />
                            <TextField source="Phone" label="Phone" />
                            <EmailField source="EmailAddress" label="Email Address" />
                            <TextField source="KraPin" label="KRA PIN" />
                            <TextField source="Status" label="Status" />
                            <NumberField source="CreditLimit" label="Credit Limit" />
                            <TextField source="PostalTown" label="Postal Town" />
                            <NumberField source="Rate" label="Rate" />
                            <DateField source="created_at" showTime />
                            <DateField source="updated_at" showTime />
                        </SimpleShowLayout>
                    </CardContent>
                </Card>
            </Box>
        </Box>
    </Show>
);