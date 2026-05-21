import { Create, SimpleForm, TextInput, ReferenceInput, SelectInput, required } from 'react-admin';
import { Card, CardContent, Typography, Box } from '@mui/material';
import { ListBreadcrumbs } from '../../../../ListBreadcrumbs';

export const SupplierContactCreate = () => (
    <Create title="Create Supplier Contact">
        <Box sx={{ p: { xs: 2, md: 3 } }}>
            <Box sx={{ mb: 3 }}>
                <Typography variant="h4" sx={{ fontWeight: 800, mb: 0.5, color: 'text.primary', letterSpacing: '-0.5px' }}>
                    New Supplier Contact
                </Typography>
                <ListBreadcrumbs />
            </Box>
            <Box display="flex" justifyContent="center">
                <Card sx={{ width: '100%', maxWidth: 800, boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.05), 0 4px 6px -4px rgb(0 0 0 / 0.05)', borderRadius: 3 }}>
                    <CardContent>
                    <SimpleForm>
                        <ReferenceInput source="supplier_id" reference="suppliers">
                            <SelectInput optionText="supplier_code" validate={required()} fullWidth />
                        </ReferenceInput>
                        <TextInput source="contact_type" label="Contact Type" validate={required()} fullWidth />
                        <TextInput source="full_name" label="Full Name" validate={required()} fullWidth />
                        <TextInput source="designation" label="Designation" fullWidth />
                        <TextInput source="phone_no" label="Phone Number" validate={required()} fullWidth />
                        <TextInput source="alternative_phone_no" label="Alternative Phone Number" fullWidth />
                        <TextInput source="email_address" label="Email Address" type="email" fullWidth />
                        <TextInput source="is_default" label="Is Default" fullWidth />
                        <TextInput source="notes" label="Notes" multiline rows={3} fullWidth />
                    </SimpleForm>
                </CardContent>
            </Card>
        </Box>
        </Box>
    </Create>
);