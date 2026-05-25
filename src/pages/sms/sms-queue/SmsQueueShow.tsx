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
                        <TextField source="sms_message_id" label="Message ID" />
                        <ChipField source="processed" label="Processed" />
                        <NumberField source="processing_attempts" label="Attempts" />
                        <DateField source="last_attempt_at" showTime emptyText="-" label="Last Attempt At" />
                    </SimpleShowLayout>
                </CardContent>
            </Card>
        </Box>
    </Show>
);