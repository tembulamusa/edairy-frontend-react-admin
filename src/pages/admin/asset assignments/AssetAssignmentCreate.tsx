import * as React from 'react';
import {
    Create,
    SimpleForm,
    TextInput,
    DateInput,
    ReferenceInput,
    SelectInput,
    required,
    useNotify,
    useRedirect,
    useCreate,
} from 'react-admin';

import {
    Card,
    CardContent,
    Typography,
    Divider,
    Stack,
    Box,
    Button,
} from '@mui/material';

import Grid from '@mui/material/Grid';
import { ListBreadcrumbs } from '../../../../ListBreadcrumbs';

export const AssetAssignmentCreate = () => {
    const [create] = useCreate();
    const notify = useNotify();
    const redirect = useRedirect();

    const handleSubmit = (data: any) => {
        create(
            "asset-assignments",
            { data },
            {
                onSuccess: () => {
                    notify("Asset assigned successfully", { type: "success" });
                    redirect("list", "asset-assignments");
                },
            }
        );
    };

    return (
        <Create
            title={false}
            sx={{
                "& .RaCreate-main": {
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
                                <Typography variant="h5" fontWeight="bold">New Asset Assignment</Typography>
                                <Typography variant="body2" color="text.secondary">Assign an existing fixed asset to a user or department.</Typography>
                            </Grid>
                        </Grid>

                        <Divider sx={{ mb: 4 }} />

                        <SimpleForm
                            toolbar={false}
                            onSubmit={handleSubmit}
                            sx={{
                                "& .RaSimpleForm-toolbar": { mt: 3, px: 0 },
                                "& .MuiInputBase-root": { borderRadius: 2 },
                            }}
                        >
                            <Stack spacing={3} sx={{ width: '100%' }}>
                                <Grid container spacing={2}>
                                    <Grid item xs={12} md={6}>
                                        <ReferenceInput source="asset_id" reference="fixed-assets">
                                            <SelectInput label="Asset" optionText="asset_name" fullWidth variant="outlined" validate={required()} />
                                        </ReferenceInput>
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <ReferenceInput source="assigned_to" reference="users">
                                            <SelectInput label="Assign To User" optionText="name" fullWidth variant="outlined" validate={required()} />
                                        </ReferenceInput>
                                    </Grid>
                                    <Grid item xs={12} md={4}>
                                        <DateInput source="assigned_at" label="Assignment Date" fullWidth variant="outlined" validate={required()} />
                                    </Grid>
                                    <Grid item xs={12} md={4}>
                                        <DateInput source="due_date" label="Due Date" fullWidth variant="outlined" />
                                    </Grid>
                                    <Grid item xs={12} md={4}>
                                        <TextInput source="status" label="Status" defaultValue="active" fullWidth variant="outlined" />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextInput source="notes" label="Assignment Notes" multiline rows={3} fullWidth variant="outlined" />
                                    </Grid>
                                </Grid>
                            </Stack>

                            <Box sx={{ display: "flex", justifyContent: "space-between", mt: 5 }}>
                                <Button type="button" variant="outlined" onClick={() => redirect('/asset-assignments')}>
                                    Cancel
                                </Button>
                                <Button variant="contained" size="large" type="submit" sx={{ px: 4, borderRadius: 2 }}>
                                    Assign Asset
                                </Button>
                            </Box>
                        </SimpleForm>
                    </CardContent>
                </Card>
            </Box>
        </Create>
    );
};