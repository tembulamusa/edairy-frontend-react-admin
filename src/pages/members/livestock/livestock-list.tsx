import { List, DataTable, EditButton, DeleteButton, useResourceContext, CreateButton, ShowButton, TextInput, ReferenceField, TextField, DateField, ReferenceInput, SelectInput } from 'react-admin';
import { Box, Card, CardContent, Typography, Stack, Tooltip } from '@mui/material';
import Grid from '@mui/material/Grid';
import { useCan } from '../../../components/permissions/user-can';

const LivestockFilters = [
    <TextInput source="tag_number" label="Tag Number" alwaysOn />,
    <ReferenceInput source="livestock_category_id" reference="livestock-categories" alwaysOn>
        <SelectInput optionText="category_name" label="Category" />
    </ReferenceInput>,
    <ReferenceInput source="livestock_breed_id" reference="livestock-breeds" alwaysOn>
        <SelectInput optionText="breed_name" label="Breed" />
    </ReferenceInput>,
    <SelectInput source="gender" choices={[
        { id: 'male', name: 'Male' },
        { id: 'female', name: 'Female' },
    ]} label="Gender" />,
];

export const LivestockList = () => {
    const can = useCan();
    const resource = useResourceContext() ?? "livestock";
    const canEdit = can(resource, "update");
    const canDelete = can(resource, "delete");
    const canCreate = can(resource, "create");

    return (
        <Box sx={{ p: 2 }}>
            <Card sx={{ borderRadius: 3, boxShadow: 3, overflow: "hidden" }}>
                <CardContent>
                    <Grid container spacing={2} alignItems="center" justifyContent="space-between" mb={2}>
                        <Grid size={{ xs: 12, md: 6 }}>
                            <Typography variant="h5" fontWeight="bold">Livestock</Typography>
                            <Typography variant="body2" color="text.secondary">Manage individual livestock animals</Typography>
                        </Grid>
                        <Grid size={{ xs: 12, md: "auto" }}>
                            {canCreate && (
                                <CreateButton variant="contained" sx={{ backgroundColor: 'primary.main', color: 'white', '&:hover': { backgroundColor: 'primary.dark' } }} />
                            )}
                        </Grid>
                    </Grid>
                    <List title={false} filters={LivestockFilters} actions={false}>
                        <DataTable rowClick="show" sx={{ '& .RaDataTable-headerCell': { fontWeight: "bold", backgroundColor: "#f5f5f5" } }}>
                            <DataTable.Col source="tag_number" label="Tag Number" />
                            <ReferenceField source="livestock_category_id" reference="livestock-categories" label="Category">
                                <TextField source="category_name" />
                            </ReferenceField>
                            <ReferenceField source="livestock_breed_id" reference="livestock-breeds" label="Breed" emptyText="N/A">
                                <TextField source="breed_name" />
                            </ReferenceField>
                            <DateField source="date_of_birth" label="DOB" />
                            <DataTable.Col source="gender" label="Gender" />
                            <DataTable.Col label="Actions">
                                <Stack direction="row" spacing={1} alignItems="center">
                                    <Tooltip title="View Details"><span><ShowButton label={false} sx={{ minWidth: 10 }} /></span></Tooltip>
                                    {canEdit && <Tooltip title="Edit Record"><span><EditButton label={false} sx={{ minWidth: 10 }} /></span></Tooltip>}
                                    {canDelete && (
                                        <Tooltip title="Delete Record">
                                            <span><DeleteButton label={false} mutationMode="pessimistic" confirmTitle="⚠️ Confirm deletion" confirmContent="This will remove the livestock record." /></span>
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