import * as React from 'react';
import {
    Create,
    SimpleForm,
    TextInput,
    NumberInput,
    DateInput,
    ReferenceInput,
    SelectInput,
    required,
    useNotify,
    useRedirect,
    Toolbar,
    SaveButton,
} from 'react-admin';
import { useRedirectToCreateWithReload } from '../../../components/forms/redirect-to-create-with-reload';

import {
    Card,
    CardContent,
    Typography,
    Divider,
    Box,
    Button,
} from '@mui/material';

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
                            redirectToCreateWithReload('share-dividends', 'Share Dividend recorded successfully');
                        },
                    }}
                />
            </Box>
            <Button
                variant="contained"
                sx={{
                    backgroundColor: 'grey.500',
                    color: 'white',
                    '&:hover': { backgroundColor: 'grey.700' }
                }}
                onClick={() => redirect('/share-dividends')}
            >
                Cancel
            </Button>
        </Toolbar>
    );
};

export const ShareDividendCreate = () => {
    return (
        <Create
            title={false}
            sx={{
                "& .RaCreate-main": {
                    display: "flex",
                    justifyContent: "center",
                    padding: 2,
                },
            }}
        >
            <Box sx={{ width: '100%', maxWidth: 1100 }}>
                <ListBreadcrumbs />
                <Card
                    elevation={0}
                    sx={{
                        borderRadius: 3,
                        width: '100%',
                        overflow: "hidden",
                    }}
                >
                    <CardContent sx={{ p: 4 }}>
                        <Grid
                            container
                            spacing={2}
                            alignItems="center"
                            justifyContent="space-between"
                            mb={2}
                        >
                            <Grid item xs={12} md={12}>
                                <Typography variant="h5" fontWeight="bold">New Share Dividend</Typography>
                                <Typography variant="body2" color="text.secondary">Record a new dividend distribution for shares.</Typography>
                            </Grid>
                        </Grid>

                        <Divider sx={{ mb: 4 }} />

                        <SimpleForm
                            toolbar={<ShareDividendCreateToolbar />}
                            sx={{
                                "& .RaSimpleForm-toolbar": {
                                    mt: 3,
                                    px: 0,
                                    backgroundColor: 'transparent',
                                },
                                "& .MuiInputBase-root": { borderRadius: 2 },
                                width: '100%',
                            }}
                        >
                            {/* Row 1: Member and Declaration Date */}
                            <Grid container spacing={2} alignItems="flex-start" sx={{ mb: 2 }}>
                                <Grid item xs={12} md={6}>
                                    <ReferenceInput source="member_id" reference="share-accounts">
                                        <SelectInput
                                            label="Member"
                                            optionText={(record) => `${record.first_name ?? ''} ${record.last_name ?? ''}`.trim() || record.account_number}
                                            optionValue="member_id"
                                            fullWidth
                                            variant="outlined"
                                            validate={required()}
                                        />
                                    </ReferenceInput>
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <DateInput source="declaration_date" label="Declaration Date" fullWidth variant="outlined" validate={required()} />
                                </Grid>
                            </Grid>

                            {/* Row 2: Amount Per Share and Net Amount */}
                            <Grid container spacing={2} alignItems="flex-start" sx={{ mb: 2 }}>
                                <Grid item xs={12} md={6}>
                                    <NumberInput source="amount_per_share" label="Amount Per Share" fullWidth variant="outlined" validate={required()} />
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <NumberInput source="net_amount" label="Net Amount" fullWidth variant="outlined" validate={required()} />
                                </Grid>
                            </Grid>

                            {/* Row 3: Fiscal Year and Payment Date */}
                            <Grid container spacing={2} alignItems="flex-start" sx={{ mb: 2 }}>
                                <Grid item xs={12} md={6}>
                                    <NumberInput source="fiscal_year" label="Fiscal Year" fullWidth variant="outlined" validate={required()} />
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <DateInput source="payment_date" label="Payment Date" fullWidth variant="outlined" />
                                </Grid>
                            </Grid>

                            {/* Row 4: Notes (full width) */}
                            <Grid container spacing={2} alignItems="flex-start">
                                <Grid item xs={12}>
                                    <TextInput source="notes" label="Notes" multiline rows={3} fullWidth variant="outlined" />
                                </Grid>
                            </Grid>
                        </SimpleForm>
                    </CardContent>
                </Card>
            </Box>
        </Create>
    );
};