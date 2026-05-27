import { Create, SimpleForm, TextInput, NumberInput, DateTimeInput, SelectInput, required, useGetList, ArrayInput, SimpleFormIterator } from 'react-admin';
import { Card, CardContent, Typography, Box, Stack } from '@mui/material';
import { ListBreadcrumbs } from '../../../../ListBreadcrumbs';

export const PurchaseOrderCreate = () => {
    const { data: suppliers, isLoading: isSuppliersLoading } = useGetList('suppliers', { pagination: { page: 1, perPage: 100 } });
    const { data: storeItems, isLoading: isItemsLoading } = useGetList('store-items', { pagination: { page: 1, perPage: 100 } });

    const itemChoices = storeItems?.map(item => ({
        id: item.id,
        name: item.name || item.item_name || item.title || `Item #${item.id}`
    })) || [];

    const supplierChoices = suppliers?.map(vendor => {
        const vName = vendor.name || vendor.vendor_name || vendor.company_name || vendor.supplier_name || `Vendor #${vendor.id}`;
        return { id: vName, name: vName };
    }) || [];

    const statusChoices = [
        { id: 'draft', name: 'Draft' },
        { id: 'pending_approval', name: 'Pending Approval' },
        { id: 'approved', name: 'Approved' },
        { id: 'sent', name: 'Sent' },
        { id: 'acknowledged', name: 'Acknowledged' },
        { id: 'partially_received', name: 'Partially Received' },
        { id: 'fully_received', name: 'Fully Received' },
        { id: 'partially_invoiced', name: 'Partially Invoiced' },
        { id: 'fully_invoiced', name: 'Fully Invoiced' },
        { id: 'closed', name: 'Closed' },
        { id: 'cancelled', name: 'Cancelled' },
        { id: 'rejected', name: 'Rejected' },
        { id: 'on_hold', name: 'On Hold' },
    ];

    const transform = (data: any) => ({
        ...data,
        po_date: data.po_date ? new Date(data.po_date).toISOString() : data.po_date,
        created_by: 1,
        updated_by: 1,
    });

    return (
        <Create title="Create Purchase Order" transform={transform}>
            <Box sx={{ p: { xs: 2, md: 3 } }}>
                <Box sx={{ mb: 3 }}>
                    <Typography variant="h4" sx={{ fontWeight: 800, mb: 0.5, color: 'text.primary', letterSpacing: '-0.5px' }}>
                        New Purchase Order
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                        Create a new purchase order.
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
                                <TextInput source="po_number" label="Order Number" validate={required()} fullWidth variant="outlined" />
                                <DateTimeInput source="po_date" label="Date" validate={required()} fullWidth variant="outlined" />
                            </Stack>
                            <Stack direction={{ xs: 'column', md: 'row' }} spacing={3} width="100%">
                                <SelectInput source="supplier_name" label="Supplier" choices={supplierChoices} optionText="name" optionValue="id" isLoading={isSuppliersLoading} validate={required()} fullWidth variant="outlined" />
                                <SelectInput source="status" label="Status" choices={statusChoices} fullWidth variant="outlined" />
                            </Stack>
                            <NumberInput source="total_amount" label="Total Amount" fullWidth variant="outlined" />
                            <ArrayInput source="items" label="Order Items">
                                <SimpleFormIterator inline>
                                    <SelectInput source="item_id" label="Item" choices={itemChoices} optionText="name" optionValue="id" isLoading={isItemsLoading} validate={required()} sx={{ width: 250 }} variant="outlined" />
                                    <NumberInput source="quantity" label="Quantity" validate={required()} variant="outlined" />
                                    <NumberInput source="unit_price" label="Unit Price" validate={required()} variant="outlined" />
                                </SimpleFormIterator>
                            </ArrayInput>
                        </SimpleForm>
                        </CardContent>
                    </Card>
                </Box>
            </Box>
        </Create>
    );
};