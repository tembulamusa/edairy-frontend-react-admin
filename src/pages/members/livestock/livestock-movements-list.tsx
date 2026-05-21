import { List, DataTable, EditButton, DeleteButton, useResourceContext, CreateButton, ShowButton, TextInput, DateField, ReferenceField, TextField, SelectInput } from 'react-admin';
import { Box, Card, CardContent, Typography, Stack, Tooltip } from '@mui/material';
import Grid from '@mui/material/Grid';
import { useCan } from '../../../components/permissions/user-can';

const LivestockMovementFilters = [
    <TextInput source="livestock_id" label="Livestock ID" alwaysOn />,
    <TextInput source="to_location" label="To Location" />,
    <SelectInput source="movement_type" choices={[
        { id: 'transfer', name: 'Transfer' },
        { id: 'sale', name: 'Sale' },
        { id: 'grazing', name: 'Grazing' },
        { id: 'medical', name: 'Medical' },
        { id: 'show', name: 'Show' },
    ]} label="Movement Type" />,
];

export const LivestockMovementsList = () => {
    const can = useCan();
    const resource = useResourceContext() ?? "livestock-movements";
    const canEdit = can(resource, "update");
    const canDelete = can(resource, "delete");
    const canCreate = can(resource, "create");

    return (
        <Box sx={{ p: 2 }}>
            <Card sx={{ borderRadius: 3, boxShadow: 3, overflow: "hidden" }}>
                <CardContent>
                    <Grid container spacing={2} alignItems="center" justifyContent="space-between" mb={2}>
                        <Grid size={{ xs: 12, md: 6 }}>
                            <Typography variant="h5" fontWeight="bold">Livestock Movements</Typography>
                            <Typography variant="body2" color="text.secondary">Track location changes and movement types</Typography>
                        </Grid>
                        <Grid size={{ xs: 12, md: "auto" }}>
                            {canCreate && (
                                <CreateButton variant="contained" sx={{ backgroundColor: 'primary.main', color: 'white', '&:hover': { backgroundColor: 'primary.dark' } }} />
                            )}
                        </Grid>
                    </Grid>
                    <List title={false} filters={LivestockMovementFilters} actions={false}>
                        <DataTable rowClick="show" sx={{ '& .RaDataTable-headerCell': { fontWeight: "bold", backgroundColor: "#f5f5f5" } }}>
                            <ReferenceField source="livestock_id" reference="livestock" label="Livestock">
                                <TextField source="tag_number" />
                            </ReferenceField>
                            <DataTable.Col source="from_location" label="From" />
                            <DataTable.Col source="to_location" label="To" />
                            <DateField source="movement_date" label="Date" />
                            <DataTable.Col source="movement_type" label="Type" />
                            <DataTable.Col source="transporter" label="Transporter" />
                            <DataTable.Col label="Actions">
                                <Stack direction="row" spacing={1} alignItems="center">
                                    <Tooltip title="View Details"><span><ShowButton label={false} sx={{ minWidth: 10 }} /></span></Tooltip>
                                    {canEdit && <Tooltip title="Edit Record"><span><EditButton label={false} sx={{ minWidth: 10 }} /></span></Tooltip>}
                                    {canDelete && (
                                        <Tooltip title="Delete Record">
                                            <span><DeleteButton label={false} mutationMode="pessimistic" confirmTitle="⚠️ Confirm deletion" confirmContent="This will remove the movement record." /></span>
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