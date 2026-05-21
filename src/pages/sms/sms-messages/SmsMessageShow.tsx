import { Show, SimpleShowLayout, TextField, DateField, ChipField } from 'react-admin';
import { Card, CardContent, Typography, Box } from '@mui/material';

export const SmsMessageShow = () => (
    <Show title="SMS Message Details">
        <Box sx={{ p: 2, width: '100%' }} display="flex" justifyContent="center">
            <Card sx={{ width: '60%' }}>
                <CardContent>
                    <Typography variant="h6" gutterBottom>SMS Message Details</Typography>
                    <SimpleShowLayout>
                        <TextField source="id" />
                        <TextField source="recipient" />
                        <TextField source="message" />
                        <ChipField source="status" />
                        <DateField source="sent_at" showTime />
                        <DateField source="created_at" showTime />
                        <DateField source="updated_at" showTime />
                    </SimpleShowLayout>
                </CardContent>
            </Card>
        </Box>
    </Show>
);