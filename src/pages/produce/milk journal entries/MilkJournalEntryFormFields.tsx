import { useEffect, useMemo, useRef, type ReactNode } from 'react';
import { useFormContext, useWatch } from 'react-hook-form';
import {
    NumberInput,
    ReferenceInput,
    SelectInput,
    required,
    useGetList,
    type RaRecord,
} from 'react-admin';
import { Box, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import {
    DAILY_MILK_JOURNALS_RESOURCE,
    dailyJournalOptionText,
    findDailyJournal,
    formatJournalDate,
    batchChoiceUsesRecordId,
    parseJournalBatches,
    transporterLabel,
} from './daily-milk-journal-utils';

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

const milkCanOptionText = (record: RaRecord) => String(record.can_id ?? record.id ?? '');

const routeCenterOptionText = (record: RaRecord) => {
    const center = record.center as string | undefined;
    const route = record.route_name as string | undefined;
    if (center) return route ? `${center} (${route})` : center;
    return String(record.id ?? '');
};

const noopFilterId = -1;

export const MilkJournalEntryFormFields = () => {
    const { setValue } = useFormContext();
    const journalId = useWatch({ name: 'journal_id' });
    const prevJournalId = useRef<unknown>(undefined);

    const { data: dailyJournals = [], isLoading: journalsLoading } = useGetList(
        DAILY_MILK_JOURNALS_RESOURCE,
        {
            pagination: { page: 1, perPage: 500 },
            sort: { field: 'journal_date', order: 'DESC' },
        }
    );

    const selectedJournal = useMemo(
        () => findDailyJournal(dailyJournals, journalId),
        [dailyJournals, journalId]
    );

    const journalChoices = useMemo(
        () =>
            dailyJournals.map((journal) => ({
                id: journal.id,
                name: dailyJournalOptionText(journal),
            })),
        [dailyJournals]
    );

    const batchChoices = useMemo(
        () => parseJournalBatches(selectedJournal),
        [selectedJournal]
    );

    const batchFieldSource = batchChoiceUsesRecordId(batchChoices)
        ? 'milk_journal_batch_id'
        : 'batch_no';
    const selectedBatchValue = useWatch({ name: batchFieldSource });

    const routeId = selectedJournal?.route_id;

    useEffect(() => {
        if (prevJournalId.current !== undefined && prevJournalId.current !== journalId) {
            setValue('batch_no', '', { shouldDirty: true, shouldValidate: true });
            setValue('milk_journal_batch_id', '', { shouldDirty: true, shouldValidate: true });
            setValue('route_center_id', '', { shouldDirty: true });
            setValue('can_id', '', { shouldDirty: true });
        }
        prevJournalId.current = journalId;
    }, [journalId, setValue]);

    useEffect(() => {
        if (!selectedBatchValue) return;
        const match = batchChoices.find((choice) => choice.id === String(selectedBatchValue));
        if (match?.batchNo) {
            setValue('batch_no', match.batchNo, { shouldDirty: true });
        }
    }, [selectedBatchValue, batchChoices, setValue]);

    return (
        <Grid container spacing={2} alignItems="flex-start">
            {gridField(
                <SelectInput
                    source="journal_id"
                    label="Journal"
                    choices={journalChoices}
                    validate={required()}
                    fullWidth
                    variant="outlined"
                    disabled={journalsLoading}
                    helperText={
                        journalsLoading
                            ? 'Loading today\'s journals…'
                            : journalChoices.length === 0
                              ? 'No journals for today'
                              : undefined
                    }
                />
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
                    {journalsLoading && journalId ? (
                        <Typography variant="body2" color="text.secondary">
                            Loading…
                        </Typography>
                    ) : selectedJournal ? (
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3 }}>
                            <Typography variant="body2">
                                <strong>Route:</strong> {String(selectedJournal.route_name ?? '—')}
                            </Typography>
                            <Typography variant="body2">
                                <strong>Transporter:</strong> {transporterLabel(selectedJournal)}
                            </Typography>
                            <Typography variant="body2">
                                <strong>Journal date:</strong>{' '}
                                {formatJournalDate(selectedJournal.journal_date)}
                            </Typography>
                        </Box>
                    ) : (
                        <Typography variant="body2" color="text.secondary">
                            Select a journal to see route, transporter, and date.
                        </Typography>
                    )}
                </Box>
            </Grid>

            {gridField(
                <SelectInput
                    source={batchFieldSource}
                    label="Batch"
                    choices={batchChoices.map((choice) => ({
                        id: choice.id,
                        name: choice.name,
                    }))}
                    validate={required()}
                    fullWidth
                    variant="outlined"
                    disabled={!journalId || batchChoices.length === 0}
                    helperText={
                        !journalId
                            ? 'Select a journal first'
                            : batchChoices.length === 0
                              ? 'This journal has no batches'
                              : `${batchChoices.length} batch(es) on selected journal`
                    }
                />
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
