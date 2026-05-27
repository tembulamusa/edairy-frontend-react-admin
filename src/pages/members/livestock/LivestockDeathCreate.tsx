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

const LivestockDeathCreateToolbar = () => {
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
                            redirect('create', 'livestock-deaths');
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
                onClick={() => redirect('/livestock-deaths')}
            >
                Cancel
            </Button>
        </Toolbar>
    );
};

export const LivestockDeathCreate = () => (
    <Create
        title={false}
        sx={{ "& .RaCreate-main": { display: "flex", justifyContent: "center", padding: 2 } }}
    >
        <Box sx={{ width: '100%', maxWidth: 800 }}>
            <ListBreadcrumbs />
            <Card elevation={0} sx={{ borderRadius: 3, width: '100%', overflow: "hidden" }}>
                <CardContent sx={{ p: 4 }}>
                    <Grid container spacing={2} alignItems="center" justifyContent="space-between" mb={2}>
                        <Grid size={{ xs: 12, md: 12 }}>
                            <Typography variant="h5" fontWeight="bold">Record Livestock Death</Typography>
                            <Typography variant="body2" color="text.secondary">Log a new livestock mortality record.</Typography>
                        </Grid>
                    </Grid>
                    <Divider sx={{ mb: 4 }} />
                    <SimpleForm toolbar={<LivestockDeathCreateToolbar />} sx={{ "& .RaSimpleForm-toolbar": { mt: 3, px: 0, backgroundColor: 'transparent' }, "& .MuiInputBase-root": { borderRadius: 2 }, width: '100%' }}>
                        <ReferenceInput source="livestock_id" reference="livestocks">
                            <SelectInput optionText="tag_no" label="Livestock" fullWidth variant="outlined" validate={required()} />
                        </ReferenceInput>
                        <DateInput source="death_date" label="Death Date" fullWidth variant="outlined" validate={required()} />
                        <TextInput source="cause_of_death" label="Date" fullWidth variant="outlined" validate={required()} />
                        <TextInput source="disposal_method" label="Cause" fullWidth variant="outlined" />
                        <TextInput source="remarks" label="Disposal Method" fullWidth variant="outlined" multiline rows={3} />
                    </SimpleForm>
                </CardContent>
            </Card>
        </Box>
    </Create>
);