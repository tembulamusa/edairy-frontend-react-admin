import { Edit, SimpleForm, TextInput, NumberInput, DateInput, required } from 'react-admin';
import { Card, CardContent, Typography, Box } from '@mui/material';
import { ListBreadcrumbs } from '../../../../ListBreadcrumbs';

export const DailyMilkVarianceEdit = () => (
    <Edit title="Edit Daily Milk Variance">
        <Box sx={{ p: { xs: 2, md: 3 } }}>
            <Box sx={{ mb: 3 }}>
                <Typography variant="h4" sx={{ fontWeight: 800, mb: 0.5, color: 'text.primary', letterSpacing: '-0.5px' }}>
                    Edit Daily Milk Variance
                </Typography>
                <ListBreadcrumbs />
            </Box>
            <Box display="flex" justifyContent="center">
                <Card sx={{ width: '100%', maxWidth: 800, boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.05), 0 4px 6px -4px rgb(0 0 0 / 0.05)', borderRadius: 3 }}>
                    <CardContent>
                        <SimpleForm>
                            <TextInput source="id" disabled fullWidth />
                            <DateInput source="day" label="Day" validate={required()} fullWidth />
                            <TextInput source="month" label="Month" validate={required()} fullWidth />
                            <TextInput source="transporter" label="Transporter" validate={required()} fullWidth />
                            <NumberInput source="field_collections" label="Field Collections" fullWidth />
                            <NumberInput source="mcc" label="MCC" fullWidth />
                            <NumberInput source="cash_sales" label="Cash Sales" fullWidth />
                            <NumberInput source="credit_sales" label="Credit Sales" fullWidth />
                            <NumberInput source="rejects" label="Rejects" fullWidth />
                            <NumberInput source="balance" label="Balance" fullWidth />
                        </SimpleForm>
                    </CardContent>
                </Card>
            </Box>
        </Box>
    </Edit>
);