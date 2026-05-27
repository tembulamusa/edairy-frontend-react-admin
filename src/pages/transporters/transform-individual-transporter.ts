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

export const transformIndividualTransporter = async (data: RaRecord): Promise<RaRecord> => ({
    ...data,
    transporter_id: parseOptionalUnsignedId(data.transporter_id),
    date_of_birth: data.date_of_birth ?? undefined,
    id_front_photo: await resolveUpload(data.id_front_photo),
    id_back_photo: await resolveUpload(data.id_back_photo),
});
