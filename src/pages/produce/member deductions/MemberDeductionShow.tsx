import { Show, SimpleShowLayout, TextField, NumberField, DateField } from 'react-admin';
import { Card, CardContent, Typography, Box } from '@mui/material';
import { ListBreadcrumbs } from '../../../../ListBreadcrumbs';

export const MemberDeductionShow = () => (
    <Show title="Member Deduction Details">
        <Box sx={{ p: { xs: 2, md: 3 } }}>
            <Box sx={{ mb: 3 }}>
                <Typography variant="h4" sx={{ fontWeight: 800, mb: 0.5, color: 'text.primary', letterSpacing: '-0.5px' }}>
                    Member Deduction Details
                </Typography>
                <ListBreadcrumbs />
            </Box>
            <Box display="flex" justifyContent="center">
                <Card sx={{ width: '100%', maxWidth: 800, boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.05), 0 4px 6px -4px rgb(0 0 0 / 0.05)', borderRadius: 3 }}>
                    <CardContent>
                        <SimpleShowLayout>
                            <TextField source="id" />
                            <TextField source="member_name" label="Member Name" />
                            <TextField source="deduction_type" label="Deduction Type" />
                            <NumberField source="amount" label="Amount" />
                            <DateField source="deduction_date" label="Deduction Date" />
                            <TextField source="status" label="Status" />
                            <TextField source="description" label="Description" />
                            <DateField source="created_at" showTime />
                            <DateField source="updated_at" showTime />
                        </SimpleShowLayout>
                    </CardContent>
                </Card>
            </Box>
        </Box>
    </Show>
);