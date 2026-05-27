import * as React from 'react';
import {
    Create,
    SimpleForm,
    TextInput,
    DateInput,
    ReferenceInput,
    SelectInput,
    required,
} from 'react-admin';

import { Card, CardContent, Typography, Divider, Stack, Box } from '@mui/material';

import Grid from '@mui/material/Grid';
import { ListBreadcrumbs } from '../../../../ListBreadcrumbs';
import { ResourceCreateToolbar } from '../../../components/forms/ResourceCreateToolbar';

export const AssetAssignmentCreate = () => (
    <Create
        resource="asset-assignments"
        title={false}
        sx={{
            '& .RaCreate-main': {
                display: 'flex',
                justifyContent: 'center',
                padding: 2,
            },
        }}
    >
        <Box sx={{ width: '100%', maxWidth: 1100 }}>
            <ListBreadcrumbs />
            <Card elevation={0} sx={{ borderRadius: 3, width: '100%', overflow: 'hidden' }}>
                <CardContent sx={{ p: 4 }}>
                    <Grid container spacing={2} alignItems="center" justifyContent="space-between" mb={2}>
                        <Grid item xs={12} md={6}>
                            <Typography variant="h5" fontWeight="bold">
                                New Asset Assignment
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Assign an existing fixed asset to a user or department.
                            </Typography>
                        </Grid>
                    </Grid>

                    <Divider sx={{ mb: 4 }} />

                    <SimpleForm
                        toolbar={
                            <ResourceCreateToolbar
                                resource="asset-assignments"
                                successMessage="Asset assigned successfully"
                                saveLabel="Assign Asset"
                                saveAndAddLabel="Assign and Add New"
                            />
                        }
                        sx={{
                            '& .RaSimpleForm-toolbar': { mt: 3, px: 0 },
                            '& .MuiInputBase-root': { borderRadius: 2 },
                        }}
                    >
                        <Stack spacing={3} sx={{ width: '100%' }}>
                            <Grid container spacing={2}>
                                <Grid item xs={12} md={6}>
                                    <ReferenceInput source="asset_id" reference="fixed-assets">
                                        <SelectInput
                                            label="Asset"
                                            optionText="asset_name"
                                            fullWidth
                                            variant="outlined"
                                            validate={required()}
                                        />
                                    </ReferenceInput>
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <ReferenceInput source="assigned_to_id" reference="users">
                                        <SelectInput
                                            label="Assign To User"
                                            optionText="name"
                                            fullWidth
                                            variant="outlined"
                                            validate={required()}
                                        />
                                    </ReferenceInput>
                                </Grid>
                                <Grid item xs={12} md={4}>
                                    <DateInput
                                        source="assigned_at"
                                        label="Assignment Date"
                                        fullWidth
                                        variant="outlined"
                                        validate={required()}
                                    />
                                </Grid>
                                <Grid item xs={12} md={4}>
                                    <DateInput source="due_date" label="Due Date" fullWidth variant="outlined" />
                                </Grid>
                                <Grid item xs={12} md={4}>
                                    <SelectInput
                                        source="status"
                                        label="Status"
                                        choices={[
                                            { id: 'ASSIGNED', name: 'ASSIGNED' },
                                            { id: 'RETURNED', name: 'RETURNED' },
                                        ]}
                                        defaultValue="ASSIGNED"
                                        fullWidth
                                        variant="outlined"
                                        validate={required()}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextInput
                                        source="notes"
                                        label="Assignment Notes"
                                        multiline
                                        rows={3}
                                        fullWidth
                                        variant="outlined"
                                    />
                                </Grid>
                            </Grid>
                        </Stack>
                    </SimpleForm>
                </CardContent>
            </Card>
        </Box>
    </Create>
);
