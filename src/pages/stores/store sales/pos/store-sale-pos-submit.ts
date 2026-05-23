import type { CustomerType, StoreSalePosDraft } from './store-sale-pos.types';
import { calcCartTotals } from './store-sale-pos-utils';

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

const parseId = (value: string) => {
    const numeric = Number(value);
    return Number.isFinite(numeric) && numeric > 0 ? numeric : undefined;
};

const partyFieldByCustomerType: Partial<Record<CustomerType, string>> = {
    CUSTOMER: 'customer_id',
    MEMBER: 'member_id',
    TRANSPORTER: 'transporter_id',
    SUPPLIER: 'supplier_id',
    VENDOR: 'vendor_id',
    EMPLOYEE: 'employee_id',
};

export const buildStoreSalePosPayload = (draft: StoreSalePosDraft) => {
    const { total } = calcCartTotals(draft.cart);

    const payload: Record<string, unknown> = {
        transaction_date: draft.transaction_date,
        store_id: parseId(draft.store_id),
        sale_type: draft.sale_type,
        customer_type: draft.customer_type,
        total_amount: total,
        amount_paid: total,
        amount_due: 0,
        items: draft.cart.map((line) => ({
            item_id: line.itemId,
            quantity: line.quantity,
            unit_price: line.unitPrice,
            amount: line.lineTotal,
        })),
    };

    const partyField = partyFieldByCustomerType[draft.customer_type];
    const partyId = parseId(draft.party_id);
    if (partyField && partyId) {
        payload[partyField] = partyId;
    }

    const paymentModeId = parseId(draft.payment_mode_id);
    if (paymentModeId) {
        payload.payment_mode_id = paymentModeId;
    }

    return payload;
};

export const submitStoreSalePos = async (draft: StoreSalePosDraft) => {
    const payload = buildStoreSalePosPayload(draft);
    const token = getAuthToken();

    const response = await fetch(`${apiUrl}/store-sales`, {
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
        (response.ok ? 'Store sale recorded successfully' : 'Failed to record store sale');

    if (!response.ok) {
        throw new Error(message);
    }

    return { message, data: (body as { data?: unknown }).data ?? body };
};
