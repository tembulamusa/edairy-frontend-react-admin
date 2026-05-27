import type { CustomerInvoiceGeneratePayload } from './customer-invoice-create.utils';

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

export const createCustomerInvoiceForCustomer = async ({
    customerId,
    billingIds,
}: CustomerInvoiceGeneratePayload): Promise<void> => {
    const response = await fetch(`${apiUrl}/customer-invoices`, {
        method: 'POST',
        headers: getAuthHeaders(),
        body: JSON.stringify({
            customer_id: customerId,
            CustomerID: customerId,
            billing_ids: billingIds,
            BillingIDs: billingIds,
            bill_ids: billingIds,
            BillIDs: billingIds,
        }),
    });

    if (!response.ok) {
        const errorText = await response.text();
        throw new Error(errorText || `Failed to generate invoice for customer ${customerId}`);
    }
};

export const createCustomerInvoicesForCustomers = async (
    payloads: CustomerInvoiceGeneratePayload[]
): Promise<void> => {
    for (const payload of payloads) {
        await createCustomerInvoiceForCustomer(payload);
    }
};
