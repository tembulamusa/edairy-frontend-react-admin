import * as React from 'react';
import {
    Edit,
    SimpleForm,
    TextInput,
    required,
    Toolbar,
    SaveButton,
    useRedirect
} from 'react-admin';
import { Card, CardContent, Typography, Divider, Box, Button } from '@mui/material';
import Grid from '@mui/material/Grid';
import { ListBreadcrumbs } from '../../../../ListBreadcrumbs';

const PaymentModeEditToolbar = () => {
    const redirect = useRedirect();
    return (
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', backgroundColor: 'transparent', px: 0 }}>
            <SaveButton label="Save Changes" variant="contained" />
            <Button
                variant="contained"
                sx={{
                    backgroundColor: 'grey.500',
                    color: 'white',
                    '&:hover': { backgroundColor: 'grey.700' }
                }}
                onClick={() => redirect('/payment-modes')}
            >
                Cancel
            </Button>
        </Toolbar>
    );
};

export const PaymentModeEdit = () => (
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
        <Box sx={{ width: '100%', maxWidth: 800 }}>
            <ListBreadcrumbs />
            <Card elevation={0} sx={{ borderRadius: 3, width: '100%', overflow: "hidden" }}>
                <CardContent sx={{ p: 4 }}>
                    <Grid container spacing={2} alignItems="center" justifyContent="space-between" mb={2}>
                        <Grid size={{ xs: 12, md: 12 }}>
                            <Typography variant="h5" fontWeight="bold">Edit Payment Mode</Typography>
                            <Typography variant="body2" color="text.secondary">Modify payment mode details.</Typography>
                        </Grid>
                    </Grid>

                    <Divider sx={{ mb: 4 }} />

                    <SimpleForm
                        toolbar={<PaymentModeEditToolbar />}
                        sx={{
                            "& .RaSimpleForm-toolbar": { mt: 3, px: 0, backgroundColor: 'transparent' },
                            "& .MuiInputBase-root": { borderRadius: 2 },
                            width: '100%',
                        }}
                    >
                        <TextInput source="code" label="Code" fullWidth variant="outlined" validate={required()} />
                        <TextInput source="name" label="Name" fullWidth variant="outlined" validate={required()} />
                    </SimpleForm>
                </CardContent>
            </Card>
        </Box>
    </Edit>
);