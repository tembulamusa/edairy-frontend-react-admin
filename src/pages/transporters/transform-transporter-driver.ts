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

const normalizeGender = (value: unknown): string | undefined => {
    if (value === undefined || value === null || value === '') {
        return undefined;
    }
    const raw = String(value).toUpperCase();
    if (raw === 'MALE' || raw === 'FEMALE' || raw === 'OTHER') {
        return raw;
    }
    return undefined;
};

export const transformTransporterDriver = (data: RaRecord): RaRecord => {
    const { status: _status, ...rest } = data;

    return {
        ...rest,
        transporter_id: parseOptionalUnsignedId(data.transporter_id),
        gender: normalizeGender(data.gender),
        national_id_no:
            typeof data.national_id_no === 'string'
                ? data.national_id_no.trim()
                : data.national_id_no,
    };
};
