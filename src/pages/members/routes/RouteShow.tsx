import * as React from 'react';
import { Show, SimpleShowLayout, TextField, DateField } from 'react-admin';
import { Card, CardContent, Typography, Divider } from '@mui/material';
import Grid from '@mui/material/Grid';

export const RouteShow = () => (
    <Show title={false}>
        <Card elevation={0} sx={{ borderRadius: 3, width: '100%', overflow: "hidden" }}>
            <CardContent sx={{ p: 4 }}>
                <Grid container spacing={2} alignItems="center" justifyContent="space-between" mb={2}>
                    <Grid size={{ xs: 12, md: 12 }}>
                        <Typography variant="h5" fontWeight="bold">
                            Route Details
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            View the details of the route.
                        </Typography>
                    </Grid>
                </Grid>
                <Divider sx={{ mb: 4 }} />
                <SimpleShowLayout>
                    <DateField source="created_at" label="Created At" />
                    <TextField source="location_name" label="Location" />
                    <TextField source="code" label="Route Code" />
                    <TextField source="name" label="Route Name" />
                    <TextField source="description" label="Description" />
                </SimpleShowLayout>
            </CardContent>
        </Card>
    </Show>
);