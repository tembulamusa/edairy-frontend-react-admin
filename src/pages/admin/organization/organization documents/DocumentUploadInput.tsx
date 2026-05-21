import { useRef, useState, type ChangeEvent, type DragEvent } from 'react';
import { useInput, InputHelperText, type Validator } from 'react-admin';
import {
    Box,
    Typography,
    Stack,
    Button,
    alpha,
    useTheme,
} from '@mui/material';
import CloudUploadOutlinedIcon from '@mui/icons-material/CloudUploadOutlined';
import InsertDriveFileOutlinedIcon from '@mui/icons-material/InsertDriveFileOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';

const ACCEPT = 'application/pdf,image/png,image/jpeg,image/gif,image/webp';

type UploadedFileValue = {
    rawFile?: File;
    src?: string;
    title?: string;
};

type DocumentUploadInputProps = {
    source?: string;
    label?: string;
    validate?: Validator | Validator[];
};

const fileToDataUrl = (file: File) =>
    new Promise<string>((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(String(reader.result || ''));
        reader.onerror = () => reject(new Error('Failed to read file'));
        reader.readAsDataURL(file);
    });

const readFile = async (file: File): Promise<UploadedFileValue> => ({
    rawFile: file,
    src: await fileToDataUrl(file),
    title: file.name,
});

export const DocumentUploadInput = ({
    source = 'document',
    label = 'Document',
    validate,
}: DocumentUploadInputProps) => {
    const theme = useTheme();
    const inputRef = useRef<HTMLInputElement>(null);
    const [dragging, setDragging] = useState(false);

    const { field, fieldState, isRequired } = useInput({
        source,
        validate,
    });

    const value = (Array.isArray(field.value) ? field.value[0] : field.value) as UploadedFileValue | undefined;
    const fileName = value?.title ?? value?.rawFile?.name;
    const hasFile = Boolean(fileName);
    const hasError = Boolean(fieldState.error);

    const applyFile = async (file: File) => {
        field.onChange(await readFile(file));
    };

    const handleInputChange = async (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) await applyFile(file);
        event.target.value = '';
    };

    const handleDragOver = (event: DragEvent) => {
        event.preventDefault();
        setDragging(true);
    };

    const handleDragLeave = () => setDragging(false);

    const handleDrop = async (event: DragEvent) => {
        event.preventDefault();
        setDragging(false);
        const file = event.dataTransfer.files?.[0];
        if (file) await applyFile(file);
    };

    const borderColor = hasError
        ? theme.palette.error.main
        : dragging
          ? theme.palette.primary.main
          : theme.palette.divider;

    const backgroundColor = dragging
        ? alpha(theme.palette.primary.main, 0.06)
        : theme.palette.grey[50];

    return (
        <Box sx={{ width: '100%' }}>
            <Typography variant="subtitle2" fontWeight={600} sx={{ mb: 1 }}>
                {label}
                {isRequired ? ' *' : ''}
            </Typography>

            <Box
                role="button"
                tabIndex={0}
                onKeyDown={(event) => {
                    if (event.key === 'Enter' || event.key === ' ') {
                        event.preventDefault();
                        inputRef.current?.click();
                    }
                }}
                onClick={() => !hasFile && inputRef.current?.click()}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
                sx={{
                    width: '100%',
                    minHeight: hasFile ? 140 : 220,
                    border: '2px dashed',
                    borderColor,
                    borderRadius: 2,
                    bgcolor: backgroundColor,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    p: 3,
                    cursor: hasFile ? 'default' : 'pointer',
                    transition: 'border-color 0.2s ease, background-color 0.2s ease, box-shadow 0.2s ease',
                    boxShadow: dragging ? `0 0 0 4px ${alpha(theme.palette.primary.main, 0.12)}` : 'none',
                    '&:hover': hasFile
                        ? undefined
                        : {
                              borderColor: theme.palette.primary.main,
                              bgcolor: alpha(theme.palette.primary.main, 0.04),
                          },
                }}
            >
                <input
                    ref={inputRef}
                    type="file"
                    hidden
                    accept={ACCEPT}
                    onChange={handleInputChange}
                />

                {hasFile ? (
                    <Stack
                        direction={{ xs: 'column', sm: 'row' }}
                        spacing={2}
                        alignItems="center"
                        sx={{ width: '100%', maxWidth: 560 }}
                    >
                        <Box
                            sx={{
                                width: 56,
                                height: 56,
                                borderRadius: 2,
                                bgcolor: 'primary.main',
                                color: 'primary.contrastText',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                flexShrink: 0,
                            }}
                        >
                            <InsertDriveFileOutlinedIcon fontSize="large" />
                        </Box>
                        <Stack spacing={0.5} sx={{ flex: 1, minWidth: 0 }}>
                            <Typography variant="subtitle1" fontWeight={600} noWrap>
                                {fileName}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Ready to upload with this record
                            </Typography>
                        </Stack>
                        <Stack direction="row" spacing={1} flexShrink={0}>
                            <Button
                                variant="outlined"
                                size="small"
                                onClick={(event) => {
                                    event.stopPropagation();
                                    inputRef.current?.click();
                                }}
                            >
                                Replace
                            </Button>
                            <Button
                                variant="text"
                                size="small"
                                color="inherit"
                                startIcon={<CloseOutlinedIcon />}
                                onClick={(event) => {
                                    event.stopPropagation();
                                    field.onChange(null);
                                }}
                            >
                                Remove
                            </Button>
                        </Stack>
                    </Stack>
                ) : (
                    <Stack spacing={1.5} alignItems="center" textAlign="center" sx={{ pointerEvents: 'none' }}>
                        <Box
                            sx={{
                                width: 72,
                                height: 72,
                                borderRadius: '50%',
                                bgcolor: alpha(theme.palette.primary.main, 0.1),
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                        >
                            <CloudUploadOutlinedIcon sx={{ fontSize: 40, color: 'primary.main' }} />
                        </Box>
                        <Typography variant="subtitle1" fontWeight={700}>
                            Drag & drop your document here
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            or click anywhere in this area to browse files
                        </Typography>
                        <Typography variant="caption" color="text.secondary">
                            Supported: PDF, PNG, JPG, GIF, WEBP
                        </Typography>
                    </Stack>
                )}
            </Box>

            <InputHelperText touched={fieldState.isTouched} error={fieldState.error?.message} />
        </Box>
    );
};
