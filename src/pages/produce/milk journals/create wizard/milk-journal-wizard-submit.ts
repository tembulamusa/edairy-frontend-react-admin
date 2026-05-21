import type { MilkJournalCreateDraft, MilkJournalEntryDraft } from './milk-journal-create-wizard.types';
import { isEntryEmpty, syncJournalToBatches } from './milk-journal-wizard-utils';

const apiUrl = import.meta.env.VITE_EDAIRY_API_URL ?? 'http://192.168.1.10:8080/api';

const getAuthToken = () => {
    try {
        const stored = window.localStorage.getItem('user');
        if (stored && stored !== 'undefined') {
            const user = JSON.parse(stored) as { token?: string };
            return user?.token ?? '';
        }
    } catch {
        return '';
    }
    return '';
};

const parseId = (value: string): number | undefined => {
    if (!value) return undefined;
    const parsed = Number.parseInt(String(value), 10);
    return Number.isInteger(parsed) && parsed > 0 ? parsed : undefined;
};

const parseQuantity = (value: string): number | undefined => {
    if (value === '') return undefined;
    const parsed = Number.parseFloat(value);
    return Number.isFinite(parsed) ? parsed : undefined;
};

const buildEntryPayload = (entry: MilkJournalEntryDraft) => {
    const payload: Record<string, unknown> = {
        member_id: parseId(entry.member_id),
        batch_no: entry.batch_no.trim(),
        route_id: parseId(entry.route_id),
        milk_delivery_shift_id: parseId(entry.milk_delivery_shift_id),
        journal_date: entry.journal_date,
        quantity: parseQuantity(entry.quantity),
        transporter_id: parseId(entry.transporter_id),
    };

    const routeCenterId = parseId(entry.route_center_id);
    if (routeCenterId) {
        payload.route_center_id = routeCenterId;
    }

    const canId = parseId(entry.can_id);
    if (canId) {
        payload.can_id = canId;
    }

    return payload;
};

export const buildMilkJournalWizardPayload = (draft: MilkJournalCreateDraft) => {
    const synced = syncJournalToBatches(draft);

    const batches = synced.batches.map((batch) => ({
        batch_no: batch.batch_no.trim(),
        entries: batch.entries.filter((entry) => !isEntryEmpty(entry)).map(buildEntryPayload),
    }));

    const entries = synced.batches.flatMap((batch) =>
        batch.entries.filter((entry) => !isEntryEmpty(entry)).map((entry) => buildEntryPayload(entry))
    );

    const payload: Record<string, unknown> = {
        journal: synced.journal.trim(),
        route_id: parseId(synced.route_id),
        transporter_id: parseId(synced.transporter_id),
        journal_date: synced.journal_date,
        milk_delivery_shift_id: parseId(synced.milk_delivery_shift_id),
        batches,
        entries,
    };

    const userId = parseId(synced.user_id);
    if (userId) {
        payload.user_id = userId;
    }

    return payload;
};

export const submitMilkJournalWizard = async (draft: MilkJournalCreateDraft) => {
    const token = getAuthToken();
    const body = buildMilkJournalWizardPayload(draft);

    const response = await fetch(`${apiUrl}/milk-journals`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            ...(token ? { Authorization: `Bearer ${token}` } : {}),
        },
        body: JSON.stringify(body),
    });

    const payload = await response.json().catch(() => ({}));

    let message =
        (payload as { message?: string })?.message ||
        `Request failed with status ${response.status}`;

    if (!response.ok) {
        const err = payload as { error?: string | Record<string, string> };
        if (typeof err.error === 'string') {
            message = err.error;
        } else if (err.error && typeof err.error === 'object') {
            message = Object.entries(err.error)
                .map(([key, val]) => `${key}: ${val}`)
                .join('; ');
        }
        throw new Error(message);
    }

    return {
        payload,
        message: message || 'Milk journal created successfully',
    };
};
