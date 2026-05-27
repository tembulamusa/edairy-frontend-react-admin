import { Create, SimpleForm, TextInput, NumberInput, DateInput, ArrayInput, SimpleFormIterator, required } from 'react-admin';
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
                            <TextInput source="movement_type" label="Movement Type" validate={required()} fullWidth />
                            <TextInput source="remarks" label="Remarks" multiline rows={3} fullWidth />
                            <ArrayInput source="items" label="Items">
                                <SimpleFormIterator>
                                    <TextInput source="item_name" label="Item" fullWidth />
                                    <NumberInput source="quantity" label="Quantity" fullWidth />
                                    <NumberInput source="unit_cost" label="Unit Cost" fullWidth />
                                    <NumberInput source="selling_price" label="Selling Price" fullWidth />
                                </SimpleFormIterator>
                            </ArrayInput>
                        </SimpleForm>
                    </CardContent>
                </Card>
            </Box>
        </Box>
    </Create>
);