import { Create, SimpleForm, TextInput, NumberInput, DateInput, required } from 'react-admin';
import { Card, CardContent, Typography, Box } from '@mui/material';
import { ListBreadcrumbs } from '../../../../ListBreadcrumbs';

export const MemberDeductionCreate = () => (
    <Create title="Create Member Deduction">
        <Box sx={{ p: { xs: 2, md: 3 } }}>
            <Box sx={{ mb: 3 }}>
                <Typography variant="h4" sx={{ fontWeight: 800, mb: 0.5, color: 'text.primary', letterSpacing: '-0.5px' }}>
                    New Member Deduction
                </Typography>
                <ListBreadcrumbs />
            </Box>
            <Box display="flex" justifyContent="center">
                <Card sx={{ width: '100%', maxWidth: 800, boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.05), 0 4px 6px -4px rgb(0 0 0 / 0.05)', borderRadius: 3 }}>
                    <CardContent>
                        <SimpleForm>
                            <TextInput source="member_name" label="Member Name" validate={required()} fullWidth />
                            <TextInput source="deduction_type" label="Deduction Type" validate={required()} fullWidth />
                            <NumberInput source="amount" label="Amount" validate={required()} fullWidth />
                            <DateInput source="deduction_date" label="Deduction Date" validate={required()} fullWidth />
                            <TextInput source="status" label="Status" fullWidth />
                            <TextInput source="description" label="Description" multiline rows={3} fullWidth />
                        </SimpleForm>
                    </CardContent>
                </Card>
            </Box>
        </Box>
    </Create>
);