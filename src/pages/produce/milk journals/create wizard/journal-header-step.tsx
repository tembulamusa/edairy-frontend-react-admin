import { Grid, Stack, Typography } from '@mui/material';
import type { MilkJournalCreateDraft, MilkJournalCreateErrors } from './milk-journal-create-wizard.types';
import { WizardTextField } from '../../../transporters/create wizard/wizard-textfield';
import { WizardReferenceSelect } from './wizard-reference-select';

type JournalHeaderStepProps = {
    values: MilkJournalCreateDraft;
    errors: MilkJournalCreateErrors;
    onChange: <K extends keyof MilkJournalCreateDraft>(
        field: K,
        value: MilkJournalCreateDraft[K]
    ) => void;
};

const transporterOptionText = (record: Record<string, unknown>) => {
    const no = record.transporter_no as string | undefined;
    const phone = record.primary_phone as string | undefined;
    if (no) {
        return `${no}${phone ? ` — ${phone}` : ''}`;
    }
    return String(record.id ?? '');
};

const userOptionText = (record: Record<string, unknown>) => {
    const name = record.name as string | undefined;
    const email = record.email as string | undefined;
    if (name) {
        return `${name}${email ? ` (${email})` : ''}`;
    }
    return String(record.id ?? '');
};

export const JournalHeaderStep = ({ values, errors, onChange }: JournalHeaderStepProps) => (
    <Stack spacing={2}>
        <Typography variant="h6">Journal Details</Typography>
        <Typography variant="body2" color="text.secondary">
            These values apply to every batch and entry below (stored on each entry automatically).
        </Typography>
        <Grid container spacing={2}>
            <Grid size={{ xs: 12, md: 6 }}>
                <WizardTextField
                    required
                    label="Journal"
                    value={values.journal}
                    onChange={(event) => onChange('journal', event.target.value)}
                    error={Boolean(errors.journal)}
                    helperText={errors.journal ?? 'Auto-generated from date; you can edit'}
                />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
                <WizardTextField
                    required
                    type="date"
                    label="Journal Date"
                    value={values.journal_date ? values.journal_date.slice(0, 10) : ''}
                    onChange={(event) => onChange('journal_date', event.target.value)}
                    InputLabelProps={{ shrink: true }}
                    error={Boolean(errors.journal_date)}
                    helperText={errors.journal_date}
                />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
                <WizardReferenceSelect
                    resource="routes"
                    label="Route"
                    value={values.route_id}
                    onChange={(route_id) => onChange('route_id', route_id)}
                    optionText={(r) => String(r.name ?? r.id ?? '')}
                    required
                    error={Boolean(errors.route_id)}
                    helperText={errors.route_id}
                />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
                <WizardReferenceSelect
                    resource="transporters"
                    label="Transporter"
                    value={values.transporter_id}
                    onChange={(transporter_id) => onChange('transporter_id', transporter_id)}
                    optionText={transporterOptionText}
                    required
                    error={Boolean(errors.transporter_id)}
                    helperText={errors.transporter_id}
                />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
                <WizardReferenceSelect
                    resource="milk-delivery-shifts"
                    label="Milk Delivery Shift"
                    value={values.milk_delivery_shift_id}
                    onChange={(milk_delivery_shift_id) =>
                        onChange('milk_delivery_shift_id', milk_delivery_shift_id)
                    }
                    optionText={(r) => String(r.name ?? r.id ?? '')}
                    required
                    error={Boolean(errors.milk_delivery_shift_id)}
                    helperText={errors.milk_delivery_shift_id}
                />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
                <WizardReferenceSelect
                    resource="users"
                    label="User (optional)"
                    value={values.user_id}
                    onChange={(user_id) => onChange('user_id', user_id)}
                    optionText={userOptionText}
                />
            </Grid>
        </Grid>
    </Stack>
);
