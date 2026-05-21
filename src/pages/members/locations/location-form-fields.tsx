import { TextInput, required } from 'react-admin';
import Grid from '@mui/material/Grid';

export const LocationFormFields = () => (
    <Grid container spacing={2} alignItems="flex-start">
        <Grid size={{ xs: 12, md: 6 }}>
            <TextInput
                source="name"
                label="Location Name"
                validate={required()}
                fullWidth
                variant="outlined"
            />
        </Grid>
    </Grid>
);
