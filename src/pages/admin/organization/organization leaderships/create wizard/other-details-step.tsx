import {
    Checkbox,
    FormControlLabel,
    Grid,
    MenuItem,
    TextField,
    Typography,
    Stack,
} from '@mui/material';
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

export const LeadershipOtherDetailsStep = ({ values, errors, onChange }: Props) => (
    <Stack spacing={2}>
        <Typography variant="h6">Other Details</Typography>
        <Grid container spacing={2}>
            <Grid size={{ xs: 12, sm: 4 }}>
                <TextField
                    fullWidth
                    select
                    required
                    label="Status"
                    value={values.status}
                    onChange={(event) => onChange('status', event.target.value)}
                    error={Boolean(errors.status)}
                    helperText={errors.status}
                >
                    <MenuItem value="">Select status</MenuItem>
                    <MenuItem value="1">Active</MenuItem>
                    <MenuItem value="0">Inactive</MenuItem>
                </TextField>
            </Grid>
            <Grid size={{ xs: 12, sm: 4 }}>
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={values.cashout_enrolled}
                            onChange={(event) => onChange('cashout_enrolled', event.target.checked)}
                        />
                    }
                    label="Cashout Enrolled"
                />
            </Grid>
        </Grid>
    </Stack>
);
