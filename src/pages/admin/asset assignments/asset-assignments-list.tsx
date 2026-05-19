import {
    ListBase,
    DataTable,
    DateField,
    EditButton,
    DeleteButton,
    FunctionField,
    TextInput,
    useResourceContext,
    FilterButton,
    ExportButton,
    CreateButton,
    Pagination
} from 'react-admin';
import { Box, Card, CardContent, Typography, Stack, Tooltip, Chip } from '@mui/material';
import Grid from '@mui/material/Grid';
import { useCan } from '../../../components/permissions/user-can';
import { ListBreadcrumbs } from '../../../../ListBreadcrumbs';

type AssetAssignmentRecord = {
    ReturnedAt?: string;
    returned_at?: string;
};

const formatReturnedAt = (returnedAt?: string) => {
    if (!returnedAt || returnedAt.startsWith("0001-01-01")) return "Not returned";
    return returnedAt;
};

const assignmentFilters = [
    <TextInput label="Search Asset" source="asset_name" alwaysOn />,
];

export const AssetAssignmentList = () => {
    const can = useCan();
    const resource = useResourceContext() ?? "asset-assignments";
    const canEdit = can(resource, "update");
    const canDelete = can(resource, "delete");
    const canCreate = can(resource, "create");

    return (
        <Box sx={{ p: 2 }}>
            <ListBase perPage={25} filters={assignmentFilters}>
                <ListBreadcrumbs />
                <Card
                    sx={{
                        borderRadius: 3,
                        boxShadow: 3,
                        overflow: "hidden",
                    }}
                >
                    <CardContent>
                        <Grid
                            container
                            spacing={2}
                            alignItems="center"
                            justifyContent="space-between"
                            mb={2}
                        >
                            <Grid size={{ xs: 12, md: 6 }}>
                                <Typography variant="h5" fontWeight="bold">Asset Assignments</Typography>
                                <Typography variant="body2" color="text.secondary">Manage all asset assignments records</Typography>
                            </Grid>

                            <Grid size={{ xs: 12, md: "auto" }}>
                                <Stack direction="row" spacing={1} alignItems="center">
                                    <FilterButton />
                                    {canCreate && (
                                        <CreateButton
                                            variant="contained"
                                            sx={{
                                                backgroundColor: 'primary.main',
                                                color: 'white',
                                                '&:hover': { backgroundColor: 'primary.dark' },
                                            }}
                                        />
                                    )}
                                    <ExportButton />
                                </Stack>
                            </Grid>
                        </Grid>

                        <DataTable
                            rowClick="show"
                            sx={{
                                '& .RaDataTable-headerCell': {
                                    fontWeight: "bold",
                                    backgroundColor: "#f5f5f5",
                                },
                            }}
                        >
                            <DataTable.Col source="asset_name" label="Asset Name" />
                            <DataTable.Col source="asset_code" label="Asset Code" />
                            <DataTable.Col source="assigned_to_name" label="Assigned To" />
                            <DataTable.Col source="assigned_at" label="Assigned At">
                                <DateField source="assigned_at" />
                            </DataTable.Col>
                            <DataTable.Col label="Returned At">
                                <FunctionField
                                    render={(record: AssetAssignmentRecord) =>
                                        formatReturnedAt(record?.returned_at)
                                    }
                                />
                            </DataTable.Col>
                            <DataTable.Col source="status" label="Status" />
                            <DataTable.Col label="Actions">
                                <Stack direction="row" spacing={1} alignItems="center">
                                    {canEdit && (
                                        <Tooltip title="Edit Record">
                                            <span>
                                                <EditButton
                                                    label={false}
                                                    sx={{
                                                        minWidth: 36,
                                                    }}
                                                />
                                            </span>
                                        </Tooltip>
                                    )}

                                    {canDelete && (
                                        <Tooltip title="Delete Record">
                                            <span>
                                                <DeleteButton
                                                    label={false}
                                                    confirmColor="error"
                                                    mutationMode="pessimistic"
                                                    confirmTitle="⚠️ Confirm deletion"
                                                    confirmContent="This will permanently remove the record."
                                                    confirmProps={{
                                                        sx: {
                                                            '& .RaConfirm-confirm-button': { color: 'error.main !important' },
                                                            '& .RaConfirm-title': { color: 'error.main !important' },
                                                            '& .RaConfirm-content': { color: 'error.main !important' },
                                                        },
                                                    }}
                                                    sx={{
                                                        minWidth: 36,
                                                    }}
                                                />
                                            </span>
                                        </Tooltip>
                                    )}
                                </Stack>
                            </DataTable.Col>
                        </DataTable>
                        <Pagination sx={{ mt: 2 }} />
                    </CardContent>
                </Card>
            </ListBase>
        </Box>
    );
};
