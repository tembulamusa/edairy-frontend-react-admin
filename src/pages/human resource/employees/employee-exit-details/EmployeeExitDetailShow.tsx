import { Show, SimpleShowLayout, TextField, DateField } from 'react-admin';
import { Card, CardContent, Typography, Box } from '@mui/material';
import { ListBreadcrumbs } from '../../../../../ListBreadcrumbs';

export const EmployeeExitDetailShow = () => (
    <Show title="Employee Exit Detail">
        <Box sx={{ p: { xs: 2, md: 3 } }}>
            <Box sx={{ mb: 3 }}>
                <Typography variant="h4" sx={{ fontWeight: 800, mb: 0.5, color: 'text.primary', letterSpacing: '-0.5px' }}>
                    Employee Exit Detail
                </Typography>
                <ListBreadcrumbs />
            </Box>
            <Box display="flex" justifyContent="center">
                <Card sx={{ width: '100%', maxWidth: 800, boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.05), 0 4px 6px -4px rgb(0 0 0 / 0.05)', borderRadius: 3 }}>
                    <CardContent>
                    <SimpleShowLayout>
                        <TextField source="id" />
                        <TextField source="employee_no" label="Employee No" />
                        <TextField source="employee_name" label="Employee Name" />
                        <TextField source="contract_type" label="Contract Type" />
                        <DateField source="contract_end_date" label="Contract End Date" />
                        <DateField source="date_of_leaving" label="Date of Leaving" />
                        <TextField source="exit_category" label="Exit Category" />
                        <TextField source="reasons" label="Reasons" />
                        <DateField source="created_at" showTime />
                        <DateField source="updated_at" showTime />
                    </SimpleShowLayout>
                </CardContent>
            </Card>
        </Box>
        </Box>
    </Show>
);