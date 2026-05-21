import { Edit, SimpleForm, TextInput, ReferenceInput, SelectInput, DateInput, required } from 'react-admin';
import { Card, CardContent, Typography, Box } from '@mui/material';
import { ListBreadcrumbs } from '../../../../ListBreadcrumbs';

export const SupplierDocumentEdit = () => (
    <Edit title="Edit Supplier Document">
        <Box sx={{ p: { xs: 2, md: 3 } }}>
            <Box sx={{ mb: 3 }}>
                <Typography variant="h4" sx={{ fontWeight: 800, mb: 0.5, color: 'text.primary', letterSpacing: '-0.5px' }}>
                    Edit Supplier Document
                </Typography>
                <ListBreadcrumbs />
            </Box>
            <Box display="flex" justifyContent="center">
                <Card sx={{ width: '100%', maxWidth: 800, boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.05), 0 4px 6px -4px rgb(0 0 0 / 0.05)', borderRadius: 3 }}>
                    <CardContent>
                    <SimpleForm>
                        <TextInput source="id" disabled fullWidth />
                        <ReferenceInput source="supplier_id" reference="suppliers">
                            <SelectInput optionText="supplier_code" validate={required()} fullWidth />
                        </ReferenceInput>
                        <TextInput source="document_type" label="Document Type" validate={required()} fullWidth />
                        <TextInput source="document_number" label="Document Number" validate={required()} fullWidth />
                        <TextInput source="file_name" label="File Name" validate={required()} fullWidth />
                        <TextInput source="file_path" label="File Path" fullWidth />
                        <DateInput source="issue_date" label="Issue Date" fullWidth />
                        <DateInput source="expiry_date" label="Expiry Date" fullWidth />
                        <TextInput source="verified" label="Verified" fullWidth />
                        <TextInput source="notes" label="Notes" multiline rows={3} fullWidth />
                    </SimpleForm>
                </CardContent>
            </Card>
        </Box>
        </Box>
    </Edit>
);