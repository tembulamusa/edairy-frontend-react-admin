import { Show, SimpleShowLayout, TextField, DateField, NumberField, BooleanField } from 'react-admin';
import { Card, CardContent, Typography, Box } from '@mui/material';
import { ListBreadcrumbs } from '../../../../ListBreadcrumbs';

export const EmployeeLeaveApplicationShow = () => (
    <Show title="Leave Application">
        <Box sx={{ p: { xs: 2, md: 3 } }}>
            <Box sx={{ mb: 3 }}>
                <Typography variant="h4" sx={{ fontWeight: 800, mb: 0.5, color: 'text.primary', letterSpacing: '-0.5px' }}>
                    Leave Application Details
                </Typography>
                <ListBreadcrumbs />
            </Box>
            <Box display="flex" justifyContent="center">
                <Card sx={{ width: '100%', maxWidth: 800, boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.05), 0 4px 6px -4px rgb(0 0 0 / 0.05)', borderRadius: 3 }}>
                    <CardContent>
                    <SimpleShowLayout>
                        <TextField source="id" />
                        <TextField source="application_no" label="Application No" />
                        <TextField source="employee_name" label="Employee Name" />
                        <TextField source="leave_type" label="Leave Type" />
                        <NumberField source="days_applied" label="Days Applied" />
                        <NumberField source="days_approved" label="Days Approved" />
                        <DateField source="start_date" label="Start Date" />
                        <DateField source="end_date" label="End Date" />
                        <DateField source="return_date" label="Return Date" />
                        <TextField source="assignment" label="Assignment Details" />
                        <TextField source="approver_name" label="Approver Name" />
                        <TextField source="status" label="Status" />
                        <BooleanField source="approved" label="Approved" />
                        <DateField source="created_at" showTime />
                        <DateField source="updated_at" showTime />
                    </SimpleShowLayout>
                </CardContent>
            </Card>
        </Box>
        </Box>
    </Show>
);