import {
    Checkbox,
    FormControlLabel,
    Grid,
    MenuItem,
    TextField,
    Typography,
    Stack,
} from "@mui/material";
import type { MemberCreateDraft, MemberCreateErrors } from "./member-create-wizard.types";

type Props = {
    values: MemberCreateDraft;
    errors: MemberCreateErrors;
    onChange: <K extends keyof MemberCreateDraft>(field: K, value: MemberCreateDraft[K]) => void;
};

export const OtherDetailsStep = ({ values, errors, onChange }: Props) => (
    <Stack spacing={2}>
        <Typography variant="h6">Other Details</Typography>
        <Grid container spacing={2}>
            <Grid item xs={12} sm={4}>
                <TextField
                    fullWidth
                    select
                    required
                    label="Status"
                    value={values.status}
                    onChange={(event) => onChange("status", event.target.value)}
                    error={Boolean(errors.status)}
                    helperText={errors.status}
                >
                    <MenuItem value="">Select status</MenuItem>
                    <MenuItem value="1">Active</MenuItem>
                    <MenuItem value="0">Inactive</MenuItem>
                </TextField>
            </Grid>
            <Grid item xs={12} sm={4}>
                <TextField
                    fullWidth
                    label="Downloaded"
                    value={values.downloaded}
                    onChange={(event) => onChange("downloaded", event.target.value)}
                />
            </Grid>
            <Grid item xs={12} sm={4}>
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={values.cashout_enrolled}
                            onChange={(event) => onChange("cashout_enrolled", event.target.checked)}
                        />
                    }
                    label="Cashout Enrolled"
                />
            </Grid>
        </Grid>
    </Stack>
);
