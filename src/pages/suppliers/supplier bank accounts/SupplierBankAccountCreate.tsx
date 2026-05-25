import { Create, SimpleForm, TextInput, SelectInput, required, useGetList } from 'react-admin';
import { Card, CardContent, Typography, Box, Stack } from '@mui/material';
import { ListBreadcrumbs } from '../../../../ListBreadcrumbs';

export const SupplierBankAccountCreate = () => {
    const { data: suppliers, isLoading: isSuppliersLoading } = useGetList('suppliers', { pagination: { page: 1, perPage: 100 } });

    const supplierChoices = suppliers?.map(supplier => ({
        id: supplier.id,
        name: supplier.company_name || supplier.full_name || `Supplier #${supplier.id}`
    })) || [];

    return (
        <Create title="Create Supplier Bank Account">
            <Box sx={{ p: { xs: 2, md: 3 } }}>
                <Box sx={{ mb: 3 }}>
                    <Typography variant="h4" sx={{ fontWeight: 800, mb: 0.5, color: 'text.primary', letterSpacing: '-0.5px' }}>
                        New Supplier Bank Account
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                        Fill in the details below to add a bank or mobile money account for a supplier.
                    </Typography>
                    <Box mt={1}>
                        <ListBreadcrumbs />
                    </Box>
                </Box>
                <Box display="flex" justifyContent="center">
                    <Card sx={{ width: '100%', maxWidth: 850, boxShadow: '0 4px 24px 0 rgb(34 41 47 / 10%)', borderRadius: 3, border: '1px solid', borderColor: 'divider' }}>
                        <CardContent sx={{ p: { xs: 2, md: 4 } }}>
                        <SimpleForm>
                            <SelectInput source="supplier_id" label="Supplier" choices={supplierChoices} isLoading={isSuppliersLoading} validate={required()} fullWidth variant="outlined" />
                            <Stack direction={{ xs: 'column', md: 'row' }} spacing={3} width="100%">
                                <SelectInput source="account_type" label="Account Type" choices={[
                                    { id: 'bank', name: 'Bank' },
                                    { id: 'mobile_money', name: 'Mobile Money' }
                                ]} validate={required()} fullWidth variant="outlined" />
                                <TextInput source="currency_code" label="Currency Code" fullWidth variant="outlined" />
                            </Stack>
                            <Stack direction={{ xs: 'column', md: 'row' }} spacing={3} width="100%">
                                <TextInput source="bank_name" label="Bank Name" fullWidth variant="outlined" />
                                <TextInput source="bank_branch_name" label="Bank Branch Name" fullWidth variant="outlined" />
                            </Stack>
                            <Stack direction={{ xs: 'column', md: 'row' }} spacing={3} width="100%">
                                <TextInput source="account_name" label="Account Name" validate={required()} fullWidth variant="outlined" />
                                <TextInput source="account_number" label="Account Number" validate={required()} fullWidth variant="outlined" />
                            </Stack>
                            <Stack direction={{ xs: 'column', md: 'row' }} spacing={3} width="100%">
                                <TextInput source="swift_code" label="SWIFT Code" fullWidth variant="outlined" />
                                <TextInput source="mobile_money_no" label="Mobile Money Number" fullWidth variant="outlined" />
                            </Stack>
                            <Stack direction={{ xs: 'column', md: 'row' }} spacing={3} width="100%">
                                <SelectInput source="is_default" label="Is Default?" choices={[
                                    { id: 'yes', name: 'Yes' },
                                    { id: 'no', name: 'No' }
                                ]} validate={required()} fullWidth variant="outlined" />
                                <SelectInput source="status" label="Status" choices={[
                                    { id: 'active', name: 'Active' },
                                    { id: 'inactive', name: 'Inactive' }
                                ]} validate={required()} fullWidth variant="outlined" />
                            </Stack>
                        </SimpleForm>
                    </CardContent>
                </Card>
            </Box>
            </Box>
        </Create>
    );
};