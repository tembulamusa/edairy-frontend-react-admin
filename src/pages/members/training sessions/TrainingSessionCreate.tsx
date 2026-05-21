import * as React from 'react';
import {
    Create,
    SimpleForm,
    TextInput,
    ReferenceInput,
    SelectInput,
    DateTimeInput,
    required,
    Toolbar,
    SaveButton,
    useNotify,
    useRedirect,
} from 'react-admin';
import { Card, CardContent, Typography, Divider, Box, Button } from '@mui/material';
import Grid from '@mui/material/Grid';
import { ListBreadcrumbs } from '../../../../ListBreadcrumbs';

const TrainingSessionCreateToolbar = () => {
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
                            notify('Session scheduled successfully', { type: 'success' });
                            redirect('create', 'training-sessions');
                        },
                    }}
                />
            </Box>
            <Button
                variant="contained"
                sx={{ backgroundColor: 'grey.500', color: 'white', '&:hover': { backgroundColor: 'grey.700' } }}
                onClick={() => redirect('/training-sessions')}
            >
                Cancel
            </Button>
        </Toolbar>
    );
};

export const TrainingSessionCreate = () => (
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
                    <Typography variant="h5" fontWeight="bold">Schedule Training Session</Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                        Set the date and location for a specific training session.
                    </Typography>
                    <Divider sx={{ mb: 4 }} />
                    <SimpleForm
                        toolbar={<TrainingSessionCreateToolbar />}
                        sx={{
                            "& .RaSimpleForm-toolbar": { mt: 3, px: 0, backgroundColor: 'transparent' },
                            "& .MuiInputBase-root": { borderRadius: 2 },
                            width: '100%',
                        }}
                    >
                        <Grid container spacing={2} alignItems="flex-start">
                            <Grid item xs={12} md={6}>
                                <ReferenceInput source="training_id" reference="trainings">
                                    <SelectInput label="Training Program" optionText="name" fullWidth variant="outlined" validate={required()} />
                                </ReferenceInput>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <TextInput source="partner" label="Partner" fullWidth variant="outlined" />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <TextInput source="venue" label="Venue" validate={required()} fullWidth variant="outlined" />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <TextInput required source="topic" label="Topic" fullWidth variant="outlined" />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <TextInput source="topic_description" label="Topic Description" fullWidth variant="outlined" />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <DateTimeInput source="session_start_time" label="Session Start Time" validate={required()} fullWidth variant="outlined" />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <DateTimeInput source="session_end_time" label="Session End Time" validate={required()} fullWidth variant="outlined" />
                            </Grid>
                            <Grid item xs={12}>
                                <TextInput source="trainers" label="Trainers" multiline rows={3} fullWidth variant="outlined" />
                            </Grid>
                        </Grid>
                    </SimpleForm>
                </CardContent>
            </Card>
        </Box>
    </Create>
);