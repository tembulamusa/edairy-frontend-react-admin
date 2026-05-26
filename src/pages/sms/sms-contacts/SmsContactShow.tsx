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
                        <TextField source="Name" label="Name" />
                        <TextField source="PhoneNumber" label="Phone Number" />
                        <ReferenceField source="SMSGroupID" reference="sms-groups" link="show" label="SMS Group">
                            <TextField source="Name" />
                        </ReferenceField>
                        <DateField source="CreatedAt" showTime label="Created At" />
                        <DateField source="UpdatedAt" showTime label="Updated At" />
                    </SimpleShowLayout>
                </CardContent>
            </Card>
        </Box>
    </Show>
);