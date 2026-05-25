import { Edit, SimpleForm, TextInput, SelectInput, DateTimeInput, required, useGetList } from 'react-admin';
import { Card, CardContent, Typography, Box } from '@mui/material';
import { ListBreadcrumbs } from '../../../../ListBreadcrumbs';

export const SupplierBankAccountEdit = () => {
    const { data: suppliers, isLoading: isSuppliersLoading } = useGetList('suppliers', { pagination: { page: 1, perPage: 100 } });

    const supplierChoices = suppliers?.map(supplier => ({
        id: supplier.id,
        name: supplier.company_name || supplier.full_name || `Supplier #${supplier.id}`
    })) || [];

    return (
        <Edit title="Edit Supplier Bank Account">
            <Box sx={{ p: { xs: 2, md: 3 } }}>
                <Box sx={{ mb: 3 }}>
                    <Typography variant="h4" sx={{ fontWeight: 800, mb: 0.5, color: 'text.primary', letterSpacing: '-0.5px' }}>
                        Edit Supplier Bank Account
                    </Typography>
                    <ListBreadcrumbs />
                </Box>
                <Box display="flex" justifyContent="center">
                    <Card sx={{ width: '100%', maxWidth: 800, boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.05), 0 4px 6px -4px rgb(0 0 0 / 0.05)', borderRadius: 3 }}>
                        <CardContent>
                        <SimpleForm>
                            <TextInput source="id" disabled fullWidth />
                            <SelectInput source="supplier_id" label="Supplier" choices={supplierChoices} isLoading={isSuppliersLoading} validate={required()} fullWidth />
                            <SelectInput source="account_type" label="Account Type" choices={[
                                { id: 'bank', name: 'Bank' },
                                { id: 'mobile_money', name: 'Mobile Money' }
                            ]} validate={required()} fullWidth />
                            <TextInput source="bank_name" label="Bank Name" fullWidth />
                            <TextInput source="bank_branch_name" label="Bank Branch Name" fullWidth />
                            <TextInput source="account_name" label="Account Name" validate={required()} fullWidth />
                            <TextInput source="account_number" label="Account Number" validate={required()} fullWidth />
                            <TextInput source="currency_code" label="Currency Code" fullWidth />
                            <TextInput source="swift_code" label="SWIFT Code" fullWidth />
                            <TextInput source="mobile_money_no" label="Mobile Money Number" fullWidth />
                            <SelectInput source="is_default" label="Is Default?" choices={[
                                { id: 'yes', name: 'Yes' },
                                { id: 'no', name: 'No' }
                            ]} validate={required()} fullWidth />
                            <SelectInput source="status" label="Status" choices={[
                                { id: 'active', name: 'Active' },
                                { id: 'inactive', name: 'Inactive' }
                            ]} validate={required()} fullWidth />
                            <DateTimeInput source="created_at" label="Created At" disabled fullWidth />
                            <DateTimeInput source="updated_at" label="Updated At" disabled fullWidth />
                        </SimpleForm>
                    </CardContent>
                </Card>
            </Box>
            </Box>
        </Edit>
    );
};