import * as React from 'react';
import { Create, SimpleForm, TextInput, DateInput, NumberInput, BooleanInput, required } from 'react-admin';
import { Card, CardContent, Typography, Box, Stack } from '@mui/material';
import { ListBreadcrumbs } from '../../../../ListBreadcrumbs';

export const SupplyCreate = () => (
    <Create title="Create Supply">
        <Box sx={{ p: { xs: 2, md: 3 } }}>
            <Box sx={{ mb: 3 }}>
                <Typography variant="h4" sx={{ fontWeight: 800, mb: 0.5, color: 'text.primary', letterSpacing: '-0.5px' }}>
                    New Supply
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                    Enter the details to record a new supply.
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
                            <TextInput source="reference" label="Reference" validate={required()} fullWidth variant="outlined" />
                            <DateInput source="supplied_date" label="Supplied Date" validate={required()} fullWidth variant="outlined" />
                        </Stack>
                        <Stack direction={{ xs: 'column', md: 'row' }} spacing={3} width="100%">
                            <TextInput source="vendor_name" label="Vendor Name" validate={required()} fullWidth variant="outlined" />
                            <TextInput source="store_name" label="Store" fullWidth variant="outlined" />
                        </Stack>
                        <Stack direction={{ xs: 'column', md: 'row' }} spacing={3} width="100%">
                            <NumberInput source="item_count" label="Items" fullWidth variant="outlined" />
                            <NumberInput source="total_amount" label="Total Amount" fullWidth variant="outlined" />
                        </Stack>
                    </SimpleForm>
                    </CardContent>
                </Card>
            </Box>
        </Box>
    </Create>
);