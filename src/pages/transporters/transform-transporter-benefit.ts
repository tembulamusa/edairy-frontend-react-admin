import type { RaRecord } from 'react-admin';

const parseId = (value: unknown): number | undefined => {
    if (value === undefined || value === null || value === '') {
        return undefined;
    }
    const parsed = typeof value === 'number' ? value : Number.parseInt(String(value), 10);
    if (!Number.isInteger(parsed) || parsed <= 0) {
        return undefined;
    }
    return parsed;
};

const parseDecimal = (value: unknown): number | undefined => {
    if (value === undefined || value === null || value === '') {
        return undefined;
    }
    const parsed = typeof value === 'number' ? value : Number.parseFloat(String(value));
    return Number.isFinite(parsed) ? parsed : undefined;
};

const stringifyMinQuantity = (value: unknown): string | undefined => {
    const parsed = parseDecimal(value);
    return parsed === undefined ? undefined : String(parsed);
};

const normalizeName = (value: unknown): string | undefined => {
    if (value === undefined || value === null) {
        return undefined;
    }
    const trimmed = String(value).trim();
    return trimmed === '' ? undefined : trimmed;
};

/** Strip display-only fields; send IDs and numeric benefit terms the API expects. */
export const transformTransporterBenefit = (data: RaRecord): RaRecord => {
    const { route_name: _routeName, status: _status, ...rest } = data;

    return {
        ...rest,
        name: normalizeName(data.name),
        transporter_id: parseId(data.transporter_id),
        route_id: parseId(data.route_id),
        min_quantity: stringifyMinQuantity(data.min_quantity),
        rate: parseDecimal(data.rate),
    };
};
