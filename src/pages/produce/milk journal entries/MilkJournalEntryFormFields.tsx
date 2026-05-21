import { useEffect, useRef, type ReactNode } from 'react';
import { useFormContext, useWatch } from 'react-hook-form';
import {
    NumberInput,
    ReferenceInput,
    SelectInput,
    required,
    useGetOne,
    type RaRecord,
} from 'react-admin';
import { Box, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';

const gridField = (child: ReactNode) => (
    <Grid size={{ xs: 12, md: 6 }}>{child}</Grid>
);

const memberOptionText = (record: {
    first_name?: string;
    last_name?: string;
    member_no?: string;
    id?: number;
}) => {
    const name = `${record.first_name ?? ''} ${record.last_name ?? ''}`.trim();
    const memberNo = record.member_no;
    if (name && memberNo) return `${name} (${memberNo})`;
    if (name) return name;
    if (memberNo) return memberNo;
    return String(record.id ?? '');
};

const journalOptionText = (record: RaRecord) => {
    const journal = record.journal as string | undefined;
    const route = record.route_name as string | undefined;
    const date = record.journal_date as string | undefined;
    const datePart = date ? date.slice(0, 10) : '';
    return [journal, route, datePart].filter(Boolean).join(' — ') || String(record.id ?? '');
};

const batchOptionText = (record: RaRecord) =>
    String(record.batch_no ?? record.id ?? '');

const milkCanOptionText = (record: RaRecord) => String(record.can_id ?? record.id ?? '');

const routeCenterOptionText = (record: RaRecord) => {
    const center = record.center as string | undefined;
    const route = record.route_name as string | undefined;
    if (center) return route ? `${center} (${route})` : center;
    return String(record.id ?? '');
};

const formatJournalDate = (value: unknown) => {
    if (!value || typeof value !== 'string') return '—';
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

const noopFilterId = -1;

export const MilkJournalEntryFormFields = () => {
    const { setValue } = useFormContext();
    const journalId = useWatch({ name: 'journal_id' });
    const prevJournalId = useRef<unknown>(undefined);

    const { data: journal, isLoading: journalLoading } = useGetOne(
        'milk-journals',
        { id: journalId },
        { enabled: Boolean(journalId) }
    );

    const routeId = journal?.route_id;

    useEffect(() => {
        if (prevJournalId.current !== undefined && prevJournalId.current !== journalId) {
            setValue('milk_journal_batch_id', '', { shouldDirty: true, shouldValidate: true });
            setValue('route_center_id', '', { shouldDirty: true });
            setValue('can_id', '', { shouldDirty: true });
        }
        prevJournalId.current = journalId;
    }, [journalId, setValue]);

    return (
        <Grid container spacing={2} alignItems="flex-start">
            {gridField(
                <ReferenceInput source="journal_id" reference="milk-journals">
                    <SelectInput
                        label="Journal"
                        optionText={journalOptionText}
                        optionValue="id"
                        validate={required()}
                        fullWidth
                        variant="outlined"
                    />
                </ReferenceInput>
            )}

            <Grid size={{ xs: 12 }}>
                <Box
                    sx={{
                        px: 2,
                        py: 1.5,
                        borderRadius: 1.5,
                        bgcolor: 'grey.50',
                        border: '1px solid rgba(0, 0, 0, 0.08)',
                    }}
                >
                    <Typography variant="caption" color="text.secondary" display="block" gutterBottom>
                        Journal details
                    </Typography>
                    {journalLoading && journalId ? (
                        <Typography variant="body2" color="text.secondary">
                            Loading…
                        </Typography>
                    ) : journal ? (
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3 }}>
                            <Typography variant="body2">
                                <strong>Route:</strong> {String(journal.route_name ?? '—')}
                            </Typography>
                            <Typography variant="body2">
                                <strong>Journal date:</strong> {formatJournalDate(journal.journal_date)}
                            </Typography>
                        </Box>
                    ) : (
                        <Typography variant="body2" color="text.secondary">
                            Select a journal to see route and date.
                        </Typography>
                    )}
                </Box>
            </Grid>

            {gridField(
                <ReferenceInput
                    source="milk_journal_batch_id"
                    reference="milk-journal-batches"
                    filter={
                        journalId
                            ? { journal_id: journalId }
                            : { journal_id: noopFilterId }
                    }
                >
                    <SelectInput
                        label="Batch"
                        optionText={batchOptionText}
                        optionValue="id"
                        validate={required()}
                        fullWidth
                        variant="outlined"
                        disabled={!journalId}
                        helperText={!journalId ? 'Select a journal first' : undefined}
                    />
                </ReferenceInput>
            )}

            {gridField(
                <ReferenceInput source="member_id" reference="members">
                    <SelectInput
                        label="Member"
                        optionText={memberOptionText}
                        optionValue="id"
                        validate={required()}
                        fullWidth
                        variant="outlined"
                    />
                </ReferenceInput>
            )}

            {gridField(
                <ReferenceInput
                    source="can_id"
                    reference="milk-cans"
                    filter={routeId ? { route_id: routeId } : { route_id: noopFilterId }}
                >
                    <SelectInput
                        label="Can"
                        optionText={milkCanOptionText}
                        optionValue="id"
                        fullWidth
                        variant="outlined"
                        disabled={!routeId}
                        helperText={!journalId ? 'Select a journal first' : undefined}
                    />
                </ReferenceInput>
            )}

            {gridField(
                <ReferenceInput
                    source="route_center_id"
                    reference="route-centers"
                    filter={routeId ? { route_id: routeId } : { route_id: noopFilterId }}
                >
                    <SelectInput
                        label="Center"
                        optionText={routeCenterOptionText}
                        optionValue="id"
                        fullWidth
                        variant="outlined"
                        disabled={!routeId}
                        helperText={!journalId ? 'Select a journal first' : undefined}
                    />
                </ReferenceInput>
            )}

            {gridField(
                <NumberInput
                    source="quantity"
                    label="Quantity (L)"
                    validate={required()}
                    fullWidth
                    variant="outlined"
                />
            )}
        </Grid>
    );
};
