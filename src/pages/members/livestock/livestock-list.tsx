import { List, DataTable, EditButton, DeleteButton, useResourceContext, CreateButton, ShowButton, TextInput, DateField, ReferenceInput, SelectInput } from 'react-admin';
import { Box, Card, CardContent, Typography, Stack, Tooltip } from '@mui/material';
import Grid from '@mui/material/Grid';
import { useCan } from '../../../components/permissions/user-can';
import { ListBreadcrumbs } from '../../../../ListBreadcrumbs';

const LivestockFilters = [
    <TextInput source="tag_no" label="Tag Number" alwaysOn />,
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
    <SelectInput source="status" choices={[
        { id: 'active', name: 'Active' },
        { id: 'slaughtered', name: 'Slaughtered' },
        { id: 'dead', name: 'Dead' },
    ]} label="Status" />,
];

export const LivestockList = () => {
    const can = useCan();
    const resource = useResourceContext() ?? "livestocks";
    const canEdit = can(resource, "update");
    const canDelete = can(resource, "delete");
    const canCreate = can(resource, "create");

    return (
        <Box sx={{ p: 2 }}>
            <Grid container spacing={2} alignItems="center" justifyContent="space-between" mb={1}>
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
            <ListBreadcrumbs />
            <Card sx={{ borderRadius: 3, boxShadow: 3, overflow: "hidden" }}>
                <CardContent>
                    <List title={false} filters={LivestockFilters} actions={false}>
                        <DataTable rowClick="show" sx={{ '& .RaDataTable-headerCell': { fontWeight: "bold", backgroundColor: "#f5f5f5" } }}>
                            <DataTable.Col source="tag_no" label="Tag Number" />
                            <DataTable.Col source="category_name" label="Category" />
                            <DataTable.Col source="breed_name" label="Breed" />
                            <DateField source="date_of_birth" label="DOB" />
                            <DataTable.Col source="gender" label="Gender" />
                            <DataTable.Col source="status" label="Status" sx={{ textTransform: 'capitalize' }} />
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