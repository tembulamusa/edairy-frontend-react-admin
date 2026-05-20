import { Create, SimpleForm, TextInput, BooleanInput, required } from 'react-admin';
import { Card, CardContent, Typography, Box } from '@mui/material';

export const SmsProviderCreate = () => (
    <Create title="Create SMS Provider">
        <Box sx={{ p: 2, width: '100%' }} display="flex" justifyContent="center">
            <Card sx={{ width: '60%' }}>
                <CardContent>
                    <Typography variant="h6" gutterBottom>Create New SMS Provider</Typography>
                    <SimpleForm>
                        <TextInput source="name" validate={required()} fullWidth />
                        <TextInput source="sender_id" validate={required()} fullWidth />
                        <BooleanInput source="is_active" defaultValue={true} />
                    </SimpleForm>
                </CardContent>
            </Card>
        </Box>
    </Create>
);