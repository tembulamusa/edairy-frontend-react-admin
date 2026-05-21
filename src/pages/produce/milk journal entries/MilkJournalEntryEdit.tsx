import { Edit, SimpleForm, TextInput, required } from 'react-admin';
import { Card, CardContent, Typography, Box } from '@mui/material';
import { ListBreadcrumbs } from '../../../../ListBreadcrumbs';

export const MilkJournalEntryEdit = () => (
    <Edit title="Edit Milk Journal Entry">
        <Box sx={{ p: { xs: 2, md: 3 } }}>
            <Box sx={{ mb: 3 }}>
                <Typography variant="h4" sx={{ fontWeight: 800, mb: 0.5, color: 'text.primary', letterSpacing: '-0.5px' }}>
                    Edit Milk Journal Entry
                </Typography>
                <ListBreadcrumbs />
            </Box>
            <Box display="flex" justifyContent="center">
                <Card sx={{ width: '100%', maxWidth: 800, boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.05), 0 4px 6px -4px rgb(0 0 0 / 0.05)', borderRadius: 3 }}>
                    <CardContent>
                        <SimpleForm>
                            <TextInput source="id" disabled fullWidth />
                            <TextInput source="member_no" label="Member No" validate={required()} fullWidth />
                            <TextInput source="member_name" label="Member Name" validate={required()} fullWidth />
                            <TextInput source="milk_journal_batch_id" label="Milk Journal Batch" validate={required()} fullWidth />
                            <TextInput source="route_name" label="Route Name" fullWidth />
                            <TextInput source="milk_delivery_shift" label="Milk Delivery Shift" fullWidth />
                            <TextInput source="status" label="Status" fullWidth />
                        </SimpleForm>
                    </CardContent>
                </Card>
            </Box>
        </Box>
    </Edit>
);