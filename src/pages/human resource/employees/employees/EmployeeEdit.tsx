import { Edit, SimpleForm, TextInput, DateInput, SelectInput, required } from 'react-admin';
import { Card, CardContent, Typography, Box } from '@mui/material';
import { ListBreadcrumbs } from '../../../../../ListBreadcrumbs';

export const EmployeeEdit = () => (
    <Edit title="Edit Employee">
        <Box sx={{ p: { xs: 2, md: 3 } }}>
            <Box sx={{ mb: 3 }}>
                <Typography variant="h4" sx={{ fontWeight: 800, mb: 0.5, color: 'text.primary', letterSpacing: '-0.5px' }}>
                    Edit Employee
                </Typography>
                <ListBreadcrumbs />
            </Box>
            <Box display="flex" justifyContent="center">
                <Card sx={{ width: '100%', maxWidth: 800, boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.05), 0 4px 6px -4px rgb(0 0 0 / 0.05)', borderRadius: 3 }}>
                    <CardContent>
                    <SimpleForm>
                        <TextInput source="id" disabled fullWidth />
                        <TextInput source="first_name" validate={required()} fullWidth />
                        <TextInput source="last_name" validate={required()} fullWidth />
                        <TextInput source="email" type="email" fullWidth />
                        <TextInput source="phone_number" fullWidth />
                        <SelectInput source="gender" choices={[{ id: 'Male', name: 'Male' }, { id: 'Female', name: 'Female' }]} fullWidth />
                        <DateInput source="date_of_birth" fullWidth />
                        <DateInput source="hire_date" fullWidth />
                    </SimpleForm>
                </CardContent>
            </Card>
        </Box>
        </Box>
    </Edit>
);