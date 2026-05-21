import { Create, SimpleForm, TextInput, NumberInput, DateInput, BooleanInput, required } from 'react-admin';
import { Card, CardContent, Typography, Box } from '@mui/material';
import { ListBreadcrumbs } from '../../../../ListBreadcrumbs';

export const SupplyCreate = () => (
    <Create title="Create Supply">
        <Box sx={{ p: { xs: 2, md: 3 } }}>
            <Box sx={{ mb: 3 }}>
                <Typography variant="h4" sx={{ fontWeight: 800, mb: 0.5, color: 'text.primary', letterSpacing: '-0.5px' }}>
                    New Supply
                </Typography>
                <ListBreadcrumbs />
            </Box>
            <Box display="flex" justifyContent="center">
                <Card sx={{ width: '100%', maxWidth: 800, boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.05), 0 4px 6px -4px rgb(0 0 0 / 0.05)', borderRadius: 3 }}>
                    <CardContent>
                        <SimpleForm>
                            <TextInput source="reference" label="Reference" validate={required()} fullWidth />
                            <DateInput source="supplied_date" label="Supplied Date" validate={required()} fullWidth />
                            <TextInput source="vendor_name" label="Vendor Name" validate={required()} fullWidth />
                            <TextInput source="store_name" label="Store" validate={required()} fullWidth />
                            <NumberInput source="item_count" label="Items" fullWidth />
                            <NumberInput source="total_amount" label="Total Amount" fullWidth />
                            <BooleanInput source="settled" label="Settled" />
                        </SimpleForm>
                    </CardContent>
                </Card>
            </Box>
        </Box>
    </Create>
);