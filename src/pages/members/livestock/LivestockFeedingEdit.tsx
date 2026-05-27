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
    NumberInput,
} from 'react-admin';
import { Card, CardContent, Typography, Divider, Box, Button } from '@mui/material';
import Grid from '@mui/material/Grid';
import { ListBreadcrumbs } from '../../../../ListBreadcrumbs';

const LivestockFeedingEditToolbar = () => {
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
                onClick={() => redirect('/livestock-feedings')}
            >
                Cancel
            </Button>
        </Toolbar>
    );
};

export const LivestockFeedingEdit = () => (
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
                            <Typography variant="h5" fontWeight="bold">Edit Livestock Feeding</Typography>
                            <Typography variant="body2" color="text.secondary">Modify livestock feeding details.</Typography>
                        </Grid>
                    </Grid>

                    <Divider sx={{ mb: 4 }} />

                    <SimpleForm toolbar={<LivestockFeedingEditToolbar />} sx={{ "& .RaSimpleForm-toolbar": { mt: 3, px: 0, backgroundColor: 'transparent' }, "& .MuiInputBase-root": { borderRadius: 2 }, width: '100%' }}>
                        <ReferenceInput source="livestock_id" reference="livestocks">
                            <SelectInput optionText="tag_no" label="Livestock" fullWidth variant="outlined" validate={required()} />
                        </ReferenceInput>
                        <TextInput source="feed_name" label="Feed Name" fullWidth variant="outlined" validate={required()} />
                        <NumberInput source="quantity" label="Quantity" fullWidth variant="outlined" validate={required()} />
                        <TextInput source="unit" label="Unit" fullWidth variant="outlined" />
                        <DateInput source="feeding_date" label="Feeding Date" fullWidth variant="outlined" validate={required()} />
                        <NumberInput source="cost" label="Cost" fullWidth variant="outlined" />
                        <TextInput source="notes" label="Notes" fullWidth variant="outlined" multiline rows={3} />
                    </SimpleForm>
                </CardContent>
            </Card>
        </Box>
    </Edit>
);