import { Show, SimpleShowLayout, TextField, NumberField, DateField, ReferenceField } from 'react-admin';
import { Card, CardContent, Typography, Box } from '@mui/material';
import { ListBreadcrumbs } from '../../../../ListBreadcrumbs';

export const CustomerMilkRateShow = () => (
    <Show title="Customer Milk Rate Details">
        <Box sx={{ p: { xs: 2, md: 3 } }}>
            <Box sx={{ mb: 3 }}>
                <Typography variant="h4" sx={{ fontWeight: 800, mb: 0.5, color: 'text.primary', letterSpacing: '-0.5px' }}>
                    Customer Milk Rate Details
                </Typography>
                <ListBreadcrumbs />
            </Box>
            <Box display="flex" justifyContent="center">
                <Card sx={{ width: '100%', maxWidth: 800, boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.05), 0 4px 6px -4px rgb(0 0 0 / 0.05)', borderRadius: 3 }}>
                    <CardContent>
                        <SimpleShowLayout>
                            <TextField source="id" />
                            <ReferenceField source="customer_id" reference="customers">
                                <TextField source="FullNames" />
                            </ReferenceField>
                            <TextField source="customer_name" label="Customer Name" />
                            <NumberField source="rate" label="Rate" />
                            <NumberField source="grade_id" label="Grade ID" />
                            <TextField source="grade_name" label="Grade Name" />
                            <NumberField source="pay_date_range_id" label="Pay Date Range ID" />
                            <TextField source="pay_date_range_name" label="Pay Date Range Name" />
                            <DateField source="created_at" showTime />
                            <DateField source="updated_at" showTime />
                        </SimpleShowLayout>
                    </CardContent>
                </Card>
            </Box>
        </Box>
    </Show>
);