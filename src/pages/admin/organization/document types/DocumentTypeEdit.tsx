import {
    Edit,
    SimpleForm,
    TextInput,
    required,
    useNotify,
    useRedirect,
    useUpdate,
} from 'react-admin';
import { Card, CardContent, Typography, Divider, Stack, Box, Button } from '@mui/material';
import Grid from '@mui/material/Grid';
import { ListBreadcrumbs } from '../../../../../ListBreadcrumbs';
import {
    organizationCreateMainSx,
    organizationCreateWrapperSx,
    organizationSimpleFormSx,
} from '../organizationCreateLayout';

export const DocumentTypeEdit = () => {
    const [update] = useUpdate();
    const notify = useNotify();
    const redirect = useRedirect();

    const handleSubmit = (data: Record<string, unknown>) => {
        update(
            'document-types',
            { id: data.id, data },
            {
                onSuccess: () => {
                    notify('Document type updated successfully', { type: 'success' });
                    redirect('list', 'document-types');
                },
            }
        );
    };

    return (
        <Edit
            title={false}
            sx={{
                ...organizationCreateMainSx,
                '& .RaEdit-main': organizationCreateMainSx['& .RaCreate-main'],
            }}
        >
            <Box sx={organizationCreateWrapperSx}>
                <ListBreadcrumbs />
                <Card elevation={0} sx={{ borderRadius: 3, width: '100%', overflow: 'hidden' }}>
                    <CardContent sx={{ p: 4 }}>
                        <Grid container spacing={2} mb={2}>
                            <Grid size={{ xs: 12 }}>
                                <Typography variant="h5" fontWeight="bold">
                                    Edit Document Type
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Update the document type details below.
                                </Typography>
                            </Grid>
                        </Grid>
                        <Divider sx={{ mb: 4 }} />
                        <SimpleForm
                            toolbar={false}
                            onSubmit={handleSubmit}
                            sx={organizationSimpleFormSx}
                        >
                            <Stack spacing={3} sx={{ width: '100%' }}>
                                <TextInput
                                    source="document_type"
                                    label="Type Name"
                                    validate={required()}
                                    variant="outlined"
                                    fullWidth
                                />
                                <TextInput
                                    source="description"
                                    label="Description"
                                    multiline
                                    rows={4}
                                    variant="outlined"
                                    fullWidth
                                />
                            </Stack>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 5 }}>
                                <Button
                                    type="button"
                                    variant="outlined"
                                    onClick={() => redirect('/document-types')}
                                >
                                    Cancel
                                </Button>
                                <Button
                                    variant="contained"
                                    size="large"
                                    type="submit"
                                    sx={{ px: 4, borderRadius: 2 }}
                                >
                                    Save Changes
                                </Button>
                            </Box>
                        </SimpleForm>
                    </CardContent>
                </Card>
            </Box>
        </Edit>
    );
};
