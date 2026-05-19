import {
    Create,
    SimpleForm,
    TextInput,
    required,
} from 'react-admin';

import {
    Card,
    CardContent,
    Typography,
    Divider,
    Stack,
} from '@mui/material';

import Grid from '@mui/material/Grid';

export const RoleCreate = () => {
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
                elevation={3}
                sx={{
                    borderRadius: 3,
                    maxWidth: 600,
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
                                Create Role
                            </Typography>

                            <Typography
                                variant="body2"
                                color="text.secondary"
                            >
                                Define a new system role and its guard.
                            </Typography>
                        </Grid>
                    </Grid>

                    <Divider sx={{ mb: 4 }} />

                    <SimpleForm
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
                                label="Role Name"
                                validate={required()}
                                variant="outlined"
                                fullWidth
                            />
                            <TextInput
                                source="guard_name"
                                label="Guard Name"
                                defaultValue="web"
                                variant="outlined"
                                fullWidth
                            />
                        </Stack>
                    </SimpleForm>
                </CardContent>
            </Card>
        </Create>
    );
};