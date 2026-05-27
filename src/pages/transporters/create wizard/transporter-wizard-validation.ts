import { hasUpload } from './transporter-wizard-upload';
import type { TransporterCreateDraft, TransporterCreateErrors } from './transporter-create-wizard.types';

const isEmpty = (value: unknown) =>
    typeof value === 'string' ? value.trim() === '' : value === null || value === undefined;

export const validateBasicStep = (values: TransporterCreateDraft): TransporterCreateErrors => {
    const errors: TransporterCreateErrors = {};
    if (isEmpty(values.transporter_no)) errors.transporter_no = 'Required';
    if (values.transporter_category !== 'INDIVIDUAL' && values.transporter_category !== 'COMPANY') {
        errors.transporter_category = 'Required';
    }
    if (isEmpty(values.primary_phone)) errors.primary_phone = 'Required';
    if (values.email_address.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email_address.trim())) {
        errors.email_address = 'Invalid email';
    }
    return errors;
};

export const validateIndividualStep = (values: TransporterCreateDraft): TransporterCreateErrors => {
    const errors: TransporterCreateErrors = {};
    if (isEmpty(values.first_name)) errors.first_name = 'Required';
    if (isEmpty(values.last_name)) errors.last_name = 'Required';
    if (isEmpty(values.gender)) errors.gender = 'Required';
    if (isEmpty(values.national_id_no)) errors.national_id_no = 'Required';
    if (!hasUpload(values.id_front_photo)) errors.id_front_photo = 'Required';
    if (!hasUpload(values.id_back_photo)) errors.id_back_photo = 'Required';
    return errors;
};

export const validateCompanyStep = (values: TransporterCreateDraft): TransporterCreateErrors => {
    const errors: TransporterCreateErrors = {};
    if (isEmpty(values.company_name)) errors.company_name = 'Required';
    return errors;
};

export const validateDetailsStep = (values: TransporterCreateDraft): TransporterCreateErrors =>
    values.transporter_category === 'COMPANY' ? validateCompanyStep(values) : validateIndividualStep(values);

export const validateAll = (values: TransporterCreateDraft): TransporterCreateErrors => ({
    ...validateBasicStep(values),
    ...validateDetailsStep(values),
});

export const hasErrors = (errors: TransporterCreateErrors) => Object.keys(errors).length > 0;
