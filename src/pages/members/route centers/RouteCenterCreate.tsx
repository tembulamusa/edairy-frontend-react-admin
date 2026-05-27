import {
    Create,
    SimpleForm,
    TextInput,
    ReferenceInput,
    SelectInput,
    required,
    Toolbar,
    SaveButton,
    useNotify,
    useRedirect,
} from 'react-admin';
import { useRedirectToCreateWithReload } from '../../../components/forms/redirect-to-create-with-reload';
import { Card, CardContent, Typography, Divider, Box, Button } from '@mui/material';
import Grid from '@mui/material/Grid';
import { ListBreadcrumbs } from '../../../../ListBreadcrumbs';

const RouteCenterCreateToolbar = () => {
    const notify = useNotify();
    const redirect = useRedirect();
    const redirectToCreateWithReload = useRedirectToCreateWithReload();

    return (
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', backgroundColor: 'transparent', px: 0 }}>
            <Box sx={{ display: 'flex', gap: 1 }}>
                <SaveButton label="Save" variant="contained" redirect="list" />
                <SaveButton
                    label="Save and Add New"
                    variant="contained"
                    mutationOptions={{
                        onSuccess: () => {
                            redirectToCreateWithReload('route-centers', 'Route center created successfully');
                        },
                    }}
                />
            </Box>
            <Button
                variant="contained"
                sx={{ backgroundColor: 'grey.500', color: 'white', '&:hover': { backgroundColor: 'grey.700' } }}
                onClick={() => redirect('/route-centers')}
            >
                Cancel
            </Button>
        </Toolbar>
    );
};

export const RouteCenterCreate = () => (
    <Create
        title={false}
        sx={{
            '& .RaCreate-main': { display: 'flex', justifyContent: 'center', padding: 2 },
        }}
    >
        <Box sx={{ width: '100%', maxWidth: 1100 }}>
            <ListBreadcrumbs />
            <Card elevation={0} sx={{ borderRadius: 3, overflow: 'hidden', width: '100%' }}>
                <CardContent sx={{ p: 4 }}>
                    <Typography variant="h5" fontWeight="bold">
                        New Route Center
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                        Link a center to a route for member and transport assignments.
                    </Typography>
                    <Divider sx={{ mb: 4 }} />
                    <SimpleForm
                        toolbar={<RouteCenterCreateToolbar />}
                        sx={{
                            '& .RaSimpleForm-toolbar': { mt: 3, px: 0, backgroundColor: 'transparent' },
                            '& .MuiInputBase-root': { borderRadius: 2 },
                            width: '100%',
                        }}
                    >
                        <Grid container spacing={2} alignItems="flex-start">
                            <Grid size={{ xs: 12, md: 6 }}>
                                <ReferenceInput source="route_id" reference="routes">
                                    <SelectInput
                                        label="Route"
                                        optionText="name"
                                        optionValue="id"
                                        validate={required()}
                                        fullWidth
                                        variant="outlined"
                                    />
                                </ReferenceInput>
                            </Grid>
                            <Grid size={{ xs: 12, md: 6 }}>
                                <TextInput
                                    source="center"
                                    label="Center"
                                    validate={required()}
                                    fullWidth
                                    variant="outlined"
                                />
                            </Grid>
                        </Grid>
                    </SimpleForm>
                </CardContent>
            </Card>
        </Box>
    </Create>
);
