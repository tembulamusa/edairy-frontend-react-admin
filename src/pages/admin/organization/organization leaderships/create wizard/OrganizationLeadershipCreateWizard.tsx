import { useMemo, useState } from 'react';
import { Create, useCreate, useNotify, useRedirect } from 'react-admin';
import { Box, Card, CardContent, Divider, Stack, Typography } from '@mui/material';
import { ListBreadcrumbs } from '../../../../../../ListBreadcrumbs';
import { organizationCreateMainSx, organizationCreateWrapperSx } from '../../organizationCreateLayout';
import { PersonalInfoStep } from '../../../../members/members/create wizard/personal-info-step';
import { DocumentsStep } from '../../../../members/members/create wizard/documents-step';
import { LeadershipOtherDetailsStep } from './other-details-step';
import { WizardStepper } from './WizardStepper';
import { RoleOrganizationStep } from './role-organization-step';
import { LeadershipContactsStep } from './contacts-step';
import { LeadershipConfirmStep } from './confirm-step';
import { WizardCreateActions } from '../../../../../components/forms/WizardCreateActions';
import {
    initialOrganizationLeadershipCreateDraft,
    leadershipWizardStepTitles,
    type OrganizationLeadershipCreateDraft,
    type OrganizationLeadershipCreateErrors,
} from './organization-leadership-create-wizard.types';

const requiredFieldsByStep: Array<Array<keyof OrganizationLeadershipCreateDraft>> = [
    ['first_name', 'last_name', 'id_no', 'gender'],
    ['position'],
    ['primary_phone'],
    ['id_front_photo', 'id_back_photo'],
    ['status'],
];

const validateStep = (values: OrganizationLeadershipCreateDraft, stepIndex: number) => {
    const errors: OrganizationLeadershipCreateErrors = {};
    const requiredFields = requiredFieldsByStep[stepIndex] || [];

    requiredFields.forEach((field) => {
        const value = values[field];
        const isEmpty =
            typeof value === 'string' ? value.trim() === '' : value === null || value === undefined;
        if (isEmpty) {
            errors[field] = 'Required';
        }
    });

    return errors;
};

const validateAll = (values: OrganizationLeadershipCreateDraft) => {
    const merged: OrganizationLeadershipCreateErrors = {};
    requiredFieldsByStep.forEach((_, index) => {
        Object.assign(merged, validateStep(values, index));
    });
    return merged;
};

const hasErrors = (errors: OrganizationLeadershipCreateErrors) => Object.keys(errors).length > 0;

const toNumberOrNull = (value: string) => {
    if (value.trim() === '') return null;
    const parsed = Number(value);
    return Number.isNaN(parsed) ? value : parsed;
};

const buildPayload = (values: OrganizationLeadershipCreateDraft) => {
    const { downloaded: _downloaded, ...rest } = values;
    return {
        ...rest,
        phone: values.phone || values.primary_phone,
        member_type_id: toNumberOrNull(values.member_type_id),
        route_id: toNumberOrNull(values.route_id),
        number_of_cows: toNumberOrNull(values.number_of_cows),
    };
};

export const OrganizationLeadershipCreateWizard = () => {
    const notify = useNotify();
    const redirect = useRedirect();
    const [create] = useCreate();

    const [values, setValues] = useState<OrganizationLeadershipCreateDraft>(
        initialOrganizationLeadershipCreateDraft
    );
    const [activeStep, setActiveStep] = useState(0);
    const [errors, setErrors] = useState<OrganizationLeadershipCreateErrors>({});
    const [saving, setSaving] = useState(false);

    const currentStepTitle = useMemo(
        () => leadershipWizardStepTitles[activeStep] ?? 'Leadership Wizard',
        [activeStep]
    );

    const updateField = <K extends keyof OrganizationLeadershipCreateDraft>(
        field: K,
        value: OrganizationLeadershipCreateDraft[K]
    ) => {
        setValues((current) => ({ ...current, [field]: value }));
        setErrors((current) => ({ ...current, [field]: undefined }));
    };

    const goToStep = (nextStep: number) => {
        setActiveStep(Math.max(0, Math.min(nextStep, leadershipWizardStepTitles.length - 1)));
    };

    const handleNext = () => {
        const stepErrors = validateStep(values, activeStep);
        setErrors(stepErrors);
        if (hasErrors(stepErrors)) return;
        goToStep(activeStep + 1);
    };

    const handleBack = () => goToStep(activeStep - 1);

    const handleSubmit = (addAnother: boolean) => {
        const formErrors = validateAll(values);
        setErrors(formErrors);

        if (hasErrors(formErrors)) {
            const firstErrorStep = requiredFieldsByStep.findIndex((fields) =>
                fields.some((field) => Boolean(formErrors[field]))
            );
            if (firstErrorStep >= 0) setActiveStep(firstErrorStep);
            notify('Please complete all required fields before submitting.', { type: 'warning' });
            return;
        }

        setSaving(true);
        create(
            'organization-leaderships',
            { data: buildPayload(values) },
            {
                onSuccess: () => {
                    notify('Organization leadership created successfully', { type: 'success' });
                    if (addAnother) {
                        setValues(initialOrganizationLeadershipCreateDraft);
                        setErrors({});
                        setActiveStep(0);
                        redirect('create', 'organization-leaderships');
                    } else {
                        redirect('list', 'organization-leaderships');
                    }
                },
                onError: (error) => {
                    notify(
                        error instanceof Error ? error.message : 'Failed to create leadership record',
                        { type: 'error' }
                    );
                },
                onSettled: () => setSaving(false),
            }
        );
    };

    return (
        <Create resource="organization-leaderships" title={false} sx={organizationCreateMainSx}>
            <Box sx={organizationCreateWrapperSx}>
                <ListBreadcrumbs />
                <Card elevation={0} sx={{ borderRadius: 3, width: '100%', overflow: 'hidden' }}>
                    <CardContent sx={{ p: 4 }}>
                        <Stack spacing={0.5} mb={2}>
                            <Typography variant="h5" fontWeight="bold">
                                New Organization Leadership
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Step {String(activeStep + 1).padStart(2, '0')} of{' '}
                                {String(leadershipWizardStepTitles.length).padStart(2, '0')}:{' '}
                                {currentStepTitle}
                            </Typography>
                        </Stack>
                        <Divider sx={{ mb: 3 }} />

                        <Stack spacing={3}>
                            <WizardStepper
                                stepTitles={leadershipWizardStepTitles}
                                activeStep={activeStep}
                                onStepClick={goToStep}
                            />

                            {activeStep === 0 ? (
                                <PersonalInfoStep
                                    values={values}
                                    errors={errors}
                                    onChange={updateField}
                                />
                            ) : null}
                            {activeStep === 1 ? (
                                <RoleOrganizationStep values={values} errors={errors} onChange={updateField} />
                            ) : null}
                            {activeStep === 2 ? (
                                <LeadershipContactsStep values={values} errors={errors} onChange={updateField} />
                            ) : null}
                            {activeStep === 3 ? (
                                <DocumentsStep values={values} errors={errors} onChange={updateField} />
                            ) : null}
                            {activeStep === 4 ? (
                                <LeadershipOtherDetailsStep values={values} errors={errors} onChange={updateField} />
                            ) : null}
                            {activeStep === 5 ? (
                                <LeadershipConfirmStep values={values} onEdit={goToStep} />
                            ) : null}
                        </Stack>

                        <Box sx={{ mt: 4, pt: 2, borderTop: 1, borderColor: 'divider' }}>
                            <WizardCreateActions
                                saving={saving}
                                showBack={activeStep > 0}
                                showNext={activeStep < leadershipWizardStepTitles.length - 1}
                                onCancel={() => redirect('list', 'organization-leaderships')}
                                onBack={handleBack}
                                onNext={handleNext}
                                onSave={() => handleSubmit(false)}
                                onSaveAndAddNew={() => handleSubmit(true)}
                            />
                        </Box>
                    </CardContent>
                </Card>
            </Box>
        </Create>
    );
};
