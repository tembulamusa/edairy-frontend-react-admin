import { Edit, SimpleForm, ReferenceInput, SelectInput, NumberInput, TextInput, required } from 'react-admin';
import { Typography, Box } from '@mui/material';
import { ListBreadcrumbs } from '../../../../ListBreadcrumbs';

export const EmployeePayrollReliefEdit = () => (
    <Edit title="Edit Payroll Relief">
        <Box sx={{ p: { xs: 2, md: 3 } }}>
            <Box sx={{ mb: 3 }}>
                <Typography variant="h4" sx={{ fontWeight: 800, mb: 0.5, color: 'text.primary', letterSpacing: '-0.5px' }}>
                    Edit Payroll Relief
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
                        <TextInput source="id" disabled fullWidth />

                        <Typography variant="h6" sx={{ fontWeight: 700, mt: 2, mb: 1, color: 'text.secondary', width: '100%' }}>
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
                            Relief Details
                        </Typography>
                        <NumberInput source="relief_id" label="Relief ID" validate={required()} fullWidth />
                        <TextInput source="relief_name" label="Relief Name" fullWidth />
                        <TextInput source="amount" label="Amount" validate={required()} fullWidth />
                    </SimpleForm>
                </Box>
        </Box>
        </Box>
    </Edit>
);