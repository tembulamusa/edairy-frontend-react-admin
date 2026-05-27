const apiUrl = import.meta.env.VITE_EDAIRY_API_URL ?? 'http://192.168.1.10:8080/api';

const getAuthHeaders = (): Record<string, string> => {
    const headers: Record<string, string> = { 'Content-Type': 'application/json' };

    try {
        const stored = window.localStorage.getItem('user');
        if (stored && stored !== 'undefined') {
            const user = JSON.parse(stored) as { token?: string };
            if (user?.token) {
                headers.Authorization = `Bearer ${user.token}`;
            }
        }
    } catch {
        // ignore invalid auth storage
    }

    return headers;
};

export const createCustomerBillingForPayDateRange = async (payDateRangeId: number): Promise<void> => {
    const response = await fetch(`${apiUrl}/customer-billings`, {
        method: 'POST',
        headers: getAuthHeaders(),
        body: JSON.stringify({
            pay_date_range_id: payDateRangeId,
            PayDateRange: payDateRangeId,
        }),
    });

    if (!response.ok) {
        const errorText = await response.text();
        throw new Error(errorText || `Failed to create billing for pay date range ${payDateRangeId}`);
    }
};

export const createCustomerBillingsForPayDateRanges = async (payDateRangeIds: number[]): Promise<void> => {
    for (const payDateRangeId of payDateRangeIds) {
        await createCustomerBillingForPayDateRange(payDateRangeId);
    }
};
