import {
    Create,
    SimpleForm,
    TextInput,
    required,
    Toolbar,
    SaveButton,
    useNotify,
    useRedirect,
} from 'react-admin';
import { Card, CardContent, Typography, Divider, Box, Button } from '@mui/material';
import Grid from '@mui/material/Grid';
import { ListBreadcrumbs } from '../../../../ListBreadcrumbs';

const MemberTypeCreateToolbar = () => {
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
                            notify('Member type created successfully', { type: 'success' });
                            redirect('create', 'member-types');
                        },
                    }}
                />
            </Box>
            <Button
                variant="contained"
                sx={{ backgroundColor: 'grey.500', color: 'white', '&:hover': { backgroundColor: 'grey.700' } }}
                onClick={() => redirect('/member-types')}
            >
                Cancel
            </Button>
        </Toolbar>
    );
};

export const MemberTypeCreate = () => (
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
                        New Member Type
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                        Define a new member classification used when registering members.
                    </Typography>
                    <Divider sx={{ mb: 4 }} />
                    <SimpleForm
                        toolbar={<MemberTypeCreateToolbar />}
                        sx={{
                            '& .RaSimpleForm-toolbar': { mt: 3, px: 0, backgroundColor: 'transparent' },
                            '& .MuiInputBase-root': { borderRadius: 2 },
                            width: '100%',
                        }}
                    >
                        <Grid container spacing={2} alignItems="flex-start">
                            <Grid size={{ xs: 12, md: 6 }}>
                                <TextInput
                                    source="name"
                                    label="Type Name"
                                    validate={required()}
                                    fullWidth
                                    variant="outlined"
                                />
                            </Grid>
                            <Grid size={{ xs: 12 }}>
                                <TextInput
                                    source="description"
                                    label="Description"
                                    multiline
                                    rows={3}
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
