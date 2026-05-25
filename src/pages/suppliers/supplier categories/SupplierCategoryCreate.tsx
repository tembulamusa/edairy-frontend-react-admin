import { Create, SimpleForm, TextInput, SelectInput, required } from 'react-admin';
import { Card, CardContent, Typography, Box } from '@mui/material';
import { ListBreadcrumbs } from '../../../../ListBreadcrumbs';

export const SupplierCategoryCreate = () => {
    const statusChoices = [
        { id: 'active', name: 'Active' },
        { id: 'inactive', name: 'Inactive' },
    ];

    return (
        <Create title="Create Supplier Category">
            <Box sx={{ p: { xs: 2, md: 3 } }}>
                <Box sx={{ mb: 3 }}>
                    <Typography variant="h4" sx={{ fontWeight: 800, mb: 0.5, color: 'text.primary', letterSpacing: '-0.5px' }}>
                        New Supplier Category
                    </Typography>
                    <ListBreadcrumbs />
                </Box>
                <Box display="flex" justifyContent="center">
                    <Card sx={{ width: '100%', maxWidth: 800, boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.05), 0 4px 6px -4px rgb(0 0 0 / 0.05)', borderRadius: 3 }}>
                        <CardContent>
                        <SimpleForm>
                            <TextInput source="category_code" label="Category Code" validate={required()} fullWidth />
                            <TextInput source="category_name" label="Category Name" validate={required()} fullWidth />
                            <TextInput source="description" label="Description" multiline rows={3} fullWidth />
                            <SelectInput source="status" label="Status" choices={statusChoices} fullWidth />
                        </SimpleForm>
                    </CardContent>
                </Card>
            </Box>
            </Box>
        </Create>
    );
};