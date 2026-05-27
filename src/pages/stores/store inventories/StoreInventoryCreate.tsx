import { Create, SimpleForm, TextInput, BooleanInput, required } from 'react-admin';
import { Card, CardContent, Typography, Box } from '@mui/material';
import { ListBreadcrumbs } from '../../../../ListBreadcrumbs';

export const StoreInventoryCreate = () => (
    <Create title="Create Store Inventory">
        <Box sx={{ p: { xs: 2, md: 3 } }}>
            <Box sx={{ mb: 3 }}>
                <Typography variant="h4" sx={{ fontWeight: 800, mb: 0.5, color: 'text.primary', letterSpacing: '-0.5px' }}>
                    New Store Inventory
                </Typography>
                <ListBreadcrumbs />
            </Box>
            <Box display="flex" justifyContent="center">
                <Card sx={{ width: '100%', maxWidth: 800, boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.05), 0 4px 6px -4px rgb(0 0 0 / 0.05)', borderRadius: 3 }}>
                    <CardContent>
                        <SimpleForm>
                            <TextInput source="inventory_name" label="Inventory Name" validate={required()} fullWidth />
                            <TextInput source="category_name" label="Category" validate={required()} fullWidth />
                            <TextInput source="description" label="Description" multiline rows={3} fullWidth />
                            <BooleanInput source="is_active" label="Active" />
                        </SimpleForm>
                    </CardContent>
                </Card>
            </Box>
        </Box>
    </Create>
);