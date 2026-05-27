import * as React from 'react';
import { Show, SimpleShowLayout, TextField, ReferenceField, DateField, NumberField } from 'react-admin';
import { Card, CardContent, Typography, Divider, Box } from '@mui/material';
import Grid from '@mui/material/Grid';
import { ListBreadcrumbs } from '../../../../ListBreadcrumbs';

export const LivestockSaleShow = () => (
    <Show
        title={false}
        sx={{
            "& .RaShow-main": {
                display: "flex",
                justifyContent: "center",
                padding: 2,
            },
        }}
    >
        <Box sx={{ width: '100%', maxWidth: 800 }}>
            <ListBreadcrumbs />
            <Card elevation={0} sx={{ borderRadius: 3, width: '100%', overflow: "hidden" }}>
                <CardContent sx={{ p: 4 }}>
                    <Grid container spacing={2} alignItems="center" justifyContent="space-between" mb={2}>
                        <Grid size={{ xs: 12, md: 12 }}>
                            <Typography variant="h5" fontWeight="bold">
                                Livestock Sale Details
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                View the details of the livestock sale entry.
                            </Typography>
                        </Grid>
                    </Grid>

                    <Divider sx={{ mb: 4 }} />

                    <SimpleShowLayout>
                        <TextField source="id" label="ID" />
                        <ReferenceField source="livestock_id" reference="livestocks" label="Livestock">
                            <TextField source="tag_no" />
                        </ReferenceField>
                        <ReferenceField source="customer_id" reference="customers" label="Customer">
                            <TextField source="name" />
                        </ReferenceField>
                        <DateField source="sale_date" label="Sale Date" />
                        <NumberField source="quantity" label="Quantity" />
                        <NumberField source="sale_price" label="Sale Price" options={{ style: 'currency', currency: 'USD' }} />
                        <TextField source="payment_status" label="Payment Status" sx={{ textTransform: 'capitalize' }} />
                        <TextField source="remarks" label="Remarks" />
                    </SimpleShowLayout>
                </CardContent>
            </Card>
        </Box>
    </Show>
);