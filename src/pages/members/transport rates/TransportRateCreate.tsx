import * as React from 'react';
import {
    Create,
    SimpleForm,
    TextInput,
    NumberInput,
    ReferenceInput,
    SelectInput,
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

const TransportRateCreateToolbar = () => {
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
                            notify('Transport rate created successfully', { type: 'success' });
                            redirect('create', 'transport-rates');
                        },
                    }}
                />
            </Box>
            <Button
                variant="contained"
                sx={{ backgroundColor: 'grey.500', color: 'white', '&:hover': { backgroundColor: 'grey.700' } }}
                onClick={() => redirect('/transport-rates')}
            >
                Cancel
            </Button>
        </Toolbar>
    );
};

export const TransportRateCreate = () => (
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
                    <Typography variant="h5" fontWeight="bold">New Transport Rate</Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                        Define a transportation rate for a specific route.
                    </Typography>
                    <Divider sx={{ mb: 4 }} />
                    <SimpleForm
                        toolbar={<TransportRateCreateToolbar />}
                        sx={{
                            "& .RaSimpleForm-toolbar": { mt: 3, px: 0, backgroundColor: 'transparent' },
                            "& .MuiInputBase-root": { borderRadius: 2 },
                            width: '100%',
                        }}
                    >
                        <Grid container spacing={2} alignItems="flex-start">
                            <Grid item xs={12} md={6}>
                                <ReferenceInput source="route_id" reference="routes">
                                    <SelectInput label="Route" optionText="name" fullWidth variant="outlined" validate={required()} />
                                </ReferenceInput>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <ReferenceInput source="transporter_id" reference="transporters">
                                    <SelectInput label="Transporter" optionText="name" fullWidth variant="outlined" />
                                </ReferenceInput>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <ReferenceInput source="member_id" reference="members">
                                    <SelectInput label="Member" optionText={(record) => `${record.first_name ?? ''} ${record.last_name ?? ''} (${record.member_no})`.trim()} fullWidth variant="outlined" />
                                </ReferenceInput>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <NumberInput source="rate" label="Rate (per KG)" validate={required()} fullWidth variant="outlined" />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <DateInput source="effective_date" label="Effective Date" validate={required()} fullWidth variant="outlined" />
                            </Grid>
                        </Grid>
                    </SimpleForm>
                </CardContent>
            </Card>
        </Box>
    </Create>
);