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

const LivestockBreedingRecordEditToolbar = () => {
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
                onClick={() => redirect('/livestock-breeding-records')}
            >
                Cancel
            </Button>
        </Toolbar>
    );
};

export const LivestockBreedingRecordEdit = () => (
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
                            <Typography variant="h5" fontWeight="bold">Edit Livestock Breeding Record</Typography>
                            <Typography variant="body2" color="text.secondary">Modify livestock breeding details.</Typography>
                        </Grid>
                    </Grid>
                    <Divider sx={{ mb: 4 }} />
                    <SimpleForm toolbar={<LivestockBreedingRecordEditToolbar />} sx={{ "& .RaSimpleForm-toolbar": { mt: 3, px: 0, backgroundColor: 'transparent' }, "& .MuiInputBase-root": { borderRadius: 2 }, width: '100%' }}>
                        <ReferenceInput source="livestock_id" reference="livestocks">
                            <SelectInput optionText="tag_no" label="Livestock" fullWidth variant="outlined" validate={required()} />
                        </ReferenceInput>
                        <SelectInput source="breeding_type" choices={[
                            { id: 'natural', name: 'Natural' },
                            { id: 'ai', name: 'AI' },
                        ]} label="Breeding Type" fullWidth variant="outlined" validate={required()} />
                        <DateInput source="breeding_date" label="Breeding Date" fullWidth variant="outlined" validate={required()} />
                        <ReferenceInput source="sire_id" reference="livestocks">
                            <SelectInput optionText="tag_no" label="Sire" fullWidth variant="outlined" />
                        </ReferenceInput>
                        <ReferenceInput source="dam_id" reference="livestocks">
                            <SelectInput optionText="tag_no" label="Dam" fullWidth variant="outlined" />
                        </ReferenceInput>
                        <DateInput source="expected_calving_date" label="Expected Calving Date" fullWidth variant="outlined" />
                        <TextInput source="result" label="Result" fullWidth variant="outlined" />
                        <TextInput source="remarks" label="Remarks" fullWidth variant="outlined" multiline rows={3} />
                    </SimpleForm>
                </CardContent>
            </Card>
        </Box>
    </Edit>
);