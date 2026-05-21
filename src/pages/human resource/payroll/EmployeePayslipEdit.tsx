import { Edit, SimpleForm, ReferenceInput, SelectInput, TextInput, NumberInput, required } from 'react-admin';
import { Card, CardContent, Typography, Box } from '@mui/material';
import { ListBreadcrumbs } from '../../../../ListBreadcrumbs';

export const EmployeePayslipEdit = () => (
    <Edit title="Edit Employee Payslip">
        <Box sx={{ p: { xs: 2, md: 3 } }}>
            <Box sx={{ mb: 3 }}>
                <Typography variant="h4" sx={{ fontWeight: 800, mb: 0.5, color: 'text.primary', letterSpacing: '-0.5px' }}>
                    Edit Employee Payslip
                </Typography>
                <ListBreadcrumbs />
            </Box>
            <Box display="flex" justifyContent="center">
                <Card sx={{ width: '100%', maxWidth: 800, boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.05), 0 4px 6px -4px rgb(0 0 0 / 0.05)', borderRadius: 3 }}>
                    <CardContent>
                    <SimpleForm>
                        <TextInput source="id" disabled fullWidth />
                        <ReferenceInput source="employee_id" reference="employees">
                            <SelectInput optionText="first_name" validate={required()} fullWidth />
                        </ReferenceInput>
                        <NumberInput source="payroll_id" label="Payroll ID" validate={required()} fullWidth />
                        <TextInput source="payroll_month" label="Payroll Month" validate={required()} fullWidth />
                        <TextInput source="payroll_year" label="Payroll Year" validate={required()} fullWidth />
                        <NumberInput source="basic_salary" fullWidth />
                        <NumberInput source="total_benefits" fullWidth />
                        <NumberInput source="gross_pay" fullWidth />
                        <NumberInput source="total_tax" fullWidth />
                        <NumberInput source="total_relief" fullWidth />
                        <NumberInput source="total_deductions" fullWidth />
                        <NumberInput source="net_pay" validate={required()} fullWidth />
                    </SimpleForm>
                </CardContent>
            </Card>
        </Box>
        </Box>
    </Edit>
);