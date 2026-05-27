import { Edit, SimpleForm, TextInput, DateInput, NumberInput, BooleanInput, required } from 'react-admin';
import { Card, CardContent, Typography, Box } from '@mui/material';
import { ListBreadcrumbs } from '../../../../ListBreadcrumbs';

export const MilkJournalEdit = () => (
    <Edit title="Edit Milk Journal">
        <Box sx={{ p: { xs: 2, md: 3 } }}>
            <Box sx={{ mb: 3 }}>
                <Typography variant="h4" sx={{ fontWeight: 800, mb: 0.5, color: 'text.primary', letterSpacing: '-0.5px' }}>
                    Edit Milk Journal
                </Typography>
                <ListBreadcrumbs />
            </Box>
            <Box display="flex" justifyContent="center">
                <Card sx={{ width: '100%', maxWidth: 800, boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.05), 0 4px 6px -4px rgb(0 0 0 / 0.05)', borderRadius: 3 }}>
                    <CardContent>
                        <SimpleForm>
                            <TextInput source="id" disabled fullWidth />
                            <TextInput source="journal" label="Journal" validate={required()} fullWidth />
                            <DateInput source="journal_date" label="Journal Date" validate={required()} fullWidth />
                            <TextInput source="milk_delivery_shift" label="Milk Delivery Shift" fullWidth />
                            <TextInput source="route_name" label="Route Name" fullWidth />
                            <BooleanInput source="confirmed" label="Confirmed" />
                            <NumberInput source="entries_count" label="Entries Count" fullWidth />
                        </SimpleForm>
                    </CardContent>
                </Card>
            </Box>
        </Box>
    </Edit>
);