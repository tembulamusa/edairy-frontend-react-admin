import * as React from 'react';
import {
    Edit,
    SimpleForm,
    TextInput,
    required,
    Toolbar,
    SaveButton,
    useRedirect,
    ReferenceInput,
    SelectInput,
    DateInput,
    ImageInput,
    ImageField
} from 'react-admin';
import { Box, Button, Card, CardContent, Divider, Stack, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';

const LivestockPhotoEditToolbar = () => {
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
                onClick={() => redirect('/livestock-photos')}
            >
                Cancel
            </Button>
        </Toolbar>
    );
};

export const LivestockPhotoEdit = () => {
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
                    <Grid container spacing={2} alignItems="center" justifyContent="space-between" mb={2}>
                        <Grid size={{ xs: 12 }}>
                            <Typography variant="h5" fontWeight="bold">
                                Edit Livestock Photo
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Update the livestock photo details.
                            </Typography>
                        </Grid>
                    </Grid>

                    <Divider sx={{ mb: 4 }} />

                    <SimpleForm
                        toolbar={<LivestockPhotoEditToolbar />}
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
                            <ImageInput source="image" label="Photo" accept="image/*">
                                <ImageField source="src" title="title" />
                            </ImageInput>
                            <TextInput source="description" label="Description" multiline rows={3} fullWidth />
                            <DateInput source="date_taken" label="Date Taken" fullWidth />
                        </Stack>
                    </SimpleForm>
                </CardContent>
            </Card>
        </Edit>
    );
};