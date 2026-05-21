import { useMemo, useState } from 'react';
import { Create, useNotify, useRedirect, useRefresh } from 'react-admin';
import { Box, Card, CardContent, Divider, Stack, Typography } from '@mui/material';
import { ListBreadcrumbs } from '../../../../../ListBreadcrumbs';
import {
    transporterCreateMainSx,
    transporterCreateWrapperSx,
    transporterSimpleFormSx,
} from '../../../transporters/shared/transporter-page-layout';
import { WizardStepper } from '../../../transporters/create wizard/WizardStepper';
import { WizardCreateActions } from '../../../../components/forms/WizardCreateActions';
import { JournalHeaderStep } from './journal-header-step';
import { BatchesEntriesStep } from './batches-entries-step';
import {
    milkJournalWizardStepTitles,
    type MilkJournalCreateDraft,
    type MilkJournalCreateErrors,
} from './milk-journal-create-wizard.types';
import {
    hasErrors,
    initialMilkJournalCreateDraft,
    journalNoFromDate,
    shouldAutoUpdateJournalNo,
    syncJournalToBatches,
    validateAll,
    validateBatchesStep,
    validateJournalStep,
} from './milk-journal-wizard-utils';
import { submitMilkJournalWizard } from './milk-journal-wizard-submit';

export const MilkJournalCreateWizard = () => {
    const notify = useNotify();
    const redirect = useRedirect();
    const refresh = useRefresh();

    const [values, setValues] = useState<MilkJournalCreateDraft>(initialMilkJournalCreateDraft);
    const [activeStep, setActiveStep] = useState(0);
    const [errors, setErrors] = useState<MilkJournalCreateErrors>({});
    const [saving, setSaving] = useState(false);

    const stepTitles = useMemo(() => [...milkJournalWizardStepTitles], []);

    const updateField = <K extends keyof MilkJournalCreateDraft>(
        field: K,
        value: MilkJournalCreateDraft[K]
    ) => {
        setValues((current) => {
            let next = { ...current, [field]: value };
            if (
                field === 'journal_date' &&
                typeof value === 'string' &&
                shouldAutoUpdateJournalNo(current.journal)
            ) {
                next = {
                    ...next,
                    journal: journalNoFromDate(value, current.journal),
                };
            }
            return field === 'journal_date' ||
                field === 'route_id' ||
                field === 'transporter_id' ||
                field === 'milk_delivery_shift_id'
                ? syncJournalToBatches(next)
                : next;
        });
        setErrors((current) => ({ ...current, [field]: undefined }));
    };

    const goToStep = (nextStep: number) => {
        setActiveStep(Math.max(0, Math.min(nextStep, stepTitles.length - 1)));
    };

    const handleNext = () => {
        const stepErrors = validateJournalStep(values);
        setErrors(stepErrors);
        if (hasErrors(stepErrors)) return;
        setValues((current) => syncJournalToBatches(current));
        goToStep(activeStep + 1);
    };

    const handleBack = () => goToStep(activeStep - 1);

    const handleReset = () => {
        setValues(initialMilkJournalCreateDraft());
        setErrors({});
        setActiveStep(0);
    };

    const handleSubmit = async (addAnother: boolean) => {
        const synced = syncJournalToBatches(values);
        setValues(synced);

        const formErrors = validateAll(synced);
        setErrors(formErrors);

        if (hasErrors(formErrors)) {
            const journalErrors = validateJournalStep(synced);
            setActiveStep(hasErrors(journalErrors) ? 0 : 1);
            notify('Please complete all required fields before submitting.', { type: 'warning' });
            return;
        }

        setSaving(true);
        try {
            const result = await submitMilkJournalWizard(synced);
            notify(result.message, { type: 'success' });
            refresh();
            if (addAnother) {
                handleReset();
                redirect('create', 'milk-journals');
            } else {
                redirect('list', 'milk-journals');
            }
        } catch (error) {
            notify(
                error instanceof Error ? error.message : 'Failed to create milk journal',
                { type: 'error' }
            );
        } finally {
            setSaving(false);
        }
    };

    return (
        <Create title={false} resource="milk-journals" sx={transporterCreateMainSx}>
            <Box sx={transporterCreateWrapperSx}>
                <ListBreadcrumbs />
                <Card elevation={0} sx={{ borderRadius: 3, width: '100%', overflow: 'hidden' }}>
                    <CardContent sx={{ p: 4 }}>
                        <Stack spacing={0.5} mb={2}>
                            <Typography variant="h5" fontWeight="bold">
                                New Milk Journal
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Step {String(activeStep + 1).padStart(2, '0')} of{' '}
                                {String(stepTitles.length).padStart(2, '0')}:{' '}
                                {stepTitles[activeStep]}
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
                                <JournalHeaderStep
                                    values={values}
                                    errors={errors}
                                    onChange={updateField}
                                />
                            ) : null}

                            {activeStep === 1 ? (
                                <BatchesEntriesStep
                                    values={values}
                                    errors={errors}
                                    onChange={setValues}
                                />
                            ) : null}
                        </Stack>

                        <Box sx={{ mt: 4, pt: 2, borderTop: 1, borderColor: 'divider' }}>
                            <WizardCreateActions
                                saving={saving}
                                showBack={activeStep > 0}
                                showNext={activeStep < stepTitles.length - 1}
                                onCancel={() => redirect('list', 'milk-journals')}
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
