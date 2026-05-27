import { normalizeStoreId } from '../shared/use-store-choices';
import type { MovementLineState, StockMovementDraft } from './store-stock-movement.types';
import { getSelectedMovementLines } from './store-stock-movement-utils';

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

const parseId = (value: unknown) => {
    const numeric = Number(normalizeStoreId(value));
    return Number.isFinite(numeric) && numeric > 0 ? numeric : undefined;
};

export const buildStockMovementPayload = (draft: StockMovementDraft, lines: MovementLineState[]) => {
    const selected = getSelectedMovementLines(lines);

    return {
        transaction_date: draft.transaction_date,
        store_id: parseId(draft.store_id),
        movement_type_id: parseId(draft.movement_type_id),
        remarks: draft.remarks.trim() || undefined,
        items: selected.map((line) => ({
            item_id: line.itemId,
            quantity: Number(line.quantity),
        })),
    };
};

export const submitStockMovement = async (draft: StockMovementDraft, lines: MovementLineState[]) => {
    const payload = buildStockMovementPayload(draft, lines);
    const token = getAuthToken();

    const response = await fetch(`${apiUrl}/store-stock-movements`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            ...(token ? { Authorization: `Bearer ${token}` } : {}),
        },
        body: JSON.stringify(payload),
    });

    const body = await response.json().catch(() => ({}));
    const message =
        (body as { message?: string }).message ||
        (response.ok ? 'Stock movement created successfully' : 'Failed to save stock movement');

    if (!response.ok) {
        throw new Error(message);
    }

    return { message, data: (body as { data?: unknown }).data ?? body };
};
