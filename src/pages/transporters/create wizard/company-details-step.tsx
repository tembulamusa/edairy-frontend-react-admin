import { Grid, Stack, Typography } from '@mui/material';
import type { TransporterCreateDraft, TransporterCreateErrors } from './transporter-create-wizard.types';
import { WizardFileUpload } from './wizard-file-upload';
import { WizardTextField } from './wizard-textfield';

const PDF_ACCEPT = 'application/pdf,.pdf';

type Props = {
    values: TransporterCreateDraft;
    errors: TransporterCreateErrors;
    onChange: <K extends keyof TransporterCreateDraft>(
        field: K,
        value: TransporterCreateDraft[K]
    ) => void;
};

export const CompanyDetailsStep = ({ values, errors, onChange }: Props) => (
    <Stack spacing={2}>
        <Typography variant="h6">Company Details</Typography>
        <Typography variant="body2" color="text.secondary">
            Registration, contact person, and postal information for the company transporter.
        </Typography>
        <Grid container spacing={2}>
            <Grid size={{ xs: 12, md: 6 }}>
                <WizardTextField
                    required
                    label="Company Name"
                    value={values.company_name}
                    onChange={(event) => onChange('company_name', event.target.value)}
                    error={Boolean(errors.company_name)}
                    helperText={errors.company_name}
                />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
                <WizardTextField
                    label="Registration No"
                    value={values.registration_no}
                    onChange={(event) => onChange('registration_no', event.target.value)}
                />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
                <WizardTextField
                    label="KRA PIN"
                    value={values.company_kra_pin}
                    onChange={(event) => onChange('company_kra_pin', event.target.value)}
                />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
                <WizardTextField
                    label="Contact Person Name"
                    value={values.contact_person_name}
                    onChange={(event) => onChange('contact_person_name', event.target.value)}
                />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
                <WizardTextField
                    label="Contact Person Phone"
                    value={values.contact_person_phone}
                    onChange={(event) => onChange('contact_person_phone', event.target.value)}
                />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
                <WizardTextField
                    label="Postal Address"
                    value={values.postal_address}
                    onChange={(event) => onChange('postal_address', event.target.value)}
                />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
                <WizardTextField
                    label="Postal Code"
                    value={values.postal_code}
                    onChange={(event) => onChange('postal_code', event.target.value)}
                />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
                <WizardTextField
                    label="Town"
                    value={values.town}
                    onChange={(event) => onChange('town', event.target.value)}
                />
            </Grid>
            <Grid size={{ xs: 12 }}>
                <WizardFileUpload
                    label="Certificate of Incorporation"
                    accept={PDF_ACCEPT}
                    value={values.certificate_of_incorporation}
                    onChange={(file) => onChange('certificate_of_incorporation', file)}
                    helperText="PDF document (optional)"
                />
            </Grid>
        </Grid>
    </Stack>
);
