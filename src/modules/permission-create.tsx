import {
    Create,
    SimpleForm,
    TextInput,
    required,
    Toolbar,
    SaveButton,
    useNotify,
    useRedirect,
} from 'react-admin';
import { useRedirectToCreateWithReload } from '../components/forms/redirect-to-create-with-reload';
import { useFormContext } from 'react-hook-form';

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

const PermissionCreateToolbar = () => {
    const redirect = useRedirect();
    const redirectToCreateWithReload = useRedirectToCreateWithReload();
    const notify = useNotify();

    return (
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', backgroundColor: 'transparent', px: 0 }}>
            <Box sx={{ display: 'flex', gap: 1 }}>
                <SaveButton label="Save" variant="contained" redirect="list" />
                <SaveButton
                    label="Save and Add New"
                    variant="contained"
                    mutationOptions={{
                        onSuccess: () => {
                            redirectToCreateWithReload('permissions', 'Permission created successfully');
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
                onClick={() => redirect('/permissions')}
            >
                Cancel
            </Button>
        </Toolbar>
    );
};

export const PermissionCreate = () => {
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
                        <Grid size={{ xs: 12, md: 12 }}>
                            <Typography
                                variant="h5"
                                fontWeight="bold"
                            >
                                Create Permission
                            </Typography>

                            <Typography
                                variant="body2"
                                color="text.secondary"
                            >
                                Define a new system permission.
                            </Typography>
                        </Grid>
                    </Grid>

                    <Divider sx={{ mb: 4 }} />

                    <SimpleForm
                        toolbar={<PermissionCreateToolbar />}
                        sx={{
                            "& .RaSimpleForm-toolbar": {
                                mt: 3,
                                px: 0,
                                backgroundColor: 'transparent',
                            },
                            "& .MuiInputBase-root": {
                                borderRadius: 2,
                            },
                        }}
                    >
                        <Stack spacing={3} sx={{ width: '100%' }}>
                            <TextInput
                                source="name"
                                label="Permission Name"
                                validate={required()} // Ensure validation is applied
                                variant="outlined"
                                fullWidth
                            />
                            <TextInput
                                source="guard_name"
                                defaultValue="web"
                                sx={{ display: 'none' }}
                            />
                        </Stack>
                    </SimpleForm>
                </CardContent>
            </Card>
        </Create>
    );
};
