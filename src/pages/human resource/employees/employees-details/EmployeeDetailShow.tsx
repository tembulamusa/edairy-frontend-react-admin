import { Show, SimpleShowLayout, ReferenceField, DateField, TextField } from 'react-admin';
import { Card, CardContent, Typography, Box } from '@mui/material';
import { ListBreadcrumbs } from '../../../../../ListBreadcrumbs';

export const EmployeeDetailShow = () => (
    <Show title="Employee Detail">
        <Box sx={{ p: { xs: 2, md: 3 } }}>
            <Box sx={{ mb: 3 }}>
                <Typography variant="h4" sx={{ fontWeight: 800, mb: 0.5, color: 'text.primary', letterSpacing: '-0.5px' }}>
                    Employee Detail
                </Typography>
                <ListBreadcrumbs />
            </Box>
            <Box display="flex" justifyContent="center">
                <Card sx={{ width: '100%', maxWidth: 800, boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.05), 0 4px 6px -4px rgb(0 0 0 / 0.05)', borderRadius: 3 }}>
                    <CardContent>
                    <SimpleShowLayout>
                        <TextField source="id" />
                        <ReferenceField source="employee_id" reference="employees">
                            <TextField source="first_name" />
                        </ReferenceField>
                        <DateField source="date_of_birth" />
                        <TextField source="national_id" label="National ID" />
                        <DateField source="created_at" showTime />
                        <DateField source="updated_at" showTime />
                    </SimpleShowLayout>
                </CardContent>
            </Card>
        </Box>
        </Box>
    </Show>
);