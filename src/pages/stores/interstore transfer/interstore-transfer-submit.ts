import type { InterstoreTransferDraft, TransferLineState } from './interstore-transfer.types';
import { getSelectedTransferLines, parseStoreId } from './interstore-transfer-utils';

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

export const buildInterstoreTransferPayload = (
    draft: InterstoreTransferDraft,
    lines: TransferLineState[]
) => {
    const selected = getSelectedTransferLines(lines);

    return {
        reference: draft.reference.trim(),
        status: draft.status,
        from_store_id: parseStoreId(draft.from_store_id),
        to_store_id: parseStoreId(draft.to_store_id),
        transfer_date: draft.transfer_date,
        items: selected.map((line) => ({
            item_id: line.itemId,
            quantity: Number(line.quantity),
        })),
    };
};

export const submitInterstoreTransfer = async (
    draft: InterstoreTransferDraft,
    lines: TransferLineState[],
    id?: string | number
) => {
    const payload = buildInterstoreTransferPayload(draft, lines);
    const token = getAuthToken();
    const isEdit = id != null && id !== '';
    const url = isEdit ? `${apiUrl}/inter-store-transfers/${id}` : `${apiUrl}/inter-store-transfers`;

    console.log('[inter-store-transfer] submit', {
        method: isEdit ? 'PUT' : 'POST',
        url,
        payload,
    });

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
                ? 'Inter store transfer updated successfully'
                : 'Inter store transfer created successfully'
            : 'Failed to save inter store transfer');

    if (!response.ok) {
        throw new Error(message);
    }

    return { message, data: (body as { data?: unknown }).data ?? body };
};
