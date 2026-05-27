import { Create, SimpleForm, TextInput, DateInput, SelectInput, ReferenceInput, required } from 'react-admin';
import { Card, CardContent, Typography, Box } from '@mui/material';
import { ListBreadcrumbs } from '../../../../../ListBreadcrumbs';

export const EmployeeCreate = () => (
    <Create title="Create Employee">
        <Box sx={{ p: { xs: 2, md: 3 } }}>
            <Box sx={{ mb: 3 }}>
                <Typography variant="h4" sx={{ fontWeight: 800, mb: 0.5, color: 'text.primary', letterSpacing: '-0.5px' }}>
                    Create New Employee
                </Typography>
                <ListBreadcrumbs />
            </Box>
            <Box display="flex" justifyContent="center">
                <Card sx={{ width: '100%', maxWidth: 800, boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.05), 0 4px 6px -4px rgb(0 0 0 / 0.05)', borderRadius: 3 }}>
                    <CardContent>
                    <SimpleForm>
                        <TextInput source="employee_no" label="Employee No" validate={required()} fullWidth />
                        <TextInput source="first_name" label="First Name" validate={required()} fullWidth />
                        <TextInput source="middle_name" label="Middle Name" fullWidth />
                        <TextInput source="surname" label="Surname" validate={required()} fullWidth />
                        <TextInput source="id_no" label="ID No" validate={required()} fullWidth />
                        <TextInput source="email" label="Email" type="email" fullWidth />
                        <TextInput source="phone" label="Phone" fullWidth />
                        <SelectInput source="gender" label="Gender" choices={[
                            { id: 'MALE', name: 'Male' },
                            { id: 'FEMALE', name: 'Female' }
                        ]} validate={required()} fullWidth />
                        <DateInput source="date_of_birth" label="Date of Birth" fullWidth />
                        <SelectInput source="marital_status" label="Marital Status" choices={[
                            { id: 'SINGLE', name: 'Single' },
                            { id: 'MARRIED', name: 'Married' },
                            { id: 'DIVORCED', name: 'Divorced' },
                            { id: 'WIDOWED', name: 'Widowed' }
                        ]} validate={required()} fullWidth />
                        <SelectInput source="religion" label="Religion" choices={[
                            { id: 'CHRISTIAN', name: 'Christian' },
                            { id: 'MUSLIM', name: 'Muslim' },
                            { id: 'HINDU', name: 'Hindu' },
                            { id: 'OTHER', name: 'Other' }
                        ]} validate={required()} fullWidth />
                        <ReferenceInput source="department_id" reference="departments">
                            <SelectInput optionText="name" label="Department" validate={required()} fullWidth />
                        </ReferenceInput>
                        <ReferenceInput source="job_position_id" reference="job-positions">
                            <SelectInput optionText="name" label="Job Position" validate={required()} fullWidth />
                        </ReferenceInput>
                    </SimpleForm>
                </CardContent>
            </Card>
        </Box>
        </Box>
    </Create>
);