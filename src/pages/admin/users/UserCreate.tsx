import * as React from 'react';
import {
    Create,
    Toolbar,
    SaveButton,
    useNotify,
    SimpleForm,
    TextInput,
    PasswordInput,
    required,
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
} from '@mui/material';
import Button from '@mui/material/Button';

import Grid from '@mui/material/Grid';

const UserCreateToolbar = () => {
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
                            notify('User created successfully', { type: 'success' });
                            // Redirect to create new user, clearing the form
                            // This assumes 'users' is the resource name
                            // If you want to redirect to a specific path, use redirect('/path')
                            // For now, it will redirect to the list page after saving and adding new
                            // If you want to stay on the create page, you'd need to clear the form manually
                            // or use a custom form component that handles this.
                        },
                    }}
                />
            </Box>
            <Button variant="contained" sx={{ backgroundColor: 'grey.500', color: 'white', '&:hover': { backgroundColor: 'grey.700' } }}
                onClick={() => window.history.back()} // Go back to the previous page
            >
                Cancel
            </Button>
        </Toolbar>
    );
};

export const UserCreate = () => {
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
                                Create User
                            </Typography>

                            <Typography
                                variant="body2"
                                color="text.secondary"
                            >
                                Register a new user with their credentials.
                            </Typography>
                        </Grid>
                    </Grid>

                    <Divider sx={{ mb: 4 }} />

                    <SimpleForm
                        toolbar={<UserCreateToolbar />}
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
                                label="Full Name"
                                validate={required()}
                                variant="outlined"
                                fullWidth
                            />
                            <TextInput
                                source="email"
                                label="Email Address"
                                validate={required()}
                                variant="outlined"
                                fullWidth
                            />
                            <PasswordInput
                                source="password"
                                label="Password"
                                validate={required()}
                                variant="outlined"
                                fullWidth
                            />

                            <ReferenceArrayInput source="role_ids" reference="roles">
                                <CheckboxGroupInput
                                    label="Select Roles"
                                    optionText="name"
                                    fullWidth
                                    sx={{
                                        '& .MuiFormGroup-root': {
                                            display: 'grid',
                                            gridTemplateColumns: {
                                                xs: '1fr',
                                                sm: '1fr 1fr',
                                                md: '1fr 1fr 1fr',
                                            },
                                            gap: 1,
                                        }
                                    }}
                                />
                            </ReferenceArrayInput>
                        </Stack>
                    </SimpleForm>
                </CardContent>
            </Card>
        </Create>
    );
};