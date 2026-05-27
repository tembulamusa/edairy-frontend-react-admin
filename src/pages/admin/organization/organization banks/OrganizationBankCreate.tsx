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
import { useRedirectToCreateWithReload } from '../../../../components/forms/redirect-to-create-with-reload';
import { Card, CardContent, Typography, Divider, Box, Button } from '@mui/material';
import Grid from '@mui/material/Grid';
import { ListBreadcrumbs } from '../../../../../ListBreadcrumbs';
import {
    organizationCreateMainSx,
    organizationCreateWrapperSx,
    organizationFormGridSx,
    organizationSimpleFormSx,
} from '../organizationCreateLayout';

const OrganizationBankCreateToolbar = () => {
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
                            redirectToCreateWithReload('organization-banks', 'Organization bank created successfully');
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
                onClick={() => redirect('/organization-banks')}
            >
                Cancel
            </Button>
        </Toolbar>
    );
};

export const OrganizationBankCreate = () => (
    <Create title={false} sx={organizationCreateMainSx}>
        <Box sx={organizationCreateWrapperSx}>
            <ListBreadcrumbs />
            <Card elevation={0} sx={{ borderRadius: 3, width: '100%', overflow: 'hidden' }}>
                <CardContent sx={{ p: 4 }}>
                    <Typography variant="h5" fontWeight="bold">
                        New Organization Bank
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                        Add a new bank account for the organization.
                    </Typography>
                    <Divider sx={{ mb: 4 }} />
                    <SimpleForm toolbar={<OrganizationBankCreateToolbar />} sx={organizationSimpleFormSx}>
                        <Grid container spacing={3} sx={organizationFormGridSx}>
                            <Grid size={{ xs: 12 }}>
                                <TextInput
                                    source="name"
                                    label="Bank Name"
                                    fullWidth
                                    variant="outlined"
                                    validate={required()}
                                />
                            </Grid>
                        </Grid>
                    </SimpleForm>
                </CardContent>
            </Card>
        </Box>
    </Create>
);
