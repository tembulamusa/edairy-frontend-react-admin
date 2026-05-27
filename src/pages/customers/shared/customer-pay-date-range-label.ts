export const formatCustomerPayDateRangeLabel = (record: {
    name?: string;
    start_date?: string;
    end_date?: string;
    rate?: number | string;
    Rate?: number | string;
    id?: number;
}) => {
    const name = record.name?.trim();
    const start = record.start_date ? String(record.start_date).slice(0, 10) : '';
    const end = record.end_date ? String(record.end_date).slice(0, 10) : '';
    const rate = record.rate ?? record.Rate;
    const period =
        name && start && end ? `${name} (${start} – ${end})` : name || String(record.id ?? '');
    if (rate != null && rate !== '') {
        return `${period} — Rate: ${rate}`;
    }
    return period;
};
