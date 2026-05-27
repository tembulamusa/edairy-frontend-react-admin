import { Create, SimpleForm, TextInput, NumberInput, DateInput, required } from 'react-admin';
import { Card, CardContent, Typography, Box } from '@mui/material';
import { ListBreadcrumbs } from '../../../../ListBreadcrumbs';

export const MilkDeliveryReportCreate = () => (
    <Create title="Create Milk Delivery Report">
        <Box sx={{ p: { xs: 2, md: 3 } }}>
            <Box sx={{ mb: 3 }}>
                <Typography variant="h4" sx={{ fontWeight: 800, mb: 0.5, color: 'text.primary', letterSpacing: '-0.5px' }}>
                    New Milk Delivery Report
                </Typography>
                <ListBreadcrumbs />
            </Box>
            <Box display="flex" justifyContent="center">
                <Card sx={{ width: '100%', maxWidth: 800, boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.05), 0 4px 6px -4px rgb(0 0 0 / 0.05)', borderRadius: 3 }}>
                    <CardContent>
                        <SimpleForm>
                            <TextInput source="report_number" label="Report Number" validate={required()} fullWidth />
                            <DateInput source="report_date" label="Report Date" validate={required()} fullWidth />
                            <TextInput source="shift" label="Shift" fullWidth />
                            <NumberInput source="total_quantity" label="Total Quantity" fullWidth />
                            <TextInput source="status" label="Status" fullWidth />
                            <TextInput source="remarks" label="Remarks" multiline rows={3} fullWidth />
                        </SimpleForm>
                    </CardContent>
                </Card>
            </Box>
        </Box>
    </Create>
);