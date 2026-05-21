import * as React from 'react';
import {
    Create,
    SimpleForm,
    ReferenceInput,
    SelectInput,
    NumberInput,
    DateInput,
    TextInput,
    required,
    Toolbar,
    SaveButton,
    useNotify,
    useRedirect,
} from 'react-admin';
import { Card, CardContent, Typography, Divider, Box, Button } from '@mui/material';
import Grid from '@mui/material/Grid';
import { ListBreadcrumbs } from '../../../../ListBreadcrumbs';

const SharePaymentCreateToolbar = () => {
    const notify = useNotify();
    const redirect = useRedirect();

    return (
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', backgroundColor: 'transparent', px: 0 }}>
            <Box sx={{ display: 'flex', gap: 1 }}>
                <SaveButton label="Save" variant="contained" redirect="list" />
                <SaveButton
                    label="Save and Add New"
                    variant="contained"
                    mutationOptions={{
                        onSuccess: () => {
                            notify('Share payment recorded successfully', { type: 'success' });
                            redirect('create', 'share-payments');
                        },
                    }}
                />
            </Box>
            <Button
                variant="contained"
                sx={{ backgroundColor: 'grey.500', color: 'white', '&:hover': { backgroundColor: 'grey.700' } }}
                onClick={() => redirect('/share-payments')}
            >
                Cancel
            </Button>
        </Toolbar>
    );
};

export const SharePaymentCreate = () => (
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
                    <Typography variant="h5" fontWeight="bold">New Share Payment</Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                        Record a payment for member share purchases.
                    </Typography>
                    <Divider sx={{ mb: 4 }} />
                    <SimpleForm
                        toolbar={<SharePaymentCreateToolbar />}
                        sx={{
                            "& .RaSimpleForm-toolbar": { mt: 3, px: 0, backgroundColor: 'transparent' },
                            "& .MuiInputBase-root": { borderRadius: 2 },
                            width: '100%',
                        }}
                    >
                        <Grid container spacing={2} alignItems="flex-start">
                            <Grid item xs={12} md={6}>
                                <ReferenceInput source="member_id" reference="share-accounts">
                                    <SelectInput
                                        label="Share Account"
                                        optionText={(record) => `${record?.member_no ?? record.id} (${record.account_number})`}
                                        fullWidth
                                        variant="outlined"
                                        validate={required()}
                                    />
                                </ReferenceInput>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <DateInput source="transaction_date" label="Transaction Date" validate={required()} fullWidth variant="outlined" />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <NumberInput source="amount_paid" label="Amount Paid" validate={required()} fullWidth variant="outlined" />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <SelectInput
                                    source="payment_mode"
                                    choices={[
                                        { id: 'CASH', name: 'Cash' },
                                        { id: 'BANK', name: 'Bank Transfer' },
                                        { id: 'MOBILE_MONEY', name: 'Mobile Money' },
                                    ]}
                                    fullWidth
                                    variant="outlined"
                                    validate={required()}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextInput source="reference_number" label="Transaction Reference" fullWidth variant="outlined" />
                            </Grid>
                        </Grid>
                    </SimpleForm>
                </CardContent>
            </Card>
        </Box>
    </Create>
);