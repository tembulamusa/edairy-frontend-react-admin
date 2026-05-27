import { Edit, SimpleForm, TextInput, DateTimeInput, SelectInput, NumberInput, required, useGetList, ArrayInput, SimpleFormIterator } from 'react-admin';
import { Card, CardContent, Typography, Box, Stack } from '@mui/material';
import { ListBreadcrumbs } from '../../../../ListBreadcrumbs';

export const PurchaseRequisitionEdit = () => {
    const { data: storeItems, isLoading: isItemsLoading } = useGetList('store-items', { pagination: { page: 1, perPage: 100 } });

    const itemChoices = storeItems?.map(item => ({
        id: item.id,
        name: item.name || item.item_name || item.title || `Item #${item.id}`
    })) || [];

    const statusChoices = [
        { id: 'PENDING', name: 'Pending' },
        { id: 'APPROVED', name: 'Approved' },
        { id: 'REJECTED', name: 'Rejected' },
        { id: 'RFQ_CREATED', name: 'RFQ Created' },
        { id: 'CLOSED', name: 'Closed' },
    ];

    const transform = (data: any) => ({
        ...data,
        requisition_date: data.requisition_date ? new Date(data.requisition_date).toISOString() : data.requisition_date,
        updated_by: 1,
    });

    return (
        <Edit title="Edit Purchase Requisition" transform={transform}>
            <Box sx={{ p: { xs: 2, md: 3 } }}>
                <Box sx={{ mb: 3 }}>
                    <Typography variant="h4" sx={{ fontWeight: 800, mb: 0.5, color: 'text.primary', letterSpacing: '-0.5px' }}>
                        Edit Purchase Requisition
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                        Update purchase requisition details.
                    </Typography>
                    <Box mt={1}>
                        <ListBreadcrumbs />
                    </Box>
                </Box>
                <Box display="flex" justifyContent="center">
                    <Card sx={{ width: '100%', maxWidth: 850, boxShadow: '0 4px 24px 0 rgb(34 41 47 / 10%)', borderRadius: 3, border: '1px solid', borderColor: 'divider' }}>
                        <CardContent sx={{ p: { xs: 2, md: 4 } }}>
                        <SimpleForm>
                            <TextInput source="id" disabled fullWidth variant="outlined" />
                            <Stack direction={{ xs: 'column', md: 'row' }} spacing={3} width="100%">
                                <TextInput source="requisition_no" label="Requisition No" validate={required()} fullWidth variant="outlined" />
                                <DateTimeInput source="requisition_date" label="Requisition Date" validate={required()} fullWidth variant="outlined" />
                            </Stack>
                            <TextInput source="description" label="Description" multiline rows={3} fullWidth variant="outlined" />
                            <SelectInput source="status" label="Status" choices={statusChoices} fullWidth variant="outlined" />
                            <ArrayInput source="items" label="Requisition Items">
                                <SimpleFormIterator inline>
                                    <SelectInput source="item_id" label="Item" choices={itemChoices} optionText="name" optionValue="id" isLoading={isItemsLoading} validate={required()} sx={{ width: 250 }} variant="outlined" />
                                    <NumberInput source="quantity" label="Quantity" validate={required()} variant="outlined" />
                                    <NumberInput source="unit_price" label="Unit Price" variant="outlined" />
                                </SimpleFormIterator>
                            </ArrayInput>
                            <Stack direction={{ xs: 'column', md: 'row' }} spacing={3} width="100%">
                                <NumberInput source="created_by" label="Created By" disabled fullWidth variant="outlined" />
                                <DateTimeInput source="created_at" label="Created At" disabled fullWidth variant="outlined" />
                            </Stack>
                        </SimpleForm>
                        </CardContent>
                    </Card>
                </Box>
            </Box>
        </Edit>
    );
};