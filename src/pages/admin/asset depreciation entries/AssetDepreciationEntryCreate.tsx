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

export const AssetDepreciationEntryCreate = () => {
    const [create] = useCreate();
    const notify = useNotify();
    const redirect = useRedirect();

    const handleSubmit = (data: any) => {
        create(
            "asset-depreciation-entries",
            { data },
            {
                onSuccess: () => {
                    notify("Depreciation entry recorded successfully", { type: "success" });
                    redirect("list", "asset-depreciation-entries");
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
                                <Typography variant="h5" fontWeight="bold">New Depreciation Entry</Typography>
                                <Typography variant="body2" color="text.secondary">Record a new depreciation value for a specific fixed asset.</Typography>
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
                                        <DateInput source="entry_date" label="Entry Date" fullWidth variant="outlined" validate={required()} />
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <NumberInput source="depreciation_amount" label="Depreciation Amount" fullWidth variant="outlined" validate={required()} />
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <NumberInput source="book_value_after" label="Book Value After" fullWidth variant="outlined" />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextInput source="notes" label="Administrative Notes" multiline rows={3} fullWidth variant="outlined" />
                                    </Grid>
                                </Grid>
                            </Stack>

                            <Box sx={{ display: "flex", justifyContent: "space-between", mt: 5 }}>
                                <Button type="button" variant="outlined" onClick={() => redirect('/asset-depreciation-entries')}>
                                    Cancel
                                </Button>
                                <Button variant="contained" size="large" type="submit" sx={{ px: 4, borderRadius: 2 }}>
                                    Save Entry
                                </Button>
                            </Box>
                        </SimpleForm>
                    </CardContent>
                </Card>
            </Box>
        </Create>
    );
};