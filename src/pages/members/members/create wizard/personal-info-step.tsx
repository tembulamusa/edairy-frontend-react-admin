import { Grid, MenuItem, Stack, TextField, Typography } from "@mui/material";
import type { MemberCreateDraft, MemberCreateErrors } from "./member-create-wizard.types";

type Props = {
    values: MemberCreateDraft;
    errors: MemberCreateErrors;
    onChange: <K extends keyof MemberCreateDraft>(field: K, value: MemberCreateDraft[K]) => void;
};

export const PersonalInfoStep = ({ values, errors, onChange }: Props) => (
    <Stack spacing={2}>
        <Typography variant="h6">Personal Info</Typography>
        <Grid container spacing={2}>
            <Grid item xs={12} sm={4}>
                <TextField
                    fullWidth
                    required
                    label="First Name"
                    value={values.first_name}
                    onChange={(event) => onChange("first_name", event.target.value)}
                    error={Boolean(errors.first_name)}
                    helperText={errors.first_name}
                />
            </Grid>
            <Grid item xs={12} sm={4}>
                <TextField
                    fullWidth
                    required
                    label="Last Name"
                    value={values.last_name}
                    onChange={(event) => onChange("last_name", event.target.value)}
                    error={Boolean(errors.last_name)}
                    helperText={errors.last_name}
                />
            </Grid>
            <Grid item xs={12} sm={4}>
                <TextField
                    fullWidth
                    label="Other Names"
                    value={values.other_names}
                    onChange={(event) => onChange("other_names", event.target.value)}
                />
            </Grid>
            <Grid item xs={12} sm={4}>
                <TextField
                    fullWidth
                    required
                    label="ID Number"
                    value={values.idnumber}
                    onChange={(event) => onChange("idnumber", event.target.value)}
                    error={Boolean(errors.idnumber)}
                    helperText={errors.idnumber}
                />
            </Grid>
            <Grid item xs={12} sm={4}>
                <TextField
                    fullWidth
                    required
                    select
                    label="Gender"
                    value={values.gender}
                    onChange={(event) => onChange("gender", event.target.value)}
                    error={Boolean(errors.gender)}
                    helperText={errors.gender}
                >
                    <MenuItem value="">Select gender</MenuItem>
                    <MenuItem value="male">Male</MenuItem>
                    <MenuItem value="female">Female</MenuItem>
                    <MenuItem value="other">Other</MenuItem>
                </TextField>
            </Grid>
            <Grid item xs={12} sm={4}>
                <TextField
                    fullWidth
                    type="date"
                    label="Date of Birth"
                    value={values.date_of_birth}
                    onChange={(event) => onChange("date_of_birth", event.target.value)}
                    InputLabelProps={{ shrink: true }}
                />
            </Grid>
            <Grid item xs={12} sm={4}>
                <TextField
                    fullWidth
                    label="Tax Number"
                    value={values.tax_number}
                    onChange={(event) => onChange("tax_number", event.target.value)}
                />
            </Grid>
            <Grid item xs={12} sm={4}>
                <TextField
                    fullWidth
                    select
                    label="Marital Status"
                    value={values.marital_status}
                    onChange={(event) => onChange("marital_status", event.target.value)}
                >
                    <MenuItem value="">Select marital status</MenuItem>
                    <MenuItem value="single">Single</MenuItem>
                    <MenuItem value="married">Married</MenuItem>
                    <MenuItem value="divorced">Divorced</MenuItem>
                    <MenuItem value="widowed">Widowed</MenuItem>
                </TextField>
            </Grid>
            <Grid item xs={12} sm={4}>
                <TextField
                    fullWidth
                    label="Birth City"
                    value={values.birth_city}
                    onChange={(event) => onChange("birth_city", event.target.value)}
                />
            </Grid>
        </Grid>
    </Stack>
);
