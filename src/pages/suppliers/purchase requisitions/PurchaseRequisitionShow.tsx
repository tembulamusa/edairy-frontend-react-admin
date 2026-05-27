import { Show, SimpleShowLayout, TextField, DateField } from 'react-admin';
import { Card, CardContent, Typography, Box } from '@mui/material';
import { ListBreadcrumbs } from '../../../../ListBreadcrumbs';

export const PurchaseRequisitionShow = () => (
    <Show title="Purchase Requisition">
        <Box sx={{ p: { xs: 2, md: 3 } }}>
            <Box sx={{ mb: 3 }}>
                <Typography variant="h4" sx={{ fontWeight: 800, mb: 0.5, color: 'text.primary', letterSpacing: '-0.5px' }}>
                    Purchase Requisition Details
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                    View purchase requisition information.
                </Typography>
                <Box mt={1}>
                    <ListBreadcrumbs />
                </Box>
            </Box>
            <Box display="flex" justifyContent="center">
                <Card sx={{ width: '100%', maxWidth: 850, boxShadow: '0 4px 24px 0 rgb(34 41 47 / 10%)', borderRadius: 3, border: '1px solid', borderColor: 'divider' }}>
                    <CardContent sx={{ p: { xs: 2, md: 4 } }}>
                    <SimpleShowLayout>
                        <TextField source="id" />
                        <TextField source="requisition_no" label="Requisition No" />
                        <DateField source="requisition_date" label="Requisition Date" />
                        <TextField source="description" label="Description" />
                        <TextField source="status" label="Status" />
                        <DateField source="created_at" showTime />
                        <DateField source="updated_at" showTime />
                    </SimpleShowLayout>
                    </CardContent>
                </Card>
            </Box>
        </Box>
    </Show>
);