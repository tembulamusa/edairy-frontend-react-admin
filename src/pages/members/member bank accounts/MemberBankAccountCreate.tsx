import * as React from 'react';
import {
    Create,
    SimpleForm,
    TextInput,
    ReferenceInput,
    SelectInput,
    BooleanInput,
    required,
    Toolbar,
    SaveButton,
    useNotify,
    useRedirect,
} from 'react-admin';

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

const MemberBankAccountCreateToolbar = () => {
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
                            notify('Bank account added successfully', { type: 'success' });
                            redirect('create', 'member-bank-accounts');
                        },
                    }}
                />
            </Box>
            <Button
                variant="contained"
                sx={{ backgroundColor: 'grey.500', color: 'white', '&:hover': { backgroundColor: 'grey.700' } }}
                onClick={() => redirect('/member-bank-accounts')}
            >
                Cancel
            </Button>
        </Toolbar>
    );
};

export const MemberBankAccountCreate = () => {
    return (
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
                        <Grid container spacing={2} alignItems="center" justifyContent="space-between" mb={2}>
                            <Grid item xs={12} md={12}>
                                <Typography variant="h5" fontWeight="bold">Add Member Bank Account</Typography>
                                <Typography variant="body2" color="text.secondary">Register a new bank account for a specific member.</Typography>
                            </Grid>
                        </Grid>
                        <Divider sx={{ mb: 4 }} />
                        <SimpleForm
                            toolbar={<MemberBankAccountCreateToolbar />}
                            sx={{
                                "& .RaSimpleForm-toolbar": { mt: 3, px: 0, backgroundColor: 'transparent' },
                                "& .MuiInputBase-root": { borderRadius: 2 },
                                width: '100%',
                            }}
                        >
                            <Grid container spacing={2} alignItems="flex-start" sx={{ mb: 2 }}>
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
                                    <ReferenceInput source="bank_id" reference="banks">
                                        <SelectInput
                                            label="Bank"
                                            optionText={(record) => `${record?.bank_code ?? ''} - ${record?.bank_name ?? ''}`}
                                            fullWidth
                                            variant="outlined"
                                            validate={required()}
                                        />
                                    </ReferenceInput>
                                </Grid>
                            </Grid>
                            <Grid container spacing={2} alignItems="flex-start" sx={{ mb: 2 }}>
                                <Grid item xs={12} md={6}>
                                    <TextInput source="account_number" label="Account Number" validate={required()} fullWidth variant="outlined" />
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <TextInput source="account_name" label="Account Holder Name" validate={required()} fullWidth variant="outlined" />
                                </Grid>
                            </Grid>
                            <Grid container spacing={2} alignItems="flex-start">
                                <Grid item xs={12} md={6}>
                                    <TextInput source="branch_name" label="Branch Name" fullWidth variant="outlined" />
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <BooleanInput source="is_active" label="Account Active" defaultValue={true} />
                                </Grid>
                            </Grid>
                        </SimpleForm>
                    </CardContent>
                </Card>
            </Box>
        </Create>
    );
};