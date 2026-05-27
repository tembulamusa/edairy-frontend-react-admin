import { Create, SimpleForm, TextInput, ReferenceInput, SelectInput, required } from 'react-admin';
import { Card, CardContent, Typography, Box } from '@mui/material';

export const SmsContactCreate = () => (
    <Create title="Create SMS Contact">
        <Box sx={{ p: 2, width: '100%' }} display="flex" justifyContent="center">
            <Card sx={{ width: '60%' }}>
                <CardContent>
                    <Typography variant="h6" gutterBottom>Create New SMS Contact</Typography>
                    <SimpleForm>
                        <TextInput source="Name" validate={required()} fullWidth label="Name" />
                        <TextInput source="PhoneNumber" validate={required()} fullWidth label="Phone Number" />
                        <ReferenceInput source="SMSGroupID" reference="sms-groups">
                            <SelectInput optionText="Name" fullWidth label="SMS Group" />
                        </ReferenceInput>
                    </SimpleForm>
                </CardContent>
            </Card>
        </Box>
    </Create>
);