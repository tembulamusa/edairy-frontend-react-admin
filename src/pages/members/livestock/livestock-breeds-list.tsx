import { List, DataTable, EditButton, DeleteButton, useResourceContext, CreateButton, ShowButton, TextInput, ReferenceField, TextField, ReferenceInput, SelectInput } from 'react-admin';
import { Box, Card, CardContent, Typography, Stack, Tooltip } from '@mui/material';
import Grid from '@mui/material/Grid';
import { useCan } from '../../../components/permissions/user-can';

const LivestockBreedFilters = [
    <TextInput source="breed_name" label="Breed Name" alwaysOn />,
    <ReferenceInput source="livestock_category_id" reference="livestock-categories" alwaysOn>
        <SelectInput optionText="category_name" label="Category" />
    </ReferenceInput>,
];

export const LivestockBreedsList = () => {
    const can = useCan();
    const resource = useResourceContext() ?? "livestock-breeds";
    const canEdit = can(resource, "update");
    const canDelete = can(resource, "delete");
    const canCreate = can(resource, "create");

    return (
        <Box sx={{ p: 2 }}>
            <Card sx={{ borderRadius: 3, boxShadow: 3, overflow: "hidden" }}>
                <CardContent>
                    <Grid container spacing={2} alignItems="center" justifyContent="space-between" mb={2}>
                        <Grid size={{ xs: 12, md: 6 }}>
                            <Typography variant="h5" fontWeight="bold">Livestock Breeds</Typography>
                            <Typography variant="body2" color="text.secondary">Registry of specific breeds within categories</Typography>
                        </Grid>
                        <Grid size={{ xs: 12, md: "auto" }}>
                            {canCreate && (
                                <CreateButton variant="contained" sx={{ backgroundColor: 'primary.main', color: 'white', '&:hover': { backgroundColor: 'primary.dark' } }} />
                            )}
                        </Grid>
                    </Grid>
                    <List title={false} filters={LivestockBreedFilters} actions={false}>
                        <DataTable rowClick="show" sx={{ '& .RaDataTable-headerCell': { fontWeight: "bold", backgroundColor: "#f5f5f5" } }}>
                            <DataTable.Col source="breed_name" label="Breed" />
                            <ReferenceField source="livestock_category_id" reference="livestock-categories" label="Category">
                                <TextField source="category_name" />
                            </ReferenceField>
                            <DataTable.Col source="description" label="Description" />
                            <DataTable.Col label="Actions">
                                <Stack direction="row" spacing={1} alignItems="center">
                                    <Tooltip title="View Details"><span><ShowButton label={false} sx={{ minWidth: 10 }} /></span></Tooltip>
                                    {canEdit && <Tooltip title="Edit Record"><span><EditButton label={false} sx={{ minWidth: 10 }} /></span></Tooltip>}
                                    {canDelete && (
                                        <Tooltip title="Delete Record">
                                            <span>
                                                <DeleteButton label={false} mutationMode="pessimistic" confirmTitle="⚠️ Confirm deletion" confirmContent="This will remove the breed record." />
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