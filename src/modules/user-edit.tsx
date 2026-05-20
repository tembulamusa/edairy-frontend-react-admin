import {
    Edit,
    SimpleForm,
    TextInput,
    PasswordInput,
    Toolbar,
    SaveButton,
    useRedirect,
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

const UserEditToolbar = () => {
    const redirect = useRedirect();

    return (
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', backgroundColor: 'transparent', px: 0 }}>
            <SaveButton label="Save" variant="contained" redirect="list" />
            <Button
                variant="contained"
                sx={{
                    backgroundColor: 'grey.500',
                    color: 'white',
                    '&:hover': { backgroundColor: 'grey.700' }
                }}
                onClick={() => redirect('/users')}
            >
                Cancel
            </Button>
        </Toolbar>
    );
};

export const UserEdit = () => {
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
                                Edit User
                            </Typography>

                            <Typography
                                variant="body2"
                                color="text.secondary"
                            >
                                Update the user information below.
                            </Typography>
                        </Grid>
                    </Grid>

                    <Divider sx={{ mb: 4 }} />

                    <SimpleForm
                        toolbar={<UserEditToolbar />}
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
                                label="Password (leave blank to keep current)"
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
        </Edit>
    );
};