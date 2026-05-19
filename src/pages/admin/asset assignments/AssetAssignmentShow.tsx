import * as React from 'react';
import {
    Show,
    SimpleShowLayout,
    TextField,
    DateField,
    ReferenceField,
} from 'react-admin';
import {
    Card,
    CardContent,
    Typography,
    Divider,
    Box,
} from '@mui/material';
import Grid from '@mui/material/Grid';
import { ListBreadcrumbs } from '../../../../ListBreadcrumbs';

export const AssetAssignmentShow = () => (
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
        <Box sx={{ width: '100%', maxWidth: 1100 }}>
            <ListBreadcrumbs />
            <Card
                elevation={0}
                sx={{
                    borderRadius: 3,
                    width: '100%',
                    overflow: "hidden",
                }}
            >
                <CardContent sx={{ p: 4 }}>
                    <Grid
                        container
                        spacing={2}
                        alignItems="center"
                        justifyContent="space-between"
                        mb={2}
                    >
                        <Grid item xs={12} md={6}>
                            <Typography variant="h5" fontWeight="bold">Asset Assignment Details</Typography>
                            <Typography variant="body2" color="text.secondary">View the details of the assets assigned to this specific entity.</Typography>
                        </Grid>
                    </Grid>

                    <Divider sx={{ mb: 4 }} />

                    <SimpleShowLayout sx={{ "& .RaSimpleShowLayout-stack": { gap: 2 } }}>
                        <Grid container spacing={3}>
                            <Grid item xs={12} md={6}>
                                <ReferenceField source="asset_id" reference="fixed-assets" link="show">
                                    <TextField source="asset_name" label="Asset Assigned" />
                                </ReferenceField>
                            </Grid>

                            <Grid item xs={12} md={6}>
                                <ReferenceField source="assigned_to" reference="users" link="show">
                                    <TextField source="name" label="Recipient" />
                                </ReferenceField>
                            </Grid>

                            <Grid item xs={12} md={4}>
                                <DateField source="assignment_date" label="Date of Assignment" />
                            </Grid>

                            <Grid item xs={12} md={4}>
                                <DateField source="due_date" label="Expected Return" />
                            </Grid>

                            <Grid item xs={12} md={4}>
                                <TextField source="status" label="Assignment Status" />
                            </Grid>

                            <Grid item xs={12}>
                                <Divider sx={{ my: 1 }} />
                            </Grid>

                            <Grid item xs={12}>
                                <TextField
                                    source="notes"
                                    label="Administrative Remarks"
                                    sx={{
                                        '& .RaTextField-value': { whiteSpace: 'pre-wrap' }
                                    }}
                                />
                            </Grid>
                        </Grid>
                    </SimpleShowLayout>
                </CardContent>
            </Card>
        </Box>
    </Show>
);