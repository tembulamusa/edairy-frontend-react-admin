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
