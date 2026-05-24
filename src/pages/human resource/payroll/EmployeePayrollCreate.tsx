import { Create, SimpleForm, TextInput, NumberInput, DateInput, required } from 'react-admin';
import { Typography, Box } from '@mui/material';
import { ListBreadcrumbs } from '../../../../ListBreadcrumbs';

export const EmployeePayrollCreate = () => (
    <Create title="Create Employee Payroll">
        <Box sx={{ p: { xs: 2, md: 3 } }}>
            <Box sx={{ mb: 3 }}>
                <Typography variant="h4" sx={{ fontWeight: 800, mb: 0.5, color: 'text.primary', letterSpacing: '-0.5px' }}>
                    New Employee Payroll
                </Typography>
                <ListBreadcrumbs />
            </Box>
            <Box display="flex" justifyContent="center">
                <Box sx={{ width: '100%', maxWidth: 600 }}>
                    <SimpleForm 
                        sx={{ 
                            borderRadius: 3, 
                            boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.05), 0 4px 6px -4px rgb(0 0 0 / 0.05)',
                            '& .MuiCardContent-root': { p: { xs: 3, md: 4 } }
                        }}
                    >
                        <Typography variant="h6" sx={{ fontWeight: 700, mb: 1, color: 'text.secondary', width: '100%' }}>
                            Period Information
                        </Typography>
                        <TextInput source="payroll_month" label="Payroll Month" validate={required()} fullWidth />
                        <TextInput source="payroll_year" label="Payroll Year" validate={required()} fullWidth />
                        <TextInput source="period" label="Period" fullWidth />
                        <DateInput source="date_opened" label="Date Opened" fullWidth />

                        <Typography variant="h6" sx={{ fontWeight: 700, mt: 2, mb: 1, color: 'text.secondary', width: '100%' }}>
                            Totals & Pay
                        </Typography>
                        <NumberInput source="total_benefits" label="Total Benefits" fullWidth />
                        <NumberInput source="total_deductions" label="Total Deductions" fullWidth />
                        <NumberInput source="total_tax" label="Total Tax" fullWidth />
                        <NumberInput source="total_relief" label="Total Relief" fullWidth />
                        <NumberInput source="gross_pay" label="Gross Pay" fullWidth />
                        <NumberInput source="net_pay" label="Net Pay" fullWidth />

                        <Typography variant="h6" sx={{ fontWeight: 700, mt: 2, mb: 1, color: 'text.secondary', width: '100%' }}>
                            Status Information
                        </Typography>
                        <TextInput source="complete" label="Complete" fullWidth />
                        <TextInput source="confirmed" label="Confirmed" fullWidth />
                        <TextInput source="approved" label="Approved" fullWidth />
                        <DateInput source="paid_at" label="Paid At" fullWidth />
                    </SimpleForm>
                </Box>
        </Box>
        </Box>
    </Create>
);