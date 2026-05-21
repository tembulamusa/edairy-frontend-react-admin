import { useRef, type ChangeEvent } from "react";
import {
    Box,
    Button,
    Card,
    CardContent,
    Grid,
    IconButton,
    Stack,
    Typography,
} from "@mui/material";

import InsertDriveFileOutlinedIcon from "@mui/icons-material/InsertDriveFileOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

import type {
    MemberCreateDraft,
    MemberCreateErrors,
} from "./member-create-wizard.types";

type Props = {
    values: MemberCreateDraft;
    errors: MemberCreateErrors;
    onChange: <K extends keyof MemberCreateDraft>(
        field: K,
        value: MemberCreateDraft[K]
    ) => void;
};

const DocumentPreview = ({
    label,
    value,
    onClear,
}: {
    label: string;
    value: File | null;
    onClear: () => void;
}) => {
    const previewUrl =
        value instanceof File
            ? URL.createObjectURL(value)
            : "";

    const isImage =
        value instanceof File &&
        value.type.startsWith("image/");

    const isPdf =
        value instanceof File &&
        value.type === "application/pdf";

    return (
        <Card
            variant="outlined"
            sx={{
                borderRadius: 3,
                overflow: "hidden",
                bgcolor: "background.paper",
                boxShadow:
                    "0 8px 24px rgba(15, 23, 42, 0.06)",
            }}
        >
            <CardContent sx={{ p: 0 }}>
                <Stack spacing={0}>
                    <Stack
                        direction="row"
                        alignItems="center"
                        justifyContent="space-between"
                        sx={{
                            px: 2,
                            py: 1.25,
                            bgcolor: "grey.50",
                            borderBottom: "1px solid",
                            borderColor: "divider",
                        }}
                    >
                        <Stack spacing={0.25}>
                            <Typography
                                variant="subtitle2"
                                fontWeight={700}
                            >
                                {label}
                            </Typography>

                            <Typography
                                variant="caption"
                                color="text.secondary"
                            >
                                Preview
                            </Typography>
                        </Stack>

                        <IconButton
                            size="small"
                            onClick={onClear}
                            aria-label={`Clear ${label}`}
                        >
                            <CloseOutlinedIcon fontSize="small" />
                        </IconButton>
                    </Stack>

                    <Box
                        sx={{
                            minHeight: 220,
                            bgcolor: "grey.100",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            p: 1.5,
                        }}
                    >
                        {!value ? (
                            <Stack
                                spacing={1}
                                alignItems="center"
                            >
                                <InsertDriveFileOutlinedIcon
                                    sx={{
                                        fontSize: 54,
                                        color:
                                            "text.secondary",
                                    }}
                                />

                                <Typography
                                    variant="body2"
                                    color="text.secondary"
                                >
                                    No file selected
                                </Typography>
                            </Stack>
                        ) : isImage ? (
                            <Box
                                component="img"
                                src={previewUrl}
                                alt={label}
                                sx={{
                                    width: "100%",
                                    maxHeight: 260,
                                    objectFit: "contain",
                                    borderRadius: 2,
                                    bgcolor: "common.white",
                                }}
                            />
                        ) : isPdf ? (
                            <Box
                                component="iframe"
                                src={previewUrl}
                                title={label}
                                sx={{
                                    width: "100%",
                                    height: 260,
                                    border: 0,
                                    borderRadius: 2,
                                    bgcolor: "common.white",
                                }}
                            />
                        ) : (
                            <Stack
                                spacing={1.25}
                                alignItems="center"
                            >
                                <InsertDriveFileOutlinedIcon
                                    sx={{
                                        fontSize: 54,
                                        color:
                                            "text.secondary",
                                    }}
                                />

                                <Typography
                                    variant="body2"
                                    fontWeight={600}
                                >
                                    {value.name}
                                </Typography>

                                <Typography
                                    variant="caption"
                                    color="text.secondary"
                                >
                                    {value.type}
                                </Typography>
                            </Stack>
                        )}
                    </Box>
                </Stack>
            </CardContent>
        </Card>
    );
};

const UploadWell = ({
    label,
    value,
    error,
    onPick,
}: {
    label: string;
    value: File | null;
    error?: string;
    onPick: (value: File | null) => void;
}) => {
    const inputRef =
        useRef<HTMLInputElement | null>(null);

    const handleChange = (
        event: ChangeEvent<HTMLInputElement>
    ) => {
        const file = event.target.files?.[0];

        if (!file) return;

        onPick(file);

        event.target.value = "";
    };

    return (
        <Stack spacing={1.5}>
            <input
                ref={inputRef}
                type="file"
                hidden
                accept="image/*,application/pdf"
                onChange={handleChange}
            />

            <Button
                variant="outlined"
                onClick={() =>
                    inputRef.current?.click()
                }
                sx={{ alignSelf: "flex-start" }}
            >
                Choose {label}
            </Button>

            <DocumentPreview
                label={label}
                value={value}
                onClear={() => onPick(null)}
            />

            {error ? (
                <Typography
                    variant="caption"
                    color="error"
                >
                    {error}
                </Typography>
            ) : null}
        </Stack>
    );
};

export const DocumentsStep = ({
    values,
    errors,
    onChange,
}: Props) => (
    <Stack spacing={2}>
        <Typography variant="h6">
            Documents
        </Typography>

        <Typography
            variant="body2"
            color="text.secondary"
        >
            Upload image or PDF documents for the
            member records. Each file shows a live
            preview below the upload control.
        </Typography>

        <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
                <UploadWell
                    label="Passport Photo"
                    value={values.passport_photo}
                    error={errors.passport_photo}
                    onPick={(file) =>
                        onChange(
                            "passport_photo",
                            file
                        )
                    }
                />
            </Grid>

            <Grid item xs={12} md={4}>
                <UploadWell
                    label="ID Front Photo"
                    value={values.id_front_photo}
                    error={errors.id_front_photo}
                    onPick={(file) =>
                        onChange(
                            "id_front_photo",
                            file
                        )
                    }
                />
            </Grid>

            <Grid item xs={12} md={4}>
                <UploadWell
                    label="ID Back Photo"
                    value={values.id_back_photo}
                    error={errors.id_back_photo}
                    onPick={(file) =>
                        onChange(
                            "id_back_photo",
                            file
                        )
                    }
                />
            </Grid>
        </Grid>
    </Stack>
);