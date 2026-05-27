import * as React from 'react';
import {
    Create,
    SimpleForm,
    ReferenceInput,
    SelectInput,
    NumberInput,
    DateInput,
    required,
    Toolbar,
    SaveButton,
    useNotify,
    useRedirect,
} from 'react-admin';
import { useRedirectToCreateWithReload } from '../../../components/forms/redirect-to-create-with-reload';
import { Card, CardContent, Typography, Divider, Box, Button } from '@mui/material';
import Grid from '@mui/material/Grid';
import { ListBreadcrumbs } from '../../../../ListBreadcrumbs';

const ShareDividendCreateToolbar = () => {
    const notify = useNotify();
    const redirect = useRedirect();
    const redirectToCreateWithReload = useRedirectToCreateWithReload();

    return (
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', backgroundColor: 'transparent', px: 0 }}>
            <Box sx={{ display: 'flex', gap: 1 }}>
                <SaveButton label="Save" variant="contained" redirect="list" />
                <SaveButton
                    label="Save and Add New"
                    variant="contained"
                    mutationOptions={{
                        onSuccess: () => {
                            redirectToCreateWithReload('dividends', 'Share dividend recorded successfully');
                        },
                    }}
                />
            </Box>
            <Button
                variant="contained"
                sx={{ backgroundColor: 'grey.500', color: 'white', '&:hover': { backgroundColor: 'grey.700' } }}
                onClick={() => redirect('/dividends')}
            >
                Cancel
            </Button>
        </Toolbar>
    );
};

export const ShareDividendCreate = () => (
    <Create
        title={false}
        sx={{
            "& .RaCreate-main": { display: "flex", justifyContent: "center", padding: 2 },
        }}
    >
        <Box sx={{ width: '100%', maxWidth: 1100 }}>
            <ListBreadcrumbs />
            <Card elevation={0} sx={{ borderRadius: 3, overflow: "hidden", width: '100%' }}>
                <CardContent sx={{ p: 4 }}>
                    <Typography variant="h5" fontWeight="bold">New Share Dividend Distribution</Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                        Record a specific dividend distribution for a member.
                    </Typography>
                    <Divider sx={{ mb: 4 }} />
                    <SimpleForm
                        toolbar={<ShareDividendCreateToolbar />}
                        sx={{
                            "& .RaSimpleForm-toolbar": { mt: 3, px: 0, backgroundColor: 'transparent' },
                            "& .MuiInputBase-root": { borderRadius: 2 },
                            width: '100%',
                        }}
                    >
                        <Grid container spacing={2} alignItems="flex-start">
                            <Grid item xs={12} md={6}>
                                <ReferenceInput source="member_id" reference="members">
                                    <SelectInput
                                        label="Member"
                                        optionText={(record) => `${record.first_name ?? ''} ${record.last_name ?? ''} (${record.member_no})`.trim()}
                                        fullWidth
                                        variant="outlined"
                                        validate={required()}
                                    />
                                </ReferenceInput>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <NumberInput source="fiscal_year" label="Fiscal Year" validate={required()} fullWidth variant="outlined" />
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <NumberInput source="gross_amount" label="Gross Amount" validate={required()} fullWidth variant="outlined" />
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <NumberInput source="tax_amount" label="Tax Amount" defaultValue={0} fullWidth variant="outlined" />
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <NumberInput source="net_amount" label="Net Amount" validate={required()} fullWidth variant="outlined" />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <DateInput source="payment_date" label="Payment Date" fullWidth variant="outlined" />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <SelectInput
                                    source="status"
                                    choices={[
                                        { id: 'PENDING', name: 'Pending' },
                                        { id: 'PAID', name: 'Paid' },
                                    ]}
                                    fullWidth
                                    variant="outlined"
                                />
                            </Grid>
                        </Grid>
                    </SimpleForm>
                </CardContent>
            </Card>
        </Box>
    </Create>
);