import * as React from 'react';
import { Show, SimpleShowLayout, TextField, ReferenceField, DateField } from 'react-admin';
import { Card, CardContent, Typography, Divider, Box } from '@mui/material';
import Grid from '@mui/material/Grid';
import { ListBreadcrumbs } from '../../../../ListBreadcrumbs';

export const LivestockShow = () => (
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
                                Livestock Details
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                View the details of the livestock animal.
                            </Typography>
                        </Grid>
                    </Grid>

                    <Divider sx={{ mb: 4 }} />

                    <SimpleShowLayout>
                        <TextField source="id" label="ID" />
                        <TextField source="tag_no" label="Tag Number" />
                        <ReferenceField source="livestock_category_id" reference="livestock-categories" label="Category">
                            <TextField source="category_name" />
                        </ReferenceField>
                        <ReferenceField source="livestock_breed_id" reference="livestock-breeds" label="Breed">
                            <TextField source="breed_name" />
                        </ReferenceField>
                        <DateField source="date_of_birth" label="Date of Birth" />
                        <TextField source="gender" label="Gender" sx={{ textTransform: 'capitalize' }} />
                        <TextField source="status" label="Status" sx={{ textTransform: 'capitalize' }} />
                    </SimpleShowLayout>
                </CardContent>
            </Card>
        </Box>
    </Show>
);