import { Edit, SimpleForm, TextInput, NumberInput, DateInput, required } from 'react-admin';
import { Card, CardContent, Typography, Box } from '@mui/material';
import { ListBreadcrumbs } from '../../../../ListBreadcrumbs';

export const CanMovementEdit = () => (
    <Edit title="Edit Can Movement">
        <Box sx={{ p: { xs: 2, md: 3 } }}>
            <Box sx={{ mb: 3 }}>
                <Typography variant="h4" sx={{ fontWeight: 800, mb: 0.5, color: 'text.primary', letterSpacing: '-0.5px' }}>
                    Edit Can Movement
                </Typography>
                <ListBreadcrumbs />
            </Box>
            <Box display="flex" justifyContent="center">
                <Card sx={{ width: '100%', maxWidth: 800, boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.05), 0 4px 6px -4px rgb(0 0 0 / 0.05)', borderRadius: 3 }}>
                    <CardContent>
                        <SimpleForm>
                            <TextInput source="id" disabled fullWidth />
                            <DateInput source="movement_date" label="Movement Date" validate={required()} fullWidth />
                            <TextInput source="can_code" label="Can Code" validate={required()} fullWidth />
                            <TextInput source="movement_type" label="Type" validate={required()} fullWidth />
                            <NumberInput source="quantity" label="Quantity" validate={required()} fullWidth />
                            <TextInput source="condition_on_return" label="Condition Return" fullWidth />
                            <TextInput source="shift_name" label="Shift" fullWidth />
                            <TextInput source="transporter_no" label="Transporter No" fullWidth />
                            <TextInput source="route_name" label="Route" fullWidth />
                        </SimpleForm>
                    </CardContent>
                </Card>
            </Box>
        </Box>
    </Edit>
);