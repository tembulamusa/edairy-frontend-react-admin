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

const parseFloatField = (value: unknown): number | undefined => {
    if (value === undefined || value === null || value === '') {
        return undefined;
    }
    const parsed = typeof value === 'number' ? value : Number.parseFloat(String(value));
    return Number.isFinite(parsed) ? parsed : undefined;
};

export const transformMilkCan = (data: RaRecord): RaRecord => {
    const { route_name: _routeName, ...rest } = data;

    return {
        ...rest,
        route_id: parseId(data.route_id),
        can_size: parseFloatField(data.can_size),
        tare_weight: parseFloatField(data.tare_weight),
    };
};
