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
} from 'react-admin';
import { Card, CardContent, Typography, Divider, Box, Button } from '@mui/material';
import Grid from '@mui/material/Grid';
import { ListBreadcrumbs } from '../../../../ListBreadcrumbs';

const LivestockHealthRecordEditToolbar = () => {
    const redirect = useRedirect();
    return (
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', backgroundColor: 'transparent', px: 0 }}>
            <SaveButton label="Save Changes" variant="contained" />
            <Button
                variant="contained"
                sx={{
                    backgroundColor: 'grey.500',
                    color: 'white',
                    '&:hover': { backgroundColor: 'grey.700' }
                }}
                onClick={() => redirect('/livestock-health-records')}
            >
                Cancel
            </Button>
        </Toolbar>
    );
};

export const LivestockHealthRecordEdit = () => (
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
        <Box sx={{ width: '100%', maxWidth: 800 }}>
            <ListBreadcrumbs />
            <Card elevation={0} sx={{ borderRadius: 3, width: '100%', overflow: "hidden" }}>
                <CardContent sx={{ p: 4 }}>
                    <Grid container spacing={2} alignItems="center" justifyContent="space-between" mb={2}>
                        <Grid size={{ xs: 12, md: 12 }}>
                            <Typography variant="h5" fontWeight="bold">Edit Health Record</Typography>
                            <Typography variant="body2" color="text.secondary">Modify livestock health or vaccination details.</Typography>
                        </Grid>
                    </Grid>
                    <Divider sx={{ mb: 4 }} />
                    <SimpleForm toolbar={<LivestockHealthRecordEditToolbar />} sx={{ "& .RaSimpleForm-toolbar": { mt: 3, px: 0, backgroundColor: 'transparent' }, "& .MuiInputBase-root": { borderRadius: 2 }, width: '100%' }}>
                        <ReferenceInput source="livestock_id" reference="livestocks">
                            <SelectInput optionText="tag_no" label="Livestock" fullWidth variant="outlined" validate={required()} />
                        </ReferenceInput>
                        <TextInput source="record_type" label="Record Type" fullWidth variant="outlined" validate={required()} />
                        <TextInput source="diagnosis" label="Diagnosis" fullWidth variant="outlined" />
                        <TextInput source="medication" label="Medication" fullWidth variant="outlined" />
                        <TextInput source="dosage" label="Dosage" fullWidth variant="outlined" />
                        <DateInput source="treatment_date" label="Treatment Date" fullWidth variant="outlined" validate={required()} />
                        <DateInput source="next_visit_date" label="Next Visit Date" fullWidth variant="outlined" />
                        <TextInput source="veterinarian" label="Date" fullWidth variant="outlined" />
                        <TextInput source="notes" label="Veterinarian" fullWidth variant="outlined" multiline rows={3} />
                    </SimpleForm>
                </CardContent>
            </Card>
        </Box>
    </Edit>
);