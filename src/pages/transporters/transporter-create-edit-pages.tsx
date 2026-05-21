import type { ComponentType } from 'react';
import type { RaRecord } from 'react-admin';
import { TransporterCreatePage } from './shared/TransporterCreatePage';
import { TransporterEditPage } from './shared/TransporterEditPage';
import { transformTransporter } from './transform-transporter';
import { transformIndividualTransporter } from './transform-individual-transporter';
import { transformCompanyTransporter } from './transform-company-transporter';
import { transformTransporterVehicle } from './transform-transporter-vehicle';
import { transformTransporterRouteAssignment } from './transform-transporter-route-assignment';
import { transformTransporterDriver } from './transform-transporter-driver';
import { transformTransporterDriverAssignment } from './transform-transporter-driver-assignment';
import { transformTransporterBenefit } from './transform-transporter-benefit';
import { TransporterCreateWizard } from './create wizard/TransporterCreateWizard';
import {
    TransporterTypeFormFields,
    TransporterFormFields,
    IndividualTransporterFormFields,
    CompanyTransporterFormFields,
    TransporterVehicleFormFields,
    TransporterRouteAssignmentFormFields,
    TransporterDriverFormFields,
    TransporterDriverAssignmentFormFields,
    TransporterBenefitFormFields,
} from './transporter-form-fields';

type TransporterCrudDef = {
    resource: string;
    createTitle?: string;
    editTitle: string;
    subtitle: string;
    success: string;
    fields: ComponentType;
    transform?: (data: RaRecord) => RaRecord | Promise<RaRecord>;
};

const defs: TransporterCrudDef[] = [
    {
        resource: 'transporter-types',
        createTitle: 'New Transporter Type',
        editTitle: 'Edit Transporter Type',
        subtitle: 'Define a classification for individual or company transporters.',
        success: 'Transporter type saved successfully',
        fields: TransporterTypeFormFields,
    },
    {
        resource: 'transporters',
        createTitle: 'New Transporter',
        editTitle: 'Edit Transporter',
        subtitle:
            'Register a transporter with transporter category (Individual or Company) and contact details.',
        success: 'Transporter saved successfully',
        fields: TransporterFormFields,
        transform: transformTransporter,
    },
    {
        resource: 'individual-transporters',
        editTitle: 'Edit Individual Transporter',
        subtitle: 'Update personal, identification, and next-of-kin details.',
        success: 'Individual transporter saved successfully',
        fields: IndividualTransporterFormFields,
        transform: transformIndividualTransporter,
    },
    {
        resource: 'company-transporters',
        editTitle: 'Edit Company Transporter',
        subtitle: 'Update company registration, contact, and postal details.',
        success: 'Company transporter saved successfully',
        fields: CompanyTransporterFormFields,
        transform: transformCompanyTransporter,
    },
    {
        resource: 'transporter-vehicles',
        createTitle: 'New Transporter Vehicle',
        editTitle: 'Edit Transporter Vehicle',
        subtitle: 'Register a vehicle linked to a transporter.',
        success: 'Transporter vehicle saved successfully',
        fields: TransporterVehicleFormFields,
        transform: transformTransporterVehicle,
    },
    {
        resource: 'transporter-route-assignments',
        createTitle: 'New Route Assignment',
        editTitle: 'Edit Route Assignment',
        subtitle: 'Assign a route to a transporter using transporter and route references.',
        success: 'Route assignment saved successfully',
        fields: TransporterRouteAssignmentFormFields,
        transform: transformTransporterRouteAssignment,
    },
    {
        resource: 'transporter-drivers',
        createTitle: 'New Transporter Driver',
        editTitle: 'Edit Transporter Driver',
        subtitle: 'Add a driver linked to a transporter with gender and national ID.',
        success: 'Transporter driver saved successfully',
        fields: TransporterDriverFormFields,
        transform: transformTransporterDriver,
    },
    {
        resource: 'transporter-driver-assignments',
        createTitle: 'New Driver Assignment',
        editTitle: 'Edit Driver Assignment',
        subtitle: 'Assign a transporter driver to a transporter vehicle.',
        success: 'Driver assignment saved successfully',
        fields: TransporterDriverAssignmentFormFields,
        transform: transformTransporterDriverAssignment,
    },
    {
        resource: 'transporter-benefits',
        createTitle: 'New Transporter Benefit',
        editTitle: 'Edit Transporter Benefit',
        subtitle: 'Configure a transporter benefit for a route (minimum quantity and rate).',
        success: 'Transporter benefit saved successfully',
        fields: TransporterBenefitFormFields,
        transform: transformTransporterBenefit,
    },
] as const;

const createPage = (def: TransporterCrudDef) => {
    const Fields = def.fields;
    return () => (
        <TransporterCreatePage
            resource={def.resource}
            title={def.createTitle ?? 'New Record'}
            subtitle={def.subtitle}
            successMessage={def.success}
            transform={def.transform}
        >
            <Fields />
        </TransporterCreatePage>
    );
};

const editPage = (def: TransporterCrudDef) => {
    const Fields = def.fields;
    return () => (
        <TransporterEditPage
            resource={def.resource}
            title={def.editTitle}
            subtitle={def.subtitle}
            successMessage={def.success}
            transform={def.transform}
        >
            <Fields />
        </TransporterEditPage>
    );
};

export const TransporterTypeCreate = createPage(defs[0]);
export const TransporterTypeEdit = editPage(defs[0]);
export const TransporterCreate = TransporterCreateWizard;
export const TransporterEdit = editPage(defs[1]);
export const IndividualTransporterEdit = editPage(defs[2]);
export const CompanyTransporterEdit = editPage(defs[3]);
export const TransporterVehicleCreate = createPage(defs[4]);
export const TransporterVehicleEdit = editPage(defs[4]);
export const TransporterRouteAssignmentCreate = createPage(defs[5]);
export const TransporterRouteAssignmentEdit = editPage(defs[5]);
export const TransporterDriverCreate = createPage(defs[6]);
export const TransporterDriverEdit = editPage(defs[6]);
export const TransporterDriverAssignmentCreate = createPage(defs[7]);
export const TransporterDriverAssignmentEdit = editPage(defs[7]);
export const TransporterBenefitCreate = createPage(defs[8]);
export const TransporterBenefitEdit = editPage(defs[8]);
