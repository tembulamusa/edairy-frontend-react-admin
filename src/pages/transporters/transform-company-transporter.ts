import type { RaRecord } from 'react-admin';
import { resolveUpload } from './create wizard/transporter-wizard-upload';

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

export const transformCompanyTransporter = async (data: RaRecord): Promise<RaRecord> => ({
    ...data,
    transporter_id: parseOptionalUnsignedId(data.transporter_id),
    certificate_of_incorporation: await resolveUpload(data.certificate_of_incorporation),
});
