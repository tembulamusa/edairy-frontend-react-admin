import type { RaRecord } from 'react-admin';

export const parseReferenceId = (value: unknown): number | undefined => {
    if (value == null || value === '') {
        return undefined;
    }

    if (typeof value === 'object' && !Array.isArray(value) && 'id' in value) {
        const numeric = Number((value as { id: unknown }).id);
        return Number.isFinite(numeric) && numeric > 0 ? numeric : undefined;
    }

    const numeric = Number(value);
    return Number.isFinite(numeric) && numeric > 0 ? numeric : undefined;
};

const resolveMilkRate = (data: RaRecord): number | undefined => {
    const direct = Number(data.rate ?? data.Rate);
    if (Number.isFinite(direct)) {
        return direct;
    }

    const rangeRef = data.customer_pay_date_range_id ?? data.pay_date_range_id;
    if (typeof rangeRef === 'object' && rangeRef !== null && !Array.isArray(rangeRef)) {
        const fromRange = Number((rangeRef as { rate?: unknown }).rate ?? (rangeRef as { Rate?: unknown }).Rate);
        if (Number.isFinite(fromRange)) {
            return fromRange;
        }
    }

    return undefined;
};

export const transformCustomerMilkRateRecord = (data: RaRecord): RaRecord => {
    const rate = resolveMilkRate(data);

    return {
        CustomerID: parseReferenceId(data.customer_id ?? data.CustomerID),
        GradeID: parseReferenceId(data.grade_id ?? data.GradeID),
        PayDateRange: parseReferenceId(
            data.customer_pay_date_range_id ?? data.pay_date_range_id ?? data.PayDateRange
        ),
        Rate: Number.isFinite(rate) ? rate : undefined,
    };
};

export const normalizeCustomerMilkRateRecord = (item: Record<string, unknown>): Record<string, unknown> => ({
    ...item,
    customer_id: item.customer_id ?? item.CustomerID,
    grade_id: item.grade_id ?? item.GradeID,
    pay_date_range_id:
        item.pay_date_range_id ?? item.customer_pay_date_range_id ?? item.PayDateRange,
    customer_pay_date_range_id:
        item.customer_pay_date_range_id ?? item.pay_date_range_id ?? item.PayDateRange,
    rate: item.rate ?? item.Rate,
    customer_name:
        item.customer_name ??
        item.CustomerName ??
        item.full_names ??
        item.full_name ??
        item.customer_no,
    grade_name: item.grade_name ?? item.GradeName ?? item.grade,
    pay_date_range_name:
        item.pay_date_range_name ??
        item.PayDateRangeName ??
        item.period_name ??
        item.name,
    pay_date_range_start:
        item.pay_date_range_start ??
        item.PayDateRangeStart ??
        item.start_date ??
        item.StartDate,
    pay_date_range_end:
        item.pay_date_range_end ?? item.PayDateRangeEnd ?? item.end_date ?? item.EndDate,
});
