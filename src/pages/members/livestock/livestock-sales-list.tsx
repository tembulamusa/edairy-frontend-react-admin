import { List, DataTable, EditButton, DeleteButton, useResourceContext, CreateButton, ShowButton, TextInput, DateField, ReferenceField, TextField, SelectInput } from 'react-admin';
import { Box, Card, CardContent, Typography, Stack, Tooltip } from '@mui/material';
import Grid from '@mui/material/Grid';
import { useCan } from '../../../components/permissions/user-can';

const LivestockSaleFilters = [
    <TextInput source="livestock_id" label="Livestock ID" alwaysOn />,
    <ReferenceField source="customer_id" reference="customers" label="Customer" alwaysOn>
        <TextInput source="customer_name" />
    </ReferenceField>,
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
            <Card sx={{ borderRadius: 3, boxShadow: 3, overflow: "hidden" }}>
                <CardContent>
                    <Grid container spacing={2} alignItems="center" justifyContent="space-between" mb={2}>
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
                    <List title={false} filters={LivestockSaleFilters} actions={false}>
                        <DataTable rowClick="show" sx={{ '& .RaDataTable-headerCell': { fontWeight: "bold", backgroundColor: "#f5f5f5" } }}>
                            <ReferenceField source="livestock_id" reference="livestock" label="Livestock">
                                <TextField source="tag_number" />
                            </ReferenceField>
                            <ReferenceField source="customer_id" reference="customers" label="Customer">
                                <TextField source="customer_name" />
                            </ReferenceField>
                            <DateField source="sale_date" label="Sale Date" />
                            <DataTable.NumberCol source="quantity" label="Qty" />
                            <DataTable.NumberCol source="sale_price" label="Sale Price" options={{ style: 'currency', currency: 'USD' }} />
                            <DataTable.Col source="payment_status" label="Payment Status" />
                            <DataTable.Col label="Actions">
                                <Stack direction="row" spacing={1} alignItems="center">
                                    <Tooltip title="View Details"><span><ShowButton label={false} sx={{ minWidth: 10 }} /></span></Tooltip>
                                    {canEdit && <Tooltip title="Edit Record"><span><EditButton label={false} sx={{ minWidth: 10 }} /></span></Tooltip>}
                                    {canDelete && (
                                        <Tooltip title="Delete Record">
                                            <span><DeleteButton label={false} mutationMode="pessimistic" confirmTitle="⚠️ Confirm deletion" confirmContent="This will remove the sale record." /></span>
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