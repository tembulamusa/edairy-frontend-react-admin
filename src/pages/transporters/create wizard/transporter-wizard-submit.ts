import type { TransporterCreateDraft } from './transporter-create-wizard.types';
import { getFileFromUpload } from './transporter-wizard-upload';

const apiUrl = import.meta.env.VITE_EDAIRY_API_URL ?? 'http://192.168.1.10:8080/api';

const getAuthToken = () => {
    try {
        const stored = window.localStorage.getItem('user');
        if (stored && stored !== 'undefined') {
            const user = JSON.parse(stored) as { token?: string };
            return user?.token ?? '';
        }
    } catch {
        return '';
    }
    return '';
};

const extractId = (payload: unknown): number | undefined => {
    const record = payload as {
        data?: { id?: number };
        Data?: { id?: number };
        id?: number;
    };
    const id = record?.data?.id ?? record?.Data?.id ?? record?.id;
    return typeof id === 'number' && Number.isInteger(id) && id > 0 ? id : undefined;
};

/** Flat payload with every wizard field (member registration pattern). */
export const buildTransporterWizardPayload = (values: TransporterCreateDraft) => ({
    transporter_no: values.transporter_no.trim(),
    transporter_category: values.transporter_category,
    primary_phone: values.primary_phone.trim(),
    email_address: values.email_address.trim(),
    first_name: values.first_name.trim(),
    last_name: values.last_name.trim(),
    other_names: values.other_names.trim(),
    gender: values.gender,
    date_of_birth: values.date_of_birth,
    national_id_no: values.national_id_no.trim(),
    kra_pin:
        values.transporter_category === 'COMPANY' ? values.company_kra_pin.trim() : values.kra_pin.trim(),
    marital_status: values.marital_status,
    next_of_kin_full_name: values.next_of_kin_full_name.trim(),
    next_of_kin_phone: values.next_of_kin_phone.trim(),
    company_name: values.company_name.trim(),
    registration_no: values.registration_no.trim(),
    contact_person_name: values.contact_person_name.trim(),
    contact_person_phone: values.contact_person_phone.trim(),
    postal_address: values.postal_address.trim(),
    postal_code: values.postal_code.trim(),
    town: values.town.trim(),
    id_front_photo: getFileFromUpload(values.id_front_photo) ?? null,
    id_back_photo: getFileFromUpload(values.id_back_photo) ?? null,
    certificate_of_incorporation: getFileFromUpload(values.certificate_of_incorporation) ?? null,
});

export const buildTransporterWizardFormData = (values: TransporterCreateDraft) => {
    const formData = new FormData();
    const payload = buildTransporterWizardPayload(values);

    Object.entries(payload).forEach(([key, value]) => {
        if (value === null || value === undefined) {
            return;
        }

        if (value instanceof File) {
            formData.append(key, value);
            return;
        }

        if (Array.isArray(value)) {
            value.forEach((item) => {
                formData.append(`${key}[]`, String(item));
            });
            return;
        }

        if (typeof value === 'string' && value.trim() === '') {
            return;
        }

        formData.append(key, String(value));
    });

    return formData;
};

const postMultipart = async (resource: string, formData: FormData) => {
    const token = getAuthToken();
    const response = await fetch(`${apiUrl}/${resource}`, {
        method: 'POST',
        headers: token ? { Authorization: `Bearer ${token}` } : {},
        body: formData,
    });

    const payload = await response.json().catch(() => ({}));
    const message =
        (payload as { message?: string })?.message ||
        `Request failed with status ${response.status}`;

    if (!response.ok) {
        throw new Error(message);
    }

    return payload;
};

export const submitTransporterWizard = async (values: TransporterCreateDraft) => {
    const formData = buildTransporterWizardFormData(values);
    const payload = await postMultipart('transporters', formData);

    return {
        payload,
        message:
            (payload as { message?: string })?.message || 'Transporter created successfully',
        id: extractId(payload),
    };
};
