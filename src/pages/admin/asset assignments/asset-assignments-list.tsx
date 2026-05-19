import {
    List,
    TopToolbar,
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

const AssignmentActions = () => (
    <TopToolbar>
        <FilterButton />
        <CreateButton
            variant="contained"
            sx={{ backgroundColor: 'primary.main', color: 'white', ml: 1, '&:hover': { backgroundColor: 'primary.dark' } }}
        />
        <ExportButton />
    </TopToolbar>
);

export const AssetAssignmentList = () => {
    const can = useCan();
    const resource = useResourceContext() ?? "asset-assignments";
    const canEdit = can(resource, "update");
    const canDelete = can(resource, "delete");

    return (
        <Box sx={{ p: 2 }}>
            <ListBreadcrumbs />
            <List
                title="Asset Assignments"
                filters={assignmentFilters}
                actions={<AssignmentActions />}
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
                    <DataTable.Col label="Status">
                        <FunctionField
                            render={(record: any) => (
                                <Chip
                                    label={record.status?.toUpperCase()}
                                    size="small"
                                    color={record.status?.toUpperCase() === "ASSIGNED" ? "primary" : "success"}
                                />
                            )}
                        />
                    </DataTable.Col>
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
            </List>
        </Box>
    );
};
