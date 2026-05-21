import { Edit, SimpleForm, TextInput, NumberInput, DateInput, BooleanInput, required } from 'react-admin';
import { Card, CardContent, Typography, Box } from '@mui/material';
import { ListBreadcrumbs } from '../../../../ListBreadcrumbs';

export const MilkDeliveryEdit = () => (
    <Edit title="Edit Milk Delivery">
        <Box sx={{ p: { xs: 2, md: 3 } }}>
            <Box sx={{ mb: 3 }}>
                <Typography variant="h4" sx={{ fontWeight: 800, mb: 0.5, color: 'text.primary', letterSpacing: '-0.5px' }}>
                    Edit Milk Delivery
                </Typography>
                <ListBreadcrumbs />
            </Box>
            <Box display="flex" justifyContent="center">
                <Card sx={{ width: '100%', maxWidth: 800, boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.05), 0 4px 6px -4px rgb(0 0 0 / 0.05)', borderRadius: 3 }}>
                    <CardContent>
                        <SimpleForm>
                            <TextInput source="id" disabled fullWidth />
                            <DateInput source="transaction_date" label="Date" validate={required()} fullWidth />
                            <NumberInput source="quantity_accepted" label="Quantity" validate={required()} fullWidth />
                            <NumberInput source="amount" label="Amount" fullWidth />
                            <NumberInput source="amount_paid" label="Paid" fullWidth />
                            <TextInput source="delivery_note_number" label="Delivery Note Number" fullWidth />
                            <TextInput source="customer_name" label="Customer" validate={required()} fullWidth />
                            <BooleanInput source="invoiced" label="Invoiced" />
                            <TextInput source="route_name" label="Route" fullWidth />
                            <BooleanInput source="confirmed" label="Confirmed" />
                            <TextInput source="transporter_name" label="Transporter" fullWidth />
                        </SimpleForm>
                    </CardContent>
                </Card>
            </Box>
        </Box>
    </Edit>
);