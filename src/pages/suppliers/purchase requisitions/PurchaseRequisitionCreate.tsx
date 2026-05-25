import { Create, SimpleForm, TextInput, DateTimeInput, SelectInput, NumberInput, required, useGetList, ArrayInput, SimpleFormIterator } from 'react-admin';
import { Card, CardContent, Typography, Box } from '@mui/material';
import { ListBreadcrumbs } from '../../../../ListBreadcrumbs';

export const PurchaseRequisitionCreate = () => {
    const { data: storeItems, isLoading: isItemsLoading } = useGetList('store-items', { pagination: { page: 1, perPage: 100 } });

    const itemChoices = storeItems?.map(item => ({
        id: item.id,
        name: item.name || item.item_name || item.title || `Item #${item.id}`
    })) || [];

    const statusChoices = [
        { id: 'pending', name: 'Pending' },
        { id: 'approved', name: 'Approved' },
        { id: 'rejected', name: 'Rejected' },
        { id: 'rfq_created', name: 'RFQ Created' },
        { id: 'closed', name: 'Closed' },
    ];

    const transform = (data: any) => ({
        ...data,
        requisition_date: data.requisition_date ? new Date(data.requisition_date).toISOString() : data.requisition_date,
        created_by: 1,
        updated_by: 1,
    });

    return (
        <Create title="Create Purchase Requisition" transform={transform}>
            <Box sx={{ p: { xs: 2, md: 3 } }}>
                <Box sx={{ mb: 3 }}>
                    <Typography variant="h4" sx={{ fontWeight: 800, mb: 0.5, color: 'text.primary', letterSpacing: '-0.5px' }}>
                        New Purchase Requisition
                    </Typography>
                    <ListBreadcrumbs />
                </Box>
                <Box display="flex" justifyContent="center">
                    <Card sx={{ width: '100%', maxWidth: 800, boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.05), 0 4px 6px -4px rgb(0 0 0 / 0.05)', borderRadius: 3 }}>
                        <CardContent>
                        <SimpleForm>
                            <TextInput source="requisition_no" label="Requisition No" validate={required()} fullWidth />
                            <DateTimeInput source="requisition_date" label="Requisition Date" validate={required()} fullWidth />
                            <TextInput source="description" label="Description" multiline rows={3} fullWidth />
                            <SelectInput source="status" label="Status" choices={statusChoices} fullWidth />
                            <ArrayInput source="items" label="Requisition Items">
                                <SimpleFormIterator inline>
                                    <SelectInput source="item_id" label="Item" choices={itemChoices} optionText="name" optionValue="id" isLoading={isItemsLoading} validate={required()} sx={{ width: 250 }} />
                                    <NumberInput source="quantity" label="Quantity" validate={required()} />
                                    <NumberInput source="unit_price" label="Unit Price" />
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