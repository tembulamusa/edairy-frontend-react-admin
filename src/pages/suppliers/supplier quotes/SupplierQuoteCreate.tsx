import { Create, SimpleForm, TextInput, NumberInput, ReferenceInput, SelectInput, required } from 'react-admin';
import { Typography, Box, Card, CardContent, Stack, Divider } from '@mui/material';
import { ListBreadcrumbs } from '../../../../ListBreadcrumbs';

export const SupplierQuoteCreate = () => (
    <Create title="Create Supplier Quote">
        <Box sx={{ p: { xs: 2, md: 3 } }}>
            <Box sx={{ mb: 3 }}>
                <Typography variant="h4" sx={{ fontWeight: 800, mb: 0.5, color: 'text.primary', letterSpacing: '-0.5px' }}>
                    New Supplier Quote
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                    Fill in the details below to add a new quote from a supplier.
                </Typography>
                <Box mt={1}>
                    <ListBreadcrumbs />
                </Box>
            </Box>
            <Box display="flex" justifyContent="center">
                <Card sx={{ width: '100%', maxWidth: 850, boxShadow: '0 4px 24px 0 rgb(34 41 47 / 10%)', borderRadius: 3, border: '1px solid', borderColor: 'divider' }}>
                    <CardContent sx={{ p: { xs: 2, md: 4 } }}>
                    <SimpleForm>
                        <Typography variant="h6" gutterBottom sx={{ mb: 3, fontWeight: 600 }}>Vendor Information</Typography>
                        <Stack direction={{ xs: 'column', md: 'row' }} spacing={3} width="100%">
                            <NumberInput source="vendor_id" label="Vendor ID" fullWidth variant="outlined" />
                            <TextInput source="vendor_name" label="Vendor Name" validate={required()} fullWidth variant="outlined" />
                        </Stack>

                        <Divider sx={{ my: 3 }} />
                        <Typography variant="h6" gutterBottom sx={{ mb: 3, fontWeight: 600 }}>Quote Details</Typography>
                        <Stack direction={{ xs: 'column', md: 'row' }} spacing={3} width="100%">
                            <TextInput source="rfq_no" label="RFQ No" fullWidth variant="outlined" />
                            <TextInput source="supplier_quote_ref" label="Quote Reference" fullWidth variant="outlined" />
                        </Stack>
                        <Box width={{ xs: '100%', md: 'calc(50% - 12px)' }}>
                            <ReferenceInput source="status" reference="statuses">
                                <SelectInput optionText="name" optionValue="name" label="Status" fullWidth variant="outlined" />
                            </ReferenceInput>
                        </Box>
                        <TextInput source="description" label="Description" multiline rows={3} fullWidth variant="outlined" />
                    </SimpleForm>
                </CardContent>
            </Card>
        </Box>
        </Box>
    </Create>
);