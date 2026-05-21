import { Show, SimpleShowLayout, TextField, DateField } from 'react-admin';
import { Card, CardContent, Typography, Box } from '@mui/material';

export const SmsGroupShow = () => (
    <Show title="SMS Group Details">
        <Box sx={{ p: 2, width: '100%' }} display="flex" justifyContent="center">
            <Card sx={{ width: '60%' }}>
                <CardContent>
                    <Typography variant="h6" gutterBottom>SMS Group Details</Typography>
                    <SimpleShowLayout>
                        <TextField source="id" />
                        <TextField source="name" />
                        <TextField source="description" />
                        <DateField source="created_at" showTime />
                        <DateField source="updated_at" showTime />
                    </SimpleShowLayout>
                </CardContent>
            </Card>
        </Box>
    </Show>
);