import { Edit, SimpleForm, ReferenceInput, SelectInput, TextInput, required } from 'react-admin';
import { Card, CardContent, Typography, Box } from '@mui/material';
import { ListBreadcrumbs } from '../../../../ListBreadcrumbs';

export const EmployeeLeaveAssignmentEdit = () => (
    <Edit title="Edit Leave Assignment">
        <Box sx={{ p: { xs: 2, md: 3 } }}>
            <Box sx={{ mb: 3 }}>
                <Typography variant="h4" sx={{ fontWeight: 800, mb: 0.5, color: 'text.primary', letterSpacing: '-0.5px' }}>
                    Edit Leave Assignment
                </Typography>
                <ListBreadcrumbs />
            </Box>
            <Box display="flex" justifyContent="center">
                <Card sx={{ width: '100%', maxWidth: 800, boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.05), 0 4px 6px -4px rgb(0 0 0 / 0.05)', borderRadius: 3 }}>
                    <CardContent>
                    <SimpleForm>
                        <TextInput source="id" disabled fullWidth />
                        <ReferenceInput source="employee_id" reference="employees">
                            <SelectInput optionText="first_name" label="Employee" validate={required()} fullWidth />
                        </ReferenceInput>
                        <ReferenceInput source="leave_application_id" reference="employee-leave-applications">
                            <SelectInput optionText="application_no" label="Leave Application" validate={required()} fullWidth />
                        </ReferenceInput>
                        <ReferenceInput source="reliever_id" reference="employees">
                            <SelectInput optionText="first_name" label="Reliever" validate={required()} fullWidth />
                        </ReferenceInput>
                        <TextInput source="assignment" label="Assignment Details" multiline rows={3} validate={required()} fullWidth />
                    </SimpleForm>
                </CardContent>
            </Card>
        </Box>
        </Box>
    </Edit>
);