import { useEffect, useMemo, useRef, useState, type ChangeEvent } from 'react';
import { useInput, InputHelperText, type Validator } from 'react-admin';
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

const IMAGE_ACCEPT = 'image/png,image/jpeg,image/jpg,image/gif,image/webp';

export type UploadedPhotoValue = {
    rawFile?: File;
    src?: string;
    title?: string;
};

type PhotoUploadInputProps = {
    source: string;
    label: string;
    validate?: Validator | Validator[];
};

const fileToDataUrl = (file: File) =>
    new Promise<string>((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(String(reader.result || ''));
        reader.onerror = () => reject(new Error('Failed to read file'));
        reader.readAsDataURL(file);
    });

const readFile = async (file: File): Promise<UploadedPhotoValue> => ({
    rawFile: file,
    src: await fileToDataUrl(file),
    title: file.name,
});

const normalizeValue = (value: unknown): UploadedPhotoValue | undefined => {
    if (value === undefined || value === null || value === '') {
        return undefined;
    }
    if (typeof value === 'string') {
        return { src: value, title: value.split('/').pop() ?? 'Saved image' };
    }
    if (Array.isArray(value)) {
        return normalizeValue(value[0]);
    }
    return value as UploadedPhotoValue;
};

const PhotoPreview = ({
    label,
    value,
    previewUrl,
    onClear,
}: {
    label: string;
    value: UploadedPhotoValue | undefined;
    previewUrl: string;
    onClear: () => void;
}) => {
    const hasPreview = Boolean(previewUrl);

    return (
        <Card
            variant="outlined"
            sx={{
                borderRadius: 3,
                overflow: 'hidden',
                bgcolor: 'background.paper',
                boxShadow: '0 8px 24px rgba(15, 23, 42, 0.06)',
            }}
        >
            <CardContent sx={{ p: 0 }}>
                <Stack
                    direction="row"
                    alignItems="center"
                    justifyContent="space-between"
                    sx={{
                        px: 2,
                        py: 1.25,
                        bgcolor: 'grey.50',
                        borderBottom: '1px solid',
                        borderColor: 'divider',
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
                    {hasPreview ? (
                        <IconButton size="small" onClick={onClear} aria-label={`Clear ${label}`}>
                            <CloseOutlinedIcon fontSize="small" />
                        </IconButton>
                    ) : null}
                </Stack>
                <Box
                    sx={{
                        minHeight: 220,
                        bgcolor: 'grey.100',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        p: 1.5,
                    }}
                >
                    {!hasPreview ? (
                        <Stack spacing={1} alignItems="center">
                            <InsertDriveFileOutlinedIcon sx={{ fontSize: 54, color: 'text.secondary' }} />
                            <Typography variant="body2" color="text.secondary">
                                No file selected
                            </Typography>
                        </Stack>
                    ) : (
                        <Box
                            component="img"
                            src={previewUrl}
                            alt={label}
                            sx={{
                                width: '100%',
                                maxHeight: 260,
                                objectFit: 'contain',
                                borderRadius: 2,
                                bgcolor: 'common.white',
                            }}
                        />
                    )}
                </Box>
                {value?.title ? (
                    <Typography variant="caption" color="text.secondary" sx={{ px: 2, py: 1, display: 'block' }}>
                        {value.title}
                    </Typography>
                ) : null}
            </CardContent>
        </Card>
    );
};

export const PhotoUploadInput = ({ source, label, validate }: PhotoUploadInputProps) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const [objectUrl, setObjectUrl] = useState<string | null>(null);
    const { field, fieldState, isRequired } = useInput({ source, validate });

    const value = normalizeValue(field.value);

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
        if (objectUrl) {
            return objectUrl;
        }
        if (typeof value?.src === 'string' && value.src) {
            if (value.src.startsWith('data:') || value.src.startsWith('http') || value.src.startsWith('/')) {
                return value.src;
            }
            return value.src;
        }
        return '';
    }, [objectUrl, value?.src]);

    const applyFile = async (file: File) => {
        field.onChange(await readFile(file));
    };

    const handleChange = async (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            await applyFile(file);
        }
        event.target.value = '';
    };

    return (
        <Stack spacing={1.5} sx={{ width: '100%' }}>
            <input ref={inputRef} type="file" hidden accept={IMAGE_ACCEPT} onChange={handleChange} />
            <Button variant="outlined" onClick={() => inputRef.current?.click()} sx={{ alignSelf: 'flex-start' }}>
                Choose {label}
            </Button>
            <PhotoPreview
                label={label}
                value={value}
                previewUrl={previewUrl}
                onClear={() => field.onChange(undefined)}
            />
            <InputHelperText
                touched={fieldState.isTouched || Boolean(fieldState.error)}
                error={fieldState.error?.message}
            />
            {isRequired && !fieldState.error ? (
                <Typography variant="caption" color="text.secondary">
                    Required — upload a clear image of the ID
                </Typography>
            ) : null}
        </Stack>
    );
};
