import { Edit, SimpleForm, TextInput, NumberInput, DateInput, BooleanInput, required } from 'react-admin';
import { Card, CardContent, Typography, Box } from '@mui/material';
import { ListBreadcrumbs } from '../../../../ListBreadcrumbs';

export const CoolerMilkCollectionEdit = () => (
    <Edit title="Edit Cooler Milk Collection">
        <Box sx={{ p: { xs: 2, md: 3 } }}>
            <Box sx={{ mb: 3 }}>
                <Typography variant="h4" sx={{ fontWeight: 800, mb: 0.5, color: 'text.primary', letterSpacing: '-0.5px' }}>
                    Edit Cooler Milk Collection
                </Typography>
                <ListBreadcrumbs />
            </Box>
            <Box display="flex" justifyContent="center">
                <Card sx={{ width: '100%', maxWidth: 800, boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.05), 0 4px 6px -4px rgb(0 0 0 / 0.05)', borderRadius: 3 }}>
                    <CardContent>
                        <SimpleForm>
                            <TextInput source="id" disabled fullWidth />
                            <DateInput source="transaction_date" label="Transaction Date" validate={required()} fullWidth />
                            <NumberInput source="quantity" label="Quantity" validate={required()} fullWidth />
                            <TextInput source="vehicle_reg_no" label="Vehicle Reg No" fullWidth />
                            <TextInput source="milk_delivery_shift" label="Milk Delivery Shift" fullWidth />
                            <BooleanInput source="confirmed" label="Confirmed" />
                            <TextInput source="transporter_no" label="Transporter No" fullWidth />
                            <TextInput source="route_name" label="Route Name" fullWidth />
                        </SimpleForm>
                    </CardContent>
                </Card>
            </Box>
        </Box>
    </Edit>
);