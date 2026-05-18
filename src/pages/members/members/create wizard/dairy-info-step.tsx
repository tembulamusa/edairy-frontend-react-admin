import { Grid, TextField, Typography, Stack } from "@mui/material";
import type { MemberCreateDraft, MemberCreateErrors } from "./member-create-wizard.types";

type Props = {
    values: MemberCreateDraft;
    errors: MemberCreateErrors;
    onChange: <K extends keyof MemberCreateDraft>(field: K, value: MemberCreateDraft[K]) => void;
};

export const DairyInfoStep = ({ values, errors, onChange }: Props) => (
    <Stack spacing={2}>
        <Typography variant="h6">Dairy Info</Typography>
        <Grid container spacing={2}>
            <Grid item xs={12} sm={4}>
                <TextField
                    fullWidth
                    required
                    label="Member Number"
                    value={values.member_no}
                    onChange={(event) => onChange("member_no", event.target.value)}
                    error={Boolean(errors.member_no)}
                    helperText={errors.member_no}
                />
            </Grid>
            <Grid item xs={12} sm={4}>
                <TextField
                    fullWidth
                    required
                    type="date"
                    label="Date Registered"
                    value={values.date_registered}
                    onChange={(event) => onChange("date_registered", event.target.value)}
                    InputLabelProps={{ shrink: true }}
                    error={Boolean(errors.date_registered)}
                    helperText={errors.date_registered}
                />
            </Grid>
            <Grid item xs={12} sm={4}>
                <TextField
                    fullWidth
                    required
                    label="Member Type ID"
                    type="number"
                    value={values.member_type_id}
                    onChange={(event) => onChange("member_type_id", event.target.value)}
                    error={Boolean(errors.member_type_id)}
                    helperText={errors.member_type_id}
                />
            </Grid>
            <Grid item xs={12} sm={4}>
                <TextField
                    fullWidth
                    required
                    label="Route ID"
                    type="number"
                    value={values.route_id}
                    onChange={(event) => onChange("route_id", event.target.value)}
                    error={Boolean(errors.route_id)}
                    helperText={errors.route_id}
                />
            </Grid>
            <Grid item xs={12} sm={4}>
                <TextField
                    fullWidth
                    label="Number of Cows"
                    type="number"
                    value={values.number_of_cows}
                    onChange={(event) => onChange("number_of_cows", event.target.value)}
                />
            </Grid>
            <Grid item xs={12} sm={4}>
                <TextField
                    fullWidth
                    label="Title"
                    value={values.title}
                    onChange={(event) => onChange("title", event.target.value)}
                />
            </Grid>
        </Grid>
    </Stack>
);
