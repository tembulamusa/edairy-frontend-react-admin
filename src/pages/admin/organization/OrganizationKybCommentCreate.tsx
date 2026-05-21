import {
    Create,
    SimpleForm,
    TextInput,
    useNotify,
    useRedirect,
    Toolbar,
    SaveButton,
} from 'react-admin';
import { Card, CardContent, Typography, Divider, Box, Button } from '@mui/material';
import Grid from '@mui/material/Grid';
import { ListBreadcrumbs } from '../../../../ListBreadcrumbs';
import {
    organizationCreateMainSx,
    organizationCreateWrapperSx,
    organizationFormGridSx,
    organizationSimpleFormSx,
} from './organizationCreateLayout';

const OrganizationKybCommentCreateToolbar = () => {
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
                            notify('KYB comment created successfully', { type: 'success' });
                            redirect('create', 'organization-kyb-comments');
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
                onClick={() => redirect('/organization-kyb-comments')}
            >
                Cancel
            </Button>
        </Toolbar>
    );
};

export const OrganizationKybCommentCreate = () => (
    <Create title={false} sx={organizationCreateMainSx}>
        <Box sx={organizationCreateWrapperSx}>
            <ListBreadcrumbs />
            <Card elevation={0} sx={{ borderRadius: 3, width: '100%', overflow: 'hidden' }}>
                <CardContent sx={{ p: 4 }}>
                    <Typography variant="h5" fontWeight="bold">
                        New Organization KYB Comment
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                        Add a new Know Your Business comment or note.
                    </Typography>
                    <Divider sx={{ mb: 4 }} />
                    <SimpleForm toolbar={<OrganizationKybCommentCreateToolbar />} sx={organizationSimpleFormSx}>
                        <Grid container spacing={3} sx={organizationFormGridSx}>
                            <Grid size={{ xs: 12, md: 8 }}>
                                <TextInput source="name" label="Name" fullWidth variant="outlined" />
                            </Grid>
                            <Grid size={{ xs: 12, md: 4 }}>
                                <TextInput source="status" label="Status" fullWidth variant="outlined" />
                            </Grid>
                            <Grid size={{ xs: 12 }}>
                                <TextInput
                                    source="description"
                                    label="Description"
                                    multiline
                                    rows={6}
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
