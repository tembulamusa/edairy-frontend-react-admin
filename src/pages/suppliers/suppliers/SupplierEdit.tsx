import { Edit, TabbedForm, TextInput, SelectInput, NumberInput, DateTimeInput, required, useGetList, FormDataConsumer } from 'react-admin';
import { Card, Typography, Box, Stack, Divider } from '@mui/material';
import { ListBreadcrumbs } from '../../../../ListBreadcrumbs';
import { useWatch, useFormContext } from 'react-hook-form';
import { useEffect } from 'react';

const CategoryNameSync = ({ choices }: { choices: any[] }) => {
    const categoryId = useWatch({ name: 'supplier_category_id' });
    const { setValue } = useFormContext();

    useEffect(() => {
        if (categoryId) {
            const selected = choices.find(c => c.id === categoryId);
            if (selected) {
                setValue('category_name', selected.name, { shouldValidate: true, shouldDirty: true });
            }
        }
    }, [categoryId, choices, setValue]);

    return null;
};

export const SupplierEdit = () => {
    const { data: categories, isLoading: isCategoriesLoading } = useGetList('supplier-categories', { pagination: { page: 1, perPage: 100 } });

    const categoryChoices = categories?.map(cat => ({
        id: cat.id,
        name: cat.category_name || cat.name || `Category #${cat.id}`
    })) || [];

    return (
        <Edit title="Edit Supplier">
            <Box sx={{ p: { xs: 2, md: 3 } }}>
                <Box sx={{ mb: 3 }}>
                    <Typography variant="h4" sx={{ fontWeight: 800, mb: 0.5, color: 'text.primary', letterSpacing: '-0.5px' }}>
                        Edit Supplier
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                        Update the details below to modify the supplier in the system.
                    </Typography>
                    <Box mt={1}>
                        <ListBreadcrumbs />
                    </Box>
                </Box>
                <Box display="flex" justifyContent="center">
                    <Card sx={{ width: '100%', maxWidth: 850, boxShadow: '0 4px 24px 0 rgb(34 41 47 / 10%)', borderRadius: 3, border: '1px solid', borderColor: 'divider' }}>
                        <TabbedForm syncWithLocation={false} sx={{ '& .MuiTab-root': { fontWeight: 600, textTransform: 'none', fontSize: '0.95rem' } }}>
                            
                            <TabbedForm.Tab label="Basic Info" sx={{ p: { xs: 2, md: 4 } }}>
                                <Typography variant="h6" gutterBottom sx={{ mb: 3, fontWeight: 600 }}>Supplier Identification</Typography>
                                <Stack direction={{ xs: 'column', md: 'row' }} spacing={3} width="100%" mb={2}>
                                    <TextInput source="id" disabled fullWidth variant="outlined" />
                                    <TextInput source="supplier_code" label="Supplier Code" validate={required()} fullWidth variant="outlined" />
                                    <SelectInput source="supplier_type" label="Supplier Type" choices={[
                                        { id: 'individual', name: 'Individual' },
                                        { id: 'company', name: 'Company' }
                                    ]} validate={required()} fullWidth variant="outlined" />
                                </Stack>

                                <Divider sx={{ my: 3 }} />
                                <Typography variant="h6" gutterBottom sx={{ mb: 3, fontWeight: 600 }}>Personal / Company Details</Typography>
                                <Stack direction={{ xs: 'column', md: 'row' }} spacing={3} width="100%" mb={2}>
                                    <TextInput source="company_name" label="Company Name" fullWidth variant="outlined" />
                                    <TextInput source="full_name" label="Full Name" fullWidth variant="outlined" />
                                </Stack>
                                <FormDataConsumer>
                                    {({ formData, ...rest }) => formData.supplier_type === 'individual' && (
                                        <Box width={{ xs: '100%', md: 'calc(50% - 12px)' }}>
                                            <SelectInput source="gender" label="Gender" choices={[
                                                { id: 'male', name: 'Male' },
                                                { id: 'female', name: 'Female' }
                                            ]} validate={required()} fullWidth variant="outlined" {...rest} />
                                        </Box>
                                    )}
                                </FormDataConsumer>
                            </TabbedForm.Tab>
                            
                            <TabbedForm.Tab label="Contact Details" sx={{ p: { xs: 2, md: 4 } }}>
                                <Typography variant="h6" gutterBottom sx={{ mb: 3, fontWeight: 600 }}>Contact Information</Typography>
                                <Stack direction={{ xs: 'column', md: 'row' }} spacing={3} width="100%">
                                    <TextInput source="email_address" label="Email Address" type="email" fullWidth variant="outlined" />
                                    <TextInput source="phone_no" label="Phone Number" fullWidth variant="outlined" />
                                </Stack>
                            </TabbedForm.Tab>
                            
                            <TabbedForm.Tab label="Account & Status" sx={{ p: { xs: 2, md: 4 } }}>
                                <Typography variant="h6" gutterBottom sx={{ mb: 3, fontWeight: 600 }}>Classification & Financials</Typography>
                                <CategoryNameSync choices={categoryChoices} />
                                <TextInput source="category_name" sx={{ display: 'none' }} />
                                <Stack direction={{ xs: 'column', md: 'row' }} spacing={3} width="100%" mb={2}>
                                    <SelectInput source="supplier_category_id" label="Category" choices={categoryChoices} isLoading={isCategoriesLoading} validate={required()} fullWidth variant="outlined" />
                                    <NumberInput source="current_balance" label="Current Balance" fullWidth variant="outlined" />
                                </Stack>

                                <Divider sx={{ my: 3 }} />
                                <Typography variant="h6" gutterBottom sx={{ mb: 3, fontWeight: 600 }}>System Status</Typography>
                                <Stack direction={{ xs: 'column', md: 'row' }} spacing={3} width="100%">
                                    <SelectInput source="status" label="Status" choices={[
                                        { id: 'active', name: 'Active' },
                                        { id: 'inactive', name: 'Inactive' }
                                    ]} fullWidth variant="outlined" />
                                    <DateTimeInput source="created_at" label="Created At" disabled fullWidth variant="outlined" />
                                </Stack>
                            </TabbedForm.Tab>
                        </TabbedForm>
                </Card>
            </Box>
            </Box>
        </Edit>
    );
};