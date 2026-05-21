import { Grid, TextField, Typography, Stack } from '@mui/material';
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

export const LeadershipContactsStep = ({ values, errors, onChange }: Props) => {
    const handlePrimaryPhone = (value: string) => {
        onChange('primary_phone', value);
        onChange('phone', value);
    };

    return (
        <Stack spacing={2}>
            <Typography variant="h6">Contacts</Typography>
            <Grid container spacing={2}>
                <Grid size={{ xs: 12, sm: 4 }}>
                    <TextField
                        fullWidth
                        required
                        label="Primary Phone"
                        value={values.primary_phone}
                        onChange={(event) => handlePrimaryPhone(event.target.value)}
                        error={Boolean(errors.primary_phone)}
                        helperText={errors.primary_phone}
                    />
                </Grid>
                <Grid size={{ xs: 12, sm: 4 }}>
                    <TextField
                        fullWidth
                        label="Phone"
                        value={values.phone}
                        onChange={(event) => onChange('phone', event.target.value)}
                    />
                </Grid>
                <Grid size={{ xs: 12, sm: 4 }}>
                    <TextField
                        fullWidth
                        label="Secondary Phone"
                        value={values.secondary_phone}
                        onChange={(event) => onChange('secondary_phone', event.target.value)}
                    />
                </Grid>
                <Grid size={{ xs: 12, sm: 4 }}>
                    <TextField
                        fullWidth
                        label="Email"
                        type="email"
                        value={values.email}
                        onChange={(event) => onChange('email', event.target.value)}
                    />
                </Grid>
                <Grid size={{ xs: 12, sm: 4 }}>
                    <TextField
                        fullWidth
                        label="Next of Kin Full Name"
                        value={values.next_of_kin_full_name}
                        onChange={(event) => onChange('next_of_kin_full_name', event.target.value)}
                    />
                </Grid>
                <Grid size={{ xs: 12, sm: 4 }}>
                    <TextField
                        fullWidth
                        label="Next of Kin Phone"
                        value={values.next_of_kin_phone}
                        onChange={(event) => onChange('next_of_kin_phone', event.target.value)}
                    />
                </Grid>
            </Grid>
        </Stack>
    );
};
