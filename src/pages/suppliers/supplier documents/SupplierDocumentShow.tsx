import { Show, SimpleShowLayout, TextField, DateField, ReferenceField } from 'react-admin';
import { Card, CardContent, Typography, Box } from '@mui/material';
import { ListBreadcrumbs } from '../../../../ListBreadcrumbs';

export const SupplierDocumentShow = () => (
    <Show title="Supplier Document">
        <Box sx={{ p: { xs: 2, md: 3 } }}>
            <Box sx={{ mb: 3 }}>
                <Typography variant="h4" sx={{ fontWeight: 800, mb: 0.5, color: 'text.primary', letterSpacing: '-0.5px' }}>
                    Supplier Document Details
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
                        <TextField source="document_type" label="Document Type" />
                        <TextField source="document_number" label="Document Number" />
                        <TextField source="file_name" label="File Name" />
                        <TextField source="file_path" label="File Path" />
                        <DateField source="issue_date" label="Issue Date" />
                        <DateField source="expiry_date" label="Expiry Date" />
                        <TextField source="verified" label="Verified" />
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