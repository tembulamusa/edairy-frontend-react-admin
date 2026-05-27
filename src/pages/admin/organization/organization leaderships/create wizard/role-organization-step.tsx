import { Grid, MenuItem, TextField, Typography, Stack } from '@mui/material';
import type {
    OrganizationLeadershipCreateDraft,
    OrganizationLeadershipCreateErrors,
} from './organization-leadership-create-wizard.types';

type Props = {
    values: OrganizationLeadershipCreateDraft;
    errors: OrganizationLeadershipCreateErrors;
    onChange: <K extends keyof OrganizationLeadershipCreateDraft>(
        field: K,
        value: OrganizationLeadershipCreateDraft[K]
    ) => void;
};

export const RoleOrganizationStep = ({ values, errors, onChange }: Props) => (
    <Stack spacing={2}>
        <Typography variant="h6">Role & Organization</Typography>
        <Grid container spacing={2}>
            <Grid size={{ xs: 12, sm: 4 }}>
                <TextField
                    fullWidth
                    required
                    select
                    label="Position"
                    value={values.position}
                    onChange={(event) => onChange('position', event.target.value)}
                    error={Boolean(errors.position)}
                    helperText={errors.position}
                >
                    <MenuItem value="">Select position</MenuItem>
                    <MenuItem value="PRIMARY CONTACT">Primary Contact</MenuItem>
                    <MenuItem value="DIRECTOR">Director</MenuItem>
                    <MenuItem value="CEO">CEO</MenuItem>
                </TextField>
            </Grid>
            <Grid size={{ xs: 12, sm: 4 }}>
                <TextField
                    fullWidth
                    label="Title"
                    value={values.title}
                    onChange={(event) => onChange('title', event.target.value)}
                />
            </Grid>
                        
            <Grid size={{ xs: 12, sm: 4 }}>
                <TextField
                    fullWidth
                    select
                    label="Leadership Status"
                    value={values.status}
                    onChange={(event) => onChange('status', event.target.value)}
                >
                    <MenuItem value="">Select status</MenuItem>
                    <MenuItem value="1">Active</MenuItem>
                    <MenuItem value="0">Inactive</MenuItem>
                </TextField>
            </Grid>
        </Grid>
    </Stack>
);
