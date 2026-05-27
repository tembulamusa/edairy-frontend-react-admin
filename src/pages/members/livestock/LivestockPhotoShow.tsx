import * as React from 'react';
import {
    Show,
    SimpleShowLayout,
    TextField,
    DateField,
    ReferenceField,
    ImageField
} from 'react-admin';
import { Card, CardContent, Divider, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';

export const LivestockPhotoShow = () => {
    return (
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
            <Card
                elevation={0}
                sx={{
                    borderRadius: 3,
                    width: '100%',
                    overflow: "hidden",
                }}
            >
                <CardContent sx={{ p: 4 }}>
                    <Grid container spacing={2} alignItems="center" justifyContent="space-between" mb={2}>
                        <Grid size={{ xs: 12 }}>
                            <Typography variant="h5" fontWeight="bold">
                                Livestock Photo Details
                            </Typography>
                        </Grid>
                    </Grid>

                    <Divider sx={{ mb: 4 }} />

                    <SimpleShowLayout>
                        <ReferenceField source="livestock_id" reference="livestocks">
                            <TextField source="name" />
                        </ReferenceField>
                        <ImageField source="image" title="description" />
                        <TextField source="description" label="Description" />
                        <DateField source="date_taken" label="Date Taken" />
                    </SimpleShowLayout>
                </CardContent>
            </Card>
        </Show>
    );
};