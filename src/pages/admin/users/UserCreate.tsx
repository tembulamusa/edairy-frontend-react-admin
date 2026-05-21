import * as React from 'react';
import {
    Create,
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
} from '@mui/material';

import Grid from '@mui/material/Grid';
import { ResourceCreateToolbar } from '../../../components/forms/ResourceCreateToolbar';

export const UserCreate = () => {
    return (
        <Create
            resource="users"
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
                        toolbar={
                            <ResourceCreateToolbar
                                resource="users"
                                successMessage="User created successfully"
                            />
                        }
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