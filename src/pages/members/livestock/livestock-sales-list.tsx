import { List, DataTable, EditButton, DeleteButton, useResourceContext, CreateButton, ShowButton, TextInput, DateField, ReferenceField, TextField, SelectInput, ReferenceInput } from 'react-admin';
import { Box, Card, CardContent, Typography, Stack, Tooltip } from '@mui/material';
import Grid from '@mui/material/Grid';
import { useCan } from '../../../components/permissions/user-can';
import { ListBreadcrumbs } from '../../../../ListBreadcrumbs';

const LivestockSaleFilters = [
    <ReferenceInput source="livestock_id" reference="livestocks" alwaysOn>
        <SelectInput optionText="tag_no" label="Livestock Tag No" />
    </ReferenceInput>,
    <ReferenceInput source="customer_id" reference="customers" alwaysOn>
        <SelectInput optionText="name" label="Customer" />
    </ReferenceInput>,
    <SelectInput source="payment_status" choices={[
        { id: 'pending', name: 'Pending' },
        { id: 'paid', name: 'Paid' },
        { id: 'partial', name: 'Partial' },
    ]} label="Payment Status" />,
];

export const LivestockSalesList = () => {
    const can = useCan();
    const resource = useResourceContext() ?? "livestock-sales";
    const canEdit = can(resource, "update");
    const canDelete = can(resource, "delete");
    const canCreate = can(resource, "create");

    return (
        <Box sx={{ p: 2 }}>
            <Grid container spacing={2} alignItems="center" justifyContent="space-between" mb={1}>
                <Grid size={{ xs: 12, md: 6 }}>
                    <Typography variant="h5" fontWeight="bold">Livestock Sales</Typography>
                    <Typography variant="body2" color="text.secondary">Manage records of livestock sales</Typography>
                </Grid>
                <Grid size={{ xs: 12, md: "auto" }}>
                    {canCreate && (
                        <CreateButton variant="contained" sx={{ backgroundColor: 'primary.main', color: 'white', '&:hover': { backgroundColor: 'primary.dark' } }} />
                    )}
                </Grid>
            </Grid>
            <ListBreadcrumbs />
            <Card sx={{ borderRadius: 3, boxShadow: 3, overflow: "hidden" }}>
                <CardContent>
                    <List title={false} filters={LivestockSaleFilters} actions={false}>
                        <DataTable rowClick="show" sx={{ '& .RaDataTable-headerCell': { fontWeight: "bold", backgroundColor: "#f5f5f5" } }}>
                            <ReferenceField source="livestock_id" reference="livestocks" label="Livestock">
                                <TextField source="tag_no" />
                            </ReferenceField>
                            <ReferenceField source="customer_id" reference="customers" label="Customer">
                                <TextField source="name" />
                            </ReferenceField>
                            <DateField source="sale_date" label="Sale Date" />
                            <DataTable.NumberCol source="quantity" label="Qty" />
                            <DataTable.NumberCol source="sale_price" label="Sale Price" options={{ style: 'currency', currency: 'USD' }} />
                            <DataTable.Col source="payment_status" label="Payment Status" sx={{ textTransform: 'capitalize' }} />
                            <DataTable.Col label="Actions">
                                <Stack direction="row" spacing={1} alignItems="center">
                                    <Tooltip title="View Details"><span><ShowButton label={false} sx={{ minWidth: 36 }} /></span></Tooltip>
                                    {canEdit && <Tooltip title="Edit Record"><span><EditButton label={false} sx={{ minWidth: 36 }} /></span></Tooltip>}
                                    {canDelete && (
                                        <Tooltip title="Delete Record">
                                            <span><DeleteButton label={false} mutationMode="pessimistic" confirmTitle="⚠️ Confirm deletion" confirmContent="This will remove the sale record." sx={{ minWidth: 36 }} /></span>
                                        </Tooltip>
                                    )}
                                </Stack>
                            </DataTable.Col>
                        </DataTable>
                    </List>
                </CardContent>
            </Card>
        </Box>
    );
};