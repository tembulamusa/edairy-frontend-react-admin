import { Create, SimpleForm, ReferenceInput, SelectInput, TextInput, DateInput, required } from 'react-admin';
import { Card, CardContent, Typography, Box } from '@mui/material';
import { ListBreadcrumbs } from '../../../../../ListBreadcrumbs';

const parseDate = (val: string) => val ? new Date(val).toISOString().split('.')[0] + 'Z' : null;
const formatDate = (val: string) => val ? val.split('T')[0] : '';

export const EmployeeQualificationCreate = () => (
    <Create title="Create Employee Qualification">
        <Box sx={{ p: { xs: 2, md: 3 } }}>
            <Box sx={{ mb: 3 }}>
                <Typography variant="h4" sx={{ fontWeight: 800, mb: 0.5, color: 'text.primary', letterSpacing: '-0.5px' }}>
                    New Employee Qualification
                </Typography>
                <ListBreadcrumbs />
            </Box>
            <Box display="flex" justifyContent="center">
                <Card sx={{ width: '100%', maxWidth: 800, boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.05), 0 4px 6px -4px rgb(0 0 0 / 0.05)', borderRadius: 3 }}>
                    <CardContent>
                    <SimpleForm>
                        <ReferenceInput source="employee_id" reference="employees">
                            <SelectInput optionText="first_name" validate={required()} fullWidth />
                        </ReferenceInput>
                        <TextInput source="qualification" label="Qualification" validate={required()} fullWidth />
                        <TextInput source="institution" label="Institution" validate={required()} fullWidth />
                        <DateInput 
                            source="start_date" 
                            label="Start Date"
                            parse={parseDate} 
                            format={formatDate} 
                            fullWidth 
                        />
                        <DateInput 
                            source="end_date" 
                            label="End Date"
                            parse={parseDate} 
                            format={formatDate} 
                            fullWidth 
                        />
                        <TextInput source="score" label="Score" fullWidth />
                    </SimpleForm>
                </CardContent>
            </Card>
        </Box>
        </Box>
    </Create>
);