import * as React from 'react';
import {
    Create,
    SimpleForm,
    TextInput,
    required,
    Toolbar,
    SaveButton,
    useRedirect,
    useNotify,
    ReferenceInput,
    SelectInput,
    DateInput,
} from 'react-admin';
import { Card, CardContent, Typography, Divider, Box, Button } from '@mui/material';
import Grid from '@mui/material/Grid';
import { ListBreadcrumbs } from '../../../../ListBreadcrumbs';

const LivestockBreedingRecordCreateToolbar = () => {
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
                            notify('Record created successfully', { type: 'success' });
                            redirect('create', 'livestock-breeding-records');
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
                onClick={() => redirect('/livestock-breeding-records')}
            >
                Cancel
            </Button>
        </Toolbar>
    );
};

export const LivestockBreedingRecordCreate = () => (
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
        <Box sx={{ width: '100%', maxWidth: 800 }}>
            <ListBreadcrumbs />
            <Card elevation={0} sx={{ borderRadius: 3, width: '100%', overflow: "hidden" }}>
                <CardContent sx={{ p: 4 }}>
                    <Grid container spacing={2} alignItems="center" justifyContent="space-between" mb={2}>
                        <Grid size={{ xs: 12, md: 12 }}>
                            <Typography variant="h5" fontWeight="bold">Record Livestock Breeding</Typography>
                            <Typography variant="body2" color="text.secondary">Log a new breeding record.</Typography>
                        </Grid>
                    </Grid>
                    <Divider sx={{ mb: 4 }} />
                    <SimpleForm toolbar={<LivestockBreedingRecordCreateToolbar />} sx={{ "& .RaSimpleForm-toolbar": { mt: 3, px: 0, backgroundColor: 'transparent' }, "& .MuiInputBase-root": { borderRadius: 2 }, width: '100%' }}>
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
    </Create>
);