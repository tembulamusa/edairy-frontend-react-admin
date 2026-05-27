import * as React from 'react';
import { Show, SimpleShowLayout, TextField, ReferenceField, DateField } from 'react-admin';
import { Card, CardContent, Typography, Divider, Box } from '@mui/material';
import Grid from '@mui/material/Grid';
import { ListBreadcrumbs } from '../../../../ListBreadcrumbs';

export const LivestockHealthRecordShow = () => (
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
                                Health Record Details
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                View the details of the livestock health entry.
                            </Typography>
                        </Grid>
                    </Grid>

                    <Divider sx={{ mb: 4 }} />

                    <SimpleShowLayout>
                        <TextField source="id" label="ID" />
                        <TextField source="livestock_tag_no" label="Livestock Tag No" />
                        <TextField source="record_type" label="Record Type" sx={{ textTransform: 'capitalize' }} />
                        <TextField source="diagnosis" label="Diagnosis" />
                        <TextField source="medication" label="Medication" />
                        <TextField source="dosage" label="Dosage" />
                        <DateField source="treatment_date" label="Treatment Date" />
                        <DateField source="next_visit_date" label="Next Visit Date" />
                        <TextField source="veterinarian" label="Date" />
                        <TextField source="notes" label="Veterinarian" />
                    </SimpleShowLayout>
                </CardContent>
            </Card>
        </Box>
    </Show>
);