import * as React from 'react';
import { Show, SimpleShowLayout, TextField, ReferenceField, DateField } from 'react-admin';
import { Card, CardContent, Typography, Divider, Box } from '@mui/material';
import Grid from '@mui/material/Grid';
import { ListBreadcrumbs } from '../../../../ListBreadcrumbs';

export const LivestockBreedingRecordShow = () => (
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
                                Livestock Breeding Details
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                View the details of the livestock breeding record.
                            </Typography>
                        </Grid>
                    </Grid>

                    <Divider sx={{ mb: 4 }} />

                    <SimpleShowLayout>
                        <TextField source="id" label="ID" />
                        <ReferenceField source="livestock_id" reference="livestocks" label="Livestock">
                            <TextField source="tag_no" />
                        </ReferenceField>
                        <TextField source="breeding_type" label="Breeding Type" sx={{ textTransform: 'capitalize' }} />
                        <DateField source="breeding_date" label="Breeding Date" />
                        <ReferenceField source="sire_id" reference="livestocks" label="Sire" emptyText="N/A">
                            <TextField source="tag_no" />
                        </ReferenceField>
                        <ReferenceField source="dam_id" reference="livestocks" label="Dam" emptyText="N/A">
                            <TextField source="tag_no" />
                        </ReferenceField>
                        <DateField source="expected_calving_date" label="Expected Calving Date" />
                        <TextField source="result" label="Result" />
                        <TextField source="remarks" label="Remarks" />
                    </SimpleShowLayout>
                </CardContent>
            </Card>
        </Box>
    </Show>
);