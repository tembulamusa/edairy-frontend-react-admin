import { Edit, SimpleForm, TextInput, NumberInput, DateInput, required } from 'react-admin';
import { Card, CardContent, Typography, Box } from '@mui/material';
import { ListBreadcrumbs } from '../../../../ListBreadcrumbs';

export const MilkLocalSaleEdit = () => (
    <Edit title="Edit Milk Local Sale">
        <Box sx={{ p: { xs: 2, md: 3 } }}>
            <Box sx={{ mb: 3 }}>
                <Typography variant="h4" sx={{ fontWeight: 800, mb: 0.5, color: 'text.primary', letterSpacing: '-0.5px' }}>
                    Edit Milk Local Sale
                </Typography>
                <ListBreadcrumbs />
            </Box>
            <Box display="flex" justifyContent="center">
                <Card sx={{ width: '100%', maxWidth: 800, boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.05), 0 4px 6px -4px rgb(0 0 0 / 0.05)', borderRadius: 3 }}>
                    <CardContent>
                        <SimpleForm>
                            <TextInput source="id" disabled fullWidth />
                            <DateInput source="transaction_date" label="Transaction Date" validate={required()} fullWidth />
                            <NumberInput source="quantity" label="Quantity" validate={required()} fullWidth />
                            <NumberInput source="rate" label="Rate" validate={required()} fullWidth />
                            <NumberInput source="amount" label="Amount" fullWidth />
                            <TextInput source="grade_name" label="Grade Name" fullWidth />
                            <TextInput source="ref_number" label="Ref Number" fullWidth />
                            <TextInput source="transporter_name" label="Transporter" fullWidth />
                        </SimpleForm>
                    </CardContent>
                </Card>
            </Box>
        </Box>
    </Edit>
);