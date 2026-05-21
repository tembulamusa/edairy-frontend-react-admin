import { Show, SimpleShowLayout, ReferenceField, TextField, DateField, NumberField } from 'react-admin';
import { Card, CardContent, Typography, Box } from '@mui/material';
import { ListBreadcrumbs } from '../../../../ListBreadcrumbs';

export const EmployeePayslipShow = () => (
    <Show title="Employee Payslip">
        <Box sx={{ p: { xs: 2, md: 3 } }}>
            <Box sx={{ mb: 3 }}>
                <Typography variant="h4" sx={{ fontWeight: 800, mb: 0.5, color: 'text.primary', letterSpacing: '-0.5px' }}>
                    Employee Payslip
                </Typography>
                <ListBreadcrumbs />
            </Box>
            <Box display="flex" justifyContent="center">
                <Card sx={{ width: '100%', maxWidth: 800, boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.05), 0 4px 6px -4px rgb(0 0 0 / 0.05)', borderRadius: 3 }}>
                    <CardContent>
                    <SimpleShowLayout>
                        <TextField source="id" />
                        <ReferenceField source="employee_id" reference="employees">
                            <TextField source="first_name" />
                        </ReferenceField>
                        <ReferenceField source="payroll_id" reference="employee-payrolls">
                            <TextField source="id" />
                        </ReferenceField>
                        <TextField source="payroll_month" label="Payroll Month" />
                        <TextField source="payroll_year" label="Payroll Year" />
                        <NumberField source="basic_salary" />
                        <NumberField source="total_benefits" />
                        <NumberField source="gross_pay" />
                        <NumberField source="total_tax" />
                        <NumberField source="total_relief" />
                        <NumberField source="total_deductions" />
                        <NumberField source="net_pay" />
                        <DateField source="created_at" showTime />
                        <DateField source="updated_at" showTime />
                    </SimpleShowLayout>
                </CardContent>
            </Card>
        </Box>
        </Box>
    </Show>
);