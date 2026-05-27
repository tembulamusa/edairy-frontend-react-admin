import { Show, SimpleShowLayout, ReferenceField, TextField, NumberField, DateField } from 'react-admin';
import { Card, CardContent, Typography, Box } from '@mui/material';
import { ListBreadcrumbs } from '../../../../ListBreadcrumbs';

export const EmployeePayrollShow = () => (
    <Show title="Employee Payroll">
        <Box sx={{ p: { xs: 2, md: 3 } }}>
            <Box sx={{ mb: 3 }}>
                <Typography variant="h4" sx={{ fontWeight: 800, mb: 0.5, color: 'text.primary', letterSpacing: '-0.5px' }}>
                    Employee Payroll Details
                </Typography>
                <ListBreadcrumbs />
            </Box>
            <Box display="flex" justifyContent="center">
                <Card sx={{ width: '100%', maxWidth: 800, boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.05), 0 4px 6px -4px rgb(0 0 0 / 0.05)', borderRadius: 3 }}>
                    <CardContent>
                    <SimpleShowLayout>
                        <TextField source="id" />
                        <TextField source="payroll_month" />
                        <TextField source="payroll_year" />
                        <DateField source="date_opened" />
                        <NumberField source="total_deductions" />
                        <NumberField source="total_benefits" />
                        <NumberField source="total_tax" />
                        <NumberField source="total_relief" />
                        <NumberField source="gross_pay" />
                        <NumberField source="net_pay" />
                        <TextField source="complete" />
                        <TextField source="confirmed" />
                        <TextField source="approved" />
                        <DateField source="paid_at" />
                        <DateField source="created_at" showTime />
                        <DateField source="updated_at" showTime />
                    </SimpleShowLayout>
                </CardContent>
            </Card>
        </Box>
        </Box>
    </Show>
);