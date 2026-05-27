import { Show, SimpleShowLayout, TextField, EmailField, DateField, ReferenceField } from 'react-admin';
import { Card, CardContent, Typography, Box } from '@mui/material';
import { ListBreadcrumbs } from '../../../../ListBreadcrumbs';

export const SupplierContactShow = () => (
    <Show title="Supplier Contact">
        <Box sx={{ p: { xs: 2, md: 3 } }}>
            <Box sx={{ mb: 3 }}>
                <Typography variant="h4" sx={{ fontWeight: 800, mb: 0.5, color: 'text.primary', letterSpacing: '-0.5px' }}>
                    Supplier Contact Details
                </Typography>
                <ListBreadcrumbs />
            </Box>
            <Box display="flex" justifyContent="center">
                <Card sx={{ width: '100%', maxWidth: 800, boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.05), 0 4px 6px -4px rgb(0 0 0 / 0.05)', borderRadius: 3 }}>
                    <CardContent>
                    <SimpleShowLayout>
                        <TextField source="id" />
                        <ReferenceField source="supplier_id" reference="suppliers">
                            <TextField source="id" />
                        </ReferenceField>
                        <TextField source="supplier_name" label="Supplier Name" />
                        <TextField source="contact_type" label="Contact Type" />
                        <TextField source="full_name" label="Full Name" />
                        <TextField source="designation" label="Designation" />
                        <TextField source="phone_no" label="Phone Number" />
                        <TextField source="alternative_phone_no" label="Alternative Phone Number" />
                        <EmailField source="email_address" label="Email Address" />
                        <TextField source="is_default" label="Is Default" />
                        <TextField source="notes" label="Notes" />
                        <DateField source="created_at" showTime />
                        <DateField source="updated_at" showTime />
                    </SimpleShowLayout>
                </CardContent>
            </Card>
        </Box>
        </Box>
    </Show>
);