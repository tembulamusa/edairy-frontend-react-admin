import { Edit, SimpleForm, TextInput, NumberInput, SelectInput, required, DateTimeInput, useGetList } from 'react-admin';
import { Card, CardContent, Typography, Box, Stack } from '@mui/material';
import { ListBreadcrumbs } from '../../../../ListBreadcrumbs';
import { useWatch, useFormContext } from 'react-hook-form';
import { useEffect } from 'react';

const ItemNameSync = ({ choices }: { choices: any[] }) => {
    const itemId = useWatch({ name: 'item_id' });
    const { setValue } = useFormContext();

    useEffect(() => {
        if (itemId) {
            const selected = choices.find(c => c.id === itemId);
            if (selected) {
                setValue('item_name', selected.name, { shouldValidate: true, shouldDirty: true });
            }
        }
    }, [itemId, choices, setValue]);

    return null;
};

export const SupplyRejectEdit = () => {
    const { data: storeItems, isLoading: isItemsLoading } = useGetList('store-items', { pagination: { page: 1, perPage: 100 } });
    const { data: suppliers, isLoading: isSuppliersLoading } = useGetList('suppliers', { pagination: { page: 1, perPage: 100 } });
    const { data: supplies, isLoading: isSuppliesLoading } = useGetList('supplies', { pagination: { page: 1, perPage: 100 } });

    const itemChoices = storeItems?.map(item => ({
        id: item.id,
        name: item.name || item.item_name || item.title || `Item #${item.id}`
    })) || [];

    const supplyChoices = supplies?.map(supply => ({
        id: supply.id,
        name: supply.supply_number || supply.reference || `Supply #${supply.id}`
    })) || [];

    const vendorChoices = suppliers?.map(vendor => {
        const vName = vendor.name || vendor.vendor_name || vendor.company_name || vendor.supplier_name || `Vendor #${vendor.id}`;
        return { id: vName, name: vName };
    }) || [];

    return (
        <Edit title="Edit Supply Reject">
            <Box sx={{ p: { xs: 2, md: 3 } }}>
                <Box sx={{ mb: 3 }}>
                    <Typography variant="h4" sx={{ fontWeight: 800, mb: 0.5, color: 'text.primary', letterSpacing: '-0.5px' }}>
                        Edit Supply Reject
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                        Update the details below to modify the supply reject record.
                    </Typography>
                    <Box mt={1}>
                        <ListBreadcrumbs />
                    </Box>
                </Box>
                <Box display="flex" justifyContent="center">
                    <Card sx={{ width: '100%', maxWidth: 850, boxShadow: '0 4px 24px 0 rgb(34 41 47 / 10%)', borderRadius: 3, border: '1px solid', borderColor: 'divider' }}>
                        <CardContent sx={{ p: { xs: 2, md: 4 } }}>
                        <SimpleForm>
                            <ItemNameSync choices={itemChoices} />
                            <TextInput source="item_name" sx={{ display: 'none' }} />
                            <Stack direction={{ xs: 'column', md: 'row' }} spacing={3} width="100%">
                                <TextInput source="id" disabled fullWidth variant="outlined" />
                                <SelectInput source="supply_id" label="Supply ID" choices={supplyChoices} optionText="name" optionValue="id" isLoading={isSuppliesLoading} validate={required()} fullWidth variant="outlined" />
                            </Stack>
                            <Stack direction={{ xs: 'column', md: 'row' }} spacing={3} width="100%">
                                <SelectInput source="vendor_name" label="Vendor Name" choices={vendorChoices} optionText="name" optionValue="id" isLoading={isSuppliersLoading} validate={required()} fullWidth variant="outlined" />
                                <SelectInput source="item_id" label="Item Name" choices={itemChoices} optionText="name" optionValue="id" isLoading={isItemsLoading} validate={required()} fullWidth variant="outlined" />
                            </Stack>
                            <Stack direction={{ xs: 'column', md: 'row' }} spacing={3} width="100%">
                                <TextInput source="quantity" type="number" label="Quantity" validate={required()} fullWidth variant="outlined" />
                                <NumberInput source="created_by" label="Created By" disabled fullWidth variant="outlined" />
                            </Stack>
                            <TextInput source="reason" label="Reason" multiline rows={3} validate={required()} fullWidth variant="outlined" />
                            <Stack direction={{ xs: 'column', md: 'row' }} spacing={3} width="100%">
                                <DateTimeInput source="created_at" label="Created At" disabled fullWidth variant="outlined" />
                                <DateTimeInput source="updated_at" label="Updated At" disabled fullWidth variant="outlined" />
                            </Stack>
                        </SimpleForm>
                    </CardContent>
                </Card>
            </Box>
            </Box>
        </Edit>
    );
};