import * as React from 'react';
import {
    Edit,
    SimpleForm,
    TextInput,
    required,
    Toolbar,
    SaveButton,
    useRedirect,
    ReferenceInput,
    SelectInput,
    DateInput,
    NumberInput,
} from 'react-admin';
import { Card, CardContent, Typography, Divider, Box, Button } from '@mui/material';
import Grid from '@mui/material/Grid';
import { ListBreadcrumbs } from '../../../../ListBreadcrumbs';

const LivestockSaleEditToolbar = () => {
    const redirect = useRedirect();
    return (
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', backgroundColor: 'transparent', px: 0 }}>
            <SaveButton label="Save Changes" variant="contained" />
            <Button
                variant="contained"
                sx={{
                    backgroundColor: 'grey.500',
                    color: 'white',
                    '&:hover': { backgroundColor: 'grey.700' }
                }}
                onClick={() => redirect('/livestock-sales')}
            >
                Cancel
            </Button>
        </Toolbar>
    );
};

export const LivestockSaleEdit = () => (
    <Edit
        title={false}
        sx={{
            "& .RaEdit-main": {
                display: "flex",
                justifyContent: "center",
                padding: 2,
            },
        }}
    >
        <Box sx={{ width: '100%', maxWidth: 800 }}>
            <ListBreadcrumbs />
            <Card elevation={0} sx={{ borderRadius: 3, width: '100%', overflow: "hidden" }}>
                <CardContent sx={{ p: 4 }}>
                    <Grid container spacing={2} alignItems="center" justifyContent="space-between" mb={2}>
                        <Grid size={{ xs: 12, md: 12 }}>
                            <Typography variant="h5" fontWeight="bold">Edit Livestock Sale</Typography>
                            <Typography variant="body2" color="text.secondary">Modify the livestock sale record.</Typography>
                        </Grid>
                    </Grid>
                    <Divider sx={{ mb: 4 }} />
                    <SimpleForm toolbar={<LivestockSaleEditToolbar />} sx={{ "& .RaSimpleForm-toolbar": { mt: 3, px: 0, backgroundColor: 'transparent' }, "& .MuiInputBase-root": { borderRadius: 2 }, width: '100%' }}>
                        <ReferenceInput source="livestock_id" reference="livestocks">
                            <SelectInput optionText="tag_no" label="Livestock" fullWidth variant="outlined" validate={required()} />
                        </ReferenceInput>
                        <ReferenceInput source="customer_id" reference="customers">
                            <SelectInput optionText="name" label="Customer" fullWidth variant="outlined" validate={required()} />
                        </ReferenceInput>
                        <DateInput source="sale_date" label="Sale Date" fullWidth variant="outlined" validate={required()} />
                        <NumberInput source="quantity" label="Quantity" fullWidth variant="outlined" validate={required()} />
                        <NumberInput source="sale_price" label="Sale Price" fullWidth variant="outlined" validate={required()} />
                        <SelectInput source="payment_status" choices={[
                            { id: 'pending', name: 'Pending' },
                            { id: 'paid', name: 'Paid' },
                            { id: 'partial', name: 'Partial' },
                        ]} label="Payment Status" fullWidth variant="outlined" validate={required()} />
                        <TextInput source="remarks" label="Remarks" fullWidth variant="outlined" multiline rows={3} />
                    </SimpleForm>
                </CardContent>
            </Card>
        </Box>
    </Edit>
);