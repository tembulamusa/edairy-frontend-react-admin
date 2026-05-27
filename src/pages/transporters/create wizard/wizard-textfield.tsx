import { TextField, type TextFieldProps } from '@mui/material';

/** Matches transporter SimpleForm outlined inputs (rounded borders). */
export const wizardTextFieldSx = {
    '& .MuiOutlinedInput-root': {
        borderRadius: 2,
    },
} as const;

export const WizardTextField = ({ sx, ...props }: TextFieldProps) => (
    <TextField variant="outlined" fullWidth sx={{ ...wizardTextFieldSx, ...sx }} {...props} />
);
