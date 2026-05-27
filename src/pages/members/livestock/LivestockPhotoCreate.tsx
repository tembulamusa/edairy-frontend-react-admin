import * as React from 'react';
import {
    Create,
    SimpleForm,
    TextInput,
    required,
    Toolbar,
    SaveButton,
    useNotify,
    useRedirect,
    ReferenceInput,
    SelectInput,
    DateInput,
    ImageInput,
    ImageField
} from 'react-admin';
import { Box, Button, Card, CardContent, Divider, Stack, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';

const LivestockPhotoCreateToolbar = () => {
    const redirect = useRedirect();
    const notify = useNotify();

    return (
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', backgroundColor: 'transparent', px: 0 }}>
            <Box sx={{ display: 'flex', gap: 1 }}>
                <SaveButton label="Save" variant="contained" redirect="list" />
                <SaveButton
                    label="Save and Add New"
                    variant="contained"
                    mutationOptions={{
                        onSuccess: () => {
                            notify('Photo uploaded successfully', { type: 'success' });
                            redirect('create', 'livestock-photos');
                        },
                    }}
                />
            </Box>
            <Button
                variant="contained"
                sx={{
                    backgroundColor: 'grey.500',
                    color: 'white',
                    '&:hover': { backgroundColor: 'grey.700' }
                }}
                onClick={() => redirect('/livestock-photos')}
            >
                Cancel
            </Button>
        </Toolbar>
    );
};

export const LivestockPhotoCreate = () => {
    return (
        <Create
            title={false}
            sx={{
                "& .RaCreate-main": {
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
                    <Grid container spacing={2} alignItems="center" justifyContent="space-between" mb={2}>
                        <Grid size={{ xs: 12 }}>
                            <Typography variant="h5" fontWeight="bold">
                                Upload Livestock Photo
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Add a new photo for a livestock record.
                            </Typography>
                        </Grid>
                    </Grid>

                    <Divider sx={{ mb: 4 }} />

                    <SimpleForm
                        toolbar={<LivestockPhotoCreateToolbar />}
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
                            <ReferenceInput source="livestock_id" reference="livestocks">
                                <SelectInput optionText="name" validate={required()} fullWidth />
                            </ReferenceInput>
                            <ImageInput source="image" label="Photo" accept="image/*" validate={required()}>
                                <ImageField source="src" title="title" />
                            </ImageInput>
                            <TextInput source="description" label="Description" multiline rows={3} fullWidth />
                            <DateInput source="date_taken" label="Date Taken" fullWidth />
                        </Stack>
                    </SimpleForm>
                </CardContent>
            </Card>
        </Create>
    );
};