import {
    Create,
    SimpleForm,
    TextInput,
    required,
    useNotify,
    useRedirect,
    Toolbar,
    SaveButton,
} from 'react-admin';
import { Card, CardContent, Typography, Divider, Box, Button } from '@mui/material';
import Grid from '@mui/material/Grid';
import { ListBreadcrumbs } from '../../../../../ListBreadcrumbs';
import {
    organizationCreateMainSx,
    organizationCreateWrapperSx,
    organizationFormGridSx,
    organizationSimpleFormSx,
} from '../organizationCreateLayout';

const OrganizationAddressCreateToolbar = () => {
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
                            notify('Organization address created successfully', { type: 'success' });
                            redirect('create', 'organization-addresses');
                        },
                    }}
                />
            </Box>
            <Button
                variant="contained"
                sx={{
                    backgroundColor: 'grey.500',
                    color: 'white',
                    '&:hover': { backgroundColor: 'grey.700' },
                }}
                onClick={() => redirect('/organization-addresses')}
            >
                Cancel
            </Button>
        </Toolbar>
    );
};

export const OrganizationAddressCreate = () => (
    <Create title={false} sx={organizationCreateMainSx}>
        <Box sx={organizationCreateWrapperSx}>
            <ListBreadcrumbs />
            <Card elevation={0} sx={{ borderRadius: 3, width: '100%', overflow: 'hidden' }}>
                <CardContent sx={{ p: 4 }}>
                    <Typography variant="h5" fontWeight="bold">
                        New Organization Address
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                        Add a new address for the organization.
                    </Typography>
                    <Divider sx={{ mb: 4 }} />
                    <SimpleForm toolbar={<OrganizationAddressCreateToolbar />} sx={organizationSimpleFormSx}>
                        <Grid container spacing={3} sx={organizationFormGridSx}>
                            <Grid size={{ xs: 12, md: 4 }}>
                                <TextInput
                                    source="address_type"
                                    label="Address Type"
                                    fullWidth
                                    variant="outlined"
                                    validate={required()}
                                />
                            </Grid>
                            <Grid size={{ xs: 12, md: 4 }}>
                                <TextInput source="city" label="City" fullWidth variant="outlined" validate={required()} />
                            </Grid>
                            <Grid size={{ xs: 12, md: 4 }}>
                                <TextInput source="state" label="State" fullWidth variant="outlined" />
                            </Grid>
                            <Grid size={{ xs: 12, md: 6 }}>
                                <TextInput source="country" label="Country" fullWidth variant="outlined" validate={required()} />
                            </Grid>
                            <Grid size={{ xs: 12 }}>
                                <TextInput source="line1" label="Line 1" fullWidth variant="outlined" validate={required()} />
                            </Grid>
                            <Grid size={{ xs: 12 }}>
                                <TextInput source="line2" label="Line 2" fullWidth variant="outlined" />
                            </Grid>
                        </Grid>
                    </SimpleForm>
                </CardContent>
            </Card>
        </Box>
    </Create>
);
