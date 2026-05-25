import { Create, SimpleForm, TextInput, ReferenceInput, SelectInput, required } from 'react-admin';
import { Card, CardContent, Typography, Box, Stack } from '@mui/material';
import { ListBreadcrumbs } from '../../../../ListBreadcrumbs';

export const SupplierContactCreate = () => (
    <Create title="Create Supplier Contact">
        <Box sx={{ p: { xs: 2, md: 3 } }}>
            <Box sx={{ mb: 3 }}>
                <Typography variant="h4" sx={{ fontWeight: 800, mb: 0.5, color: 'text.primary', letterSpacing: '-0.5px' }}>
                    New Supplier Contact
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                    Fill in the details below to add a new contact person for a supplier.
                </Typography>
                <Box mt={1}>
                    <ListBreadcrumbs />
                </Box>
            </Box>
            <Box display="flex" justifyContent="center">
                <Card sx={{ width: '100%', maxWidth: 850, boxShadow: '0 4px 24px 0 rgb(34 41 47 / 10%)', borderRadius: 3, border: '1px solid', borderColor: 'divider' }}>
                    <CardContent sx={{ p: { xs: 2, md: 4 } }}>
                    <SimpleForm>
                        <ReferenceInput source="supplier_id" reference="suppliers">
                            <SelectInput label="Supplier" optionText={(choice) => choice?.company_name || choice?.full_name || `Supplier #${choice?.id}`} validate={required()} fullWidth variant="outlined" />
                        </ReferenceInput>
                        <Stack direction={{ xs: 'column', md: 'row' }} spacing={3} width="100%">
                            <TextInput source="contact_type" label="Contact Type" validate={required()} fullWidth variant="outlined" />
                            <TextInput source="full_name" label="Full Name" validate={required()} fullWidth variant="outlined" />
                        </Stack>
                        <Stack direction={{ xs: 'column', md: 'row' }} spacing={3} width="100%">
                            <TextInput source="designation" label="Designation" fullWidth variant="outlined" />
                            <TextInput source="email_address" label="Email Address" type="email" fullWidth variant="outlined" />
                        </Stack>
                        <Stack direction={{ xs: 'column', md: 'row' }} spacing={3} width="100%">
                            <TextInput source="phone_no" label="Phone Number" validate={required()} fullWidth variant="outlined" />
                            <TextInput source="alternative_phone_no" label="Alternative Phone Number" fullWidth variant="outlined" />
                        </Stack>
                        <Box width={{ xs: '100%', md: 'calc(50% - 12px)' }}>
                            <SelectInput source="is_default" label="Is Default?" choices={[
                                { id: 'yes', name: 'Yes' },
                                { id: 'no', name: 'No' }
                            ]} fullWidth variant="outlined" />
                        </Box>
                        <TextInput source="notes" label="Notes" multiline rows={3} fullWidth variant="outlined" />
                    </SimpleForm>
                </CardContent>
            </Card>
        </Box>
        </Box>
    </Create>
);