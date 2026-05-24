import { Edit, SimpleForm, ReferenceInput, SelectInput, NumberInput, TextInput, required } from 'react-admin';
import { Card, CardContent, Typography, Box } from '@mui/material';
import { ListBreadcrumbs } from '../../../../ListBreadcrumbs';

export const EmployeePayrollBenefitEdit = () => (
    <Edit title="Edit Payroll Benefit">
        <Box sx={{ p: { xs: 2, md: 3 } }}>
            <Box sx={{ mb: 3 }}>
                <Typography variant="h4" sx={{ fontWeight: 800, mb: 0.5, color: 'text.primary', letterSpacing: '-0.5px' }}>
                    Edit Payroll Benefit
                </Typography>
                <ListBreadcrumbs />
            </Box>
            <Box display="flex" justifyContent="center">
                <Card sx={{ width: '100%', maxWidth: 800, boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.05), 0 4px 6px -4px rgb(0 0 0 / 0.05)', borderRadius: 3 }}>
                    <CardContent>
                    <SimpleForm>
                        <TextInput source="id" disabled fullWidth />
                        <ReferenceInput source="employee_id" reference="employees">
                            <SelectInput 
                                optionText={(choice) => `${choice.first_name} ${choice.surname} (${choice.employee_no})`} 
                                validate={required()} 
                                fullWidth 
                            />
                        </ReferenceInput>
                        <NumberInput source="payroll_id" label="Payroll ID" validate={required()} fullWidth />
                        <NumberInput source="benefit_id" label="Benefit ID" validate={required()} fullWidth />
                        <TextInput source="benefit_name" label="Benefit Name" fullWidth />
                        <TextInput source="month" label="Month" validate={required()} fullWidth />
                        <TextInput source="year" label="Year" validate={required()} fullWidth />
                        <NumberInput source="amount" validate={required()} fullWidth />
                    </SimpleForm>
                </CardContent>
            </Card>
        </Box>
        </Box>
    </Edit>
);