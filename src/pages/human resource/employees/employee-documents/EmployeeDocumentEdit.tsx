import { Edit, SimpleForm, ReferenceInput, SelectInput, TextInput, DateInput, required } from 'react-admin';
import { Card, CardContent, Typography, Box } from '@mui/material';
import { ListBreadcrumbs } from '../../../../../ListBreadcrumbs';

export const EmployeeDocumentEdit = () => (
    <Edit title="Edit Employee Document">
        <Box sx={{ p: { xs: 2, md: 3 } }}>
            <Box sx={{ mb: 3 }}>
                <Typography variant="h4" sx={{ fontWeight: 800, mb: 0.5, color: 'text.primary', letterSpacing: '-0.5px' }}>
                    Edit Employee Document
                </Typography>
                <ListBreadcrumbs />
            </Box>
            <Box display="flex" justifyContent="center">
                <Card sx={{ width: '100%', maxWidth: 800, boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.05), 0 4px 6px -4px rgb(0 0 0 / 0.05)', borderRadius: 3 }}>
                    <CardContent>
                    <SimpleForm>
                        <TextInput source="id" disabled fullWidth />
                        <ReferenceInput source="employee_id" reference="employees">
                            <SelectInput optionText="first_name" validate={required()} fullWidth />
                        </ReferenceInput>
                        <ReferenceInput source="document_type_id" reference="document-types">
                            <SelectInput optionText="name" validate={required()} fullWidth />
                        </ReferenceInput>
                        <TextInput source="document_url" label="Document URL" validate={required()} fullWidth />
                        <DateInput source="issue_date" fullWidth />
                    </SimpleForm>
                </CardContent>
            </Card>
        </Box>
        </Box>
    </Edit>
);