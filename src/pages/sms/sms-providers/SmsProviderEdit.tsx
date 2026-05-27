import { Edit, SimpleForm, TextInput, BooleanInput, required } from 'react-admin';
import { Card, CardContent, Typography, Box } from '@mui/material';

export const SmsProviderEdit = () => (
    <Edit title="Edit SMS Provider">
        <Box sx={{ p: 2, width: '100%' }} display="flex" justifyContent="center">
            <Card sx={{ width: '60%' }}>
                <CardContent>
                    <Typography variant="h6" gutterBottom>Edit SMS Provider</Typography>
                    <SimpleForm>
                        <TextInput source="id" disabled fullWidth />
                        <TextInput source="name" validate={required()} fullWidth />
                        <TextInput source="sender_id" validate={required()} fullWidth />
                        <BooleanInput source="is_active" />
                    </SimpleForm>
                </CardContent>
            </Card>
        </Box>
    </Edit>
);