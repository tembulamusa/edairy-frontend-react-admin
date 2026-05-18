import { useEffect, useMemo, useRef, useState } from "react";
import { useNotify, useRefresh } from "react-admin";
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
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

type Props = {
    open: boolean;
    onClose: () => void;
};

const apiUrl =
    import.meta.env.VITE_EDAIRY_API_URL ?? "http://192.168.1.10:8080/api";

const getAuthHeaders = () => {
    let user: { token?: string } | null = null;

    try {
        const stored = window.localStorage.getItem("user");
        if (stored && stored !== "undefined") {
            user = JSON.parse(stored) as { token?: string };
        }
    } catch {
        user = null;
    }

    return {
        "Content-Type": "application/json",
        ...(user?.token ? { Authorization: `Bearer ${user.token}` } : {}),
    };
};

const requiredFieldsByStep: Array<Array<keyof MemberCreateDraft>> = [
    ["first_name", "last_name", "idnumber", "gender"],
    ["member_no", "date_registered", "member_type_id", "route_id"],
    ["primary_phone"],
    ["passport_photo", "id_front_photo", "id_back_photo"],
    ["status"],
];

const validateStep = (values: MemberCreateDraft, stepIndex: number) => {
    const errors: MemberCreateErrors = {};
    const requiredFields = requiredFieldsByStep[stepIndex] || [];

    requiredFields.forEach((field) => {
        const value = values[field];
        const isEmpty = typeof value === "string" ? value.trim() === "" : value === null || value === undefined;
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

const hasErrors = (errors: MemberCreateErrors) => Object.keys(errors).length > 0;

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

export const MemberCreateWizard = ({ open, onClose }: Props) => {
    const notify = useNotify();
    const refresh = useRefresh();
    const suppressPersistRef = useRef(false);

    const [values, setValues] = useState<MemberCreateDraft>(() => {
        const draft = loadMemberCreateDraft();
        return draft?.values ?? initialMemberCreateDraft;
    });
    const [activeStep, setActiveStep] = useState(() => loadMemberCreateDraft()?.active_step ?? 0);
    const [errors, setErrors] = useState<MemberCreateErrors>({});
    const [saving, setSaving] = useState(false);

    useEffect(() => {
        if (!open || suppressPersistRef.current) return;
        saveMemberCreateDraft({ active_step: activeStep, values });
    }, [activeStep, open, values]);

    useEffect(() => {
        if (!open) {
            setErrors({});
            return;
        }

        const draft = loadMemberCreateDraft();
        if (draft) {
            setValues(draft.values);
            setActiveStep(Math.min(draft.active_step, memberWizardStepTitles.length - 1));
        }
    }, [open]);

    const currentStepTitle = useMemo(
        () => memberWizardStepTitles[activeStep] ?? "Member Wizard",
        [activeStep]
    );

    const updateField = <K extends keyof MemberCreateDraft>(field: K, value: MemberCreateDraft[K]) => {
        setValues((current) => ({ ...current, [field]: value }));
        setErrors((current) => ({ ...current, [field]: undefined }));
    };

    const goToStep = (nextStep: number) => {
        setActiveStep(Math.max(0, Math.min(nextStep, memberWizardStepTitles.length - 1)));
    };

    const handleNext = () => {
        const stepErrors = validateStep(values, activeStep);
        setErrors(stepErrors);

        if (hasErrors(stepErrors)) return;
        goToStep(activeStep + 1);
    };

    const handleBack = () => {
        goToStep(activeStep - 1);
    };

    const handleClose = () => {
        if (saving) return;
        onClose();
    };

    const handleReset = () => {
        setValues(initialMemberCreateDraft);
        setErrors({});
        setActiveStep(0);
    };

    const handleSubmit = async () => {
        const formErrors = validateAll(values);
        setErrors(formErrors);

        if (hasErrors(formErrors)) {
            const firstErrorStep = requiredFieldsByStep.findIndex((fields) =>
                fields.some((field) => Boolean(formErrors[field]))
            );

            if (firstErrorStep >= 0) {
                setActiveStep(firstErrorStep);
            }

            notify("Please complete all required fields before submitting.", {
                type: "warning",
            });
            return;
        }

        try {
            setSaving(true);
            suppressPersistRef.current = true;

            const response = await fetch(`${apiUrl}/members`, {
                method: "POST",
                headers: getAuthHeaders(),
                body: JSON.stringify(buildPayload(values)),
            });

            const payload = await response.json().catch(() => ({}));
            const message =
                payload?.message ||
                payload?.Message ||
                payload?.msg ||
                "Member created successfully";

            if (response.status !== 201) {
                throw new Error(
                    typeof payload === "string" && payload.trim()
                        ? payload
                        : message
                );
            }

            notify(message, { type: "success" });
            clearMemberCreateDraft();
            handleReset();
            onClose();
            refresh();
        } catch (error) {
            notify(
                error instanceof Error ? error.message : "Failed to create member",
                { type: "error" }
            );
        } finally {
            setSaving(false);
            if (!open) {
                suppressPersistRef.current = false;
            } else if (suppressPersistRef.current) {
                suppressPersistRef.current = false;
            }
        }
    };

    return (
        <Dialog open={open} onClose={handleClose} fullWidth maxWidth="lg">
            <DialogTitle>
                <Stack spacing={0.5}>
                    <Typography variant="h6">Create Member</Typography>
                    <Typography variant="body2" color="text.secondary">
                        Step {String(activeStep + 1).padStart(2, "0")} of {String(memberWizardStepTitles.length).padStart(2, "0")}: {currentStepTitle}
                    </Typography>
                </Stack>
            </DialogTitle>
            <DialogContent dividers>
                <Stack spacing={3}>
                    <Stack direction="row" alignItems="center" sx={{ overflowX: "auto" }}>
                        {memberWizardStepTitles.map((title, index) => {
                            const isActive = index === activeStep;
                            const isCompleted = index < activeStep;

                            return (
                                <Stack key={title} direction="row" alignItems="center">
                                    {/* STEP ITEM */}
                                    <Stack
                                        direction="row"
                                        alignItems="center"
                                        onClick={() => {
                                            if (index <= activeStep) goToStep(index);
                                        }}
                                        sx={{
                                            cursor: index <= activeStep ? "pointer" : "default",
                                            backgroundColor: isActive ? "#fff7ed" : "#f3f4f6",
                                            borderRadius: "30px",
                                            px: 2,
                                            py: 1,
                                            border: isActive ? "2px solid #f97316" : "1px solid #e5e7eb",
                                            transition: "all 0.3s ease",
                                        }}
                                    >
                                        {/* CIRCLE NUMBER */}
                                        <Stack
                                            alignItems="center"
                                            justifyContent="center"
                                            sx={{
                                                width: 36,
                                                height: 36,
                                                borderRadius: "50%",
                                                backgroundColor: isActive
                                                    ? "#f97316"
                                                    : isCompleted
                                                        ? "#16a34a"
                                                        : "#e5e7eb",
                                                color: isActive || isCompleted ? "#fff" : "#6b7280",
                                                fontWeight: 600,
                                                mr: 1.5,
                                            }}
                                        >
                                            {String(index + 1).padStart(2, "0")}
                                        </Stack>

                                        {/* TITLE */}
                                        <Typography
                                            sx={{
                                                fontWeight: isActive ? 600 : 500,
                                                color: isActive ? "#c2410c" : "#374151",
                                                whiteSpace: "nowrap",
                                            }}
                                        >
                                            {title}
                                        </Typography>
                                    </Stack>

                                    {/* CONNECTOR LINE */}
                                    {index < memberWizardStepTitles.length - 1 && (
                                        <Stack
                                            sx={{
                                                width: 40,
                                                height: 2,
                                                backgroundColor:
                                                    index < activeStep ? "#16a34a" : "#e5e7eb",
                                                mx: 1,
                                            }}
                                        />
                                    )}
                                </Stack>
                            );
                        })}
                    </Stack>

                    {activeStep === 0 ? (
                        <PersonalInfoStep values={values} errors={errors} onChange={updateField} />
                    ) : null}
                    {activeStep === 1 ? (
                        <DairyInfoStep values={values} errors={errors} onChange={updateField} />
                    ) : null}
                    {activeStep === 2 ? (
                        <ContactsStep values={values} errors={errors} onChange={updateField} />
                    ) : null}
                    {activeStep === 3 ? (
                        <DocumentsStep values={values} errors={errors} onChange={updateField} />
                    ) : null}
                    {activeStep === 4 ? (
                        <OtherDetailsStep values={values} errors={errors} onChange={updateField} />
                    ) : null}
                    {activeStep === 5 ? <ConfirmStep values={values} onEdit={goToStep} /> : null}
                </Stack>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} disabled={saving}>
                    Cancel
                </Button>

                {activeStep > 0 ? (
                    <Button onClick={handleBack} disabled={saving}>
                        Back
                    </Button>
                ) : null}

                {activeStep < memberWizardStepTitles.length - 1 ? (
                    <Button variant="contained" onClick={handleNext} disabled={saving}>
                        Next
                    </Button>
                ) : (
                    <Button variant="contained" onClick={handleSubmit} disabled={saving}>
                        {saving ? "Saving..." : "Confirm"}
                    </Button>
                )}
            </DialogActions>
        </Dialog>
    );
};
