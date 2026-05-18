import { useRef, type ChangeEvent } from "react";
import {
    Box,
    Button,
    Card,
    CardContent,
    Grid,
    IconButton,
    Paper,
    Stack,
    Typography,
} from "@mui/material";
import PictureAsPdfOutlinedIcon from "@mui/icons-material/PictureAsPdfOutlined";
import InsertDriveFileOutlinedIcon from "@mui/icons-material/InsertDriveFileOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import type { MemberCreateDraft, MemberCreateErrors } from "./member-create-wizard.types";

type Props = {
    values: MemberCreateDraft;
    errors: MemberCreateErrors;
    onChange: <K extends keyof MemberCreateDraft>(field: K, value: MemberCreateDraft[K]) => void;
};

const fileToDataUrl = (file: File) =>
    new Promise<string>((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(String(reader.result || ""));
        reader.onerror = () => reject(new Error("Failed to read file"));
        reader.readAsDataURL(file);
    });

const getPreviewMeta = (value: string) => {
    if (!value) {
        return { kind: "empty" as const };
    }

    const mime = value.startsWith("data:") ? value.slice(5, value.indexOf(";")) : "";

    if (mime.startsWith("image/")) {
        return { kind: "image" as const, mime };
    }

    if (mime === "application/pdf") {
        return { kind: "pdf" as const, mime };
    }

    return { kind: "file" as const, mime: mime || "unknown" };
};

const DocumentPreview = ({ label, value, onClear }: { label: string; value: string; onClear: () => void }) => {
    const meta = getPreviewMeta(value);

    return (
        <Card
            variant="outlined"
            sx={{
                borderRadius: 3,
                overflow: "hidden",
                bgcolor: "background.paper",
                boxShadow: "0 8px 24px rgba(15, 23, 42, 0.06)",
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
                            <Typography variant="subtitle2" fontWeight={700}>
                                {label}
                            </Typography>
                            <Typography variant="caption" color="text.secondary">
                                Preview
                            </Typography>
                        </Stack>
                        <IconButton size="small" onClick={onClear} aria-label={`Clear ${label}`}>
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
                        {meta.kind === "image" ? (
                            <Box
                                component="img"
                                src={value}
                                alt={label}
                                sx={{
                                    width: "100%",
                                    maxHeight: 260,
                                    objectFit: "contain",
                                    borderRadius: 2,
                                    bgcolor: "common.white",
                                }}
                            />
                        ) : meta.kind === "pdf" ? (
                            <Box
                                component="iframe"
                                src={value}
                                title={label}
                                sx={{
                                    width: "100%",
                                    height: 260,
                                    border: 0,
                                    borderRadius: 2,
                                    bgcolor: "common.white",
                                }}
                            />
                        ) : meta.kind === "file" ? (
                            <Stack spacing={1.25} alignItems="center">
                                <InsertDriveFileOutlinedIcon sx={{ fontSize: 54, color: "text.secondary" }} />
                                <Typography variant="body2" fontWeight={600}>
                                    Uploaded file
                                </Typography>
                                <Typography variant="caption" color="text.secondary">
                                    {meta.mime}
                                </Typography>
                            </Stack>
                        ) : (
                            <Stack spacing={1} alignItems="center">
                                <InsertDriveFileOutlinedIcon sx={{ fontSize: 54, color: "text.secondary" }} />
                                <Typography variant="body2" color="text.secondary">
                                    No file selected
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
    value: string;
    error?: string;
    onPick: (value: string) => void;
}) => {
    const inputRef = useRef<HTMLInputElement | null>(null);

    const handleChange = async (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (!file) return;
        const dataUrl = await fileToDataUrl(file);
        onPick(dataUrl);
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
                onClick={() => inputRef.current?.click()}
                sx={{ alignSelf: "flex-start" }}
            >
                Choose {label}
            </Button>
            <DocumentPreview label={label} value={value} onClear={() => onPick("")} />
            {error ? (
                <Typography variant="caption" color="error">
                    {error}
                </Typography>
            ) : null}
        </Stack>
    );
};

export const DocumentsStep = ({ values, errors, onChange }: Props) => (
    <Stack spacing={2}>
        <Typography variant="h6">Documents</Typography>
        <Typography variant="body2" color="text.secondary">
            Upload image or PDF documents for the member records. Each file shows a live preview below the upload control.
        </Typography>
        <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
                <UploadWell
                    label="Passport Photo"
                    value={values.passport_photo}
                    error={errors.passport_photo}
                    onPick={(value) => onChange("passport_photo", value)}
                />
            </Grid>
            <Grid item xs={12} md={4}>
                <UploadWell
                    label="ID Front Photo"
                    value={values.id_front_photo}
                    error={errors.id_front_photo}
                    onPick={(value) => onChange("id_front_photo", value)}
                />
            </Grid>
            <Grid item xs={12} md={4}>
                <UploadWell
                    label="ID Back Photo"
                    value={values.id_back_photo}
                    error={errors.id_back_photo}
                    onPick={(value) => onChange("id_back_photo", value)}
                />
            </Grid>
        </Grid>
    </Stack>
);
