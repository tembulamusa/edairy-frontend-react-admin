import { Show, SimpleShowLayout, TextField, NumberField, DateField } from 'react-admin';
import { Card, CardContent, Typography, Box } from '@mui/material';
import { ListBreadcrumbs } from '../../../../ListBreadcrumbs';

export const DailyMilkVarianceShow = () => (
    <Show title="Daily Milk Variance Details">
        <Box sx={{ p: { xs: 2, md: 3 } }}>
            <Box sx={{ mb: 3 }}>
                <Typography variant="h4" sx={{ fontWeight: 800, mb: 0.5, color: 'text.primary', letterSpacing: '-0.5px' }}>
                    Daily Milk Variance Details
                </Typography>
                <ListBreadcrumbs />
            </Box>
            <Box display="flex" justifyContent="center">
                <Card sx={{ width: '100%', maxWidth: 800, boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.05), 0 4px 6px -4px rgb(0 0 0 / 0.05)', borderRadius: 3 }}>
                    <CardContent>
                        <SimpleShowLayout>
                            <TextField source="id" />
                            <DateField source="day" label="Day" />
                            <TextField source="month" label="Month" />
                            <TextField source="transporter" label="Transporter" />
                            <NumberField source="field_collections" label="Field Collections" />
                            <NumberField source="mcc" label="MCC" />
                            <NumberField source="cash_sales" label="Cash Sales" />
                            <NumberField source="credit_sales" label="Credit Sales" />
                            <NumberField source="rejects" label="Rejects" />
                            <NumberField source="balance" label="Balance" />
                        </SimpleShowLayout>
                    </CardContent>
                </Card>
            </Box>
        </Box>
    </Show>
);