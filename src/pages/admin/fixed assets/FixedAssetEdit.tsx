import { useState } from "react";
import {
    Edit,
    SimpleForm,
    useUpdate,
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

const steps = [
    "Asset Details",
    "Financial Info",
    "Depreciation",
    "Status & Notes",
];

export const FixedAssetEdit = () => {
    const [step, setStep] = useState(0);
    const [update] = useUpdate();
    const notify = useNotify();
    const redirect = useRedirect();

    const isLast = step === steps.length - 1;

    const stepFields: Record<number, string[]> = {
        0: ["asset_code", "asset_name", "asset_category_id"],
        1: ["purchase_cost", "acquisition_date", "useful_life_years"],
        2: ["depreciation_method", "depreciation_rate", "warranty_end_date"],
        3: ["current_location", "status", "loanable", "comments"],
    };

    const handleSubmit = (data: any) => {
        // Explicitly remove AcquisitionDate (PascalCase) to ensure only acquisition_date is sent
        const { AcquisitionDate, ...payload } = data;
        update(
            "fixed-assets",
            { id: data.id, data: payload },
            {
                onSuccess: () => {
                    notify("Fixed asset updated", { type: "success" });
                    redirect("list", "fixed-assets");
                },
            }
        );
    };

    return (
        <Edit
            title={false}
            sx={{
                "& .RaEdit-main": {
                    display: "flex",
                    justifyContent: "center",
                    padding: 2,
                },
            }}
        >
            <Card
                elevation={0}
                sx={{
                    borderRadius: 3,
                    overflow: "hidden",
                    width: '100%',
                    maxWidth: 1100,
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
                            <Typography variant="h5" fontWeight="bold">Edit Fixed Asset</Typography>
                            <Typography variant="body2" color="text.secondary">Update the information below for this fixed asset.</Typography>
                        </Grid>
                    </Grid>

                    <Divider sx={{ mb: 4 }} />

                    <Stepper activeStep={step} alternativeLabel sx={{ mb: 3 }}>
                        {steps.map((s) => (
                            <Step key={s}>
                                <StepLabel>{s}</StepLabel>
                            </Step>
                        ))}
                    </Stepper>

                    <Divider sx={{ mb: 4 }} />

                    <SimpleForm
                        toolbar={false}
                        sx={{
                            "& .MuiInputBase-root": { borderRadius: 2 },
                        }}
                    >
                        <FixedAssetForm
                            step={step}
                            setStep={setStep}
                            isLast={isLast}
                            stepFields={stepFields}
                            onFinalSubmit={handleSubmit}
                            lastStepLabel="Save"
                        />
                    </SimpleForm>
                </CardContent>
            </Card>
        </Edit>
    );
};