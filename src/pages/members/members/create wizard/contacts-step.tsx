import { Grid, TextField, Typography, Stack } from "@mui/material";
import type { MemberCreateDraft, MemberCreateErrors } from "./member-create-wizard.types";

type Props = {
    values: MemberCreateDraft;
    errors: MemberCreateErrors;
    onChange: <K extends keyof MemberCreateDraft>(field: K, value: MemberCreateDraft[K]) => void;
};

export const ContactsStep = ({ values, errors, onChange }: Props) => (
    <Stack spacing={2}>
        <Typography variant="h6">Contacts</Typography>
        <Grid container spacing={2}>
            <Grid item xs={12} sm={4}>
                <TextField
                    fullWidth
                    required
                    label="Primary Phone"
                    value={values.primary_phone}
                    onChange={(event) => onChange("primary_phone", event.target.value)}
                    error={Boolean(errors.primary_phone)}
                    helperText={errors.primary_phone}
                />
            </Grid>
            <Grid item xs={12} sm={4}>
                <TextField
                    fullWidth
                    label="Secondary Phone"
                    value={values.secondary_phone}
                    onChange={(event) => onChange("secondary_phone", event.target.value)}
                />
            </Grid>
            <Grid item xs={12} sm={4}>
                <TextField
                    fullWidth
                    label="Email"
                    type="email"
                    value={values.email}
                    onChange={(event) => onChange("email", event.target.value)}
                />
            </Grid>
            <Grid item xs={12} sm={4}>
                <TextField
                    fullWidth
                    label="Next of Kin Full Name"
                    value={values.next_of_kin_full_name}
                    onChange={(event) => onChange("next_of_kin_full_name", event.target.value)}
                />
            </Grid>
            <Grid item xs={12} sm={4}>
                <TextField
                    fullWidth
                    label="Next of Kin Phone"
                    value={values.next_of_kin_phone}
                    onChange={(event) => onChange("next_of_kin_phone", event.target.value)}
                />
            </Grid>
        </Grid>
    </Stack>
);
