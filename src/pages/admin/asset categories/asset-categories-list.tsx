import {
    List,
    DataTable,
    EditButton,
    DeleteButton,
    useResourceContext,
    CreateButton,
    ExportButton,
    Pagination,
    TopToolbar,
} from 'react-admin';
import { Box, Card, CardContent, Typography, Stack, Tooltip } from '@mui/material';
import Grid from '@mui/material/Grid';
import { useCan } from '../../../components/permissions/user-can';
import { ListBreadcrumbs } from '../../../../ListBreadcrumbs';

const AssetCategoryActions = () => (
    <TopToolbar>
        <CreateButton
            variant="contained"
            sx={{ backgroundColor: 'primary.main', color: 'white', ml: 1, '&:hover': { backgroundColor: 'primary.dark' } }}
        />
        <ExportButton />
    </TopToolbar>
);

export const AssetCategoryList = () => {
    const can = useCan();
    const resource = useResourceContext() ?? "asset-categories";
    const canEdit = can(resource, "update");
    const canDelete = can(resource, "delete");
    const canCreate = can(resource, "create");

    return (
        <Box sx={{ p: 2 }}>
            <ListBreadcrumbs />
            <List title="Asset Categories" actions={<AssetCategoryActions />}>
                <DataTable
                    rowClick="show"
                    sx={{
                        '& .RaDataTable-headerCell': {
                            fontWeight: "bold",
                            backgroundColor: "#f5f5f5",
                        },
                    }}
                >
                    <DataTable.Col source="name" label="Name" />
                    <DataTable.Col source="description" label="Description" />
                    <DataTable.Col source="asset_count" label="Asset Count" />
                    <DataTable.Col label="Actions">
                        <Stack direction="row" spacing={1} alignItems="center">
                            {canEdit && (
                                <Tooltip title="Edit Record">
                                    <span><EditButton label={false} sx={{ minWidth: 36 }} /></span>
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
                                            sx={{ minWidth: 36 }}
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
