import { List, DataTable, DateField, EditButton, DeleteButton, TextInput, required, useResourceContext } from 'react-admin';
import { Box, Card, CardContent, Typography, Stack, Tooltip } from '@mui/material';
import Grid from '@mui/material/Grid';
import { CreateButton } from '../../../components/forms/FormUtils';
import { useCan } from '../../../components/permissions/user-can';

export const AssetDepreciationEntryList = () => {
    const can = useCan();
    const resource = useResourceContext() ?? "asset-depreciation-entries";
    const canEdit = can(resource, "update");
    const canDelete = can(resource, "delete");
    const canCreate = can(resource, "create");

    return (
        <Box sx={{ p: 2 }}>
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
                            <Typography
                                variant="h5"
                                fontWeight="bold"
                            >
                                Asset Depreciation Entries
                            </Typography>

                            <Typography
                                variant="body2"
                                color="text.secondary"
                            >
                                Manage all asset depreciation entries records
                            </Typography>
                        </Grid>

                        <Grid size={{ xs: 12, md: "auto" }}>
                            {canCreate && (
                                <CreateButton
                                    resource="asset-depreciation-entries"
                                    title="Asset Depreciation Entry"
                                    variant="contained"
                                    sx={{
                                        backgroundColor: 'primary.main',
                                        color: 'white',
                                        '&:hover': {
                                            backgroundColor: 'primary.dark',
                                        },
                                    }}
                                >
                                    <TextInput source="asset_id" validate={required()} fullWidth />
                                    <TextInput source="depreciation_amount" validate={required()} fullWidth />
                                </CreateButton>
                            )}
                        </Grid>
                    </Grid>

                    <List
                        title={false}
                        actions={false}
                    >
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
                            <DataTable.Col source="depreciation_date" label="Depreciation Date">
                                <DateField source="depreciation_date" />
                            </DataTable.Col>
                            <DataTable.Col source="depreciation_amount" label="Depreciation Amount" />
                            <DataTable.Col source="accumulated_depreciation" label="Accumulated Depreciation" />
                            <DataTable.Col source="book_value" label="Book Value" />
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
                                                    mutationMode="pessimistic"
                                                    confirmTitle="⚠️ Confirm deletion"
                                                    confirmContent="This will permanently remove the record."
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
                    </List>
                </CardContent>
            </Card>
        </Box>
    );
};
