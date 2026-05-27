import { normalizeStoreId } from '../shared/use-store-choices';
import type { StockTakingDraft, StockTakingLineState } from './store-stock-taking.types';
import { getCountedStockTakingLines } from './store-stock-taking-utils';

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

const parseStoreId = (value: unknown) => {
    const numeric = Number(normalizeStoreId(value));
    return Number.isFinite(numeric) && numeric > 0 ? numeric : undefined;
};

export const buildStockTakingPayload = (draft: StockTakingDraft, lines: StockTakingLineState[]) => {
    const counted = getCountedStockTakingLines(lines);

    return {
        stock_take_no: draft.stock_take_no.trim(),
        stock_take_date: draft.stock_take_date,
        store_id: parseStoreId(draft.store_id),
        remarks: draft.remarks.trim() || undefined,
        items: counted.map((line) => ({
            item_id: line.itemId,
            system_quantity: line.systemQuantity,
            physical_quantity: Number(line.physicalQuantity),
        })),
    };
};

export const submitStockTaking = async (
    draft: StockTakingDraft,
    lines: StockTakingLineState[],
    id?: string | number
) => {
    const payload = buildStockTakingPayload(draft, lines);
    const token = getAuthToken();
    const isEdit = id != null && id !== '';
    const url = isEdit ? `${apiUrl}/store-stock-takings/${id}` : `${apiUrl}/store-stock-takings`;

    const response = await fetch(url, {
        method: isEdit ? 'PUT' : 'POST',
        headers: {
            'Content-Type': 'application/json',
            ...(token ? { Authorization: `Bearer ${token}` } : {}),
        },
        body: JSON.stringify(payload),
    });

    const body = await response.json().catch(() => ({}));
    const message =
        (body as { message?: string }).message ||
        (response.ok
            ? isEdit
                ? 'Stock taking updated successfully'
                : 'Stock taking created successfully'
            : 'Failed to save stock taking');

    if (!response.ok) {
        throw new Error(message);
    }

    return { message, data: (body as { data?: unknown }).data ?? body };
};
