import { Edit, SimpleForm, TextInput, SelectInput, DateTimeInput, required } from 'react-admin';
import { Card, CardContent, Typography, Box, Stack } from '@mui/material';
import { ListBreadcrumbs } from '../../../../ListBreadcrumbs';

export const SupplierCategoryEdit = () => {
    const statusChoices = [
        { id: 'active', name: 'Active' },
        { id: 'inactive', name: 'Inactive' },
    ];

    return (
        <Edit title="Edit Supplier Category">
            <Box sx={{ p: { xs: 2, md: 3 } }}>
                <Box sx={{ mb: 3 }}>
                    <Typography variant="h4" sx={{ fontWeight: 800, mb: 0.5, color: 'text.primary', letterSpacing: '-0.5px' }}>
                        Edit Supplier Category
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                        Update the details below to modify the supplier category.
                    </Typography>
                    <Box mt={1}>
                        <ListBreadcrumbs />
                    </Box>
                </Box>
                <Box display="flex" justifyContent="center">
                    <Card sx={{ width: '100%', maxWidth: 850, boxShadow: '0 4px 24px 0 rgb(34 41 47 / 10%)', borderRadius: 3, border: '1px solid', borderColor: 'divider' }}>
                        <CardContent sx={{ p: { xs: 2, md: 4 } }}>
                        <SimpleForm>
                            <Stack direction={{ xs: 'column', md: 'row' }} spacing={3} width="100%">
                                <TextInput source="id" disabled fullWidth variant="outlined" />
                                <TextInput source="category_code" label="Category Code" validate={required()} fullWidth variant="outlined" />
                            </Stack>
                            <Stack direction={{ xs: 'column', md: 'row' }} spacing={3} width="100%">
                                <TextInput source="category_name" label="Category Name" validate={required()} fullWidth variant="outlined" />
                                <SelectInput source="status" label="Status" choices={statusChoices} fullWidth variant="outlined" />
                            </Stack>
                            <TextInput source="description" label="Description" multiline rows={3} fullWidth variant="outlined" />
                            <Box width={{ xs: '100%', md: 'calc(50% - 12px)' }}>
                                <DateTimeInput source="created_at" label="Created At" disabled fullWidth variant="outlined" />
                            </Box>
                        </SimpleForm>
                    </CardContent>
                </Card>
            </Box>
            </Box>
        </Edit>
    );
};