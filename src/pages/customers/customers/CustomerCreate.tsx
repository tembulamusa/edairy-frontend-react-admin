import { Create, SimpleForm, TextInput, NumberInput, required } from 'react-admin';
import { Card, CardContent, Typography, Box } from '@mui/material';
import { ListBreadcrumbs } from '../../../../ListBreadcrumbs';

export const CustomerCreate = () => (
    <Create title="Create Customer">
        <Box sx={{ p: { xs: 2, md: 3 } }}>
            <Box sx={{ mb: 3 }}>
                <Typography variant="h4" sx={{ fontWeight: 800, mb: 0.5, color: 'text.primary', letterSpacing: '-0.5px' }}>
                    New Customer
                </Typography>
                <ListBreadcrumbs />
            </Box>
            <Box display="flex" justifyContent="center">
                <Card sx={{ width: '100%', maxWidth: 800, boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.05), 0 4px 6px -4px rgb(0 0 0 / 0.05)', borderRadius: 3 }}>
                    <CardContent>
                        <SimpleForm>
                            <TextInput source="CustomerNo" label="Customer No." validate={required()} fullWidth />
                            <TextInput source="FullNames" label="Full Name" validate={required()} fullWidth />
                            <TextInput source="Phone" label="Phone" fullWidth />
                            <TextInput source="EmailAddress" label="Email Address" type="email" fullWidth />
                            <TextInput source="KraPin" label="KRA PIN" fullWidth />
                            <TextInput source="Status" label="Status" fullWidth />
                            <NumberInput source="CreditLimit" label="Credit Limit" fullWidth />
                            <TextInput source="PostalTown" label="Postal Town" fullWidth />
                            <NumberInput source="Rate" label="Rate" fullWidth />
                        </SimpleForm>
                    </CardContent>
                </Card>
            </Box>
        </Box>
    </Create>
);