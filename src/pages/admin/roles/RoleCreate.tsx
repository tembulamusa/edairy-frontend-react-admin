import * as React from 'react';
import {
    Create,
    SimpleForm,
    TextInput,
    required,
    Toolbar,
    SaveButton,
    useNotify,
    useRedirect,
    ReferenceArrayInput,
    CheckboxGroupInput,
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

const RoleCreateToolbar = () => {
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
                            notify('Role created successfully', { type: 'success' });
                            redirect('create', 'roles');
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
                onClick={() => redirect('/roles')}
            >
                Cancel
            </Button>
        </Toolbar>
    );
};

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
                                Define a new system role and assign permissions.
                            </Typography>
                        </Grid>
                    </Grid>

                    <Divider sx={{ mb: 4 }} />

                    <SimpleForm
                        toolbar={<RoleCreateToolbar />}
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

                            <ReferenceArrayInput source="permission_ids" reference="permissions">
                                <CheckboxGroupInput
                                    label="Permissions"
                                    optionText="name"
                                    fullWidth
                                    sx={{
                                        '& .MuiFormGroup-root': {
                                            display: 'grid',
                                            gridTemplateColumns: {
                                                xs: '1fr',
                                                sm: '1fr 1fr',
                                                md: '1fr 1fr 1fr',
                                                lg: '1fr 1fr 1fr 1fr',
                                            },
                                            gap: 1,
                                        }
                                    }}
                                />
                            </ReferenceArrayInput>

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