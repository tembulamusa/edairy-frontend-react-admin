import { Box, Card, CardContent, Stack, Typography } from '@mui/material';
import InsertDriveFileOutlinedIcon from '@mui/icons-material/InsertDriveFileOutlined';
import type { UploadedPhotoValue } from '../shared/PhotoUploadInput';
import { isImagePreviewUrl, useUploadPreviewUrl } from './transporter-wizard-upload';

type UploadPreviewCardProps = {
    label: string;
    value?: UploadedPhotoValue;
};

export const UploadPreviewCard = ({ label, value }: UploadPreviewCardProps) => {
    const previewUrl = useUploadPreviewUrl(value);
    const hasPreview = Boolean(previewUrl);
    const isImage = hasPreview && isImagePreviewUrl(previewUrl, value);

    return (
        <Card
            variant="outlined"
            sx={{
                borderRadius: 2,
                overflow: 'hidden',
                height: '100%',
                boxShadow: '0 4px 16px rgba(15, 23, 42, 0.05)',
            }}
        >
            <CardContent sx={{ p: 0 }}>
                <Box
                    sx={{
                        px: 2,
                        py: 1,
                        bgcolor: 'grey.50',
                        borderBottom: '1px solid',
                        borderColor: 'divider',
                    }}
                >
                    <Typography variant="subtitle2" fontWeight={700}>
                        {label}
                    </Typography>
                </Box>
                <Box
                    sx={{
                        minHeight: 180,
                        bgcolor: 'grey.100',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        p: 1.5,
                    }}
                >
                    {!hasPreview ? (
                        <Typography variant="body2" color="text.secondary">
                            No file selected
                        </Typography>
                    ) : isImage ? (
                        <Box
                            component="img"
                            src={previewUrl}
                            alt={label}
                            sx={{
                                width: '100%',
                                maxHeight: 220,
                                objectFit: 'contain',
                                borderRadius: 1,
                                bgcolor: 'common.white',
                            }}
                        />
                    ) : (
                        <Stack spacing={1} alignItems="center">
                            <InsertDriveFileOutlinedIcon sx={{ fontSize: 48, color: 'primary.main' }} />
                            <Typography variant="body2" fontWeight={500}>
                                {value?.title ?? 'Document attached'}
                            </Typography>
                        </Stack>
                    )}
                </Box>
            </CardContent>
        </Card>
    );
};
