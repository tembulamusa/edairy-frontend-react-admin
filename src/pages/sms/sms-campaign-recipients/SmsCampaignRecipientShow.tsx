import { Show, SimpleShowLayout, TextField, ReferenceField, DateField, ChipField } from 'react-admin';
import { Card, CardContent, Typography, Box } from '@mui/material';

export const SmsCampaignRecipientShow = () => (
    <Show title="SMS Campaign Recipient Details">
        <Box sx={{ p: 2, width: '100%' }} display="flex" justifyContent="center">
            <Card sx={{ width: '60%' }}>
                <CardContent>
                    <Typography variant="h6" gutterBottom>SMS Campaign Recipient Details</Typography>
                    <SimpleShowLayout>
                        <TextField source="id" />
                        <ReferenceField source="sms_campaign_id" reference="sms-campaigns" />
                        <ReferenceField source="sms_contact_id" reference="sms-contacts" />
                        <TextField source="phone_number" />
                        <ChipField source="delivery_status" />
                        <DateField source="created_at" showTime />
                        <DateField source="updated_at" showTime />
                    </SimpleShowLayout>
                </CardContent>
            </Card>
        </Box>
    </Show>
);