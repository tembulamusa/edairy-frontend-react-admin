import { Edit, SimpleForm, TextInput, NumberInput, required } from 'react-admin';
import { Card, CardContent, Typography, Box } from '@mui/material';
import { ListBreadcrumbs } from '../../../../ListBreadcrumbs';

export const MemberPayrollSummaryEdit = () => (
    <Edit title="Edit Member Payroll Summary">
        <Box sx={{ p: { xs: 2, md: 3 } }}>
            <Box sx={{ mb: 3 }}>
                <Typography variant="h4" sx={{ fontWeight: 800, mb: 0.5, color: 'text.primary', letterSpacing: '-0.5px' }}>
                    Edit Member Payroll Summary
                </Typography>
                <ListBreadcrumbs />
            </Box>
            <Box display="flex" justifyContent="center">
                <Card sx={{ width: '100%', maxWidth: 800, boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.05), 0 4px 6px -4px rgb(0 0 0 / 0.05)', borderRadius: 3 }}>
                    <CardContent>
                        <SimpleForm>
                            <TextInput source="id" disabled fullWidth />
                            <TextInput source="payroll_period" label="Payroll Period" validate={required()} fullWidth />
                            <NumberInput source="total_gross_pay" label="Total Gross Pay" fullWidth />
                            <NumberInput source="total_deductions" label="Total Deductions" fullWidth />
                            <NumberInput source="total_net_pay" label="Total Net Pay" fullWidth />
                            <TextInput source="status" label="Status" fullWidth />
                        </SimpleForm>
                    </CardContent>
                </Card>
            </Box>
        </Box>
    </Edit>
);