import type { ReactNode } from 'react';
import { Button, Card, CardContent, Grid, Stack, Typography } from '@mui/material';
import type { TransporterCreateDraft } from './transporter-create-wizard.types';
import { hasUpload } from './transporter-wizard-upload';
import { UploadPreviewCard } from './upload-preview-card';

type Props = {
    values: TransporterCreateDraft;
    onEdit: (stepIndex: number) => void;
};

const FieldRow = ({ label, value }: { label: string; value: string }) => (
    <Grid size={{ xs: 12, sm: 6, md: 4 }}>
        <Typography variant="caption" color="text.secondary">
            {label}
        </Typography>
        <Typography variant="body2" fontWeight={500}>
            {value || '—'}
        </Typography>
    </Grid>
);

const SectionCard = ({
    title,
    stepIndex,
    onEdit,
    children,
}: {
    title: string;
    stepIndex: number;
    onEdit: (step: number) => void;
    children: ReactNode;
}) => (
    <Card variant="outlined" sx={{ borderRadius: 2 }}>
        <CardContent>
            <Stack direction="row" justifyContent="space-between" alignItems="center" mb={2}>
                <Typography variant="subtitle1" fontWeight="bold">
                    {title}
                </Typography>
                <Button size="small" onClick={() => onEdit(stepIndex)}>
                    Edit
                </Button>
            </Stack>
            {children}
        </CardContent>
    </Card>
);

export const ConfirmStep = ({ values, onEdit }: Props) => {
    const isCompany = values.transporter_category === 'COMPANY';
    const categoryLabel =
        values.transporter_category === 'INDIVIDUAL' ? 'Individual' : 'Company';

    return (
        <Stack spacing={2}>
            <Typography variant="h6">Review & Confirm</Typography>
            <Typography variant="body2" color="text.secondary">
                Check the details below before creating the transporter record.
            </Typography>

            <SectionCard title="Basic Information" stepIndex={0} onEdit={onEdit}>
                <Grid container spacing={2}>
                    <FieldRow label="Transporter No" value={values.transporter_no} />
                    <FieldRow label="Category" value={categoryLabel} />
                    <FieldRow label="Primary Phone" value={values.primary_phone} />
                    <FieldRow label="Email" value={values.email_address} />
                </Grid>
            </SectionCard>

            {isCompany ? (
                <SectionCard title="Company Details" stepIndex={1} onEdit={onEdit}>
                    <Stack spacing={2}>
                        <Grid container spacing={2}>
                            <FieldRow label="Company Name" value={values.company_name} />
                            <FieldRow label="Registration No" value={values.registration_no} />
                            <FieldRow label="KRA PIN" value={values.company_kra_pin} />
                            <FieldRow label="Contact Person" value={values.contact_person_name} />
                            <FieldRow label="Contact Phone" value={values.contact_person_phone} />
                            <FieldRow label="Postal Address" value={values.postal_address} />
                            <FieldRow label="Postal Code" value={values.postal_code} />
                            <FieldRow label="Town" value={values.town} />
                        </Grid>
                        {hasUpload(values.certificate_of_incorporation) ? (
                            <Grid container spacing={2}>
                                <Grid size={{ xs: 12, md: 6 }}>
                                    <UploadPreviewCard
                                        label="Certificate of Incorporation"
                                        value={values.certificate_of_incorporation}
                                    />
                                </Grid>
                            </Grid>
                        ) : null}
                    </Stack>
                </SectionCard>
            ) : (
                <SectionCard title="Individual Details" stepIndex={1} onEdit={onEdit}>
                    <Stack spacing={2}>
                        <Grid container spacing={2}>
                            <FieldRow label="First Name" value={values.first_name} />
                            <FieldRow label="Last Name" value={values.last_name} />
                            <FieldRow label="Other Names" value={values.other_names} />
                            <FieldRow label="Gender" value={values.gender} />
                            <FieldRow label="Date of Birth" value={values.date_of_birth} />
                            <FieldRow label="National ID" value={values.national_id_no} />
                            <FieldRow label="KRA PIN" value={values.kra_pin} />
                            <FieldRow label="Marital Status" value={values.marital_status} />
                            <FieldRow label="Next of Kin" value={values.next_of_kin_full_name} />
                            <FieldRow label="Next of Kin Phone" value={values.next_of_kin_phone} />
                        </Grid>
                        <Typography variant="subtitle2" fontWeight={700}>
                            Identity Documents
                        </Typography>
                        <Grid container spacing={2}>
                            <Grid size={{ xs: 12, md: 6 }}>
                                <UploadPreviewCard
                                    label="ID Front Photo"
                                    value={values.id_front_photo}
                                />
                            </Grid>
                            <Grid size={{ xs: 12, md: 6 }}>
                                <UploadPreviewCard
                                    label="ID Back Photo"
                                    value={values.id_back_photo}
                                />
                            </Grid>
                        </Grid>
                    </Stack>
                </SectionCard>
            )}
        </Stack>
    );
};
