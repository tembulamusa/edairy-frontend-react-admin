import { useState } from "react";
import {
    Create,
    SimpleForm,
    useCreate,
    useNotify,
    useRedirect,
} from 'react-admin';

import {
    Card,
    CardContent,
    Typography,
    Box,
    Divider,
    Stepper,
    Step,
    StepLabel,
} from '@mui/material';

import Grid from '@mui/material/Grid';

import { FixedAssetForm } from './FixedAssetForm';
import { useRedirectToCreateWithReload } from '../../../components/forms/redirect-to-create-with-reload';

const steps = [
    "Asset Details",
    "Financial Info",
    "Depreciation",
    "Status & Notes",
];

export const FixedAssetCreate = () => {
    const [step, setStep] = useState(0);
    const [create] = useCreate();
    const notify = useNotify();
    const redirect = useRedirect();
    const redirectToCreateWithReload = useRedirectToCreateWithReload();

    const isLast = step === steps.length - 1;

    const stepFields: Record<number, string[]> = {
        0: ["asset_code", "asset_name", "asset_category_id"],
        1: ["purchase_cost", "acquisition_date", "useful_life_years"],
        2: ["depreciation_method", "depreciation_rate", "warranty_end_date"],
        3: ["current_location", "status", "loanable", "comments"], // warranty_end_date moved to step 2
    };

    const handleSubmit = (data: any, addAnother: boolean) => {
        const { AcquisitionDate, ...payload } = data;
        create(
            "fixed-assets",
            { data: payload },
            {
                onSuccess: () => {
                    if (addAnother) {
                        redirectToCreateWithReload('fixed-assets', 'Fixed asset created');
                    } else {
                        notify('Fixed asset created', { type: 'success' });
                        redirect('list', 'fixed-assets');
                    }
                },
            }
        );
    };

    return (
        <Create
            resource="fixed-assets"
            title={false}
            sx={{
                "& .RaCreate-main": {
                    display: "flex",
                    justifyContent: "center", // Center the card
                    padding: 2, // Consistent padding
                },
            }}
        >

            <Card
                elevation={0}
                sx={{
                    borderRadius: 3,
                    overflow: "hidden",
                    width: '100%',
                    maxWidth: 1100, // Limit max width for better readability on very wide screens
                }}
            >
                <CardContent sx={{ p: 4 }}>
                    <Grid
                        container
                        spacing={2}
                        alignItems="center"
                        justifyContent="space-between"
                        mb={2}
                    >
                        <Grid size={{ xs: 12, md: 6 }}>
                            <Typography
                                variant="h5"
                                fontWeight="bold"
                            >
                                Create Fixed Asset
                            </Typography>

                            <Typography
                                variant="body2"
                                color="text.secondary"
                            >
                                Fill in the information below to register a new fixed asset.
                            </Typography>
                        </Grid>
                    </Grid>

                    <Divider sx={{ mb: 4 }} />

                    {/* STEPPER */}
                    <Stepper activeStep={step} alternativeLabel sx={{ mb: 3 }}>
                        {steps.map((s) => (
                            <Step key={s}>
                                <StepLabel>{s}</StepLabel>
                            </Step>
                        ))}
                    </Stepper>

                    <Divider sx={{ mb: 4 }} />

                    <SimpleForm
                        toolbar={false} // FixedAssetForm handles its own navigation buttons
                        onSubmit={(data) => {
                            // The final submission is now handled by the button in FixedAssetForm
                        }}
                        sx={{
                            "& .RaSimpleForm-toolbar": {
                                mt: 3,
                                px: 0,
                            },
                            "& .MuiInputBase-root": {
                                borderRadius: 2,
                            },
                        }}
                    >
                        <FixedAssetForm
                            step={step}
                            setStep={setStep}
                            isLast={isLast}
                            stepFields={stepFields}
                            onFinalSubmit={(data) => handleSubmit(data, false)}
                            onFinalSubmitAndAddNew={(data) => handleSubmit(data, true)}
                        />
                    </SimpleForm>
                </CardContent>
            </Card>

        </Create>
    );
};