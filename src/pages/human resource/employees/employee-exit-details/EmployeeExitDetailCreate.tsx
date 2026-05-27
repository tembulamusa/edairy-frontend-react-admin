import { Create, SimpleForm, ReferenceInput, SelectInput, TextInput, DateInput, required } from 'react-admin';
import { Card, CardContent, Typography, Box } from '@mui/material';
import { ListBreadcrumbs } from '../../../../../ListBreadcrumbs';

const parseDate = (val: string) => val ? new Date(val).toISOString().split('.')[0] + 'Z' : null;
const formatDate = (val: string) => val ? val.split('T')[0] : '';

export const EmployeeExitDetailCreate = () => (
    <Create title="Create Employee Exit Detail">
        <Box sx={{ p: { xs: 2, md: 3 } }}>
            <Box sx={{ mb: 3 }}>
                <Typography variant="h4" sx={{ fontWeight: 800, mb: 0.5, color: 'text.primary', letterSpacing: '-0.5px' }}>
                    New Employee Exit Detail
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
                        <TextInput source="contract_type" label="Contract Type" validate={required()} fullWidth />
                        <DateInput 
                            source="contract_end_date" 
                            label="Contract End Date" 
                            parse={parseDate} 
                            format={formatDate} 
                            validate={required()}
                            fullWidth 
                        />
                        <ReferenceInput source="exit_category" reference="employee-termination-categories">
                            <SelectInput optionText="name" optionValue="name" label="Exit Category" validate={required()} fullWidth />
                        </ReferenceInput>
                        <DateInput 
                            source="date_of_leaving" 
                            label="Date of Leaving" 
                            parse={parseDate} 
                            format={formatDate} 
                            validate={required()} 
                            fullWidth 
                        />
                        <TextInput source="reasons" label="Reasons" multiline rows={3} fullWidth />
                    </SimpleForm>
                </CardContent>
            </Card>
        </Box>
        </Box>
    </Create>
);