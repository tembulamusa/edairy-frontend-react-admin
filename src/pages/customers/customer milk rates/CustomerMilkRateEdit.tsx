import { Edit, SimpleForm, TextInput, NumberInput, ReferenceInput, SelectInput, required } from 'react-admin';
import { Card, CardContent, Typography, Box } from '@mui/material';
import { ListBreadcrumbs } from '../../../../ListBreadcrumbs';

export const CustomerMilkRateEdit = () => (
    <Edit title="Edit Customer Milk Rate">
        <Box sx={{ p: { xs: 2, md: 3 } }}>
            <Box sx={{ mb: 3 }}>
                <Typography variant="h4" sx={{ fontWeight: 800, mb: 0.5, color: 'text.primary', letterSpacing: '-0.5px' }}>
                    Edit Customer Milk Rate
                </Typography>
                <ListBreadcrumbs />
            </Box>
            <Box display="flex" justifyContent="center">
                <Card sx={{ width: '100%', maxWidth: 800, boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.05), 0 4px 6px -4px rgb(0 0 0 / 0.05)', borderRadius: 3 }}>
                    <CardContent>
                        <SimpleForm>
                            <TextInput source="id" disabled fullWidth />
                            <ReferenceInput source="customer_id" reference="customers">
                                <SelectInput optionText="FullNames" validate={required()} fullWidth />
                            </ReferenceInput>
                            <NumberInput source="rate" label="Rate" validate={required()} fullWidth />
                            <NumberInput source="grade_id" label="Grade ID" fullWidth />
                            <TextInput source="grade_name" label="Grade Name" fullWidth />
                            <NumberInput source="pay_date_range_id" label="Pay Date Range ID" fullWidth />
                            <TextInput source="pay_date_range_name" label="Pay Date Range Name" fullWidth />
                        </SimpleForm>
                    </CardContent>
                </Card>
            </Box>
        </Box>
    </Edit>
);