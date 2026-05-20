import { Create, SimpleForm, TextInput, SelectInput, required } from 'react-admin';
import { Card, CardContent, Typography, Box } from '@mui/material';

export const SmsMessageCreate = () => (
    <Create title="Create SMS Message">
        <Box sx={{ p: 2, width: '100%' }} display="flex" justifyContent="center">
            <Card sx={{ width: '60%' }}>
                <CardContent>
                    <Typography variant="h6" gutterBottom>Create New SMS Message</Typography>
                    <SimpleForm>
                        <TextInput source="recipient" validate={required()} fullWidth />
                        <TextInput source="message" multiline rows={4} validate={required()} fullWidth />
                        <SelectInput source="status" choices={[
                            { id: 'PENDING', name: 'Pending' },
                            { id: 'SENT', name: 'Sent' },
                            { id: 'FAILED', name: 'Failed' },
                        ]} defaultValue="PENDING" validate={required()} fullWidth />
                    </SimpleForm>
                </CardContent>
            </Card>
        </Box>
    </Create>
);