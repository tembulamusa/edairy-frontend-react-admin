import type { UploadedPhotoValue } from '../shared/PhotoUploadInput';

export type TransporterCategory = 'INDIVIDUAL' | 'COMPANY' | '';

export type TransporterCreateDraft = {
    transporter_no: string;
    transporter_category: TransporterCategory;
    primary_phone: string;
    email_address: string;
    first_name: string;
    last_name: string;
    other_names: string;
    gender: string;
    date_of_birth: string;
    national_id_no: string;
    kra_pin: string;
    marital_status: string;
    next_of_kin_full_name: string;
    next_of_kin_phone: string;
    id_front_photo?: UploadedPhotoValue;
    id_back_photo?: UploadedPhotoValue;
    company_name: string;
    registration_no: string;
    company_kra_pin: string;
    contact_person_name: string;
    contact_person_phone: string;
    postal_address: string;
    postal_code: string;
    town: string;
    certificate_of_incorporation?: UploadedPhotoValue;
};

export type TransporterCreateErrors = Partial<Record<keyof TransporterCreateDraft, string>>;

export const initialTransporterCreateDraft: TransporterCreateDraft = {
    transporter_no: '',
    transporter_category: '',
    primary_phone: '',
    email_address: '',
    first_name: '',
    last_name: '',
    other_names: '',
    gender: '',
    date_of_birth: '',
    national_id_no: '',
    kra_pin: '',
    marital_status: '',
    next_of_kin_full_name: '',
    next_of_kin_phone: '',
    company_name: '',
    registration_no: '',
    company_kra_pin: '',
    contact_person_name: '',
    contact_person_phone: '',
    postal_address: '',
    postal_code: '',
    town: '',
};
