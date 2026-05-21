import { Edit, SimpleForm, TextInput, NumberInput, required } from 'react-admin';
import { Card, CardContent, Typography, Box } from '@mui/material';
import { ListBreadcrumbs } from '../../../../ListBreadcrumbs';

export const SupplyRejectEdit = () => (
    <Edit title="Edit Supply Reject">
        <Box sx={{ p: { xs: 2, md: 3 } }}>
            <Box sx={{ mb: 3 }}>
                <Typography variant="h4" sx={{ fontWeight: 800, mb: 0.5, color: 'text.primary', letterSpacing: '-0.5px' }}>
                    Edit Supply Reject
                </Typography>
                <ListBreadcrumbs />
            </Box>
            <Box display="flex" justifyContent="center">
                <Card sx={{ width: '100%', maxWidth: 800, boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.05), 0 4px 6px -4px rgb(0 0 0 / 0.05)', borderRadius: 3 }}>
                    <CardContent>
                    <SimpleForm>
                        <TextInput source="id" disabled fullWidth />
                        <NumberInput source="supply_id" label="Supply ID" validate={required()} fullWidth />
                        <TextInput source="item_name" label="Item Name" validate={required()} fullWidth />
                        <TextInput source="vendor_name" label="Vendor Name" validate={required()} fullWidth />
                        <NumberInput source="quantity" label="Quantity" validate={required()} fullWidth />
                        <TextInput source="reason" label="Reason" multiline rows={3} validate={required()} fullWidth />
                    </SimpleForm>
                </CardContent>
            </Card>
        </Box>
        </Box>
    </Edit>
);