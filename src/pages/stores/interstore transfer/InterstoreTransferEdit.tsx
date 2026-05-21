import { Edit, SimpleForm, TextInput, DateInput, required } from 'react-admin';
import { Card, CardContent, Typography, Box } from '@mui/material';
import { ListBreadcrumbs } from '../../../../ListBreadcrumbs';

export const InterstoreTransferEdit = () => (
    <Edit title="Edit Interstore Transfer">
        <Box sx={{ p: { xs: 2, md: 3 } }}>
            <Box sx={{ mb: 3 }}>
                <Typography variant="h4" sx={{ fontWeight: 800, mb: 0.5, color: 'text.primary', letterSpacing: '-0.5px' }}>
                    Edit Interstore Transfer
                </Typography>
                <ListBreadcrumbs />
            </Box>
            <Box display="flex" justifyContent="center">
                <Card sx={{ width: '100%', maxWidth: 800, boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.05), 0 4px 6px -4px rgb(0 0 0 / 0.05)', borderRadius: 3 }}>
                    <CardContent>
                        <SimpleForm>
                            <TextInput source="id" disabled fullWidth />
                            <TextInput source="reference" label="Reference" validate={required()} fullWidth />
                            <TextInput source="from_store_name" label="From Store" validate={required()} fullWidth />
                            <TextInput source="to_store_name" label="To Store" validate={required()} fullWidth />
                            <DateInput source="transfer_date" label="Transfer Date" validate={required()} fullWidth />
                            <TextInput source="status" label="Status" fullWidth />
                        </SimpleForm>
                    </CardContent>
                </Card>
            </Box>
        </Box>
    </Edit>
);