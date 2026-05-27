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

const ASSIGNMENT_TYPES = new Set(['PRIMARY', 'TEMPORARY', 'RELIEF', 'EMERGENCY']);

const normalizeAssignmentType = (value: unknown): string | undefined => {
    if (value === undefined || value === null || value === '') {
        return undefined;
    }
    const raw = String(value).toUpperCase();
    return ASSIGNMENT_TYPES.has(raw) ? raw : undefined;
};

const normalizeOptionalDate = (value: unknown): string | undefined => {
    if (value === undefined || value === null || value === '') {
        return undefined;
    }
    return String(value);
};

export const transformTransporterDriverAssignment = (data: RaRecord): RaRecord => {
    const { driver_id: _driverId, vehicle_id: _vehicleId, ...rest } = data;

    return {
        ...rest,
        transporter_driver_id: parseOptionalUnsignedId(
            data.transporter_driver_id ?? data.driver_id
        ),
        transporter_vehicle_id: parseOptionalUnsignedId(
            data.transporter_vehicle_id ?? data.vehicle_id
        ),
        assignment_type: normalizeAssignmentType(data.assignment_type),
        assigned_to: normalizeOptionalDate(data.assigned_to),
    };
};
