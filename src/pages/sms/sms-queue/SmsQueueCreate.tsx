import { Create, SimpleForm, TextInput, DateTimeInput, SelectInput, NumberInput, required } from 'react-admin';
import { Card, CardContent, Typography, Box, Stack } from '@mui/material';
import { ListBreadcrumbs } from '../../../../ListBreadcrumbs';

export const SmsQueueCreate = () => (
    <Create title="Create SMS Queue Item">
        <Box sx={{ p: { xs: 2, md: 3 } }}>
            <Box sx={{ mb: 3 }}>
                <Typography variant="h4" sx={{ fontWeight: 800, mb: 0.5, color: 'text.primary', letterSpacing: '-0.5px' }}>
                    New SMS Queue Item
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                    Enter the details to create a new SMS queue item.
                </Typography>
                <Box mt={1}>
                    <ListBreadcrumbs />
                </Box>
            </Box>
            <Box display="flex" justifyContent="center">
                <Card sx={{ width: '100%', maxWidth: 850, boxShadow: '0 4px 24px 0 rgb(34 41 47 / 10%)', borderRadius: 3, border: '1px solid', borderColor: 'divider' }}>
                    <CardContent sx={{ p: { xs: 2, md: 4 } }}>
                    <SimpleForm>
                        <Stack direction={{ xs: 'column', md: 'row' }} spacing={3} width="100%">
                            <TextInput source="sms_message_id" validate={required()} fullWidth label="Message ID" variant="outlined" />
                            <SelectInput source="processed" choices={[
                                { id: 'yes', name: 'Yes' },
                                { id: 'no', name: 'No' },
                            ]} defaultValue="no" validate={required()} fullWidth variant="outlined" />
                        </Stack>
                        <Stack direction={{ xs: 'column', md: 'row' }} spacing={3} width="100%">
                            <NumberInput source="processing_attempts" defaultValue={0} fullWidth label="Attempts" variant="outlined" />
                            <DateTimeInput source="last_attempt_at" fullWidth label="Last Attempt At" variant="outlined" />
                        </Stack>
                    </SimpleForm>
                </CardContent>
            </Card>
        </Box>
        </Box>
    </Create>
);