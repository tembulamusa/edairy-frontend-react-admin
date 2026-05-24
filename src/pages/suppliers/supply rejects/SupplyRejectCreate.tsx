import { Create, SimpleForm, TextInput, SelectInput, required, useGetList } from 'react-admin';
import { Card, CardContent, Typography, Box } from '@mui/material';
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

export const SupplyRejectCreate = () => {
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
        <Create title="Create Supply Reject">
            <Box sx={{ p: { xs: 2, md: 3 } }}>
                <Box sx={{ mb: 3 }}>
                    <Typography variant="h4" sx={{ fontWeight: 800, mb: 0.5, color: 'text.primary', letterSpacing: '-0.5px' }}>
                        New Supply Reject
                    </Typography>
                    <ListBreadcrumbs />
                </Box>
                <Box display="flex" justifyContent="center">
                    <Card sx={{ width: '100%', maxWidth: 800, boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.05), 0 4px 6px -4px rgb(0 0 0 / 0.05)', borderRadius: 3 }}>
                        <CardContent>
                        <SimpleForm>
                            <ItemNameSync choices={itemChoices} />
                            <SelectInput source="item_id" label="Item Name" choices={itemChoices} optionText="name" optionValue="id" isLoading={isItemsLoading} validate={required()} fullWidth />
                            <TextInput source="item_name" sx={{ display: 'none' }} />
                            <SelectInput source="supply_id" label="Supply ID" choices={supplyChoices} optionText="name" optionValue="id" isLoading={isSuppliesLoading} validate={required()} fullWidth />
                            <SelectInput source="vendor_name" label="Vendor Name" choices={vendorChoices} optionText="name" optionValue="id" isLoading={isSuppliersLoading} validate={required()} fullWidth />
                            <TextInput source="quantity" type="number" label="Quantity" validate={required()} fullWidth />
                            <TextInput source="reason" label="Reason" multiline rows={3} validate={required()} fullWidth />
                        </SimpleForm>
                    </CardContent>
                </Card>
            </Box>
            </Box>
        </Create>
    );
};