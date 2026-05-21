import type {
    MilkJournalBatchDraft,
    MilkJournalCreateDraft,
    MilkJournalCreateErrors,
    MilkJournalEntryDraft,
} from './milk-journal-create-wizard.types';

export const newLocalId = () =>
    typeof crypto !== 'undefined' && crypto.randomUUID
        ? crypto.randomUUID()
        : `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;

const journalDatePart = (journalDate?: string) =>
    journalDate && journalDate.length >= 10
        ? journalDate.slice(0, 10).replace(/-/g, '')
        : new Date().toISOString().slice(0, 10).replace(/-/g, '');

export const generateBatchNo = (index: number) =>
    `PAGE-${String(index + 1).padStart(3, '0')}`;

/** Auto journal id, e.g. jrn-001-20250520 */
export const generateJournalNo = (journalDate?: string, sequence = 1) =>
    `jrn-${String(sequence).padStart(3, '0')}-${journalDatePart(journalDate)}`;

export const AUTO_JOURNAL_NO_PATTERN = /^jrn-\d{3}-\d{8}$/i;

/** Refresh date suffix when journal still matches auto-generated format. */
export const journalNoFromDate = (journalDate: string, currentJournal?: string) => {
    const seqMatch = currentJournal?.match(/^jrn-(\d{3})-/i);
    const sequence = seqMatch ? Number.parseInt(seqMatch[1], 10) : 1;
    return generateJournalNo(journalDate, Number.isFinite(sequence) ? sequence : 1);
};

export const shouldAutoUpdateJournalNo = (journal: string) =>
    !journal.trim() || AUTO_JOURNAL_NO_PATTERN.test(journal.trim());

const journalContextFromDraft = (draft: MilkJournalCreateDraft) => ({
    route_id: draft.route_id,
    transporter_id: draft.transporter_id,
    milk_delivery_shift_id: draft.milk_delivery_shift_id,
    journal_date: draft.journal_date,
});

export const createEntryForBatch = (
    batch: MilkJournalBatchDraft,
    journal: MilkJournalCreateDraft
): MilkJournalEntryDraft => {
    const ctx = journalContextFromDraft(journal);
    return {
        id: newLocalId(),
        member_id: '',
        quantity: '',
        route_center_id: '',
        can_id: '',
        batch_no: batch.batch_no,
        ...ctx,
    };
};

export const DEFAULT_ENTRIES_PER_BATCH = 3;

export const createEntriesForBatch = (
    batch: MilkJournalBatchDraft,
    journal: MilkJournalCreateDraft,
    count: number
): MilkJournalEntryDraft[] =>
    Array.from({ length: count }, () => createEntryForBatch(batch, journal));

export const createEmptyBatch = (
    index: number,
    journal: MilkJournalCreateDraft,
    entryCount = DEFAULT_ENTRIES_PER_BATCH
): MilkJournalBatchDraft => {
    const batch: MilkJournalBatchDraft = {
        id: newLocalId(),
        batch_no: generateBatchNo(index),
        entries: [],
    };
    batch.entries = createEntriesForBatch(batch, journal, entryCount);
    return batch;
};

export const isEntryEmpty = (entry: MilkJournalEntryDraft) =>
    !entry.member_id &&
    !entry.quantity &&
    !entry.route_center_id &&
    !entry.can_id;

export const isEntryComplete = (entry: MilkJournalEntryDraft) =>
    Boolean(entry.member_id) &&
    entry.quantity !== '' &&
    !Number.isNaN(Number(entry.quantity));

export const initialMilkJournalCreateDraft = (): MilkJournalCreateDraft => {
    const journal_date = new Date().toISOString().slice(0, 10);
    const journal: MilkJournalCreateDraft = {
        journal: generateJournalNo(journal_date),
        route_id: '',
        transporter_id: '',
        journal_date,
        milk_delivery_shift_id: '',
        user_id: '',
        batches: [],
    };
    journal.batches = [createEmptyBatch(0, journal)];
    return journal;
};

/** Keep inherited entry fields in sync with journal header and batch number. */
export const syncJournalToBatches = (draft: MilkJournalCreateDraft): MilkJournalCreateDraft => {
    const ctx = journalContextFromDraft(draft);
    return {
        ...draft,
        batches: draft.batches.map((batch) => ({
            ...batch,
            entries: batch.entries.map((entry) => ({
                ...entry,
                batch_no: batch.batch_no,
                ...ctx,
            })),
        })),
    };
};

export const hasErrors = (errors: MilkJournalCreateErrors) => Object.keys(errors).length > 0;

export const validateJournalStep = (values: MilkJournalCreateDraft): MilkJournalCreateErrors => {
    const errors: MilkJournalCreateErrors = {};
    if (!values.journal?.trim()) errors.journal = 'Required';
    if (!values.route_id) errors.route_id = 'Required';
    if (!values.transporter_id) errors.transporter_id = 'Required';
    if (!values.journal_date) errors.journal_date = 'Required';
    if (!values.milk_delivery_shift_id) errors.milk_delivery_shift_id = 'Required';
    return errors;
};

export const validateBatchesStep = (values: MilkJournalCreateDraft): MilkJournalCreateErrors => {
    const errors: MilkJournalCreateErrors = {};
    if (!values.batches.length) {
        errors.batches = 'Add at least one batch';
        return errors;
    }

    values.batches.forEach((batch) => {
        const batchKey = batch.id;
        if (!batch.batch_no.trim()) {
            errors[`batch_${batchKey}_batch_no`] = 'Batch number is required';
        }
        const activeEntries = batch.entries.filter((entry) => !isEntryEmpty(entry));

        if (!activeEntries.some(isEntryComplete)) {
            errors[`batch_${batchKey}_entries`] = 'Complete at least one entry (member and quantity)';
        }

        activeEntries.forEach((entry) => {
            if (!isEntryComplete(entry)) {
                if (!entry.member_id) {
                    errors[`entry_${entry.id}_member_id`] = 'Required';
                }
                if (entry.quantity === '' || entry.quantity === undefined || entry.quantity === null) {
                    errors[`entry_${entry.id}_quantity`] = 'Required';
                } else if (Number.isNaN(Number(entry.quantity))) {
                    errors[`entry_${entry.id}_quantity`] = 'Invalid';
                }
            }
        });
    });

    return errors;
};

export const validateAll = (values: MilkJournalCreateDraft): MilkJournalCreateErrors => ({
    ...validateJournalStep(values),
    ...validateBatchesStep(values),
});
