import {
    TextInput,
    NumberInput,
    DateInput,
    SelectInput,
    BooleanInput,
    ReferenceInput,
    required,
} from "react-admin";

import { Box, Button, Stack } from "@mui/material";

import Grid from "@mui/material/Grid";
import { useFormContext } from "react-hook-form";

interface FixedAssetFormProps {
    step: number;
    setStep: React.Dispatch<React.SetStateAction<number>>;
    isLast: boolean;
    stepFields: Record<number, string[]>;
    onFinalSubmit: (data: any) => void;
    onFinalSubmitAndAddNew?: (data: any) => void;
    lastStepLabel?: string;
    saveAndAddLabel?: string;
}

export const FixedAssetForm = ({
    step,
    setStep,
    isLast,
    stepFields,
    onFinalSubmit,
    onFinalSubmitAndAddNew,
    lastStepLabel = "Save",
    saveAndAddLabel = "Save and Add New",
}: FixedAssetFormProps) => {
    const { trigger, handleSubmit } = useFormContext();

    const handleNext = async () => {
        const fieldsToValidate = stepFields[step];
        const isValid = await trigger(fieldsToValidate);
        if (isValid) {
            setStep((s) => s + 1);
        }
    };

    return (
        <>
            {/* STEP 0 */}
            {step === 0 && (
                <Grid container spacing={3} alignItems="flex-start">
                    <Grid item xs={12} md={4}>
                        <TextInput source="asset_code" validate={required()} fullWidth variant="outlined" />
                    </Grid>
                    <Grid item xs={12} md={8}>
                        <TextInput source="asset_name" validate={required()} fullWidth variant="outlined" />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <ReferenceInput source="asset_category_id" reference="asset-categories">
                            <SelectInput optionText="name" fullWidth variant="outlined" validate={required()} />
                        </ReferenceInput>
                    </Grid>
                </Grid>
            )}

            {/* STEP 1 */}
            {step === 1 && (
                <Grid container spacing={3} alignItems="flex-start">
                    <Grid item xs={12} md={4}>
                        <NumberInput source="purchase_cost" validate={required()} fullWidth variant="outlined" />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <DateInput source="acquisition_date" label="Acquisition Date" validate={required()} fullWidth variant="outlined" />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <NumberInput source="useful_life_years" fullWidth variant="outlined" />
                    </Grid>
                </Grid>
            )}

            {/* STEP 2 */}
            {step === 2 && (
                <Grid container spacing={3}>
                    <Grid item xs={12} md={6} alignItems="flex-start">
                        <SelectInput
                            source="depreciation_method"
                            choices={[
                                { id: "STRAIGHT_LINE", name: "Straight Line" },
                                { id: "DECLINING_BALANCE", name: "Declining Balance" },
                            ]}
                            validate={required()}
                            fullWidth
                            variant="outlined"
                        />
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <NumberInput source="depreciation_rate" fullWidth variant="outlined" />
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <DateInput source="warranty_end_date" label="Warranty End Date" fullWidth variant="outlined" />
                    </Grid>
                </Grid>
            )}

            {/* STEP 3 */}
            {step === 3 && (
                <Grid container spacing={3}>
                    <Grid item xs={12} md={6} alignItems="flex-start">
                        <TextInput source="current_location" fullWidth />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <SelectInput
                            source="status"
                            choices={[
                                { id: "ACTIVE", name: "Active" },
                                { id: "DISPOSED", name: "Disposed" },
                            ]}
                            fullWidth
                            variant="outlined"
                        />
                    </Grid>
                    <Grid item xs={12} md={2}>
                        <BooleanInput source="loanable" />
                    </Grid>
                    <Grid item xs={12}>
                        <TextInput source="comments" multiline minRows={4} fullWidth variant="outlined" />
                    </Grid>
                </Grid>
            )}

            {/* NAVIGATION */}
            <Box sx={{ display: "flex", justifyContent: "space-between", mt: 5 }}>
                <Button
                    type="button"
                    disabled={step === 0}
                    onClick={() => setStep((s) => Math.max(s - 1, 0))}
                >
                    Back
                </Button>
                {isLast ? (
                    <Stack direction="row" spacing={1}>
                        <Button
                            variant="contained"
                            size="large"
                            type="button"
                            onClick={handleSubmit(onFinalSubmit)}
                            sx={{ px: 4, borderRadius: 2 }}
                        >
                            {lastStepLabel}
                        </Button>
                        {onFinalSubmitAndAddNew ? (
                            <Button
                                variant="contained"
                                size="large"
                                type="button"
                                onClick={handleSubmit(onFinalSubmitAndAddNew)}
                                sx={{ px: 4, borderRadius: 2 }}
                            >
                                {saveAndAddLabel}
                            </Button>
                        ) : null}
                    </Stack>
                ) : (
                    <Button
                        variant="contained"
                        size="large"
                        type="button"
                        onClick={handleNext}
                        sx={{ px: 4, borderRadius: 2 }}
                    >
                        Next Step
                    </Button>
                )}
            </Box>
        </>
    );
};