import * as React from 'react';
import {
    Create,
    SimpleForm,
    TextInput,
    SelectInput,
    NumberInput,
    DateInput,
    required,
    minValue,
    Toolbar,
    SaveButton,
    useNotify,
    useRedirect,
} from 'react-admin';
import { Card, CardContent, Typography, Divider, Box, Button } from '@mui/material';
import Grid from '@mui/material/Grid';
import { ListBreadcrumbs } from '../../../../ListBreadcrumbs';

const CALCULATION_TYPE_CHOICES = [
    { id: 'PER_SHARE', name: 'Per share' },
    { id: 'PERCENTAGE', name: 'Percentage' },
    { id: 'FIXED', name: 'Fixed' },
] as const;

const DividendDeclarationCreateToolbar = () => {
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
                            notify('Dividend declared successfully', { type: 'success' });
                            redirect('create', 'dividend-declarations');
                        },
                    }}
                />
            </Box>
            <Button
                variant="contained"
                sx={{ backgroundColor: 'grey.500', color: 'white', '&:hover': { backgroundColor: 'grey.700' } }}
                onClick={() => redirect('/dividend-declarations')}
            >
                Cancel
            </Button>
        </Toolbar>
    );
};

export const DividendDeclarationCreate = () => (
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
                    <Typography variant="h5" fontWeight="bold">Declare New Dividend</Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                        Define the fiscal year, period, calculation method, and total pool to distribute.
                    </Typography>
                    <Divider sx={{ mb: 4 }} />
                    <SimpleForm
                        toolbar={<DividendDeclarationCreateToolbar />}
                        sx={{
                            "& .RaSimpleForm-toolbar": { mt: 3, px: 0, backgroundColor: 'transparent' },
                            "& .MuiInputBase-root": { borderRadius: 2 },
                            width: '100%',
                        }}
                    >
                        <Grid container spacing={2} alignItems="flex-start">
                            <Grid item xs={12} md={6}>
                                <NumberInput source="fiscal_year" label="Fiscal Year" validate={required()} fullWidth variant="outlined" />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <TextInput source="period" label="Period" validate={required()} fullWidth variant="outlined" />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <SelectInput
                                    source="calculation_type"
                                    label="Calculation Type"
                                    choices={CALCULATION_TYPE_CHOICES}
                                    optionText="name"
                                    optionValue="id"
                                    defaultValue="PER_SHARE"
                                    validate={required()}
                                    fullWidth
                                    variant="outlined"
                                />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <NumberInput
                                    source="total_pool"
                                    label="Total Pool"
                                    validate={[required(), minValue(0, 'Total pool cannot be negative')]}
                                    min={0}
                                    fullWidth
                                    variant="outlined"
                                />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <NumberInput source="rate_per_share" label="Rate Per Share" validate={required()} fullWidth variant="outlined" />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <DateInput source="declaration_date" label="Declaration Date" validate={required()} fullWidth variant="outlined" />
                            </Grid>
                            <Grid item xs={12}>
                                <TextInput source="description" label="Notes" multiline rows={3} fullWidth variant="outlined" />
                            </Grid>
                        </Grid>
                    </SimpleForm>
                </CardContent>
            </Card>
        </Box>
    </Create>
);