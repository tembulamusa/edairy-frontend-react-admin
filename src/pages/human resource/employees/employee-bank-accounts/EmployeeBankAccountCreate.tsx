import { Create, SimpleForm, ReferenceInput, SelectInput, TextInput, required } from 'react-admin';
import { Card, CardContent, Typography, Box } from '@mui/material';
import { ListBreadcrumbs } from '../../../../../ListBreadcrumbs';

export const EmployeeBankAccountCreate = () => (
    <Create title="Create Employee Bank Account">
        <Box sx={{ p: { xs: 2, md: 3 } }}>
            <Box sx={{ mb: 3 }}>
                <Typography variant="h4" sx={{ fontWeight: 800, mb: 0.5, color: 'text.primary', letterSpacing: '-0.5px' }}>
                    New Employee Bank Account
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
                        <ReferenceInput source="bank_id" reference="banks">
                            <SelectInput optionText="bank_name" label="Bank" validate={required()} fullWidth />
                        </ReferenceInput>
                        <TextInput source="account_number" label="Account Number" validate={required()} fullWidth />
                        <TextInput source="account_name" label="Account Name" validate={required()} fullWidth />
                    </SimpleForm>
                </CardContent>
            </Card>
        </Box>
        </Box>
    </Create>
);