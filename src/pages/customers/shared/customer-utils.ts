type CustomerNoRecord = {
    customer_no?: string;
    id?: number;
};

export const parseCustomerNoSequence = (customerNo: unknown): number => {
    const raw = String(customerNo ?? '').trim();
    const prefixed = raw.match(/^CUS-(\d+)$/i);
    if (prefixed) {
        return Number.parseInt(prefixed[1], 10);
    }

    const numeric = Number(raw);
    return Number.isFinite(numeric) && numeric > 0 ? numeric : 0;
};

export const generateCustomerNo = (sequence: number) =>
    `CUS-${String(sequence).padStart(4, '0')}`;

export const nextCustomerNoFromRecords = (records: CustomerNoRecord[]) => {
    const fromNumbers = records.reduce(
        (max, record) => Math.max(max, parseCustomerNoSequence(record.customer_no)),
        0
    );
    const fromIds = records.reduce((max, record) => Math.max(max, Number(record.id) || 0), 0);
    return generateCustomerNo(Math.max(fromNumbers, fromIds) + 1);
};
