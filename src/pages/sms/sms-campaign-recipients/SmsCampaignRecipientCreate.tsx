import { Create, SimpleForm, ReferenceInput, SelectInput, TextInput, required } from 'react-admin';
import { Card, CardContent, Typography, Box } from '@mui/material';

export const SmsCampaignRecipientCreate = () => (
    <Create title="Create SMS Campaign Recipient">
        <Box sx={{ p: 2, width: '100%' }} display="flex" justifyContent="center">
            <Card sx={{ width: '60%' }}>
                <CardContent>
                    <Typography variant="h6" gutterBottom>Create New SMS Campaign Recipient</Typography>
                    <SimpleForm>
                        <ReferenceInput source="sms_campaign_id" reference="sms-campaigns">
                            <SelectInput optionText="name" validate={required()} fullWidth />
                        </ReferenceInput>
                        <ReferenceInput source="sms_contact_id" reference="sms-contacts">
                            <SelectInput optionText="full_name" validate={required()} fullWidth />
                        </ReferenceInput>
                        <TextInput source="phone_number" fullWidth />
                        <SelectInput source="delivery_status" choices={[
                            { id: 'PENDING', name: 'Pending' },
                            { id: 'SENT', name: 'Sent' },
                            { id: 'DELIVERED', name: 'Delivered' },
                            { id: 'FAILED', name: 'Failed' },
                        ]} validate={required()} fullWidth />
                    </SimpleForm>
                </CardContent>
            </Card>
        </Box>
    </Create>
);