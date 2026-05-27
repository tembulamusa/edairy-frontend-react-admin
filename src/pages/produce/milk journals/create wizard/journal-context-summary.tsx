import { Box, Stack, Typography } from '@mui/material';
import type { MilkJournalCreateDraft } from './milk-journal-create-wizard.types';
import { useWizardListChoices, type WizardChoice } from './use-wizard-list-choices';

const labelFor = (id: string, choices: WizardChoice[]) => {
    if (!id) return '—';
    return choices.find((c) => c.id === id)?.label ?? `ID ${id}`;
};

const formatDate = (value: string) => {
    if (!value) return '—';
    const dateOnly = value.slice(0, 10);
    try {
        return new Date(dateOnly).toLocaleDateString(undefined, {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
        });
    } catch {
        return dateOnly;
    }
};

type SummaryItemProps = {
    label: string;
    value: string;
};

const SummaryItem = ({ label, value }: SummaryItemProps) => (
    <Box sx={{ minWidth: { xs: '100%', sm: 140 } }}>
        <Typography variant="caption" color="text.secondary" display="block">
            {label}
        </Typography>
        <Typography variant="body2" fontWeight={600} noWrap title={value}>
            {value}
        </Typography>
    </Box>
);

type JournalContextSummaryProps = {
    values: MilkJournalCreateDraft;
};

export const JournalContextSummary = ({ values }: JournalContextSummaryProps) => {
    const { choices: routes } = useWizardListChoices('routes', (r) =>
        String(r.name ?? r.id ?? '')
    );
    const { choices: transporters } = useWizardListChoices('transporters', (r) => {
        const no = r.transporter_no as string | undefined;
        const phone = r.primary_phone as string | undefined;
        return no ? `${no}${phone ? ` — ${phone}` : ''}` : String(r.id ?? '');
    });
    const { choices: shifts } = useWizardListChoices('milk-delivery-shifts', (r) =>
        String(r.name ?? r.id ?? '')
    );
    const { choices: users } = useWizardListChoices('users', (r) => {
        const name = r.name as string | undefined;
        return name || String(r.id ?? '');
    });

    return (
        <Box
            sx={{
                px: 2,
                py: 1.5,
                borderRadius: 2,
                bgcolor: 'grey.50',
                border: '1px solid rgba(0, 0, 0, 0.08)',
            }}
        >
            <Typography variant="caption" fontWeight={700} color="primary.main" display="block" mb={1}>
                Journal details (step 1)
            </Typography>
            <Stack direction="row" flexWrap="wrap" gap={2} useFlexGap>
                <SummaryItem label="Journal" value={values.journal?.trim() || '—'} />
                <SummaryItem label="Route" value={labelFor(values.route_id, routes)} />
                <SummaryItem label="Transporter" value={labelFor(values.transporter_id, transporters)} />
                <SummaryItem label="Collection Date" value={formatDate(values.journal_date)} />
                <SummaryItem label="Shift" value={labelFor(values.milk_delivery_shift_id, shifts)} />
                {values.user_id ? (
                    <SummaryItem label="User" value={labelFor(values.user_id, users)} />
                ) : null}
            </Stack>
        </Box>
    );
};
