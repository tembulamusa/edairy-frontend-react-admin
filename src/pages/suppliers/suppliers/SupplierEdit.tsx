import { Edit, TabbedForm, TextInput, SelectInput, NumberInput, DateTimeInput, required, useGetList, FormDataConsumer } from 'react-admin';
import { Card, Typography, Box, Stack, Divider } from '@mui/material';
import { ListBreadcrumbs } from '../../../../ListBreadcrumbs';
import { useWatch, useFormContext } from 'react-hook-form';
import { useEffect } from 'react';

const CategorySync = ({ choices }: { choices: any[] }) => {
    const { getValues, setValue } = useFormContext();
    const categoryId = useWatch({ name: 'supplier_category_id' });
    const categoryName = useWatch({ name: 'category_name' });

    useEffect(() => {
        if (categoryName && !categoryId) {
            const selected = choices.find(c => c.name === categoryName);
            if (selected) {
                setValue('supplier_category_id', selected.id, { shouldDirty: false });
            }
        }
    }, [categoryName, categoryId, choices, setValue]);

    useEffect(() => {
        if (categoryId) {
            const selected = choices.find(c => c.id === categoryId);
            if (selected && selected.name !== getValues('category_name')) {
                setValue('category_name', selected.name, { shouldDirty: true });
            }
        }
    }, [categoryId, choices, getValues, setValue]);

    return null;
};

const FullNameSync = () => {
    const { getValues, setValue } = useFormContext();
    const fullName = useWatch({ name: 'full_name' });

    useEffect(() => {
        if (fullName) {
            const firstName = getValues('first_name');
            const lastName = getValues('last_name');
            if (!firstName && !lastName) {
                const parts = fullName.trim().split(' ');
                setValue('first_name', parts[0] || '', { shouldValidate: true, shouldDirty: false });
                setValue('last_name', parts.slice(1).join(' ') || '', { shouldValidate: true, shouldDirty: false });
            }
        }
    }, [fullName, getValues, setValue]);

    return null;
};

export const SupplierEdit = () => {
    const { data: categories, isLoading: isCategoriesLoading } = useGetList('supplier-categories', { pagination: { page: 1, perPage: 100 } });

    const categoryChoices = categories?.map(cat => ({
        id: cat.id,
        name: cat.category_name || cat.name || `Category #${cat.id}`
    })) || [];

    const transform = (data: any) => ({
        ...data,
        full_name: data.supplier_type === 'individual' 
            ? `${data.first_name || ''} ${data.last_name || ''}`.trim() 
            : data.full_name || '',
    });

    return (
        <Edit title="Edit Supplier" transform={transform}>
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
                                <FullNameSync />
                                <TextInput source="full_name" sx={{ display: 'none' }} />
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
                                <FormDataConsumer>
                                    {({ formData, ...rest }) => (
                                        <Stack direction={{ xs: 'column', md: 'row' }} spacing={3} width="100%" mb={2}>
                                            {formData.supplier_type === 'company' && (
                                                <TextInput source="company_name" label="Company Name" fullWidth variant="outlined" {...rest} />
                                            )}
                                            {formData.supplier_type === 'individual' && (
                                                <>
                                                    <TextInput source="first_name" label="First Name" fullWidth variant="outlined" {...rest} />
                                                    <TextInput source="last_name" label="Last Name" fullWidth variant="outlined" {...rest} />
                                                </>
                                            )}
                                        </Stack>
                                    )}
                                </FormDataConsumer>
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
                                <CategorySync choices={categoryChoices} />
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