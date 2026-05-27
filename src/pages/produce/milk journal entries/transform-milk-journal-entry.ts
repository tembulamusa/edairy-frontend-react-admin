import type { RaRecord } from 'react-admin';

const toNumber = (value: unknown): number | undefined => {
    if (value === '' || value === null || value === undefined) return undefined;
    const parsed = Number(value);
    return Number.isFinite(parsed) ? parsed : undefined;
};

/** Coerce IDs and quantity for the milk journal entries API. */
export const transformMilkJournalEntry = (data: RaRecord): RaRecord => {
    const next: RaRecord = { ...data };

    if (next.quantity !== undefined) {
        next.quantity = toNumber(next.quantity);
    }

    if (typeof next.batch_no === 'string') {
        next.batch_no = next.batch_no.trim();
    }

    if (next.milk_journal_batch_id !== undefined && next.milk_journal_batch_id !== '') {
        const parsed = Number.parseInt(String(next.milk_journal_batch_id), 10);
        if (Number.isInteger(parsed) && parsed > 0) {
            next.milk_journal_batch_id = parsed;
        }
    } else {
        delete next.milk_journal_batch_id;
    }

    return next;
};
