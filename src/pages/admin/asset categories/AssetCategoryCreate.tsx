import * as React from 'react';
import {
    Create,
    SimpleForm,
    TextInput,
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

export const AssetCategoryCreate = () => {
    const [create] = useCreate();
    const notify = useNotify();
    const redirect = useRedirect();

    const handleSubmit = (data: any) => {
        create(
            "asset-categories",
            { data },
            {
                onSuccess: () => {
                    notify("Asset Category created successfully", { type: "success" });
                    redirect("list", "asset-categories");
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
                    justifyContent: "center", // Center the card
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
                            <Grid size={{ xs: 12, md: 6 }}>
                                <Typography variant="h5" fontWeight="bold">Create Asset Category</Typography>
                                <Typography variant="body2" color="text.secondary">Define a new category for assets.</Typography>
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
                                <TextInput source="name" label="Category Name" validate={required()} variant="outlined" fullWidth />
                                <TextInput source="description" label="Description" multiline rows={3} variant="outlined" fullWidth />
                            </Stack>

                            <Box sx={{ display: "flex", justifyContent: "space-between", mt: 5 }}>
                                <Button
                                    type="button"
                                    variant="outlined"
                                    onClick={() => redirect('/asset-categories')}
                                >
                                    Cancel
                                </Button>
                                <Button
                                    variant="contained"
                                    size="large"
                                    type="submit"
                                    sx={{ px: 4, borderRadius: 2 }}
                                >
                                    Save Category
                                </Button>
                            </Box>
                        </SimpleForm>
                    </CardContent>
                </Card>
            </Box>
        </Create>
    );
};