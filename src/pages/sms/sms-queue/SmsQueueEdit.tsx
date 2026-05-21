import { Edit, SimpleForm, TextInput, DateTimeInput, SelectInput, NumberInput, required } from 'react-admin';
import { Card, CardContent, Typography, Box } from '@mui/material';

export const SmsQueueEdit = () => (
    <Edit title="Edit SMS Queue Item">
        <Box sx={{ p: 2, width: '100%' }} display="flex" justifyContent="center">
            <Card sx={{ width: '60%' }}>
                <CardContent>
                    <Typography variant="h6" gutterBottom>Edit SMS Queue Item</Typography>
                    <SimpleForm>
                        <TextInput source="id" disabled fullWidth />
                        <TextInput source="recipient" validate={required()} fullWidth />
                        <TextInput source="message" multiline rows={4} validate={required()} fullWidth />
                        <DateTimeInput source="scheduled_for" fullWidth />
                        <SelectInput source="status" choices={[
                            { id: 'PENDING', name: 'Pending' },
                            { id: 'PROCESSING', name: 'Processing' },
                            { id: 'FAILED', name: 'Failed' },
                        ]} validate={required()} fullWidth />
                        <NumberInput source="attempts" fullWidth />
                    </SimpleForm>
                </CardContent>
            </Card>
        </Box>
    </Edit>
);