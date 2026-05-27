import { Create, SimpleForm, ReferenceInput, SelectInput, DateInput, NumberInput, required } from 'react-admin';
import { Card, CardContent, Typography, Box } from '@mui/material';
import { ListBreadcrumbs } from '../../../../ListBreadcrumbs';

export const EmployeeSalaryCreate = () => (
    <Create title="Create Employee Salary">
        <Box sx={{ p: { xs: 2, md: 3 } }}>
            <Box sx={{ mb: 3 }}>
                <Typography variant="h4" sx={{ fontWeight: 800, mb: 0.5, color: 'text.primary', letterSpacing: '-0.5px' }}>
                    New Employee Salary
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
                        <NumberInput source="basic_salary" validate={required()} fullWidth />
                        <DateInput source="effective_date" validate={required()} fullWidth />
                    </SimpleForm>
                </CardContent>
            </Card>
        </Box>
        </Box>
    </Create>
);