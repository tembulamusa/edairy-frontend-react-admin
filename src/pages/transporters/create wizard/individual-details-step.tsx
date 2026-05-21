import { Grid, MenuItem, Stack, Typography } from '@mui/material';
import type { TransporterCreateDraft, TransporterCreateErrors } from './transporter-create-wizard.types';
import { WizardFileUpload } from './wizard-file-upload';
import { WizardTextField } from './wizard-textfield';

const IMAGE_ACCEPT = 'image/png,image/jpeg,image/jpg,image/gif,image/webp';

type Props = {
    values: TransporterCreateDraft;
    errors: TransporterCreateErrors;
    onChange: <K extends keyof TransporterCreateDraft>(
        field: K,
        value: TransporterCreateDraft[K]
    ) => void;
};

export const IndividualDetailsStep = ({ values, errors, onChange }: Props) => (
    <Stack spacing={2}>
        <Typography variant="h6">Individual Details</Typography>
        <Typography variant="body2" color="text.secondary">
            Personal, identification, and next-of-kin information for this transporter.
        </Typography>
        <Grid container spacing={2}>
            <Grid size={{ xs: 12, md: 4 }}>
                <WizardTextField
                    required
                    label="First Name"
                    value={values.first_name}
                    onChange={(event) => onChange('first_name', event.target.value)}
                    error={Boolean(errors.first_name)}
                    helperText={errors.first_name}
                />
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
                <WizardTextField
                    required
                    label="Last Name"
                    value={values.last_name}
                    onChange={(event) => onChange('last_name', event.target.value)}
                    error={Boolean(errors.last_name)}
                    helperText={errors.last_name}
                />
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
                <WizardTextField
                    label="Other Names"
                    value={values.other_names}
                    onChange={(event) => onChange('other_names', event.target.value)}
                />
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
                <WizardTextField
                    required
                    select
                    label="Gender"
                    value={values.gender}
                    onChange={(event) => onChange('gender', event.target.value)}
                    error={Boolean(errors.gender)}
                    helperText={errors.gender}
                >
                    <MenuItem value="">Select gender</MenuItem>
                    <MenuItem value="MALE">Male</MenuItem>
                    <MenuItem value="FEMALE">Female</MenuItem>
                    <MenuItem value="OTHER">Other</MenuItem>
                </WizardTextField>
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
                <WizardTextField
                    type="date"
                    label="Date of Birth"
                    value={values.date_of_birth}
                    onChange={(event) => onChange('date_of_birth', event.target.value)}
                    InputLabelProps={{ shrink: true }}
                />
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
                <WizardTextField
                    required
                    label="National ID No"
                    value={values.national_id_no}
                    onChange={(event) => onChange('national_id_no', event.target.value)}
                    error={Boolean(errors.national_id_no)}
                    helperText={errors.national_id_no}
                />
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
                <WizardTextField
                    label="KRA PIN"
                    value={values.kra_pin}
                    onChange={(event) => onChange('kra_pin', event.target.value)}
                />
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
                <WizardTextField
                    select
                    label="Marital Status"
                    value={values.marital_status}
                    onChange={(event) => onChange('marital_status', event.target.value)}
                >
                    <MenuItem value="">Select status</MenuItem>
                    <MenuItem value="SINGLE">Single</MenuItem>
                    <MenuItem value="MARRIED">Married</MenuItem>
                    <MenuItem value="DIVORCED">Divorced</MenuItem>
                    <MenuItem value="WIDOWED">Widowed</MenuItem>
                </WizardTextField>
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
                <WizardTextField
                    label="Next of Kin Full Name"
                    value={values.next_of_kin_full_name}
                    onChange={(event) => onChange('next_of_kin_full_name', event.target.value)}
                />
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
                <WizardTextField
                    label="Next of Kin Phone"
                    value={values.next_of_kin_phone}
                    onChange={(event) => onChange('next_of_kin_phone', event.target.value)}
                />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
                <WizardFileUpload
                    label="ID Front Photo"
                    accept={IMAGE_ACCEPT}
                    value={values.id_front_photo}
                    onChange={(file) => onChange('id_front_photo', file)}
                    error={errors.id_front_photo}
                    helperText="Required — clear image of the ID front"
                />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
                <WizardFileUpload
                    label="ID Back Photo"
                    accept={IMAGE_ACCEPT}
                    value={values.id_back_photo}
                    onChange={(file) => onChange('id_back_photo', file)}
                    error={errors.id_back_photo}
                    helperText="Required — clear image of the ID back"
                />
            </Grid>
        </Grid>
    </Stack>
);
