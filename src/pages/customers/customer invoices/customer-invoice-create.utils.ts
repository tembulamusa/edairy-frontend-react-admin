export type CustomerBillingRow = {
    id?: number | string;
    customer_id?: number | string;
    CustomerID?: number | string;
    customer_name?: string;
    pay_date_range_name?: string;
    PayDateRangeName?: string;
    total_deliveries?: number | string;
    total_amount?: number | string;
    TotalAmount?: number | string;
};

export const resolveBillingId = (bill: CustomerBillingRow): number | undefined => {
    const id = Number(bill.id);
    return Number.isFinite(id) && id > 0 ? id : undefined;
};

export const resolveBillingCustomerId = (bill: CustomerBillingRow): number | undefined => {
    const id = Number(bill.customer_id ?? bill.CustomerID);
    return Number.isFinite(id) && id > 0 ? id : undefined;
};

export const formatBillingLabel = (bill: CustomerBillingRow) => {
    const period = bill.pay_date_range_name ?? bill.PayDateRangeName ?? `Billing #${bill.id ?? ''}`;
    const amount = bill.total_amount ?? bill.TotalAmount;
    if (amount != null && amount !== '') {
        return `${period} — Amount: ${amount}`;
    }
    return period;
};

export const groupBillingsByCustomerId = (billings: CustomerBillingRow[]) => {
    const grouped = new Map<number, CustomerBillingRow[]>();

    billings.forEach((bill) => {
        const customerId = resolveBillingCustomerId(bill);
        const billingId = resolveBillingId(bill);
        if (!customerId || !billingId) {
            return;
        }

        const existing = grouped.get(customerId) ?? [];
        existing.push(bill);
        grouped.set(customerId, existing);
    });

    return grouped;
};

export type CustomerInvoiceGeneratePayload = {
    customerId: number;
    billingIds: number[];
};

export const buildInvoiceGeneratePayloads = (
    customers: Array<{ id?: number | string }>,
    billingsByCustomer: Map<number, CustomerBillingRow[]>,
    selectedBillIds: Set<number>
): CustomerInvoiceGeneratePayload[] =>
    customers
        .map((customer) => {
            const customerId = Number(customer.id);
            if (!Number.isFinite(customerId) || customerId <= 0) {
                return null;
            }

            const billingIds = (billingsByCustomer.get(customerId) ?? [])
                .map((bill) => resolveBillingId(bill))
                .filter((id): id is number => id != null && selectedBillIds.has(id));

            if (billingIds.length === 0) {
                return null;
            }

            return { customerId, billingIds };
        })
        .filter((payload): payload is CustomerInvoiceGeneratePayload => payload != null);
