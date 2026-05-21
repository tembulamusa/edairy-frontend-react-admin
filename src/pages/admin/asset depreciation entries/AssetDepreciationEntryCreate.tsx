import * as React from 'react';
import {
    Create,
    SimpleForm,
    TextInput,
    NumberInput,
    DateInput,
    ReferenceInput,
    SelectInput,
    required,
    useNotify,
    useRedirect,
    Toolbar,
    SaveButton,
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

const AssetDepreciationEntryCreateToolbar = () => {
    const notify = useNotify();
    const redirect = useRedirect();

    return (
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', backgroundColor: 'transparent', px: 0 }}>
            <Box sx={{ display: 'flex', gap: 1 }}>
                <SaveButton label="Save" variant="contained" redirect="list" />
                <SaveButton
                    label="Save and Add New"
                    variant="contained"
                    mutationOptions={{
                        onSuccess: () => {
                            notify('Depreciation entry recorded successfully', { type: 'success' });
                            redirect('create', 'asset-depreciation-entries');
                        },
                    }}
                />
            </Box>
            <Button
                variant="contained"
                sx={{
                    backgroundColor: 'grey.500',
                    color: 'white',
                    '&:hover': { backgroundColor: 'grey.700' }
                }}
                onClick={() => redirect('/asset-depreciation-entries')}
            >
                Cancel
            </Button>
        </Toolbar>
    );
};

export const AssetDepreciationEntryCreate = () => {
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
                            <Grid item xs={12} md={12}>
                                <Typography variant="h5" fontWeight="bold">New Depreciation Entry</Typography>
                                <Typography variant="body2" color="text.secondary">Record a new depreciation value for a specific fixed asset.</Typography>
                            </Grid>
                        </Grid>

                        <Divider sx={{ mb: 4 }} />

                        <SimpleForm
                            // Ensure the form itself takes full width
                            toolbar={<AssetDepreciationEntryCreateToolbar />}
                            sx={{
                                "& .RaSimpleForm-toolbar": {
                                    mt: 3,
                                    px: 0,
                                    backgroundColor: 'transparent',
                                },
                                "& .MuiInputBase-root": { borderRadius: 2 },
                            }}
                        >
                            {/* Removed Stack and directly used Grid container for full width */}
                            {/* Row 1: Asset and Depreciation Date */}
                            <Grid container spacing={2} alignItems="flex-start" sx={{ mb: 2 }}>
                                <Grid item xs={12} md={6}>
                                    <ReferenceInput source="asset_id" reference="fixed-assets">
                                        <SelectInput label="Asset" optionText="asset_name" fullWidth variant="outlined" validate={required()} />
                                    </ReferenceInput>
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <DateInput source="depreciation_date" label="Depreciation Date" fullWidth variant="outlined" validate={required()} />
                                </Grid>
                            </Grid>

                            {/* Row 2: Depreciation Amount and Book Value */}
                            <Grid container spacing={2} alignItems="flex-start" sx={{ mb: 2 }}>
                                <Grid item xs={12} md={6}>
                                    <NumberInput source="depreciation_amount" label="Depreciation Amount" fullWidth variant="outlined" validate={required()} />
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <NumberInput source="book_value" label="Book Value" fullWidth variant="outlined" validate={required()} />
                                </Grid>
                            </Grid>

                            {/* Row 3: Administrative Notes (full width) */}
                            <Grid container spacing={2} alignItems="flex-start">
                                <Grid item xs={12}>
                                    <TextInput source="notes" label="Administrative Notes" multiline rows={3} fullWidth variant="outlined" />
                                </Grid>
                            </Grid>
                        </SimpleForm>
                    </CardContent>
                </Card>
            </Box>
        </Create>
    );
};