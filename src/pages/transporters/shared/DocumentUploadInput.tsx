import { useRef, type ChangeEvent } from 'react';
import { useInput, InputHelperText, type Validator } from 'react-admin';
import { Box, Button, Stack, Typography } from '@mui/material';
import InsertDriveFileOutlinedIcon from '@mui/icons-material/InsertDriveFileOutlined';
import type { UploadedPhotoValue } from './PhotoUploadInput';

const PDF_ACCEPT = 'application/pdf,.pdf';

type DocumentUploadInputProps = {
    source: string;
    label: string;
    validate?: Validator | Validator[];
};

const normalizeValue = (value: unknown): UploadedPhotoValue | undefined => {
    if (value === undefined || value === null || value === '') {
        return undefined;
    }
    if (typeof value === 'string') {
        return { src: value, title: value.split('/').pop() ?? 'Saved document' };
    }
    if (Array.isArray(value)) {
        return normalizeValue(value[0]);
    }
    return value as UploadedPhotoValue;
};

export const DocumentUploadInput = ({ source, label, validate }: DocumentUploadInputProps) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const { field, fieldState, isRequired } = useInput({ source, validate });
    const value = normalizeValue(field.value);

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            field.onChange({ rawFile: file, title: file.name });
        }
        event.target.value = '';
    };

    return (
        <Stack spacing={1}>
            <input ref={inputRef} type="file" hidden accept={PDF_ACCEPT} onChange={handleChange} />
            <Button variant="outlined" onClick={() => inputRef.current?.click()} sx={{ alignSelf: 'flex-start' }}>
                Choose {label}
            </Button>
            <Box
                sx={{
                    p: 2,
                    border: '1px dashed',
                    borderColor: 'divider',
                    borderRadius: 2,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                }}
            >
                <InsertDriveFileOutlinedIcon color="primary" />
                <Typography variant="body2">
                    {value?.title ?? value?.src?.split('/').pop() ?? 'No document selected'}
                </Typography>
            </Box>
            <InputHelperText
                touched={fieldState.isTouched || Boolean(fieldState.error)}
                error={fieldState.error?.message}
            />
            {isRequired && !fieldState.error ? (
                <Typography variant="caption" color="text.secondary">
                    PDF document
                </Typography>
            ) : null}
        </Stack>
    );
};
