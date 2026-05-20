import { Show, SimpleShowLayout, TextField, ReferenceField, DateField } from 'react-admin';
import { Card, CardContent, Typography, Box } from '@mui/material';

export const SmsContactShow = () => (
    <Show title="SMS Contact Details">
        <Box sx={{ p: 2, width: '100%' }} display="flex" justifyContent="center">
            <Card sx={{ width: '60%' }}>
                <CardContent>
                    <Typography variant="h6" gutterBottom>SMS Contact Details</Typography>
                    <SimpleShowLayout>
                        <TextField source="id" />
                        <TextField source="full_name" />
                        <TextField source="phone_number" />
                        <ReferenceField source="sms_group_id" reference="sms-groups" />
                        <DateField source="created_at" showTime />
                        <DateField source="updated_at" showTime />
                    </SimpleShowLayout>
                </CardContent>
            </Card>
        </Box>
    </Show>
);