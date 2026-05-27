import * as React from 'react';
import { Show, SimpleShowLayout, TextField, DateField } from 'react-admin';
import { Card, CardContent, Typography, Divider, Box } from '@mui/material';
import Grid from '@mui/material/Grid';
import { ListBreadcrumbs } from '../../../../ListBreadcrumbs';

export const LivestockDeathShow = () => (
    <Show
        title={false}
        sx={{ "& .RaShow-main": { display: "flex", justifyContent: "center", padding: 2 } }}
    >
        <Box sx={{ width: '100%', maxWidth: 800 }}>
            <ListBreadcrumbs />
            <Card elevation={0} sx={{ borderRadius: 3, width: '100%', overflow: "hidden" }}>
                <CardContent sx={{ p: 4 }}>
                    <Grid container spacing={2} alignItems="center" justifyContent="space-between" mb={2}>
                        <Grid size={{ xs: 12, md: 12 }}>
                            <Typography variant="h5" fontWeight="bold">
                                Death Record Details
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                View the details of the livestock death entry.
                            </Typography>
                        </Grid>
                    </Grid>

                    <Divider sx={{ mb: 4 }} />

                    <SimpleShowLayout>
                        <TextField source="id" label="ID" />
                        <TextField source="livestock_tag_no" label="Livestock Tag No" />
                        <DateField source="death_date" label="Death Date" />
                        <TextField source="cause_of_death" label="Date" />
                        <TextField source="disposal_method" label="Cause" />
                        <TextField source="remarks" label="Disposal Method" />
                    </SimpleShowLayout>
                </CardContent>
            </Card>
        </Box>
    </Show>
);