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

const LivestockEditToolbar = () => {
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
                onClick={() => redirect('/livestocks')}
            >
                Cancel
            </Button>
        </Toolbar>
    );
};

export const LivestockEdit = () => (
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
                            <Typography variant="h5" fontWeight="bold">Edit Livestock Record</Typography>
                            <Typography variant="body2" color="text.secondary">Modify livestock animal details.</Typography>
                        </Grid>
                    </Grid>

                    <Divider sx={{ mb: 4 }} />

                    <SimpleForm
                        toolbar={<LivestockEditToolbar />}
                        sx={{ "& .RaSimpleForm-toolbar": { mt: 3, px: 0, backgroundColor: 'transparent' }, "& .MuiInputBase-root": { borderRadius: 2 }, width: '100%' }}
                    >
                        <TextInput source="tag_no" label="Tag Number" fullWidth variant="outlined" validate={required()} />
                        <ReferenceInput source="livestock_category_id" reference="livestock-categories">
                            <SelectInput optionText="category_name" label="Category" fullWidth variant="outlined" validate={required()} />
                        </ReferenceInput>
                        <ReferenceInput source="livestock_breed_id" reference="livestock-breeds">
                            <SelectInput optionText="breed_name" label="Breed" fullWidth variant="outlined" validate={required()} />
                        </ReferenceInput>
                        <DateInput source="date_of_birth" label="Date of Birth" fullWidth variant="outlined" validate={required()} />
                        <SelectInput source="gender" choices={[
                            { id: 'male', name: 'Male' },
                            { id: 'female', name: 'Female' },
                        ]} label="Gender" fullWidth variant="outlined" validate={required()} />
                        <SelectInput source="status" choices={[
                            { id: 'active', name: 'Active' },
                            { id: 'slaughtered', name: 'Slaughtered' },
                            { id: 'dead', name: 'Dead' },
                        ]} label="Status" fullWidth variant="outlined" validate={required()} />
                    </SimpleForm>
                </CardContent>
            </Card>
        </Box>
    </Edit>
);