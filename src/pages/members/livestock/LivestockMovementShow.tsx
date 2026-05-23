import * as React from 'react';
import { Show, SimpleShowLayout, TextField, ReferenceField, DateField } from 'react-admin';
import { Card, CardContent, Typography, Divider, Box } from '@mui/material';
import Grid from '@mui/material/Grid';
import { ListBreadcrumbs } from '../../../../ListBreadcrumbs';

export const LivestockMovementShow = () => (
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
                                Livestock Movement Details
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                View the details of the livestock movement or transfer.
                            </Typography>
                        </Grid>
                    </Grid>

                    <Divider sx={{ mb: 4 }} />

                    <SimpleShowLayout>
                        <TextField source="id" label="ID" />
                        <TextField source="livestock_tag_no" label="Livestock Tag No" />
                        <TextField source="from_location" label="From Location" />
                        <TextField source="to_location" label="To Location" />
                        <DateField source="movement_date" label="Movement Date" />
                        <TextField source="movement_type" label="Movement Type" sx={{ textTransform: 'capitalize' }} />
                        <TextField source="transporter" label="Transporter" />
                        <TextField source="remarks" label="Remarks" />
                    </SimpleShowLayout>
                </CardContent>
            </Card>
        </Box>
    </Show>
);