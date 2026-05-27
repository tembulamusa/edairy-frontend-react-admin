import type { ReactNode } from 'react';
import {
    TextInput,
    NumberInput,
    DateInput,
    BooleanInput,
    ReferenceInput,
    SelectInput,
    email,
    required,
    type Validator,
} from 'react-admin';
import { Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import { PhotoUploadInput } from './shared/PhotoUploadInput';
import { DocumentUploadInput } from './shared/DocumentUploadInput';

const GENDER_CHOICES = [
    { id: 'MALE', name: 'Male' },
    { id: 'FEMALE', name: 'Female' },
    { id: 'OTHER', name: 'Other' },
];

const MARITAL_STATUS_CHOICES = [
    { id: 'SINGLE', name: 'Single' },
    { id: 'MARRIED', name: 'Married' },
    { id: 'DIVORCED', name: 'Divorced' },
    { id: 'WIDOWED', name: 'Widowed' },
];

const TRANSPORTER_CATEGORY_CHOICES = [
    { id: 'INDIVIDUAL', name: 'Individual' },
    { id: 'COMPANY', name: 'Company' },
];

const DRIVER_ASSIGNMENT_TYPE_CHOICES = [
    { id: 'PRIMARY', name: 'Primary' },
    { id: 'TEMPORARY', name: 'Temporary' },
    { id: 'RELIEF', name: 'Relief' },
    { id: 'EMERGENCY', name: 'Emergency' },
];

const parseDateValue = (value: unknown): Date | null => {
    if (value === undefined || value === null || value === '') {
        return null;
    }
    const parsed = new Date(String(value));
    return Number.isNaN(parsed.getTime()) ? null : parsed;
};

/** Optional end date; when set, must be strictly after assigned_from. */
const validateAssignedToAfterFrom = (value: unknown, allValues?: { assigned_from?: unknown }) => {
    if (value === undefined || value === null || value === '') {
        return undefined;
    }
    const assignedTo = parseDateValue(value);
    const assignedFrom = parseDateValue(allValues?.assigned_from);
    if (!assignedTo) {
        return 'Invalid date';
    }
    if (!assignedFrom) {
        return undefined;
    }
    if (assignedTo.getTime() <= assignedFrom.getTime()) {
        return 'Assigned To must be after Assigned From';
    }
    return undefined;
};

const validateAssignedFromBeforeTo = (value: unknown, allValues?: { assigned_to?: unknown }) => {
    if (value === undefined || value === null || value === '') {
        return undefined;
    }
    const assignedFrom = parseDateValue(value);
    const assignedTo = parseDateValue(allValues?.assigned_to);
    if (!assignedFrom || !assignedTo) {
        return undefined;
    }
    if (assignedFrom.getTime() >= assignedTo.getTime()) {
        return 'Assigned From must be before Assigned To';
    }
    return undefined;
};

const VEHICLE_TYPE_CHOICES = [
    { id: 'MOTORBIKE', name: 'Motorbike' },
    { id: 'PICKUP', name: 'Pickup' },
    { id: 'VAN', name: 'Van' },
    { id: 'TANKER', name: 'Tanker' },
    { id: 'TRACK', name: 'Truck' },
    { id: 'LORRY', name: 'Lorry' },
    { id: 'BICYLE', name: 'Bicycle' },
    { id: 'TUKTUK', name: 'Tuktuk' },
    { id: 'OTHER', name: 'Other' },
];

const photoRequired: Validator = (value) => {
    if (typeof value === 'string' && value.trim() !== '') {
        return undefined;
    }
    if (value && typeof value === 'object') {
        const photo = value as { rawFile?: File; src?: string };
        if (photo.rawFile || (typeof photo.src === 'string' && photo.src.trim() !== '')) {
            return undefined;
        }
    }
    return 'Required';
};

const sectionTitle = (text: string) => (
    <Grid size={{ xs: 12 }}>
        <Typography variant="subtitle1" fontWeight="bold" sx={{ mt: 1 }}>
            {text}
        </Typography>
    </Grid>
);

const gridField = (children: ReactNode, md: number = 6) => (
    <Grid size={{ xs: 12, md }}>{children}</Grid>
);

export const TransporterFormFields = () => (
    <Grid container spacing={2} alignItems="flex-start">
        {gridField(
            <TextInput
                source="transporter_no"
                label="Transporter No"
                validate={required()}
                fullWidth
                variant="outlined"
            />
        )}
        {gridField(
            <SelectInput
                source="transporter_category"
                label="Category"
                choices={TRANSPORTER_CATEGORY_CHOICES}
                optionText="name"
                optionValue="id"
                fullWidth
                variant="outlined"
                validate={required()}
            />
        )}
        {gridField(
            <TextInput
                source="primary_phone"
                label="Primary Phone"
                validate={required()}
                fullWidth
                variant="outlined"
            />
        )}
        {gridField(
            <TextInput
                source="email_address"
                label="Email Address"
                validate={email()}
                fullWidth
                variant="outlined"
            />
        )}
    </Grid>
);

export const IndividualTransporterFormFields = () => (
    <Grid container spacing={2} alignItems="flex-start">
        {sectionTitle('Personal details')}
        {gridField(
            <TextInput source="first_name" label="First Name" validate={required()} fullWidth variant="outlined" />
        )}
        {gridField(
            <TextInput source="last_name" label="Last Name" validate={required()} fullWidth variant="outlined" />
        )}
        {gridField(
            <TextInput source="other_names" label="Other Names" fullWidth variant="outlined" />
        )}
        {gridField(
            <SelectInput
                source="gender"
                label="Gender"
                choices={GENDER_CHOICES}
                optionText="name"
                optionValue="id"
                validate={required()}
                fullWidth
                variant="outlined"
            />
        )}
        {gridField(
            <DateInput source="date_of_birth" label="Date of Birth" fullWidth variant="outlined" />
        )}
        {gridField(
            <TextInput
                source="national_id_no"
                label="National ID No"
                validate={required()}
                fullWidth
                variant="outlined"
            />
        )}
        {gridField(<TextInput source="kra_pin" label="KRA PIN" fullWidth variant="outlined" />)}
        {gridField(
            <SelectInput
                source="marital_status"
                label="Marital Status"
                choices={MARITAL_STATUS_CHOICES}
                optionText="name"
                optionValue="id"
                fullWidth
                variant="outlined"
            />
        )}

        {sectionTitle('Next of kin')}
        {gridField(
            <TextInput source="next_of_kin_full_name" label="Next of Kin Full Name" fullWidth variant="outlined" />
        )}
        {gridField(
            <TextInput source="next_of_kin_phone" label="Next of Kin Phone" fullWidth variant="outlined" />
        )}

        {sectionTitle('Identity photos')}
        <Grid size={{ xs: 12, md: 6 }}>
            <PhotoUploadInput source="id_front_photo" label="ID Front Photo" validate={photoRequired} />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
            <PhotoUploadInput source="id_back_photo" label="ID Back Photo" validate={photoRequired} />
        </Grid>
    </Grid>
);

export const CompanyTransporterFormFields = () => (
    <Grid container spacing={2} alignItems="flex-start">
        {gridField(
            <TextInput source="company_name" label="Company Name" validate={required()} fullWidth variant="outlined" />
        )}
        {gridField(
            <TextInput source="registration_no" label="Registration No" fullWidth variant="outlined" />
        )}
        {gridField(<TextInput source="kra_pin" label="KRA PIN" fullWidth variant="outlined" />)}
        {gridField(
            <TextInput source="contact_person_name" label="Contact Person Name" fullWidth variant="outlined" />
        )}
        {gridField(
            <TextInput source="contact_person_phone" label="Contact Person Phone" fullWidth variant="outlined" />
        )}
        {gridField(
            <TextInput source="postal_address" label="Postal Address" fullWidth variant="outlined" />
        )}
        {gridField(<TextInput source="postal_code" label="Postal Code" fullWidth variant="outlined" />)}
        {gridField(<TextInput source="town" label="Town" fullWidth variant="outlined" />)}
        <Grid size={{ xs: 12 }}>
            <DocumentUploadInput source="certificate_of_incorporation" label="Certificate of Incorporation" />
        </Grid>
    </Grid>
);

export const TransporterVehicleFormFields = () => (
    <Grid container spacing={2} alignItems="flex-start">
        {gridField(
            <ReferenceInput source="transporter_id" reference="transporters">
                <SelectInput
                    label="Transporter"
                    optionText={(record) =>
                        record.transporter_no
                            ? `${record.transporter_no}${record.primary_phone ? ` — ${record.primary_phone}` : ''}`
                            : String(record.id ?? '')
                    }
                    optionValue="id"
                    validate={required()}
                    fullWidth
                    variant="outlined"
                />
            </ReferenceInput>
        )}
        {gridField(
            <TextInput source="registration_no" label="Registration Number" validate={required()} fullWidth variant="outlined" />
        )}
        {gridField(
            <SelectInput
                source="vehicle_type"
                label="Vehicle Type"
                choices={VEHICLE_TYPE_CHOICES}
                optionText="name"
                optionValue="id"
                validate={required()}
                fullWidth
                variant="outlined"
            />
        )}
        {gridField(
            <ReferenceInput source="route_id" reference="routes">
                <SelectInput
                    label="Route"
                    optionText="name"
                    optionValue="id"
                    fullWidth
                    variant="outlined"
                    emptyText="None"
                />
            </ReferenceInput>
        )}
        {gridField(
            <NumberInput source="capacity_litres" label="Capacity (Litres)" fullWidth variant="outlined" />
        )}
        {gridField(<BooleanInput source="active" label="Active" fullWidth />)}
    </Grid>
);

export const TransporterRouteAssignmentFormFields = () => (
    <Grid container spacing={2} alignItems="flex-start">
        {gridField(
            <ReferenceInput source="transporter_id" reference="transporters">
                <SelectInput
                    label="Transporter"
                    optionText={(record) =>
                        record.transporter_no
                            ? `${record.transporter_no}${record.primary_phone ? ` — ${record.primary_phone}` : ''}`
                            : String(record.id ?? '')
                    }
                    optionValue="id"
                    validate={required()}
                    fullWidth
                    variant="outlined"
                />
            </ReferenceInput>
        )}
        {gridField(
            <ReferenceInput source="route_id" reference="routes">
                <SelectInput
                    label="Route"
                    optionText="name"
                    optionValue="id"
                    validate={required()}
                    fullWidth
                    variant="outlined"
                />
            </ReferenceInput>
        )}
        {gridField(
            <DateInput source="start_date" label="Start Date" validate={required()} fullWidth variant="outlined" />
        )}
        {gridField(<DateInput source="end_date" label="End Date" fullWidth variant="outlined" />)}
        {gridField(<BooleanInput source="active" label="Active" fullWidth />)}
    </Grid>
);

export const TransporterDriverFormFields = () => (
    <Grid container spacing={2} alignItems="flex-start">
        {gridField(
            <ReferenceInput source="transporter_id" reference="transporters">
                <SelectInput
                    label="Transporter"
                    optionText={(record) =>
                        record.transporter_no
                            ? `${record.transporter_no}${record.primary_phone ? ` — ${record.primary_phone}` : ''}`
                            : String(record.id ?? '')
                    }
                    optionValue="id"
                    validate={required()}
                    fullWidth
                    variant="outlined"
                />
            </ReferenceInput>
        )}
        {gridField(
            <TextInput source="first_name" label="First Name" validate={required()} fullWidth variant="outlined" />
        )}
        {gridField(
            <TextInput source="last_name" label="Last Name" validate={required()} fullWidth variant="outlined" />
        )}
        {gridField(
            <TextInput source="driver_no" label="Driver No" validate={required()} fullWidth variant="outlined" />
        )}
        {gridField(
            <SelectInput
                source="gender"
                label="Gender"
                choices={GENDER_CHOICES}
                optionText="name"
                optionValue="id"
                validate={required()}
                fullWidth
                variant="outlined"
            />
        )}
        {gridField(
            <DateInput source="date_of_birth" label="Date of Birth" fullWidth variant="outlined" />
        )}
        {gridField(
            <TextInput
                source="national_id_no"
                label="National ID No"
                validate={required()}
                fullWidth
                variant="outlined"
            />
        )}
        {gridField(
            <TextInput source="primary_phone" label="Primary Phone" fullWidth variant="outlined" />
        )}
        {gridField(
            <TextInput source="driving_license_no" label="Driving License No" fullWidth variant="outlined" />
        )}
        {gridField(
            <DateInput
                source="driving_license_expiry"
                label="Driving License Expiry"
                fullWidth
                variant="outlined"
            />
        )}
        {gridField(
            <DateInput source="employment_date" label="Employment Date" fullWidth variant="outlined" />
        )}
    </Grid>
);

export const TransporterDriverAssignmentFormFields = () => (
    <Grid container spacing={2} alignItems="flex-start">
        {gridField(
            <ReferenceInput source="transporter_driver_id" reference="transporter-drivers">
                <SelectInput
                    label="Driver"
                    optionText={(record) => {
                        const name = [record.first_name, record.last_name].filter(Boolean).join(' ');
                        if (name && record.driver_no) {
                            return `${name} — ${record.driver_no}`;
                        }
                        return name || record.driver_no || String(record.id ?? '');
                    }}
                    optionValue="id"
                    validate={required()}
                    fullWidth
                    variant="outlined"
                />
            </ReferenceInput>
        )}
        {gridField(
            <ReferenceInput source="transporter_vehicle_id" reference="transporter-vehicles">
                <SelectInput
                    label="Vehicle"
                    optionText={(record) =>
                        record.registration_no
                            ? `${record.registration_no}${record.vehicle_type ? ` — ${record.vehicle_type}` : ''}`
                            : String(record.id ?? '')
                    }
                    optionValue="id"
                    validate={required()}
                    fullWidth
                    variant="outlined"
                />
            </ReferenceInput>
        )}
        {gridField(
            <SelectInput
                source="assignment_type"
                label="Assignment Type"
                choices={DRIVER_ASSIGNMENT_TYPE_CHOICES}
                optionText="name"
                optionValue="id"
                validate={required()}
                fullWidth
                variant="outlined"
            />
        )}
        {gridField(
            <DateInput
                source="assigned_from"
                label="Assigned From"
                validate={[required(), validateAssignedFromBeforeTo]}
                fullWidth
                variant="outlined"
            />
        )}
        {gridField(
            <DateInput
                source="assigned_to"
                label="Assigned To"
                validate={validateAssignedToAfterFrom}
                fullWidth
                variant="outlined"
            />
        )}
        {gridField(<BooleanInput source="active" label="Active" fullWidth />)}
    </Grid>
);

export const TransporterTypeFormFields = () => (
    <Grid container spacing={2} alignItems="flex-start">
        {gridField(
            <TextInput source="name" label="Type Name" validate={required()} fullWidth variant="outlined" />
        )}
        <Grid size={{ xs: 12 }}>
            <TextInput source="description" label="Description" multiline rows={3} fullWidth variant="outlined" />
        </Grid>
    </Grid>
);

const transporterSelectOptionText = (record: {
    transporter_no?: string;
    primary_phone?: string;
    id?: number;
}) =>
    record.transporter_no
        ? `${record.transporter_no}${record.primary_phone ? ` — ${record.primary_phone}` : ''}`
        : String(record.id ?? '');

export const TransporterBenefitFormFields = () => (
    <Grid container spacing={2} alignItems="flex-start">
        {gridField(
            <TextInput source="name" label="Name" validate={required()} fullWidth variant="outlined" />
        )}
        {gridField(
            <ReferenceInput source="transporter_id" reference="transporters">
                <SelectInput
                    label="Transporter"
                    optionText={transporterSelectOptionText}
                    optionValue="id"
                    validate={required()}
                    fullWidth
                    variant="outlined"
                />
            </ReferenceInput>
        )}
        {gridField(
            <ReferenceInput source="route_id" reference="routes">
                <SelectInput
                    label="Route"
                    optionText="name"
                    optionValue="id"
                    validate={required()}
                    fullWidth
                    variant="outlined"
                />
            </ReferenceInput>
        )}
        {gridField(
            <NumberInput
                source="min_quantity"
                label="Minimum Quantity"
                validate={required()}
                fullWidth
                variant="outlined"
            />
        )}
        {gridField(
            <NumberInput source="rate" label="Rate" validate={required()} fullWidth variant="outlined" />
        )}
        {gridField(
            <DateInput source="start_date" label="Start Date" validate={required()} fullWidth variant="outlined" />
        )}
        {gridField(<DateInput source="end_date" label="End Date" fullWidth variant="outlined" />)}
    </Grid>
);
