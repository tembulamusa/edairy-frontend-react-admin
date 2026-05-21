import * as React from 'react';
import {
    Create,
    SimpleForm,
    TextInput,
    required,
    useNotify,
    useRedirect,
} from 'react-admin';

import {
    Card,
    CardContent,
    Typography,
    Grid,
    Divider,
    Box,
} from '@mui/material';

export const UserCreate = () => {
    const notify = useNotify();
    const redirect = useRedirect();

    const onSuccess = (data: any) => {
        notify('User created successfully', { type: 'success' });
        redirect('list', 'users'); // Assuming 'users' is the resource name
    };

    return (
        <Box
            sx={{
                p: 2, // Consistent padding with list pages
                display: "flex",
                justifyContent: "center",
                minHeight: "100vh", // To center vertically if content is short
                background: "#f5f7fb", // Matching FixedAssetForm's background
            }}
        >
            <Box
                sx={{
                    width: "100%",
                }}
            >
                <Create
                    title={false} // Title is handled by Typography inside CardContent
                    mutationOptions={{ onSuccess }}
                    sx={{
                        "& .RaCreate-main": {
                            display: "flex",
                            justifyContent: "center",
                            padding: 0, // Padding is handled by the outer Box
                        },
                    }}
                >
                    <Card
                        elevation={0}
                        sx={{
                            borderRadius: 4, // Matching FixedAssetForm's border radius
                            overflow: "hidden",
                            width: "100%",
                        }}
                    >
                        <CardContent sx={{ p: 4 }}>
                            <Grid container spacing={2} alignItems="center" justifyContent="space-between" mb={2}>
                                <Grid item xs={12} md={6}>
                                    <Typography variant="h5" fontWeight="bold">Create User</Typography>
                                    <Typography variant="body2" color="text.secondary">Fill in the information below to register a new user.</Typography>
                                </Grid>
                            </Grid>
                            <Divider sx={{ mb: 4 }} />
                            <SimpleForm sx={{ "& .RaSimpleForm-toolbar": { mt: 3, px: 0, }, "& .MuiInputBase-root": { borderRadius: 2, }, }}>
                                <Grid container spacing={3}>
                                    <Grid item xs={12} md={6}><TextInput source="username" validate={required()} fullWidth /></Grid>
                                    <Grid item xs={12} md={6}><TextInput source="email" type="email" validate={required()} fullWidth /></Grid>
                                    <Grid item xs={12} md={6}><TextInput source="password" type="password" validate={required()} fullWidth /></Grid>
                                    <Grid item xs={12} md={6}><TextInput source="confirm_password" type="password" validate={required()} fullWidth /></Grid>
                                    {/* Add other user-specific fields as needed */}
                                </Grid>
                            </SimpleForm>
                        </CardContent>
                    </Card>
                </Create>
            </Box>
        </Box>
    );
};