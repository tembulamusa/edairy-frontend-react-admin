import { Create, SimpleForm, ReferenceInput, SelectInput, TextInput, required } from 'react-admin';
import { Card, CardContent, Typography, Box } from '@mui/material';
import { ListBreadcrumbs } from '../../../../../ListBreadcrumbs';

export const EmployeeDependantCreate = () => (
    <Create title="Create Employee Dependant">
        <Box sx={{ p: { xs: 2, md: 3 } }}>
            <Box sx={{ mb: 3 }}>
                <Typography variant="h4" sx={{ fontWeight: 800, mb: 0.5, color: 'text.primary', letterSpacing: '-0.5px' }}>
                    New Employee Dependant
                </Typography>
                <ListBreadcrumbs />
            </Box>
            <Box display="flex" justifyContent="center">
                <Card sx={{ width: '100%', maxWidth: 800, boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.05), 0 4px 6px -4px rgb(0 0 0 / 0.05)', borderRadius: 3 }}>
                    <CardContent>
                    <SimpleForm>
                        <ReferenceInput source="employee_id" reference="employees">
                            <SelectInput optionText="first_name" validate={required()} fullWidth />
                        </ReferenceInput>
                        <TextInput source="name" validate={required()} fullWidth />
                        <TextInput source="relationship" validate={required()} fullWidth />
                    </SimpleForm>
                </CardContent>
            </Card>
        </Box>
        </Box>
    </Create>
);