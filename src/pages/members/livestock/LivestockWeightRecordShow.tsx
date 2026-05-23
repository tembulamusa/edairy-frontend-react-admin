import * as React from 'react';
import { Show, SimpleShowLayout, TextField, ReferenceField, DateField, NumberField } from 'react-admin';
import { Card, CardContent, Typography, Divider, Box } from '@mui/material';
import Grid from '@mui/material/Grid';
import { ListBreadcrumbs } from '../../../../ListBreadcrumbs';

export const LivestockWeightRecordShow = () => (
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
                                Weight Record Details
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                View the details of the livestock weight entry.
                            </Typography>
                        </Grid>
                    </Grid>

                    <Divider sx={{ mb: 4 }} />

                    <SimpleShowLayout>
                        <TextField source="id" label="ID" />
                        <ReferenceField source="livestock_id" reference="livestocks" label="Livestock">
                            <TextField source="tag_no" />
                        </ReferenceField>
                        <NumberField source="weight" label="Weight (kg)" />
                        <DateField source="recorded_at" label="Recorded At" />
                        <TextField source="remarks" label="Remarks" />
                    </SimpleShowLayout>
                </CardContent>
            </Card>
        </Box>
    </Show>
);