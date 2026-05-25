import { Create, SimpleForm, TextInput, ReferenceInput, SelectInput, DateInput, required } from 'react-admin';
import { Card, CardContent, Typography, Box, Stack } from '@mui/material';
import { ListBreadcrumbs } from '../../../../ListBreadcrumbs';

export const SupplierDocumentCreate = () => (
    <Create title="Create Supplier Document">
        <Box sx={{ p: { xs: 2, md: 3 } }}>
            <Box sx={{ mb: 3 }}>
                <Typography variant="h4" sx={{ fontWeight: 800, mb: 0.5, color: 'text.primary', letterSpacing: '-0.5px' }}>
                    New Supplier Document
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                    Fill in the details below to attach a document to a supplier profile.
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
                            <TextInput source="document_type" label="Document Type" validate={required()} fullWidth variant="outlined" />
                            <TextInput source="document_number" label="Document Number" validate={required()} fullWidth variant="outlined" />
                        </Stack>
                        <Stack direction={{ xs: 'column', md: 'row' }} spacing={3} width="100%">
                            <TextInput source="file_name" label="File Name" validate={required()} fullWidth variant="outlined" />
                            <TextInput source="file_path" label="File Path" fullWidth variant="outlined" />
                        </Stack>
                        <Stack direction={{ xs: 'column', md: 'row' }} spacing={3} width="100%">
                            <DateInput source="issue_date" label="Issue Date" fullWidth variant="outlined" />
                            <DateInput source="expiry_date" label="Expiry Date" fullWidth variant="outlined" />
                        </Stack>
                        <Box width={{ xs: '100%', md: 'calc(50% - 12px)' }}>
                            <SelectInput source="verified" label="Verified" choices={[
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