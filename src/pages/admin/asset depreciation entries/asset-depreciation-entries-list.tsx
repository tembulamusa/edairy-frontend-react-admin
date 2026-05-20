import {
    List,
    TopToolbar,
    DataTable,
    DateField,
    EditButton,
    DeleteButton,
    useResourceContext,
    CreateButton,
    FilterButton,
    ExportButton,
    TextInput,
    Pagination
} from 'react-admin';
import { Box, Card, CardContent, Typography, Stack, Tooltip } from '@mui/material';
import Grid from '@mui/material/Grid';
import { useCan } from '../../../components/permissions/user-can';
import { ListBreadcrumbs } from '../../../../ListBreadcrumbs';

const depreciationFilters = [
    <TextInput label="Search Asset" source="asset_name" alwaysOn />,
];

const DepreciationActions = () => (
    <TopToolbar>
        <FilterButton />
        <CreateButton
            variant="contained"
            sx={{ backgroundColor: 'primary.main', color: 'white', ml: 1, '&:hover': { backgroundColor: 'primary.dark' } }}
        />
        <ExportButton />
    </TopToolbar>
);

export const AssetDepreciationEntryList = () => {
    const can = useCan();
    const resource = useResourceContext() ?? "asset-depreciation-entries";
    const canEdit = can(resource, "update");
    const canDelete = can(resource, "delete");

    return (
        <Box sx={{ p: 2 }}>
            <ListBreadcrumbs />
            <List
                title="Asset Depreciation Entries"
                filters={depreciationFilters}
                actions={<DepreciationActions />}
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
