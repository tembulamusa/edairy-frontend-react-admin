import { Create, SimpleForm, ReferenceInput, SelectInput, TextInput, NumberInput, required } from 'react-admin';
import { Typography, Box, Grid } from '@mui/material';
import { ListBreadcrumbs } from '../../../../ListBreadcrumbs';

export const EmployeePayrollBenefitCreate = () => (
    <Create title="Create Payroll Benefit">
        <Box sx={{ p: { xs: 2, md: 3 } }}>
            <Box sx={{ mb: 3 }}>
                <Typography variant="h4" sx={{ fontWeight: 800, mb: 0.5, color: 'text.primary', letterSpacing: '-0.5px' }}>
                    Add Benefit to Payroll
                </Typography>
                <ListBreadcrumbs />
            </Box>
            <Box display="flex" justifyContent="center">
                <Box sx={{ width: '100%', maxWidth: 800 }}>
                    <SimpleForm 
                        sx={{ 
                            borderRadius: 3, 
                            boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.05), 0 4px 6px -4px rgb(0 0 0 / 0.05)',
                            '& .MuiCardContent-root': { p: { xs: 3, md: 4 } }
                        }}
                    >
                        <Box sx={{ width: '100%', mb: 4 }}>
                            <Typography variant="h6" sx={{ fontWeight: 700, mb: 2, color: 'text.secondary' }}>
                                Employee & Payroll
                            </Typography>
                            <Grid container spacing={2}>
                                <Grid item xs={12} md={6}>
                                    <ReferenceInput source="employee_id" reference="employees">
                                        <SelectInput 
                                            label="Select Employee"
                                            optionText={(choice) => `${choice.first_name} ${choice.surname} (${choice.employee_no})`} 
                                            validate={required()} 
                                            fullWidth 
                                        />
                                    </ReferenceInput>
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <NumberInput source="payroll_id" label="Payroll ID" validate={required()} fullWidth />
                                </Grid>
                            </Grid>
                        </Box>

                        <Box sx={{ width: '100%', mb: 4 }}>
                            <Typography variant="h6" sx={{ fontWeight: 700, mb: 2, color: 'text.secondary' }}>
                                Benefit Details
                            </Typography>
                            <Grid container spacing={2}>
                                <Grid item xs={12} md={4}>
                                    <NumberInput source="benefit_id" label="Benefit ID" validate={required()} fullWidth />
                                </Grid>
                                <Grid item xs={12} md={4}>
                                    <TextInput source="benefit_name" label="Benefit Name" fullWidth />
                                </Grid>
                                <Grid item xs={12} md={4}>
                                    <NumberInput source="amount" label="Amount" validate={required()} fullWidth />
                                </Grid>
                            </Grid>
                        </Box>

                        <Box sx={{ width: '100%' }}>
                            <Typography variant="h6" sx={{ fontWeight: 700, mb: 2, color: 'text.secondary' }}>
                                Period Information
                            </Typography>
                            <Grid container spacing={2}>
                                <Grid item xs={12} md={6}>
                                    <TextInput source="month" label="Month" validate={required()} fullWidth />
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <TextInput source="year" label="Year" validate={required()} fullWidth />
                                </Grid>
                            </Grid>
                        </Box>
                    </SimpleForm>
                </Box>
        </Box>
        </Box>
    </Create>
);