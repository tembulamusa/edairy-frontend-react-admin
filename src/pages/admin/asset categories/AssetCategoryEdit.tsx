import * as React from 'react';
import {
    Edit,
    SimpleForm,
    TextInput,
    required,
    useNotify,
    useRedirect,
    useUpdate,
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

export const AssetCategoryEdit = () => {
    const [update] = useUpdate();
    const notify = useNotify();
    const redirect = useRedirect();

    const handleSubmit = (data: any) => {
        update(
            "asset-categories",
            { id: data.id, data },
            {
                onSuccess: () => {
                    notify("Asset Category updated successfully", { type: "success" });
                    redirect("list", "asset-categories");
                },
            }
        );
    };

    return (
        <Edit
            title={false}
            sx={{
                "& .RaEdit-main": {
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
                            <Grid size={{ xs: 12, md: 6 }}>
                                <Typography variant="h5" fontWeight="bold">Edit Asset Category</Typography>
                                <Typography variant="body2" color="text.secondary">Update the information below for this asset category.</Typography>
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
                                    Save Changes
                                </Button>
                            </Box>
                        </SimpleForm>
                    </CardContent>
                </Card>
            </Box>
        </Edit>
    );
};