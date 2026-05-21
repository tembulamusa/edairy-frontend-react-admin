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
import { Card, CardContent, Typography, Divider, Box, Button } from '@mui/material';
import Grid from '@mui/material/Grid';
import { ListBreadcrumbs } from '../../../../ListBreadcrumbs';

const ShareTransferCreateToolbar = () => {
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
                            notify('Share transfer recorded successfully', { type: 'success' });
                            redirect('create', 'share-transfers');
                        },
                    }}
                />
            </Box>
            <Button
                variant="contained"
                sx={{ backgroundColor: 'grey.500', color: 'white', '&:hover': { backgroundColor: 'grey.700' } }}
                onClick={() => redirect('/share-transfers')}
            >
                Cancel
            </Button>
        </Toolbar>
    );
};

export const ShareTransferCreate = () => (
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
                    <Typography variant="h5" fontWeight="bold">New Share Transfer</Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                        Transfer share units between member accounts.
                    </Typography>
                    <Divider sx={{ mb: 4 }} />
                    <SimpleForm
                        toolbar={<ShareTransferCreateToolbar />}
                        sx={{
                            "& .RaSimpleForm-toolbar": { mt: 3, px: 0, backgroundColor: 'transparent' },
                            "& .MuiInputBase-root": { borderRadius: 2 },
                            width: '100%',
                        }}
                    >
                        <Grid container spacing={2} alignItems="flex-start">
                            <Grid item xs={12} md={6}>
                                <ReferenceInput source="from_account_id" reference="share-accounts">
                                    <SelectInput label="Source Account" optionText="account_number" fullWidth variant="outlined" validate={required()} />
                                </ReferenceInput>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <ReferenceInput source="to_account_id" reference="share-accounts">
                                    <SelectInput label="Destination Account" optionText="account_number" fullWidth variant="outlined" validate={required()} />
                                </ReferenceInput>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <NumberInput source="units" label="Units to Transfer" validate={required()} fullWidth variant="outlined" />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <DateInput source="transfer_date" label="Transfer Date" validate={required()} fullWidth variant="outlined" />
                            </Grid>
                        </Grid>
                    </SimpleForm>
                </CardContent>
            </Card>
        </Box>
    </Create>
);