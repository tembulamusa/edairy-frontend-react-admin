import { Button, Card, CardContent, Grid, Stack, Typography } from "@mui/material";
import type { MemberCreateDraft } from "./member-create-wizard.types";

type Props = {
    values: MemberCreateDraft;
    onEdit: (stepIndex: number) => void;
};

const summaryFields = [
    {
        title: "Personal Info",
        stepIndex: 0,
        fields: [
            ["First Name", "first_name"],
            ["Last Name", "last_name"],
            ["Other Names", "other_names"],
            ["ID Number", "id_no"],
            ["Gender", "gender"],
            ["Date of Birth", "date_of_birth"],
            ["Tax Number", "tax_number"],
            ["Marital Status", "marital_status"],
            ["Birth City", "birth_city"],
        ] as const,
    },
    {
        title: "Dairy Info",
        stepIndex: 1,
        fields: [
            ["Member Number", "member_no"],
            ["Date Registered", "date_registered"],
            ["Member Type ID", "member_type_id"],
            ["Route ID", "route_id"],
            ["Number of Cows", "number_of_cows"],
            ["Title", "title"],
        ] as const,
    },
    {
        title: "Contacts",
        stepIndex: 2,
        fields: [
            ["Primary Phone", "primary_phone"],
            ["Secondary Phone", "secondary_phone"],
            ["Email", "email"],
            ["Next of Kin Full Name", "next_of_kin_full_name"],
            ["Next of Kin Phone", "next_of_kin_phone"],
        ] as const,
    },
    {
        title: "Documents",
        stepIndex: 3,
        fields: [
            ["Passport Photo", "passport_photo"],
            ["ID Front Photo", "id_front_photo"],
            ["ID Back Photo", "id_back_photo"],
            ["ID Date of Issue", "id_date_of_issue"],
        ] as const,
    },
    {
        title: "Other Details",
        stepIndex: 4,
        fields: [
            ["Status", "status"],
            ["Downloaded", "downloaded"],
            ["Cashout Enrolled", "cashout_enrolled"],
        ] as const,
    },
];

const formatValue = (value: unknown) => {
    if (typeof value === "boolean") return value ? "Yes" : "No";
    if (typeof value === "string" && value.startsWith("data:")) return "File attached";
    return value ? String(value) : "-";
};

export const ConfirmStep = ({ values, onEdit }: Props) => (
    <Stack spacing={2}>
        <Typography variant="h6">Confirm</Typography>
        <Typography variant="body2" color="text.secondary">
            Review the details below. Use edit to jump back to any section.
        </Typography>

        <Grid container spacing={2}>
            {summaryFields.map((section) => (
                <Grid item xs={12} md={6} key={section.title}>
                    <Card variant="outlined">
                        <CardContent>
                            <Stack spacing={1.5}>
                                <Stack
                                    direction="row"
                                    alignItems="center"
                                    justifyContent="space-between"
                                    gap={2}
                                >
                                    <Typography variant="subtitle1" fontWeight={700}>
                                        {section.title}
                                    </Typography>
                                    <Button size="small" onClick={() => onEdit(section.stepIndex)}>
                                        Edit
                                    </Button>
                                </Stack>
                                <Stack spacing={0.75}>
                                    {section.fields.map(([label, key]) => (
                                        <Stack
                                            key={key}
                                            direction="row"
                                            justifyContent="space-between"
                                            gap={2}
                                        >
                                            <Typography variant="body2" color="text.secondary">
                                                {label}
                                            </Typography>
                                            <Typography variant="body2" fontWeight={600} textAlign="right">
                                                {formatValue(values[key])}
                                            </Typography>
                                        </Stack>
                                    ))}
                                </Stack>
                            </Stack>
                        </CardContent>
                    </Card>
                </Grid>
            ))}
        </Grid>
    </Stack>
);
