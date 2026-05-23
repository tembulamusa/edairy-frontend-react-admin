import { List, DataTable, EditButton, DeleteButton, useResourceContext, CreateButton, ShowButton, TextInput, DateField, ReferenceField, TextField, ReferenceInput, SelectInput } from 'react-admin';
import { Box, Card, CardContent, Typography, Stack, Tooltip } from '@mui/material';
import Grid from '@mui/material/Grid';
import { useCan } from '../../../components/permissions/user-can';
import { ListBreadcrumbs } from '../../../../ListBreadcrumbs';

const HealthRecordFilters = [
    <ReferenceInput source="livestock_id" reference="livestocks" alwaysOn>
        <SelectInput optionText="tag_no" label="Livestock Tag No" />
    </ReferenceInput>,
    <TextInput source="record_type" label="Type" />,
];

export const LivestockHealthRecordsList = () => {
    const can = useCan();
    const resource = useResourceContext() ?? "livestock-health-records";
    const canEdit = can(resource, "update");
    const canDelete = can(resource, "delete");
    const canCreate = can(resource, "create");

    return (
        <Box sx={{ p: 2 }}>
            <Grid container spacing={2} alignItems="center" justifyContent="space-between" mb={1}>
                <Grid size={{ xs: 12, md: 6 }}>
                    <Typography variant="h5" fontWeight="bold">Health Records</Typography>
                    <Typography variant="body2" color="text.secondary">Track medical history and vaccinations</Typography>
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
                    <List title={false} filters={HealthRecordFilters} actions={false}>
                        <DataTable rowClick="show" sx={{ '& .RaDataTable-headerCell': { fontWeight: "bold", backgroundColor: "#f5f5f5" } }}>
                            <DataTable.Col source="livestock_tag_no" label="Livestock Tag No" />
                            <DataTable.Col source="record_type" label="Record Type" sx={{ textTransform: 'capitalize' }} />
                            <DataTable.Col source="diagnosis" label="Diagnosis" />
                            <DataTable.Col source="medication" label="Medication" />
                            <DataTable.Col source="dosage" label="Dosage" />
                            <DateField source="treatment_date" label="Treatment Date" />
                            <DateField source="next_visit_date" label="Next Visit Date" />
                            <DataTable.Col source="veterinarian" label="Date" />
                            <DataTable.Col source="notes" label="Veterinarian" />
                            <DataTable.Col label="Actions">
                                <Stack direction="row" spacing={1} alignItems="center">
                                    <Tooltip title="View Details"><span><ShowButton label={false} sx={{ minWidth: 36 }} /></span></Tooltip>
                                    {canEdit && <Tooltip title="Edit Record"><span><EditButton label={false} sx={{ minWidth: 36 }} /></span></Tooltip>}
                                    {canDelete && (
                                        <Tooltip title="Delete Record">
                                            <span>
                                                <DeleteButton label={false} mutationMode="pessimistic" confirmTitle="⚠️ Confirm deletion" confirmContent="This will remove the health record." sx={{ minWidth: 36 }} />
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