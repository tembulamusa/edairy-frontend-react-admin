import { Create, SimpleForm, ReferenceInput, SelectInput, DateInput, TextInput, NumberInput, required } from 'react-admin';
import { Card, CardContent, Typography, Box } from '@mui/material';
import { ListBreadcrumbs } from '../../../../ListBreadcrumbs';

const parseDate = (val: string) => val ? new Date(val).toISOString().split('.')[0] + 'Z' : null;
const formatDate = (val: string) => val ? val.split('T')[0] : '';

export const EmployeeLeaveApplicationCreate = () => (
    <Create title="Create Leave Application">
        <Box sx={{ p: { xs: 2, md: 3 } }}>
            <Box sx={{ mb: 3 }}>
                <Typography variant="h4" sx={{ fontWeight: 800, mb: 0.5, color: 'text.primary', letterSpacing: '-0.5px' }}>
                    New Leave Application
                </Typography>
                <ListBreadcrumbs />
            </Box>
            <Box display="flex" justifyContent="center">
                <Card sx={{ width: '100%', maxWidth: 800, boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.05), 0 4px 6px -4px rgb(0 0 0 / 0.05)', borderRadius: 3 }}>
                    <CardContent>
                    <SimpleForm>
                        <TextInput source="application_no" label="Application No" fullWidth />
                        <ReferenceInput source="employee_id" reference="employees">
                            <SelectInput optionText="first_name" label="Employee" validate={required()} fullWidth />
                        </ReferenceInput>
                        <ReferenceInput source="leave_type_id" reference="employee-leave-types">
                            <SelectInput optionText="code" label="Leave Type" validate={required()} fullWidth />
                        </ReferenceInput>
                        <NumberInput source="days_applied" label="Days Applied" validate={required()} fullWidth />
                        <DateInput 
                            source="start_date" 
                            label="Start Date" 
                            parse={parseDate} 
                            format={formatDate} 
                            validate={required()} 
                            fullWidth 
                        />
                        <DateInput 
                            source="end_date" 
                            label="End Date" 
                            parse={parseDate} 
                            format={formatDate} 
                            validate={required()} 
                            fullWidth 
                        />
                        <DateInput 
                            source="return_date" 
                            label="Return Date" 
                            parse={parseDate} 
                            format={formatDate} 
                            validate={required()} 
                            fullWidth 
                        />
                        <SelectInput source="status" label="Status" choices={[
                            { id: 'PENDING', name: 'Pending' },
                            { id: 'APPROVED', name: 'Approved' },
                            { id: 'REJECTED', name: 'Rejected' },
                        ]} defaultValue="PENDING" fullWidth />
                    </SimpleForm>
                </CardContent>
            </Card>
        </Box>
        </Box>
    </Create>
);