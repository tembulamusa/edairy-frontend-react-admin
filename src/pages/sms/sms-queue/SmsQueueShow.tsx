import { Show, SimpleShowLayout, TextField, DateField, ChipField, NumberField } from 'react-admin';
import { Card, CardContent, Typography, Box } from '@mui/material';

export const SmsQueueShow = () => (
    <Show title="SMS Queue Details">
        <Box sx={{ p: 2, width: '100%' }} display="flex" justifyContent="center">
            <Card sx={{ width: '60%' }}>
                <CardContent>
                    <Typography variant="h6" gutterBottom>SMS Queue Details</Typography>
                    <SimpleShowLayout>
                        <TextField source="id" />
                        <TextField source="recipient" />
                        <TextField source="message" />
                        <ChipField source="status" />
                        <DateField source="scheduled_for" showTime />
                        <NumberField source="attempts" />
                        <DateField source="created_at" showTime />
                        <DateField source="updated_at" showTime />
                    </SimpleShowLayout>
                </CardContent>
            </Card>
        </Box>
    </Show>
);