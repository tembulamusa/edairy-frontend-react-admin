import * as React from 'react';
import { Show, SimpleShowLayout, TextField, NumberField, FunctionField } from 'react-admin';
import { Card, CardContent, Typography, Divider } from '@mui/material';
import Grid from '@mui/material/Grid';

type ShareDividendRecord = {
    member_no?: string;
    first_name?: string;
    last_name?: string;
};

const formatMember = (firstName?: string, lastName?: string, memberNo?: string) => {
    const name = [firstName, lastName].filter(Boolean).join(" ");

    if (name && memberNo) return `${name}(${memberNo})`;
    if (name) return name;
    if (memberNo) return `(${memberNo})`;

    return "";
};

export const ShareDividendShow = () => (
    <Show title={false}>
        <Card elevation={0} sx={{ borderRadius: 3, width: '100%', overflow: "hidden" }}>
            <CardContent sx={{ p: 4 }}>
                <Grid container spacing={2} alignItems="center" justifyContent="space-between" mb={2}>
                    <Grid size={{ xs: 12, md: 12 }}>
                        <Typography variant="h5" fontWeight="bold">
                            Share Dividend Details
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            View the details of the share dividend.
                        </Typography>
                    </Grid>
                </Grid>

                <Divider sx={{ mb: 4 }} />

                <SimpleShowLayout>
                    <FunctionField
                        label="Member"
                        render={(record: ShareDividendRecord) =>
                            formatMember(record?.first_name, record?.last_name, record?.member_no)
                        }
                    />
                    <TextField source="fiscal_year" label="Fiscal Year" />
                    <TextField source="period" label="Period" />
                    <NumberField source="share_units" label="Share Units" />
                    <TextField source="status" label="Status" />
                    <NumberField source="rate_per_share" label="Rate Per Share" />
                    <NumberField source="tax_amount" label="Tax Amount" />
                    <NumberField source="net_amount" label="Net Amount" />
                </SimpleShowLayout>
            </CardContent>
        </Card>
    </Show>
);