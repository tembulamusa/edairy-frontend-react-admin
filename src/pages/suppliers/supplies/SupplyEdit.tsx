import * as React from 'react';
import { Edit, SimpleForm, TextInput, DateInput, NumberInput, BooleanInput, required } from 'react-admin';
import { Card, CardContent, Typography, Divider, Stack } from '@mui/material';

export const SupplyEdit = () => (
    <Edit
        sx={{ "& .RaEdit-main": { padding: 2, justifyContent: "center", display: "flex" } }}
    >
        <Card elevation={0} sx={{ borderRadius: 3, width: '100%' }}>
            <CardContent sx={{ p: 4 }}>
                <Typography variant="h5" fontWeight="bold" mb={1}>
                    Edit Supply
                </Typography>
                <Typography variant="body2" color="text.secondary" mb={2}>
                    Update the details for this supply record.
                </Typography>
                <Divider sx={{ mb: 4 }} />
                <SimpleForm sx={{ "& .MuiInputBase-root": { borderRadius: 2 } }}>
                    <TextInput source="reference" label="Reference" validate={required()} fullWidth />
                    <DateInput source="supplied_date" label="Supplied Date" validate={required()} fullWidth />
                    <TextInput source="vendor_name" label="Vendor Name" validate={required()} fullWidth />
                    <TextInput source="store_name" label="Store" fullWidth />
                    <NumberInput source="item_count" label="Items" fullWidth />
                    <NumberInput source="total_amount" label="Total Amount" fullWidth />
                    <BooleanInput source="settled" label="Settled" />
                </SimpleForm>
            </CardContent>
        </Card>
    </Edit>
);