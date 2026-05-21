import type { RaRecord } from 'react-admin';

export const DAILY_MILK_JOURNALS_RESOURCE = 'milk-journals-today';

export type BatchChoice = {
    /** Value stored on the form (batch id or batch_no). */
    id: string;
    /** Label shown in the dropdown. */
    name: string;
    batchNo: string;
};

export const formatJournalDate = (value: unknown) => {
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

export const transporterLabel = (journal: RaRecord) => {
    const no = journal.transporter_no as string | undefined;
    const name = journal.transporter_name as string | undefined;
    if (no && name) return `${no} — ${name}`;
    return no ?? name ?? '—';
};

export const dailyJournalOptionText = (record: RaRecord) => {
    const journal = record.journal as string | undefined;
    const route = record.route_name as string | undefined;
    const date = record.journal_date as string | undefined;
    const datePart = date ? date.slice(0, 10) : '';
    const transporter = transporterLabel(record);
    const parts = [journal, route, datePart, transporter !== '—' ? transporter : ''].filter(
        Boolean
    );
    return parts.join(' — ') || String(record.id ?? '');
};

const batchListFromJournal = (journal: RaRecord): unknown[] => {
    if (Array.isArray(journal.batches)) return journal.batches;
    if (Array.isArray(journal.batch_numbers)) return journal.batch_numbers;
    return [];
};

/** Batches embedded on a milk-journals-today journal record. */
export const parseJournalBatches = (journal?: RaRecord | null): BatchChoice[] => {
    if (!journal) return [];

    return batchListFromJournal(journal)
        .map((item, index) => {
            if (typeof item === 'string' && item.trim()) {
                const batchNo = item.trim();
                return { id: batchNo, name: batchNo, batchNo };
            }
            if (item && typeof item === 'object') {
                const record = item as RaRecord;
                const batchNo = String(
                    record.batch_no ?? record.batch_number ?? record.number ?? ''
                ).trim();
                const recordId = record.id;
                const id =
                    recordId !== undefined && recordId !== null && recordId !== ''
                        ? String(recordId)
                        : batchNo || String(index);
                const name = batchNo || id;
                return { id, name, batchNo: batchNo || name };
            }
            return null;
        })
        .filter((choice): choice is BatchChoice => choice !== null && Boolean(choice.name));
};

export const findDailyJournal = (journals: RaRecord[], journalId: unknown) =>
    journals.find((journal) => String(journal.id) === String(journalId));

export const batchChoiceUsesRecordId = (choices: BatchChoice[]) =>
    choices.some((choice) => choice.id !== choice.batchNo);
