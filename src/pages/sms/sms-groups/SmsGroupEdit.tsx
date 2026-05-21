import { Edit, SimpleForm, TextInput, required } from 'react-admin';
import { Card, CardContent, Typography, Box } from '@mui/material';

export const SmsGroupEdit = () => (
    <Edit title="Edit SMS Group">
        <Box sx={{ p: 2, width: '100%' }} display="flex" justifyContent="center">
            <Card sx={{ width: '60%' }}>
                <CardContent>
                    <Typography variant="h6" gutterBottom>Edit SMS Group</Typography>
                    <SimpleForm>
                        <TextInput source="id" disabled fullWidth />
                        <TextInput source="name" validate={required()} fullWidth />
                        <TextInput source="description" multiline rows={3} fullWidth />
                    </SimpleForm>
                </CardContent>
            </Card>
        </Box>
    </Edit>
);