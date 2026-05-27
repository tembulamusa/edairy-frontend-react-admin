import { Create, SimpleForm, TextInput, NumberInput, DateInput, required } from 'react-admin';
import { Card, CardContent, Typography, Box } from '@mui/material';
import { ListBreadcrumbs } from '../../../../ListBreadcrumbs';

export const StoreStockMovementCreate = () => (
    <Create title="Create Store Stock Movement">
        <Box sx={{ p: { xs: 2, md: 3 } }}>
            <Box sx={{ mb: 3 }}>
                <Typography variant="h4" sx={{ fontWeight: 800, mb: 0.5, color: 'text.primary', letterSpacing: '-0.5px' }}>
                    New Store Stock Movement
                </Typography>
                <ListBreadcrumbs />
            </Box>
            <Box display="flex" justifyContent="center">
                <Card sx={{ width: '100%', maxWidth: 800, boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.05), 0 4px 6px -4px rgb(0 0 0 / 0.05)', borderRadius: 3 }}>
                    <CardContent>
                        <SimpleForm>
                            <DateInput source="transaction_date" label="Date" validate={required()} fullWidth />
                            <TextInput source="store_name" label="Store" validate={required()} fullWidth />
                            <TextInput source="item_name" label="Item" validate={required()} fullWidth />
                            <TextInput source="movement_type" label="Movement Type" validate={required()} fullWidth />
                            <NumberInput source="qty_in" label="Qty In" fullWidth />
                            <NumberInput source="qty_out" label="Qty Out" fullWidth />
                            <NumberInput source="balance_after" label="Balance After" fullWidth />
                            <NumberInput source="unit_cost" label="Unit Cost" fullWidth />
                            <NumberInput source="selling_price" label="Selling Price" fullWidth />
                            <TextInput source="remarks" label="Remarks" multiline rows={3} fullWidth />
                        </SimpleForm>
                    </CardContent>
                </Card>
            </Box>
        </Box>
    </Create>
);