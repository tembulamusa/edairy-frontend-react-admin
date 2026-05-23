import * as React from 'react';
import { Show, SimpleShowLayout, TextField, DateField } from 'react-admin';
import { Card, CardContent, Typography, Divider } from '@mui/material';
import Grid from '@mui/material/Grid';

export const PaymentTypeShow = () => (
    <Show title={false}>
        <Card elevation={0} sx={{ borderRadius: 3, width: '100%', overflow: "hidden" }}>
            <CardContent sx={{ p: 4 }}>
                <Grid container spacing={2} alignItems="center" justifyContent="space-between" mb={2}>
                    <Grid size={{ xs: 12, md: 12 }}>
                        <Typography variant="h5" fontWeight="bold">
                            Payment Type Details
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            View the details of the payment type.
                        </Typography>
                    </Grid>
                </Grid>

                <Divider sx={{ mb: 4 }} />

                <SimpleShowLayout>
                    <TextField source="id" label="ID" />
                    <DateField source="created_at" label="Created At" />
                    <TextField source="name" label="Name" />
                </SimpleShowLayout>
            </CardContent>
        </Card>
    </Show>
);