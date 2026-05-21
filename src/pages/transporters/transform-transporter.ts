import type { RaRecord } from 'react-admin';

const normalizeTransporterCategory = (value: unknown): string | undefined => {
    if (value === undefined || value === null || value === '') {
        return undefined;
    }
    const raw = String(value).toUpperCase();
    if (raw === 'INDIVIDUAL' || raw === 'COMPANY') {
        return raw;
    }
    return undefined;
};

export const transformTransporter = (data: RaRecord): RaRecord => ({
    ...data,
    transporter_category: normalizeTransporterCategory(data.transporter_category),
});
