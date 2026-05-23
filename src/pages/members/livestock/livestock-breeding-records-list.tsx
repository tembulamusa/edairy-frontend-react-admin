import { List, DataTable, EditButton, DeleteButton, useResourceContext, CreateButton, ShowButton, TextInput, DateField, ReferenceField, TextField, ReferenceInput, SelectInput } from 'react-admin';
import { Box, Card, CardContent, Typography, Stack, Tooltip } from '@mui/material';
import Grid from '@mui/material/Grid';
import { useCan } from '../../../components/permissions/user-can';
import { ListBreadcrumbs } from '../../../../ListBreadcrumbs';

const BreedingRecordFilters = [
    <ReferenceInput source="livestock_id" reference="livestocks" alwaysOn>
        <SelectInput optionText="tag_no" label="Livestock Tag No" />
    </ReferenceInput>,
    <SelectInput source="breeding_type" choices={[
        { id: 'natural', name: 'Natural' },
        { id: 'ai', name: 'AI' },
    ]} label="Breeding Type" alwaysOn />,
];

export const LivestockBreedingRecordsList = () => {
    const can = useCan();
    const resource = useResourceContext() ?? "livestock-breeding-records";
    const canEdit = can(resource, "update");
    const canDelete = can(resource, "delete");
    const canCreate = can(resource, "create");

    return (
        <Box sx={{ p: 2 }}>
            <Grid container spacing={2} alignItems="center" justifyContent="space-between" mb={1}>
                <Grid size={{ xs: 12, md: 6 }}>
                    <Typography variant="h5" fontWeight="bold">Breeding Records</Typography>
                    <Typography variant="body2" color="text.secondary">Track breeding activities and outcomes</Typography>
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
                    <List title={false} filters={BreedingRecordFilters} actions={false}>
                        <DataTable rowClick="show" sx={{ '& .RaDataTable-headerCell': { fontWeight: "bold", backgroundColor: "#f5f5f5" } }}>
                            <ReferenceField source="livestock_id" reference="livestocks" label="Livestock">
                                <TextField source="tag_no" />
                            </ReferenceField>
                            <DateField source="breeding_date" label="Breeding Date" />
                            <DataTable.Col source="breeding_type" label="Type" sx={{ textTransform: 'capitalize' }} />
                            <ReferenceField source="sire_id" reference="livestocks" label="Sire" emptyText="N/A">
                                <TextField source="tag_no" />
                            </ReferenceField>
                            <ReferenceField source="dam_id" reference="livestocks" label="Dam" emptyText="N/A">
                                <TextField source="tag_no" />
                            </ReferenceField>
                            <DateField source="expected_calving_date" label="Expected Calving" />
                            <DataTable.Col source="result" label="Result" />
                            <DataTable.Col label="Actions">
                                <Stack direction="row" spacing={1} alignItems="center">
                                    <Tooltip title="View Details"><span><ShowButton label={false} sx={{ minWidth: 36 }} /></span></Tooltip>
                                    {canEdit && <Tooltip title="Edit Record"><span><EditButton label={false} sx={{ minWidth: 36 }} /></span></Tooltip>}
                                    {canDelete && (
                                        <Tooltip title="Delete Record">
                                            <span><DeleteButton label={false} mutationMode="pessimistic" confirmTitle="⚠️ Confirm deletion" confirmContent="This will remove the breeding record." sx={{ minWidth: 36 }} /></span>
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