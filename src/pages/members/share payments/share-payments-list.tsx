import { List, DataTable, DateField, EditButton, DeleteButton, useResourceContext, CreateButton, ShowButton, TextInput } from 'react-admin';
import { Box, Card, CardContent, Typography, Stack, Tooltip } from '@mui/material';
import Grid from '@mui/material/Grid';
import { useCan } from '../../../components/permissions/user-can';

const SharePaymentFilters = [
    <TextInput source="member_no" label="Member No" alwaysOn />,
    <TextInput source="receipt_no" label="Receipt No" alwaysOn />,
];

export const SharePaymentList = () => {
    const can = useCan();
    const resource = useResourceContext() ?? "share-payments";
    const canEdit = can(resource, "update");
    const canDelete = can(resource, "delete");
    const canCreate = can(resource, "create");

    return (
        <Box sx={{ p: 2 }}>
            <Card sx={{ borderRadius: 3, boxShadow: 3, overflow: "hidden" }}>
                <CardContent>
                    <Grid container spacing={2} alignItems="center" justifyContent="space-between" mb={2}>
                        <Grid size={{ xs: 12, md: 6 }}>
                            <Typography variant="h5" fontWeight="bold">Share Payments</Typography>
                            <Typography variant="body2" color="text.secondary">Manage all member share purchase payments</Typography>
                        </Grid>
                        <Grid size={{ xs: 12, md: "auto" }}>
                            {canCreate && (
                                <CreateButton variant="contained" sx={{ backgroundColor: 'primary.main', color: 'white', '&:hover': { backgroundColor: 'primary.dark' } }} />
                            )}
                        </Grid>
                    </Grid>
                    <List title={false} filters={SharePaymentFilters} actions={false}>
                        <DataTable rowClick="show" sx={{ '& .RaDataTable-headerCell': { fontWeight: "bold", backgroundColor: "#f5f5f5" } }}>
                            <DataTable.Col source="member_no" label="Member No" />
                            <DataTable.Col source="share_type_name" label="Share Type" />
                            <DataTable.NumberCol source="amount" label="Amount Paid" />
                            <DataTable.Col source="payment_date" label="Date">
                                <DateField source="payment_date" />
                            </DataTable.Col>
                            <DataTable.Col source="receipt_no" label="Receipt No" />
                            <DataTable.Col source="status" label="Status" />
                            <DataTable.Col label="Actions">
                                <Stack direction="row" spacing={1} alignItems="center">
                                    <Tooltip title="View Details"><span><ShowButton label={false} sx={{ minWidth: 10 }} /></span></Tooltip>
                                    {canEdit && <Tooltip title="Edit Record"><span><EditButton label={false} sx={{ minWidth: 10 }} /></span></Tooltip>}
                                    {canDelete && (
                                        <Tooltip title="Delete Record">
                                            <span>
                                                <DeleteButton label={false} mutationMode="pessimistic" confirmTitle="⚠️ Confirm deletion" confirmContent="This will permanently remove the payment record." />
                                            </span>
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