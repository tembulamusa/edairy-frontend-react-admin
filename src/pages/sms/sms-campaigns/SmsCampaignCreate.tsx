import { Create, SimpleForm, TextInput, DateTimeInput, SelectInput, required } from 'react-admin';
import { Card, CardContent, Typography, Box } from '@mui/material';

export const SmsCampaignCreate = () => (
    <Create title="Create SMS Campaign">
        <Box sx={{ p: 2, width: '100%' }} display="flex" justifyContent="center">
            <Card sx={{ width: '60%' }}>
                <CardContent>
                    <Typography variant="h6" gutterBottom>Create New SMS Campaign</Typography>
                    <SimpleForm>
                        <TextInput source="name" validate={required()} fullWidth />
                        <TextInput source="message" multiline rows={4} validate={required()} fullWidth />
                        <DateTimeInput source="scheduled_at" fullWidth />
                        <SelectInput source="status" choices={[
                            { id: 'DRAFT', name: 'Draft' },
                            { id: 'SCHEDULED', name: 'Scheduled' },
                            { id: 'SENDING', name: 'Sending' },
                            { id: 'SENT', name: 'Sent' },
                            { id: 'CANCELLED', name: 'Cancelled' },
                        ]} defaultValue="DRAFT" validate={required()} fullWidth />
                    </SimpleForm>
                </CardContent>
            </Card>
        </Box>
    </Create>
);