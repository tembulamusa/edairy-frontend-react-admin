import { Create, SimpleForm, TextInput, NumberInput, DateInput, required } from 'react-admin';
import { Card, CardContent, Typography, Box } from '@mui/material';
import { ListBreadcrumbs } from '../../../../ListBreadcrumbs';

export const MemberStatementCreate = () => (
    <Create title="Create Member Statement">
        <Box sx={{ p: { xs: 2, md: 3 } }}>
            <Box sx={{ mb: 3 }}>
                <Typography variant="h4" sx={{ fontWeight: 800, mb: 0.5, color: 'text.primary', letterSpacing: '-0.5px' }}>
                    New Member Statement
                </Typography>
                <ListBreadcrumbs />
            </Box>
            <Box display="flex" justifyContent="center">
                <Card sx={{ width: '100%', maxWidth: 800, boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.05), 0 4px 6px -4px rgb(0 0 0 / 0.05)', borderRadius: 3 }}>
                    <CardContent>
                        <SimpleForm>
                            <TextInput source="member_name" label="Member Name" validate={required()} fullWidth />
                            <DateInput source="statement_date" label="Date" validate={required()} fullWidth />
                            <TextInput source="reference" label="Reference" fullWidth />
                            <TextInput source="description" label="Description" multiline rows={3} fullWidth />
                            <NumberInput source="debit" label="Debit" fullWidth />
                            <NumberInput source="credit" label="Credit" fullWidth />
                            <NumberInput source="balance" label="Balance" fullWidth />
                        </SimpleForm>
                    </CardContent>
                </Card>
            </Box>
        </Box>
    </Create>
);