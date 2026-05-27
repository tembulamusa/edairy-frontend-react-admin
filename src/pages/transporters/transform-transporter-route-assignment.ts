import type { RaRecord } from 'react-admin';

const parseOptionalUnsignedId = (value: unknown): number | undefined => {
    if (value === undefined || value === null || value === '') {
        return undefined;
    }
    const parsed = typeof value === 'number' ? value : Number.parseInt(String(value), 10);
    if (!Number.isInteger(parsed) || parsed < 0) {
        return undefined;
    }
    return parsed === 0 ? undefined : parsed;
};

export const transformTransporterRouteAssignment = (data: RaRecord): RaRecord => ({
    ...data,
    transporter_id: parseOptionalUnsignedId(data.transporter_id),
    route_id: parseOptionalUnsignedId(data.route_id),
});
