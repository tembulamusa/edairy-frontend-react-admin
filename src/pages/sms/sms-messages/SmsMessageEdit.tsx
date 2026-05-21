import { Edit, SimpleForm, TextInput, SelectInput, required, DateTimeInput } from 'react-admin';
import { Card, CardContent, Typography, Box } from '@mui/material';

export const SmsMessageEdit = () => (
    <Edit title="Edit SMS Message">
        <Box sx={{ p: 2, width: '100%' }} display="flex" justifyContent="center">
            <Card sx={{ width: '60%' }}>
                <CardContent>
                    <Typography variant="h6" gutterBottom>Edit SMS Message</Typography>
                    <SimpleForm>
                        <TextInput source="id" disabled fullWidth />
                        <TextInput source="recipient" validate={required()} fullWidth />
                        <TextInput source="message" multiline rows={4} validate={required()} fullWidth />
                        <SelectInput source="status" choices={[
                            { id: 'PENDING', name: 'Pending' },
                            { id: 'SENT', name: 'Sent' },
                            { id: 'FAILED', name: 'Failed' },
                        ]} validate={required()} fullWidth />
                        <DateTimeInput source="sent_at" fullWidth />
                    </SimpleForm>
                </CardContent>
            </Card>
        </Box>
    </Edit>
);