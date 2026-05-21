import { TextInput, ReferenceInput, SelectInput, required } from 'react-admin';
import Grid from '@mui/material/Grid';

export const RouteFormFields = () => (
    <Grid container spacing={2} alignItems="flex-start">
        <Grid size={{ xs: 12, md: 6 }}>
            <ReferenceInput source="location_id" reference="locations">
                <SelectInput
                    label="Location"
                    optionText="name"
                    optionValue="id"
                    validate={required()}
                    fullWidth
                    variant="outlined"
                />
            </ReferenceInput>
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
            <TextInput source="code" label="Route Code" validate={required()} fullWidth variant="outlined" />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
            <TextInput source="name" label="Route Name" validate={required()} fullWidth variant="outlined" />
        </Grid>
        <Grid size={{ xs: 12 }}>
            <TextInput
                source="description"
                label="Description"
                multiline
                rows={3}
                fullWidth
                variant="outlined"
            />
        </Grid>
    </Grid>
);
