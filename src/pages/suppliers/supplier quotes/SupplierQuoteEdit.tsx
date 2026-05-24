import { Edit, SimpleForm, TextInput, NumberInput, ReferenceInput, SelectInput, required } from 'react-admin';
import { Typography, Box } from '@mui/material';
import { ListBreadcrumbs } from '../../../../ListBreadcrumbs';

export const SupplierQuoteEdit = () => (
    <Edit title="Edit Supplier Quote">
        <Box sx={{ p: { xs: 2, md: 3 } }}>
            <Box sx={{ mb: 3 }}>
                <Typography variant="h4" sx={{ fontWeight: 800, mb: 0.5, color: 'text.primary', letterSpacing: '-0.5px' }}>
                    Edit Supplier Quote
                </Typography>
                <ListBreadcrumbs />
            </Box>
            <Box display="flex" justifyContent="center">
                <Box sx={{ width: '100%', maxWidth: 600 }}>
                    <SimpleForm 
                        sx={{ 
                            borderRadius: 3, 
                            boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.05), 0 4px 6px -4px rgb(0 0 0 / 0.05)',
                            '& .MuiCardContent-root': { p: { xs: 3, md: 4 } }
                        }}
                    >
                        <TextInput source="id" disabled fullWidth />
                        
                        <Typography variant="h6" sx={{ fontWeight: 700, mt: 2, mb: 1, color: 'text.secondary', width: '100%' }}>
                            Vendor Information
                        </Typography>
                        <NumberInput source="vendor_id" label="Vendor ID" fullWidth />
                        <TextInput source="vendor_name" label="Vendor Name" validate={required()} fullWidth />

                        <Typography variant="h6" sx={{ fontWeight: 700, mt: 2, mb: 1, color: 'text.secondary', width: '100%' }}>
                            Quote Details
                        </Typography>
                        <TextInput source="rfq_no" label="RFQ No" fullWidth />
                        <TextInput source="supplier_quote_ref" label="Quote Reference" fullWidth />
                        <ReferenceInput source="status" reference="statuses">
                            <SelectInput optionText="name" optionValue="name" label="Status" fullWidth />
                        </ReferenceInput>
                        <TextInput source="description" label="Description" multiline rows={3} fullWidth />
                    </SimpleForm>
                </Box>
        </Box>
        </Box>
    </Edit>
);