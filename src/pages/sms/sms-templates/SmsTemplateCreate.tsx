import { Create, SimpleForm, TextInput, required } from 'react-admin';
import { Card, CardContent, Typography, Box } from '@mui/material';

export const SmsTemplateCreate = () => (
    <Create title="Create SMS Template">
        <Box sx={{ p: 2, width: '100%' }} display="flex" justifyContent="center">
            <Card sx={{ width: '60%' }}>
                <CardContent>
                    <Typography variant="h6" gutterBottom>Create New SMS Template</Typography>
                    <SimpleForm>
                        <TextInput source="name" validate={required()} fullWidth />
                        <TextInput source="body" multiline rows={5} validate={required()} fullWidth />
                    </SimpleForm>
                </CardContent>
            </Card>
        </Box>
    </Create>
);