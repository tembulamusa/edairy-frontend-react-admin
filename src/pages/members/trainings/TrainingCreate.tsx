import * as React from 'react';
import {
    Create,
    SimpleForm,
    TextInput,
    required,
    DateInput,
    ReferenceInput,
    SelectInput,
    Toolbar,
    SaveButton,
    useNotify,
    useRedirect,
} from 'react-admin';
import { useRedirectToCreateWithReload } from '../../../components/forms/redirect-to-create-with-reload';
import { Card, CardContent, Typography, Divider, Box, Button } from '@mui/material';
import Grid from '@mui/material/Grid';
import { ListBreadcrumbs } from '../../../../ListBreadcrumbs';

const TrainingCreateToolbar = () => {
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
                            redirectToCreateWithReload('trainings', 'Training program created successfully');
                        },
                    }}
                />
            </Box>
            <Button
                variant="contained"
                sx={{ backgroundColor: 'grey.500', color: 'white', '&:hover': { backgroundColor: 'grey.700' } }}
                onClick={() => redirect('/trainings')}
            >
                Cancel
            </Button>
        </Toolbar>
    );
};

export const TrainingCreate = () => (
    <Create
        title={false}
        sx={{
            "& .RaCreate-main": { display: "flex", justifyContent: "center", padding: 2 },
        }}
    >
        <Box sx={{ width: '100%', maxWidth: 1100 }}>
            <ListBreadcrumbs />
            <Card elevation={0} sx={{ borderRadius: 3, overflow: "hidden", width: '100%' }}>
                <CardContent sx={{ p: 4 }}>
                    <Typography variant="h5" fontWeight="bold">New Training Program</Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                        Define a new educational program for members.
                    </Typography>
                    <Divider sx={{ mb: 4 }} />
                    <SimpleForm
                        toolbar={<TrainingCreateToolbar />}
                        sx={{
                            "& .RaSimpleForm-toolbar": { mt: 3, px: 0, backgroundColor: 'transparent' },
                            "& .MuiInputBase-root": { borderRadius: 2 },
                            width: '100%',
                        }}
                    >
                        <Grid container spacing={2} alignItems="flex-start">
                            <Grid item xs={12} md={6}>
                                <TextInput source="topic" label="Topic" validate={required()} fullWidth variant="outlined" />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <DateInput source="training_date" label="Training Date" validate={required()} fullWidth variant="outlined" />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <ReferenceInput source="training_user_id" reference="users">
                                    <SelectInput label="Organizer" optionText="name" fullWidth variant="outlined" validate={required()} />
                                </ReferenceInput>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <TextInput source="venue" label="Venue" validate={required()} fullWidth variant="outlined" />
                            </Grid>
                            <Grid item xs={12}>
                                <TextInput source="description" label="Description" multiline rows={3} fullWidth variant="outlined" />
                            </Grid>
                        </Grid>
                    </SimpleForm>
                </CardContent>
            </Card>
        </Box>
    </Create>
);