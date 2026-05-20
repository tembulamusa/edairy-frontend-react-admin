import { Show, SimpleShowLayout, TextField, DateField, ChipField } from 'react-admin';
import { Card, CardContent, Typography, Box } from '@mui/material';

export const SmsCampaignShow = () => (
    <Show title="SMS Campaign Details">
        <Box sx={{ p: 2, width: '100%' }} display="flex" justifyContent="center">
            <Card sx={{ width: '60%' }}>
                <CardContent>
                    <Typography variant="h6" gutterBottom>SMS Campaign Details</Typography>
                    <SimpleShowLayout>
                        <TextField source="id" />
                        <TextField source="name" />
                        <TextField source="message" />
                        <ChipField source="status" />
                        <DateField source="scheduled_at" showTime />
                        <DateField source="created_at" showTime />
                        <DateField source="updated_at" showTime />
                    </SimpleShowLayout>
                </CardContent>
            </Card>
        </Box>
    </Show>
);