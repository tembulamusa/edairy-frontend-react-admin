import * as React from 'react';
import { Show, SimpleShowLayout, TextField, DateField, NumberField, BooleanField } from 'react-admin';
import { Card, CardContent, Typography, Divider } from '@mui/material';

export const SupplyShow = () => (
    <Show
        sx={{ "& .RaShow-main": { padding: 2, justifyContent: "center", display: "flex" } }}
    >
        <Card elevation={0} sx={{ borderRadius: 3, width: '100%' }}>
            <CardContent sx={{ p: 4 }}>
                <Typography variant="h5" fontWeight="bold" mb={1}>
                    Supply Details
                </Typography>
                <Typography variant="body2" color="text.secondary" mb={2}>
                    Detailed view of the supply record.
                </Typography>
                <Divider sx={{ mb: 4 }} />
                <SimpleShowLayout>
                    <TextField source="reference" label="Reference" />
                    <DateField source="supplied_date" label="Supplied Date" />
                    <TextField source="vendor_name" label="Vendor Name" />
                    <TextField source="store_name" label="Store" />
                    <NumberField source="item_count" label="Items" />
                    <NumberField source="total_amount" label="Total Amount" />
                    <BooleanField source="settled" label="Settled" />
                </SimpleShowLayout>
            </CardContent>
        </Card>
    </Show>
);