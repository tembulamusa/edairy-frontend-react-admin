import { Create, SimpleForm, TextInput, NumberInput, SelectInput, required } from 'react-admin';
import { Card, CardContent, Typography, Box } from '@mui/material';
import { ListBreadcrumbs } from '../../../../ListBreadcrumbs';

export const EmployeeLeaveTypeCreate = () => (
    <Create title="Create Employee Leave Type">
        <Box sx={{ p: { xs: 2, md: 3 } }}>
            <Box sx={{ mb: 3 }}>
                <Typography variant="h4" sx={{ fontWeight: 800, mb: 0.5, color: 'text.primary', letterSpacing: '-0.5px' }}>
                    New Employee Leave Type
                </Typography>
                <ListBreadcrumbs />
            </Box>
            <Box display="flex" justifyContent="center">
                <Card sx={{ width: '100%', maxWidth: 800, boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.05), 0 4px 6px -4px rgb(0 0 0 / 0.05)', borderRadius: 3 }}>
                    <CardContent>
                    <SimpleForm>
                        <TextInput source="code" label="Code" validate={required()} fullWidth />
                        <TextInput source="description" multiline rows={3} fullWidth />
                        <NumberInput source="days" label="Days" validate={required()} fullWidth />
                        <SelectInput source="gender" label="Gender" choices={[
                            { id: 'ALL', name: 'All' },
                            { id: 'MALE', name: 'Male' },
                            { id: 'FEMALE', name: 'Female' },
                        ]} validate={required()} fullWidth />
                    </SimpleForm>
                </CardContent>
            </Card>
        </Box>
        </Box>
    </Create>
);