import { Grid, TextField, Typography, Stack } from "@mui/material";
import type { MemberCreateDraft, MemberCreateErrors } from "./member-create-wizard.types";
import { required, SelectInput, useGetList } from "react-admin";
import {
    CircularProgress,
    MenuItem,
} from "@mui/material";

type Props = {
    values: MemberCreateDraft;
    errors: MemberCreateErrors;
    onChange: <K extends keyof MemberCreateDraft>(field: K, value: MemberCreateDraft[K]) => void;
};

const MemberTypeSelect = ({
    value,
    error,
    onChange,
}: {
    value: string;
    error?: string;
    onChange: (value: string) => void;
}) => {
    const { data: memberTypes = [], isLoading } = useGetList(
        "member-types",
        {
            pagination: { page: 1, perPage: 200 },
            sort: { field: "name", order: "ASC" },
        }
    );

    return (
        <TextField
            select
            fullWidth
            required
            label="Member Type"
            value={value}
            onChange={(event) => onChange(event.target.value)}
            error={Boolean(error)}
            helperText={error}
            disabled={isLoading}
        >
            {isLoading ? (
                <MenuItem value="">
                    <CircularProgress size={20} />
                </MenuItem>
            ) : (
                memberTypes.map((type) => (
                    <MenuItem
                        key={type.id}
                        value={type.id}
                    >
                        {type.name}
                    </MenuItem>
                ))
            )}
        </TextField>
    );
};

const RouteTypeSelect = ({
    value,
    error,
    onChange,
}: {
    value: string;
    error?: string;
    onChange: (value: string) => void;
}) => {
    const { data: memberTypes = [], isLoading } = useGetList(
        "routes",
        {
            pagination: { page: 1, perPage: 200 },
            sort: { field: "name", order: "ASC" },
        }
    );

    return (
        <TextField
            select
            fullWidth
            required
            label="Route"
            value={value}
            onChange={(event) => onChange(event.target.value)}
            error={Boolean(error)}
            helperText={error}
            disabled={isLoading}
        >
            {isLoading ? (
                <MenuItem value="">
                    <CircularProgress size={20} />
                </MenuItem>
            ) : (
                memberTypes.map((type) => (
                    <MenuItem
                        key={type.id}
                        value={type.id}
                    >
                        {type.name}
                    </MenuItem>
                ))
            )}
        </TextField>
    );
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
                <Grid size={{ xs: 12, md: 6 }}>
                    <MemberTypeSelect />
                </Grid>
            </Grid>
            <Grid item xs={12} sm={4}>
                <RouteTypeSelect />
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
