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

const normalizeVehicleType = (value: unknown): string | undefined => {
    if (value === undefined || value === null || value === '') {
        return undefined;
    }
    const raw = String(value).toUpperCase();
    const allowed = new Set([
        'MOTORBIKE',
        'PICKUP',
        'VAN',
        'TANKER',
        'TRACK',
        'LORRY',
        'BICYLE',
        'TUKTUK',
        'OTHER',
    ]);
    return allowed.has(raw) ? raw : undefined;
};

export const transformTransporterVehicle = (data: RaRecord): RaRecord => ({
    ...data,
    transporter_id: parseOptionalUnsignedId(data.transporter_id),
    route_id: parseOptionalUnsignedId(data.route_id),
    vehicle_type: normalizeVehicleType(data.vehicle_type),
});
