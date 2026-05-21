import { Edit, SimpleForm, TextInput, ReferenceInput, SelectInput, required } from 'react-admin';
import { Card, CardContent, Typography, Box } from '@mui/material';

export const SmsContactEdit = () => (
    <Edit title="Edit SMS Contact">
        <Box sx={{ p: 2, width: '100%' }} display="flex" justifyContent="center">
            <Card sx={{ width: '60%' }}>
                <CardContent>
                    <Typography variant="h6" gutterBottom>Edit SMS Contact</Typography>
                    <SimpleForm>
                        <TextInput source="id" disabled fullWidth />
                        <TextInput source="full_name" validate={required()} fullWidth />
                        <TextInput source="phone_number" validate={required()} fullWidth />
                        <ReferenceInput source="sms_group_id" reference="sms-groups">
                            <SelectInput optionText="name" fullWidth />
                        </ReferenceInput>
                    </SimpleForm>
                </CardContent>
            </Card>
        </Box>
    </Edit>
);