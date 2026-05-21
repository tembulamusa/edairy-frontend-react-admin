import { useMemo, useState } from 'react';
import { Create, useNotify, useRedirect, useRefresh } from 'react-admin';
import { Box, Card, CardContent, Divider, Stack, Typography } from '@mui/material';
import { ListBreadcrumbs } from '../../../../ListBreadcrumbs';
import {
    transporterCreateMainSx,
    transporterCreateWrapperSx,
    transporterSimpleFormSx,
} from '../shared/transporter-page-layout';
import { WizardStepper } from './WizardStepper';
import { BasicInfoStep } from './basic-info-step';
import { IndividualDetailsStep } from './individual-details-step';
import { CompanyDetailsStep } from './company-details-step';
import { ConfirmStep } from './confirm-step';
import {
    initialTransporterCreateDraft,
    type TransporterCreateDraft,
    type TransporterCreateErrors,
} from './transporter-create-wizard.types';
import { WizardCreateActions } from '../../../components/forms/WizardCreateActions';
import { submitTransporterWizard } from './transporter-wizard-submit';
import {
    hasErrors,
    validateAll,
    validateBasicStep,
    validateDetailsStep,
} from './transporter-wizard-validation';

export const TransporterCreateWizard = () => {
    const notify = useNotify();
    const redirect = useRedirect();
    const refresh = useRefresh();

    const [values, setValues] = useState<TransporterCreateDraft>(initialTransporterCreateDraft);
    const [activeStep, setActiveStep] = useState(0);
    const [errors, setErrors] = useState<TransporterCreateErrors>({});
    const [saving, setSaving] = useState(false);

    const detailStepTitle = values.transporter_category === 'COMPANY' ? 'Company Details' : 'Individual Details';
    const stepTitles = useMemo(
        () => ['Basic Information', detailStepTitle, 'Review & Confirm'] as const,
        [detailStepTitle]
    );

    const updateField = <K extends keyof TransporterCreateDraft>(
        field: K,
        value: TransporterCreateDraft[K]
    ) => {
        setValues((current) => ({ ...current, [field]: value }));
        setErrors((current) => ({ ...current, [field]: undefined }));
    };

    const goToStep = (nextStep: number) => {
        setActiveStep(Math.max(0, Math.min(nextStep, stepTitles.length - 1)));
    };

    const handleNext = () => {
        const stepErrors = activeStep === 0 ? validateBasicStep(values) : validateDetailsStep(values);
        setErrors(stepErrors);
        if (hasErrors(stepErrors)) return;
        goToStep(activeStep + 1);
    };

    const handleBack = () => goToStep(activeStep - 1);

    const handleSubmit = async (addAnother: boolean) => {
        const formErrors = validateAll(values);
        setErrors(formErrors);

        if (hasErrors(formErrors)) {
            const basicErrors = validateBasicStep(values);
            setActiveStep(hasErrors(basicErrors) ? 0 : 1);
            notify('Please complete all required fields before submitting.', { type: 'warning' });
            return;
        }

        setSaving(true);
        try {
            const result = await submitTransporterWizard(values);
            notify(result.message, { type: 'success' });
            refresh();
            if (addAnother) {
                setValues(initialTransporterCreateDraft);
                setErrors({});
                setActiveStep(0);
                redirect('create', 'transporters');
            } else {
                redirect('list', 'transporters');
            }
        } catch (error) {
            notify(
                error instanceof Error ? error.message : 'Failed to create transporter',
                { type: 'error' }
            );
        } finally {
            setSaving(false);
        }
    };

    return (
        <Create title={false} resource="transporters" sx={transporterCreateMainSx}>
            <Box sx={transporterCreateWrapperSx}>
                <ListBreadcrumbs />
                <Card elevation={0} sx={{ borderRadius: 3, width: '100%', overflow: 'hidden' }}>
                    <CardContent sx={{ p: 4 }}>
                        <Stack spacing={0.5} mb={2}>
                            <Typography variant="h5" fontWeight="bold">
                                New Transporter
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Step {String(activeStep + 1).padStart(2, '0')} of{' '}
                                {String(stepTitles.length).padStart(2, '0')}: {stepTitles[activeStep]}
                            </Typography>
                        </Stack>
                        <Divider sx={{ mb: 3 }} />

                        <Stack spacing={3} sx={transporterSimpleFormSx}>
                            <WizardStepper
                                stepTitles={stepTitles}
                                activeStep={activeStep}
                                onStepClick={goToStep}
                            />

                            {activeStep === 0 ? (
                                <BasicInfoStep
                                    values={values}
                                    errors={errors}
                                    onChange={updateField}
                                />
                            ) : null}
                            {activeStep === 1 && values.transporter_category === 'INDIVIDUAL' ? (
                                <IndividualDetailsStep
                                    values={values}
                                    errors={errors}
                                    onChange={updateField}
                                />
                            ) : null}
                            {activeStep === 1 && values.transporter_category === 'COMPANY' ? (
                                <CompanyDetailsStep
                                    values={values}
                                    errors={errors}
                                    onChange={updateField}
                                />
                            ) : null}
                            {activeStep === 1 &&
                            values.transporter_category !== 'INDIVIDUAL' &&
                            values.transporter_category !== 'COMPANY' ? (
                                <Typography color="text.secondary">
                                    Select a category on the first step to continue.
                                </Typography>
                            ) : null}
                            {activeStep === 2 ? (
                                <ConfirmStep values={values} onEdit={goToStep} />
                            ) : null}
                        </Stack>

                        <Box sx={{ mt: 4, pt: 2, borderTop: 1, borderColor: 'divider' }}>
                            <WizardCreateActions
                                saving={saving}
                                showBack={activeStep > 0}
                                showNext={activeStep < stepTitles.length - 1}
                                onCancel={() => redirect('list', 'transporters')}
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
