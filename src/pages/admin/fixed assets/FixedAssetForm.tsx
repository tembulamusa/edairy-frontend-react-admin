import {
    SimpleForm,
    TextInput,
    NumberInput,
    DateInput,
    SelectInput,
    BooleanInput,
    ReferenceInput,
    required,
    useCreate,
    useNotify,
    useRedirect,
} from "react-admin";

import {
    Box,
    Card,
    CardContent,
    Typography,
    Button,
    Stepper,
    Step,
    StepLabel,
    Divider,
} from "@mui/material";

import Grid from "@mui/material/Grid";
import { useState } from "react";

const steps = [
    "Asset Details",
    "Financial Info",
    "Depreciation",
    "Status & Notes",
];

export const FixedAssetForm = () => {
    const [step, setStep] = useState(0);
    const [create] = useCreate();
    const notify = useNotify();
    const redirect = useRedirect();

    const isLast = step === steps.length - 1;

    const stepFields: Record<number, string[]> = {
        0: ["asset_code", "asset_name", "asset_category_id"],
        1: ["purchase_cost", "acquisition_date"],
        2: ["depreciation_method"],
        3: [],
    };

    const handleNext = (data: any) => {
        const errors: any = {};

        stepFields[step]?.forEach((f) => {
            if (!data?.[f]) errors[f] = "Required";
        });

        if (Object.keys(errors).length) return errors;

        setStep((s) => s + 1);
    };

    const handleSubmit = (data: any) => {
        create(
            "fixed-assets",
            { data },
            {
                onSuccess: () => {
                    notify("Fixed asset created", { type: "success" });
                    redirect("list", "fixed-assets");
                },
            }
        );
    };

    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "center",
                px: 2,
                py: 3,
                background: "#f5f7fb",
                minHeight: "100vh",
            }}
        >
            <Box
                sx={{
                    width: "100%",
                    maxWidth: 1100,
                }}
            >
                <Card
                    elevation={6}
                    sx={{
                        borderRadius: 4,
                        overflow: "hidden",
                    }}
                >
                    <CardContent sx={{ p: 4 }}>
                        {/* HEADER */}
                        <Typography
                            variant="h5"
                            fontWeight={700}
                            textAlign="center"
                            mb={1}
                        >
                            Create Fixed Asset
                        </Typography>

                        <Typography
                            variant="body2"
                            textAlign="center"
                            color="text.secondary"
                            mb={3}
                        >
                            Complete all steps to register a new asset
                        </Typography>

                        {/* STEPPER */}
                        <Stepper activeStep={step} alternativeLabel sx={{ mb: 3 }}>
                            {steps.map((s) => (
                                <Step key={s}>
                                    <StepLabel>{s}</StepLabel>
                                </Step>
                            ))}
                        </Stepper>

                        <Divider sx={{ mb: 4 }} />

                        {/* FORM */}
                        <SimpleForm
                            toolbar={false}
                            onSubmit={(data) => {
                                if (!isLast) return handleNext(data);
                                return handleSubmit(data);
                            }}
                        >
                            {/* STEP 0 */}
                            {step === 0 && (
                                <Grid container spacing={3}>
                                    <Grid size={{ xs: 12, md: 4 }}>
                                        <TextInput
                                            source="asset_code"
                                            validate={required()}
                                            fullWidth
                                        />
                                    </Grid>

                                    <Grid size={{ xs: 12, md: 8 }}>
                                        <TextInput
                                            source="asset_name"
                                            validate={required()}
                                            fullWidth
                                        />
                                    </Grid>

                                    <Grid size={{ xs: 12, md: 4 }}>
                                        <ReferenceInput
                                            source="asset_category_id"
                                            reference="asset-categories"
                                        >
                                            <SelectInput
                                                optionText="name"
                                                fullWidth
                                            />
                                        </ReferenceInput>
                                    </Grid>
                                </Grid>
                            )}

                            {/* STEP 1 */}
                            {step === 1 && (
                                <Grid container spacing={3}>
                                    <Grid size={{ xs: 12, md: 4 }}>
                                        <NumberInput
                                            source="purchase_cost"
                                            validate={required()}
                                            fullWidth
                                        />
                                    </Grid>

                                    <Grid size={{ xs: 12, md: 4 }}>
                                        <DateInput
                                            source="acquisition_date"
                                            validate={required()}
                                            fullWidth
                                        />
                                    </Grid>

                                    <Grid size={{ xs: 12, md: 4 }}>
                                        <NumberInput
                                            source="useful_life_years"
                                            fullWidth
                                        />
                                    </Grid>
                                </Grid>
                            )}

                            {/* STEP 2 */}
                            {step === 2 && (
                                <Grid container spacing={3}>
                                    <Grid size={{ xs: 12, md: 6 }}>
                                        <SelectInput
                                            source="depreciation_method"
                                            choices={[
                                                {
                                                    id: "STRAIGHT_LINE",
                                                    name: "Straight Line",
                                                },
                                                {
                                                    id: "DECLINING_BALANCE",
                                                    name: "Declining Balance",
                                                },
                                            ]}
                                            validate={required()}
                                            fullWidth
                                        />
                                    </Grid>

                                    <Grid size={{ xs: 12, md: 3 }}>
                                        <NumberInput
                                            source="depreciation_rate"
                                            fullWidth
                                        />
                                    </Grid>
                                </Grid>
                            )}

                            {/* STEP 3 */}
                            {step === 3 && (
                                <Grid container spacing={3}>
                                    <Grid size={{ xs: 12, md: 6 }}>
                                        <TextInput
                                            source="current_location"
                                            fullWidth
                                        />
                                    </Grid>

                                    <Grid size={{ xs: 12, md: 4 }}>
                                        <SelectInput
                                            source="status"
                                            choices={[
                                                { id: "ACTIVE", name: "Active" },
                                                { id: "DISPOSED", name: "Disposed" },
                                            ]}
                                            fullWidth
                                        />
                                    </Grid>

                                    <Grid size={{ xs: 12, md: 2 }}>
                                        <BooleanInput source="loanable" />
                                    </Grid>

                                    <Grid size={12}>
                                        <TextInput
                                            source="comments"
                                            multiline
                                            minRows={4}
                                            fullWidth
                                        />
                                    </Grid>
                                </Grid>
                            )}

                            {/* NAVIGATION */}
                            <Box
                                sx={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    mt: 5,
                                }}
                            >
                                <Button
                                    disabled={step === 0}
                                    onClick={() =>
                                        setStep((s) => Math.max(s - 1, 0))
                                    }
                                >
                                    Back
                                </Button>

                                <Button
                                    variant="contained"
                                    size="large"
                                    type="submit"
                                    sx={{
                                        px: 4,
                                        borderRadius: 2,
                                    }}
                                >
                                    {isLast ? "Create Asset" : "Next Step"}
                                </Button>
                            </Box>
                        </SimpleForm>
                    </CardContent>
                </Card>
            </Box>
        </Box>
    );
};