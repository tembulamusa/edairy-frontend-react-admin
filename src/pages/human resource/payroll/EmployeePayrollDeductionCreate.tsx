import { Create, SimpleForm, ReferenceInput, SelectInput, TextInput, NumberInput, required } from 'react-admin';
import { Card, CardContent, Typography, Box } from '@mui/material';
import { ListBreadcrumbs } from '../../../../ListBreadcrumbs';

export const EmployeePayrollDeductionCreate = () => (
    <Create title="Create Payroll Deduction">
        <Box sx={{ p: { xs: 2, md: 3 } }}>
            <Box sx={{ mb: 3 }}>
                <Typography variant="h4" sx={{ fontWeight: 800, mb: 0.5, color: 'text.primary', letterSpacing: '-0.5px' }}>
                    Add Deduction to Payroll
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
                        <NumberInput source="payroll_id" label="Payroll ID" validate={required()} fullWidth />
                        <NumberInput source="deduction_id" label="Deduction ID" validate={required()} fullWidth />
                        <TextInput source="deduction_name" label="Deduction Name" fullWidth />
                        <TextInput source="month" label="Month" validate={required()} fullWidth />
                        <TextInput source="year" label="Year" validate={required()} fullWidth />
                        <NumberInput source="amount" validate={required()} fullWidth />
                    </SimpleForm>
                </CardContent>
            </Card>
        </Box>
        </Box>
    </Create>
);