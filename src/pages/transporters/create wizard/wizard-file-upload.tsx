import { useEffect, useMemo, useRef, useState, type ChangeEvent } from 'react';
import {
    Box,
    Button,
    Card,
    CardContent,
    IconButton,
    Stack,
    Typography,
} from '@mui/material';
import InsertDriveFileOutlinedIcon from '@mui/icons-material/InsertDriveFileOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import type { UploadedPhotoValue } from '../shared/PhotoUploadInput';
import { fileToDataUrl } from './transporter-wizard-upload';

type WizardFileUploadProps = {
    label: string;
    accept: string;
    value?: UploadedPhotoValue;
    onChange: (value: UploadedPhotoValue | undefined) => void;
    error?: string;
    helperText?: string;
};

const readFile = async (file: File): Promise<UploadedPhotoValue> => ({
    rawFile: file,
    src: await fileToDataUrl(file),
    title: file.name,
});

export const WizardFileUpload = ({
    label,
    accept,
    value,
    onChange,
    error,
    helperText,
}: WizardFileUploadProps) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const [objectUrl, setObjectUrl] = useState<string | null>(null);

    useEffect(() => {
        if (value?.rawFile instanceof File) {
            const url = URL.createObjectURL(value.rawFile);
            setObjectUrl(url);
            return () => URL.revokeObjectURL(url);
        }
        setObjectUrl(null);
        return undefined;
    }, [value?.rawFile]);

    const previewUrl = useMemo(() => {
        if (objectUrl) return objectUrl;
        if (typeof value?.src === 'string' && value.src) return value.src;
        return '';
    }, [objectUrl, value?.src]);

    const isImage =
        value?.rawFile?.type?.startsWith('image/') ||
        (typeof value?.src === 'string' && value.src.startsWith('data:image/'));

    const handleChange = async (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            onChange(await readFile(file));
        }
        event.target.value = '';
    };

    return (
        <Stack spacing={1}>
            <input ref={inputRef} type="file" hidden accept={accept} onChange={handleChange} />
            <Button
                variant="outlined"
                onClick={() => inputRef.current?.click()}
                sx={{
                    alignSelf: 'flex-start',
                    borderRadius: 2,
                    textTransform: 'none',
                    fontWeight: 600,
                }}
            >
                Choose {label}
            </Button>
            <Card
                variant="outlined"
                sx={{
                    borderRadius: 3,
                    overflow: 'hidden',
                    bgcolor: 'background.paper',
                    boxShadow: '0 8px 24px rgba(15, 23, 42, 0.06)',
                }}
            >
                <CardContent sx={{ p: 2 }}>
                    <Stack direction="row" justifyContent="space-between" alignItems="center" mb={1}>
                        <Typography variant="subtitle2" fontWeight={700}>
                            {label}
                        </Typography>
                        {value ? (
                            <IconButton size="small" onClick={() => onChange(undefined)} aria-label={`Clear ${label}`}>
                                <CloseOutlinedIcon fontSize="small" />
                            </IconButton>
                        ) : null}
                    </Stack>
                    {!previewUrl ? (
                        <Stack spacing={1} alignItems="center" py={3}>
                            <InsertDriveFileOutlinedIcon sx={{ fontSize: 48, color: 'text.secondary' }} />
                            <Typography variant="body2" color="text.secondary">
                                No file selected
                            </Typography>
                        </Stack>
                    ) : isImage ? (
                        <Box
                            component="img"
                            src={previewUrl}
                            alt={label}
                            sx={{ width: '100%', maxHeight: 220, objectFit: 'contain' }}
                        />
                    ) : (
                        <Stack spacing={0.5}>
                            <InsertDriveFileOutlinedIcon sx={{ fontSize: 40, color: 'primary.main' }} />
                            <Typography variant="body2">{value?.title ?? 'Document attached'}</Typography>
                        </Stack>
                    )}
                </CardContent>
            </Card>
            {error ? (
                <Typography variant="caption" color="error">
                    {error}
                </Typography>
            ) : helperText ? (
                <Typography variant="caption" color="text.secondary">
                    {helperText}
                </Typography>
            ) : null}
        </Stack>
    );
};
