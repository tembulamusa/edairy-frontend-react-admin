import { Create, SimpleForm, ReferenceInput, SelectInput, TextInput, NumberInput, required } from 'react-admin';
import { Typography, Box } from '@mui/material';
import { ListBreadcrumbs } from '../../../../ListBreadcrumbs';

export const EmployeePayslipCreate = () => (
    <Create title="Create Employee Payslip">
        <Box sx={{ p: { xs: 2, md: 3 } }}>
            <Box sx={{ mb: 3 }}>
                <Typography variant="h4" sx={{ fontWeight: 800, mb: 0.5, color: 'text.primary', letterSpacing: '-0.5px' }}>
                    New Employee Payslip
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
                            Employee & Payroll
                        </Typography>
                        <ReferenceInput source="employee_id" reference="employees">
                            <SelectInput 
                                label="Select Employee"
                                optionText={(choice) => `${choice.first_name} ${choice.surname} (${choice.employee_no})`} 
                                validate={required()} 
                                fullWidth 
                            />
                        </ReferenceInput>
                        <NumberInput source="payroll_id" label="Payroll ID" validate={required()} fullWidth />

                        <Typography variant="h6" sx={{ fontWeight: 700, mt: 2, mb: 1, color: 'text.secondary', width: '100%' }}>
                            Period Information
                        </Typography>
                        <TextInput source="payroll_month" label="Payroll Month" validate={required()} fullWidth />
                        <TextInput source="payroll_year" label="Payroll Year" validate={required()} fullWidth />

                        <Typography variant="h6" sx={{ fontWeight: 700, mt: 2, mb: 1, color: 'text.secondary', width: '100%' }}>
                            Salary Details
                        </Typography>
                        <NumberInput source="basic_salary" label="Basic Salary" fullWidth />
                        <NumberInput source="total_benefits" label="Total Benefits" fullWidth />
                        <NumberInput source="gross_pay" label="Gross Pay" fullWidth />
                        <NumberInput source="total_tax" label="Total Tax" fullWidth />
                        <NumberInput source="total_relief" label="Total Relief" fullWidth />
                        <NumberInput source="total_deductions" label="Total Deductions" fullWidth />
                        <NumberInput source="net_pay" label="Net Pay" validate={required()} fullWidth />
                    </SimpleForm>
                </Box>
        </Box>
        </Box>
    </Create>
);