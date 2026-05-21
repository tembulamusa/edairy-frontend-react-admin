import { useEffect, useMemo, useState } from 'react';
import {
    Box,
    Button,
    IconButton,
    List,
    ListItem,
    Stack,
    Tooltip,
    Typography,
    alpha,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import type {
    MilkJournalBatchDraft,
    MilkJournalCreateDraft,
    MilkJournalCreateErrors,
    MilkJournalEntryDraft,
} from './milk-journal-create-wizard.types';
import { WizardTextField } from '../../../transporters/create wizard/wizard-textfield';
import {
    createEmptyBatch,
    createEntryForBatch,
    DEFAULT_ENTRIES_PER_BATCH,
    syncJournalToBatches,
} from './milk-journal-wizard-utils';
import { useWizardListChoices } from './use-wizard-list-choices';
import { EntryRow, EntryTableHeader } from './entry-row';
import { JournalContextSummary } from './journal-context-summary';

type BatchesEntriesStepProps = {
    values: MilkJournalCreateDraft;
    errors: MilkJournalCreateErrors;
    onChange: (next: MilkJournalCreateDraft) => void;
};

const memberOptionText = (record: Record<string, unknown>) => {
    const first = record.first_name as string | undefined;
    const last = record.last_name as string | undefined;
    const memberNo = record.member_no as string | undefined;
    const name = [first, last].filter(Boolean).join(' ').trim();
    if (name && memberNo) return `${name} (${memberNo})`;
    if (name) return name;
    if (memberNo) return memberNo;
    return String(record.id ?? '');
};

const sumLitres = (entries: MilkJournalEntryDraft[]) =>
    entries.reduce((total, entry) => {
        const qty = Number.parseFloat(entry.quantity);
        return total + (Number.isFinite(qty) ? qty : 0);
    }, 0);

const panelBorder = '1px solid rgba(0, 0, 0, 0.08)';

const routeCenterOptionText = (record: Record<string, unknown>) => {
    const center = record.center as string | undefined;
    const route = record.route_name as string | undefined;
    if (center) {
        return route ? `${center} (${route})` : center;
    }
    return String(record.id ?? '');
};

const milkCanOptionText = (record: Record<string, unknown>) =>
    String(record.can_id ?? record.id ?? '');

export const BatchesEntriesStep = ({ values, errors, onChange }: BatchesEntriesStepProps) => {
    const [activeBatchId, setActiveBatchId] = useState<string>(
        () => values.batches[0]?.id ?? ''
    );

    const { choices: memberChoices, isLoading: membersLoading } = useWizardListChoices(
        'members',
        memberOptionText
    );
    const routeFilter = values.route_id ? { route_id: values.route_id } : undefined;
    const { choices: centerChoices, isLoading: centersLoading } = useWizardListChoices(
        'route-centers',
        routeCenterOptionText,
        routeFilter ? { filter: routeFilter } : undefined
    );
    const { choices: canChoices, isLoading: cansLoading } = useWizardListChoices(
        'milk-cans',
        milkCanOptionText,
        routeFilter ? { filter: routeFilter } : undefined
    );

    const listsLoading = membersLoading || centersLoading || cansLoading;

    const activeBatch = useMemo(
        () => values.batches.find((b) => b.id === activeBatchId) ?? values.batches[0],
        [values.batches, activeBatchId]
    );

    useEffect(() => {
        if (!values.batches.length) return;
        const stillExists = values.batches.some((b) => b.id === activeBatchId);
        if (!stillExists) {
            setActiveBatchId(values.batches[0].id);
        }
    }, [values.batches, activeBatchId]);

    const setDraft = (next: MilkJournalCreateDraft) => {
        onChange(syncJournalToBatches(next));
    };

    const updateBatches = (batches: MilkJournalBatchDraft[]) => {
        setDraft({ ...values, batches });
    };

    const updateBatch = (batchId: string, patch: Partial<MilkJournalBatchDraft>) => {
        updateBatches(
            values.batches.map((batch) => {
                if (batch.id !== batchId) return batch;
                const next = { ...batch, ...patch };
                if (patch.batch_no !== undefined) {
                    next.entries = next.entries.map((entry) => ({
                        ...entry,
                        batch_no: patch.batch_no as string,
                    }));
                }
                return next;
            })
        );
    };

    const updateEntry = (
        batchId: string,
        entryId: string,
        patch: Partial<MilkJournalEntryDraft>
    ) => {
        updateBatches(
            values.batches.map((batch) => {
                if (batch.id !== batchId) return batch;
                return {
                    ...batch,
                    entries: batch.entries.map((entry) =>
                        entry.id === entryId ? { ...entry, ...patch } : entry
                    ),
                };
            })
        );
    };

    const addBatch = () => {
        const next = createEmptyBatch(values.batches.length, values);
        updateBatches([...values.batches, next]);
        setActiveBatchId(next.id);
    };

    const removeBatch = (batchId: string) => {
        if (values.batches.length <= 1) return;
        const nextBatches = values.batches.filter((batch) => batch.id !== batchId);
        updateBatches(nextBatches);
        if (activeBatchId === batchId) {
            setActiveBatchId(nextBatches[0]?.id ?? '');
        }
    };

    const canDeleteBatch = values.batches.length > 1;

    const addEntry = (batch: MilkJournalBatchDraft) => {
        updateBatch(batch.id, {
            entries: [...batch.entries, createEntryForBatch(batch, values)],
        });
    };

    const removeEntry = (batchId: string, entryId: string) => {
        const batch = values.batches.find((b) => b.id === batchId);
        if (!batch || batch.entries.length <= DEFAULT_ENTRIES_PER_BATCH) return;
        updateBatch(batchId, {
            entries: batch.entries.filter((entry) => entry.id !== entryId),
        });
    };

    if (!activeBatch) {
        return (
            <Typography color="text.secondary">Add a batch to begin entering collections.</Typography>
        );
    }

    const totalLitres = sumLitres(activeBatch.entries);
    const activeIndex = values.batches.findIndex((b) => b.id === activeBatch.id);

    return (
        <Stack spacing={1.5}>
            <JournalContextSummary values={values} />

            <Typography variant="body2" color="text.secondary">
                Edit batch numbers on the left, then enter collections on the right. Empty rows
                are skipped when you save.
            </Typography>

            <Box
                sx={{
                    display: 'grid',
                    gridTemplateColumns: { xs: '1fr', md: '240px 1fr' },
                    border: panelBorder,
                    borderRadius: 2,
                    overflow: 'hidden',
                    minHeight: 420,
                    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.04)',
                    bgcolor: 'background.paper',
                }}
            >
                {/* Left: editable batch pages */}
                <Box
                    sx={{
                        bgcolor: 'grey.50',
                        borderRight: { xs: 'none', md: panelBorder },
                        display: 'flex',
                        flexDirection: 'column',
                    }}
                >
                    <Box sx={{ px: 1.5, pt: 1.5, pb: 0.5 }}>
                        <Typography variant="subtitle2" fontWeight={700}>
                            Batches / Pages
                        </Typography>
                    </Box>

                    <List dense disablePadding sx={{ flex: 1, overflow: 'auto', py: 0.5 }}>
                        {values.batches.map((batch, index) => {
                            const selected = batch.id === activeBatch.id;
                            const batchNoError = errors[`batch_${batch.id}_batch_no`];
                            return (
                                <ListItem
                                    key={batch.id}
                                    disablePadding
                                    sx={{
                                        display: 'block',
                                        borderLeft: '3px solid',
                                        borderLeftColor: selected ? 'primary.main' : 'transparent',
                                        bgcolor: selected ? 'action.selected' : 'transparent',
                                        cursor: 'pointer',
                                        '&:hover': {
                                            bgcolor: selected ? 'action.selected' : 'action.hover',
                                        },
                                    }}
                                    onClick={() => setActiveBatchId(batch.id)}
                                >
                                    <Stack
                                        direction="row"
                                        spacing={0.25}
                                        alignItems="flex-start"
                                        sx={{ px: 1.5, pt: 1, pb: 0.25 }}
                                        onClick={(e) => e.stopPropagation()}
                                    >
                                        <WizardTextField
                                            required
                                            size="small"
                                            placeholder={`Page ${index + 1}`}
                                            value={batch.batch_no}
                                            onChange={(event) =>
                                                updateBatch(batch.id, {
                                                    batch_no: event.target.value,
                                                })
                                            }
                                            onFocus={() => setActiveBatchId(batch.id)}
                                            error={Boolean(batchNoError)}
                                            helperText={batchNoError}
                                            sx={{
                                                flex: 1,
                                                minWidth: 0,
                                                '& .MuiOutlinedInput-root': {
                                                    bgcolor: 'background.paper',
                                                },
                                                '& .MuiFormHelperText-root': { mx: 0 },
                                            }}
                                        />
                                        <Tooltip
                                            title={
                                                canDeleteBatch
                                                    ? 'Remove batch'
                                                    : 'At least one batch is required'
                                            }
                                        >
                                            <span>
                                                <IconButton
                                                    size="small"
                                                    color="error"
                                                    aria-label="Remove batch"
                                                    disabled={!canDeleteBatch}
                                                    onClick={() => removeBatch(batch.id)}
                                                    sx={{
                                                        mt: 0.25,
                                                        opacity: canDeleteBatch ? 0.7 : 0.35,
                                                        '&:hover': { opacity: 1 },
                                                    }}
                                                >
                                                    <DeleteOutlineIcon sx={{ fontSize: 18 }} />
                                                </IconButton>
                                            </span>
                                        </Tooltip>
                                    </Stack>
                                    <Typography
                                        variant="caption"
                                        color="text.secondary"
                                        sx={{ px: 1.5, pb: 1, display: 'block', mt: -0.5 }}
                                    >
                                        {sumLitres(batch.entries)} L
                                    </Typography>
                                </ListItem>
                            );
                        })}

                        <ListItem disablePadding sx={{ px: 1.5, pt: 0.5, pb: 1.5 }}>
                            <Button
                                fullWidth
                                size="small"
                                variant="outlined"
                                color="primary"
                                startIcon={<AddIcon sx={{ fontSize: 18 }} />}
                                onClick={addBatch}
                                sx={{
                                    textTransform: 'none',
                                    fontSize: '0.8125rem',
                                    fontWeight: 600,
                                    py: 0.75,
                                    borderStyle: 'dashed',
                                    borderColor: 'primary.light',
                                    bgcolor: (theme) => alpha(theme.palette.primary.main, 0.04),
                                    '&:hover': {
                                        borderStyle: 'dashed',
                                        borderColor: 'primary.main',
                                        bgcolor: (theme) => alpha(theme.palette.primary.main, 0.1),
                                    },
                                }}
                            >
                                Add batch
                            </Button>
                        </ListItem>
                    </List>
                </Box>

                {/* Right: entries only */}
                <Box sx={{ p: 2, display: 'flex', flexDirection: 'column', minWidth: 0 }}>
                    <Stack spacing={1.5} sx={{ flex: 1 }}>
                        {typeof errors[`batch_${activeBatch.id}_entries`] === 'string' ? (
                            <Typography color="error" variant="body2">
                                {errors[`batch_${activeBatch.id}_entries`]}
                            </Typography>
                        ) : null}

                        <Box
                            sx={{
                                flex: 1,
                                overflow: 'auto',
                                border: panelBorder,
                                borderRadius: 1.5,
                            }}
                        >
                            <EntryTableHeader />
                            {activeBatch.entries.map((entry) => (
                                <EntryRow
                                    key={entry.id}
                                    entry={entry}
                                    errors={errors}
                                    memberChoices={memberChoices}
                                    centerChoices={centerChoices}
                                    canChoices={canChoices}
                                    listsLoading={listsLoading}
                                    canRemove={
                                        activeBatch.entries.length > DEFAULT_ENTRIES_PER_BATCH
                                    }
                                    onChange={(patch) =>
                                        updateEntry(activeBatch.id, entry.id, patch)
                                    }
                                    onRemove={() => removeEntry(activeBatch.id, entry.id)}
                                />
                            ))}
                        </Box>

                        <Button
                            variant="outlined"
                            size="small"
                            startIcon={<AddIcon />}
                            onClick={() => addEntry(activeBatch)}
                            sx={{ alignSelf: 'flex-start' }}
                        >
                            Add Entry
                        </Button>

                        <Box
                            sx={{
                                mt: 'auto',
                                pt: 2,
                                borderTop: panelBorder,
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                            }}
                        >
                            <Typography variant="body2" color="text.secondary">
                                Page {activeIndex + 1} of {values.batches.length}
                            </Typography>
                            <Typography variant="subtitle1" fontWeight={700}>
                                Total Litres: {totalLitres}
                            </Typography>
                        </Box>
                    </Stack>
                </Box>
            </Box>
        </Stack>
    );
};
