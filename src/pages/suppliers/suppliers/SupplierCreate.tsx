import { Create, SimpleForm, TextInput, SelectInput, NumberInput, required } from 'react-admin';
import { Card, CardContent, Typography, Box } from '@mui/material';
import { ListBreadcrumbs } from '../../../../ListBreadcrumbs';

export const SupplierCreate = () => (
    <Create title="Create Supplier">
        <Box sx={{ p: { xs: 2, md: 3 } }}>
            <Box sx={{ mb: 3 }}>
                <Typography variant="h4" sx={{ fontWeight: 800, mb: 0.5, color: 'text.primary', letterSpacing: '-0.5px' }}>
                    New Supplier
                </Typography>
                <ListBreadcrumbs />
            </Box>
            <Box display="flex" justifyContent="center">
                <Card sx={{ width: '100%', maxWidth: 800, boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.05), 0 4px 6px -4px rgb(0 0 0 / 0.05)', borderRadius: 3 }}>
                    <CardContent>
                    <SimpleForm>
                        <TextInput source="supplier_code" label="Supplier Code" validate={required()} fullWidth />
                        <SelectInput source="supplier_type" label="Supplier Type" choices={[
                            { id: 'individual', name: 'Individual' },
                            { id: 'company', name: 'Company' }
                        ]} validate={required()} fullWidth />
                        <TextInput source="full_name" label="Full Name" fullWidth />
                        <TextInput source="company_name" label="Company Name" fullWidth />
                        <TextInput source="category_name" label="Category" fullWidth />
                        <TextInput source="email_address" label="Email Address" type="email" fullWidth />
                        <TextInput source="phone_no" label="Phone Number" fullWidth />
                        <NumberInput source="current_balance" label="Current Balance" fullWidth />
                        <SelectInput source="status" label="Status" choices={[
                            { id: 'ACTIVE', name: 'ACTIVE' },
                            { id: 'INACTIVE', name: 'INACTIVE' }
                        ]} fullWidth />
                    </SimpleForm>
                </CardContent>
            </Card>
        </Box>
        </Box>
    </Create>
);