import { useEffect, useMemo, useRef, useState } from "react";
import { useNotify, useRefresh, useRedirect } from "react-admin";
import {
    Box,
    Card,
    CardContent,
    Divider,
    Stack,
    Typography,
} from "@mui/material";

import { ContactsStep } from "./contacts-step";
import { ConfirmStep } from "./confirm-step";
import { DairyInfoStep } from "./dairy-info-step";
import { DocumentsStep } from "./documents-step";
import {
    clearMemberCreateDraft,
    loadMemberCreateDraft,
    saveMemberCreateDraft,
} from "./member-create-wizard.storage";

import {
    initialMemberCreateDraft,
    memberWizardStepTitles,
    type MemberCreateDraft,
    type MemberCreateErrors,
} from "./member-create-wizard.types";

import { OtherDetailsStep } from "./other-details-step";
import { PersonalInfoStep } from "./personal-info-step";
import { WizardCreateActions } from "../../../../components/forms/WizardCreateActions";
import { useRedirectToCreateWithReload } from "../../../../components/forms/redirect-to-create-with-reload";

const apiUrl =
    import.meta.env.VITE_EDAIRY_API_URL ?? "http://192.168.1.10:8080/api";

const getAuthHeaders = () => {
    let user: { token?: string } | null = null;

    try {
        const stored = window.localStorage.getItem("user");

        if (stored && stored !== "undefined") {
            user = JSON.parse(stored);
        }
    } catch {
        user = null;
    }

    return {
        "Content-Type": "multipart/form-data",
        ...(user?.token
            ? { Authorization: `Bearer ${user.token}` }
            : {}),
    };
};

const requiredFieldsByStep: Array<Array<keyof MemberCreateDraft>> = [
    ["first_name", "last_name", "id_no", "gender"],
    ["member_no", "date_registered", "member_type_id", "route_id"],
    ["primary_phone"],
    ["passport_photo", "id_front_photo", "id_back_photo"],
    ["status"],
];

const validateStep = (
    values: MemberCreateDraft,
    stepIndex: number
) => {
    const errors: MemberCreateErrors = {};

    const requiredFields =
        requiredFieldsByStep[stepIndex] || [];

    requiredFields.forEach((field) => {
        const value = values[field];

        const isEmpty =
            typeof value === "string"
                ? value.trim() === ""
                : value === null || value === undefined;

        if (isEmpty) {
            errors[field] = "Required";
        }
    });

    return errors;
};

const validateAll = (values: MemberCreateDraft) => {
    const merged: MemberCreateErrors = {};

    requiredFieldsByStep.forEach((_, index) => {
        Object.assign(merged, validateStep(values, index));
    });

    return merged;
};

const hasErrors = (errors: MemberCreateErrors) =>
    Object.keys(errors).length > 0;

const toNumberOrNull = (value: string) => {
    if (value.trim() === "") return null;

    const parsed = Number(value);

    return Number.isNaN(parsed) ? value : parsed;
};

const buildPayload = (values: MemberCreateDraft) => ({
    ...values,
    member_type_id: toNumberOrNull(values.member_type_id),
    route_id: toNumberOrNull(values.route_id),
    number_of_cows: toNumberOrNull(values.number_of_cows),
});

export const MemberCreateWizard = () => {
    const notify = useNotify();
    const refresh = useRefresh();
    const redirect = useRedirect();
    const redirectToCreateWithReload = useRedirectToCreateWithReload();

    const suppressPersistRef = useRef(false);

    const [values, setValues] =
        useState<MemberCreateDraft>(() => {
            const draft = loadMemberCreateDraft();

            return draft?.values ?? initialMemberCreateDraft;
        });

    const [activeStep, setActiveStep] = useState(
        () => loadMemberCreateDraft()?.active_step ?? 0
    );

    const [errors, setErrors] =
        useState<MemberCreateErrors>({});

    const [saving, setSaving] = useState(false);

    useEffect(() => {
        if (suppressPersistRef.current) return;

        saveMemberCreateDraft({
            active_step: activeStep,
            values,
        });
    }, [activeStep, values]);

    const currentStepTitle = useMemo(
        () =>
            memberWizardStepTitles[activeStep] ??
            "Member Wizard",
        [activeStep]
    );

    const updateField = <
        K extends keyof MemberCreateDraft
    >(
        field: K,
        value: MemberCreateDraft[K]
    ) => {
        setValues((current) => ({
            ...current,
            [field]: value,
        }));

        setErrors((current) => ({
            ...current,
            [field]: undefined,
        }));
    };

    const goToStep = (nextStep: number) => {
        setActiveStep(
            Math.max(
                0,
                Math.min(
                    nextStep,
                    memberWizardStepTitles.length - 1
                )
            )
        );
    };

    const handleNext = () => {
        const stepErrors = validateStep(
            values,
            activeStep
        );

        setErrors(stepErrors);

        if (hasErrors(stepErrors)) return;

        goToStep(activeStep + 1);
    };

    const handleBack = () => {
        goToStep(activeStep - 1);
    };

    const handleReset = () => {
        setValues(initialMemberCreateDraft);
        setErrors({});
        setActiveStep(0);
    };

    const handleSubmit = async (addAnother: boolean) => {
        const formErrors = validateAll(values);

        setErrors(formErrors);

        if (hasErrors(formErrors)) {
            const firstErrorStep =
                requiredFieldsByStep.findIndex((fields) =>
                    fields.some((field) =>
                        Boolean(formErrors[field])
                    )
                );

            if (firstErrorStep >= 0) {
                setActiveStep(firstErrorStep);
            }

            notify(
                "Please complete all required fields before submitting.",
                { type: "warning" }
            );

            return;
        }

        try {
            setSaving(true);

            suppressPersistRef.current = true;

            const payload = buildPayload(values);

            const formData = new FormData();

            Object.entries(payload).forEach(([key, value]) => {
                if (value === null || value === undefined) return;

                // files
                if (value instanceof File) {
                    formData.append(key, value);
                    return;
                }

                // arrays
                if (Array.isArray(value)) {
                    value.forEach((item) => {
                        formData.append(`${key}[]`, item);
                    });
                    return;
                }

                // normal values
                formData.append(key, String(value));
            });

            const response = await fetch(`${apiUrl}/members`, {
                method: "POST",
                headers: {
                    Authorization: getAuthHeaders().Authorization || "",
                },
                body: formData,
            });

            const payloadResponse = await response
                .json()
                .catch(() => ({}));

            const message =
                payloadResponse?.message ||
                "Member created successfully";

            if (response.status !== 201) {
                throw new Error(message);
            }

            clearMemberCreateDraft();
            refresh();

            if (addAnother) {
                redirectToCreateWithReload("members", message);
            } else {
                notify(message, {
                    type: "success",
                });
                redirect("list", "members");
            }
        } catch (error) {
            notify(
                error instanceof Error
                    ? error.message
                    : "Failed to create member",
                {
                    type: "error",
                }
            );
        } finally {
            setSaving(false);
            suppressPersistRef.current = false;
        }
    };

    return (
        <Box sx={{ p: 3 }}>
            <Card>
                <CardContent>
                    <Stack spacing={3}>
                        <Stack spacing={0.5}>
                            <Typography variant="h5">
                                Create Member
                            </Typography>

                            <Typography
                                variant="body2"
                                color="text.secondary"
                            >
                                Step{" "}
                                {String(activeStep + 1).padStart(
                                    2,
                                    "0"
                                )}{" "}
                                of{" "}
                                {String(
                                    memberWizardStepTitles.length
                                ).padStart(2, "0")}
                                : {currentStepTitle}
                            </Typography>
                        </Stack>

                        <Divider />

                        {/* Stepper */}
                        <Stack
                            direction="row"
                            alignItems="center"
                            sx={{ overflowX: "auto" }}
                        >
                            {memberWizardStepTitles.map(
                                (title, index) => {
                                    const isActive =
                                        index === activeStep;

                                    const isCompleted =
                                        index < activeStep;

                                    return (
                                        <Stack
                                            key={title}
                                            direction="row"
                                            alignItems="center"
                                        >
                                            <Stack
                                                direction="row"
                                                alignItems="center"
                                                onClick={() => {
                                                    if (
                                                        index <=
                                                        activeStep
                                                    ) {
                                                        goToStep(
                                                            index
                                                        );
                                                    }
                                                }}
                                                sx={{
                                                    cursor:
                                                        index <=
                                                            activeStep
                                                            ? "pointer"
                                                            : "default",
                                                    backgroundColor:
                                                        isActive
                                                            ? "#fff7ed"
                                                            : "#f3f4f6",
                                                    borderRadius:
                                                        "30px",
                                                    px: 2,
                                                    py: 1,
                                                }}
                                            >
                                                <Stack
                                                    alignItems="center"
                                                    justifyContent="center"
                                                    sx={{
                                                        width: 36,
                                                        height: 36,
                                                        borderRadius:
                                                            "50%",
                                                        backgroundColor:
                                                            isActive
                                                                ? "#f97316"
                                                                : isCompleted
                                                                    ? "#16a34a"
                                                                    : "#e5e7eb",
                                                        color:
                                                            isActive ||
                                                                isCompleted
                                                                ? "#fff"
                                                                : "#6b7280",
                                                        fontWeight: 600,
                                                        mr: 1.5,
                                                    }}
                                                >
                                                    {String(
                                                        index + 1
                                                    ).padStart(
                                                        2,
                                                        "0"
                                                    )}
                                                </Stack>

                                                <Typography>
                                                    {title}
                                                </Typography>
                                            </Stack>
                                        </Stack>
                                    );
                                }
                            )}
                        </Stack>

                        {/* Steps */}
                        {activeStep === 0 && (
                            <PersonalInfoStep
                                values={values}
                                errors={errors}
                                onChange={updateField}
                            />
                        )}

                        {activeStep === 1 && (
                            <DairyInfoStep
                                values={values}
                                errors={errors}
                                onChange={updateField}
                            />
                        )}

                        {activeStep === 2 && (
                            <ContactsStep
                                values={values}
                                errors={errors}
                                onChange={updateField}
                            />
                        )}

                        {activeStep === 3 && (
                            <DocumentsStep
                                values={values}
                                errors={errors}
                                onChange={updateField}
                            />
                        )}

                        {activeStep === 4 && (
                            <OtherDetailsStep
                                values={values}
                                errors={errors}
                                onChange={updateField}
                            />
                        )}

                        {activeStep === 5 && (
                            <ConfirmStep
                                values={values}
                                onEdit={goToStep}
                            />
                        )}

                        <WizardCreateActions
                            saving={saving}
                            showBack={activeStep > 0}
                            showNext={
                                activeStep <
                                memberWizardStepTitles.length - 1
                            }
                            onCancel={() => redirect("list", "members")}
                            onBack={handleBack}
                            onNext={handleNext}
                            onSave={() => handleSubmit(false)}
                            onSaveAndAddNew={() => handleSubmit(true)}
                        />
                    </Stack>
                </CardContent>
            </Card>
        </Box>
    );
};