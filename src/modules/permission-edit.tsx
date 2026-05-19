import {
    Edit,
    SimpleForm,
    TextInput,
    Toolbar,
    SaveButton,
    useRedirect,
    required,
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

const PermissionEditToolbar = () => {
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
                onClick={() => redirect('/permissions')}
            >
                Cancel
            </Button>
        </Toolbar>
    );
};

export const PermissionEdit = () => {
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
                                Edit Permission
                            </Typography>

                            <Typography
                                variant="body2"
                                color="text.secondary"
                            >
                                Update the existing permission details below.
                            </Typography>
                        </Grid>
                    </Grid>

                    <Divider sx={{ mb: 4 }} />

                    <SimpleForm
                        toolbar={<PermissionEditToolbar />}
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
                                validate={required()}
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
        </Edit>
    );
};