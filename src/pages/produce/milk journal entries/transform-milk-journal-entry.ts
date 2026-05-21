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

    return next;
};
