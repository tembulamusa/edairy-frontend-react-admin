import { Show, SimpleShowLayout, TextField, NumberField, DateField, ArrayField, Datagrid } from 'react-admin';
import { Card, CardContent, Typography, Box } from '@mui/material';
import { ListBreadcrumbs } from '../../../../ListBreadcrumbs';

export const StoreStockMovementShow = () => (
    <Show title="Store Stock Movement Details">
        <Box sx={{ p: { xs: 2, md: 3 } }}>
            <Box sx={{ mb: 3 }}>
                <Typography variant="h4" sx={{ fontWeight: 800, mb: 0.5, color: 'text.primary', letterSpacing: '-0.5px' }}>
                    Store Stock Movement Details
                </Typography>
                <ListBreadcrumbs />
            </Box>
            <Box display="flex" justifyContent="center">
                <Card sx={{ width: '100%', maxWidth: 800, boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.05), 0 4px 6px -4px rgb(0 0 0 / 0.05)', borderRadius: 3 }}>
                    <CardContent>
                        <SimpleShowLayout>
                            <TextField source="id" />
                            <DateField source="transaction_date" label="Date" />
                            <TextField source="store_name" label="Store" />
                            <TextField source="movement_type" label="Movement Type" />
                            <TextField source="remarks" label="Remarks" />
                            <ArrayField source="items" label="Items">
                                <Datagrid bulkActionButtons={false}>
                                    <TextField source="item_name" label="Item" />
                                    <NumberField source="quantity" label="Quantity" />
                                    <NumberField source="unit_cost" label="Unit Cost" />
                                    <NumberField source="selling_price" label="Selling Price" />
                                    <NumberField source="balance_after" label="Balance After" />
                                </Datagrid>
                            </ArrayField>
                        </SimpleShowLayout>
                    </CardContent>
                </Card>
            </Box>
        </Box>
    </Show>
);