import { Create, SimpleForm, TextInput, NumberInput, DateInput, required } from 'react-admin';
import { Card, CardContent, Typography, Box } from '@mui/material';
import { ListBreadcrumbs } from '../../../../ListBreadcrumbs';

export const StoreStockTakingCreate = () => (
    <Create title="Create Store Stock Taking">
        <Box sx={{ p: { xs: 2, md: 3 } }}>
            <Box sx={{ mb: 3 }}>
                <Typography variant="h4" sx={{ fontWeight: 800, mb: 0.5, color: 'text.primary', letterSpacing: '-0.5px' }}>
                    New Store Stock Taking
                </Typography>
                <ListBreadcrumbs />
            </Box>
            <Box display="flex" justifyContent="center">
                <Card sx={{ width: '100%', maxWidth: 800, boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.05), 0 4px 6px -4px rgb(0 0 0 / 0.05)', borderRadius: 3 }}>
                    <CardContent>
                        <SimpleForm>
                            <TextInput source="stock_take_no" label="Stock Take No" validate={required()} fullWidth />
                            <DateInput source="stock_take_date" label="Date" validate={required()} fullWidth />
                            <TextInput source="store_name" label="Store" validate={required()} fullWidth />
                            <TextInput source="item_name" label="Item" validate={required()} fullWidth />
                            <NumberInput source="system_quantity" label="System Quantity" validate={required()} fullWidth />
                            <NumberInput source="physical_quantity" label="Physical Quantity" validate={required()} fullWidth />
                            <NumberInput source="variance_quantity" label="Variance" fullWidth />
                            <TextInput source="remarks" label="Remarks" multiline rows={3} fullWidth />
                        </SimpleForm>
                    </CardContent>
                </Card>
            </Box>
        </Box>
    </Create>
);