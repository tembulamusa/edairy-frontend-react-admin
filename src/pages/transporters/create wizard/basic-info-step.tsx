import { Grid, MenuItem, Stack, Typography } from '@mui/material';
import type { TransporterCreateDraft, TransporterCreateErrors } from './transporter-create-wizard.types';
import { WizardTextField } from './wizard-textfield';

type Props = {
    values: TransporterCreateDraft;
    errors: TransporterCreateErrors;
    onChange: <K extends keyof TransporterCreateDraft>(
        field: K,
        value: TransporterCreateDraft[K]
    ) => void;
};

export const BasicInfoStep = ({ values, errors, onChange }: Props) => (
    <Stack spacing={2}>
        <Typography variant="h6">Basic Information</Typography>
        <Grid container spacing={2}>
            <Grid size={{ xs: 12, md: 6 }}>
                <WizardTextField
                    required
                    label="Transporter No"
                    value={values.transporter_no}
                    onChange={(event) => onChange('transporter_no', event.target.value)}
                    error={Boolean(errors.transporter_no)}
                    helperText={errors.transporter_no}
                />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
                <WizardTextField
                    required
                    select
                    label="Category"
                    value={values.transporter_category}
                    onChange={(event) =>
                        onChange(
                            'transporter_category',
                            event.target.value as TransporterCreateDraft['transporter_category']
                        )
                    }
                    error={Boolean(errors.transporter_category)}
                    helperText={errors.transporter_category}
                >
                    <MenuItem value="">Select category</MenuItem>
                    <MenuItem value="INDIVIDUAL">Individual</MenuItem>
                    <MenuItem value="COMPANY">Company</MenuItem>
                </WizardTextField>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
                <WizardTextField
                    required
                    label="Primary Phone"
                    value={values.primary_phone}
                    onChange={(event) => onChange('primary_phone', event.target.value)}
                    error={Boolean(errors.primary_phone)}
                    helperText={errors.primary_phone}
                />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
                <WizardTextField
                    label="Email Address"
                    type="email"
                    value={values.email_address}
                    onChange={(event) => onChange('email_address', event.target.value)}
                    error={Boolean(errors.email_address)}
                    helperText={errors.email_address}
                />
            </Grid>
        </Grid>
    </Stack>
);
