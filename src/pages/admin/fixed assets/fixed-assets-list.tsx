import {
    DataTable,
    List,
    useResourceContext,
    EditButton,
    DeleteButton,
    CreateButton,
    TextField,
    NumberField,
    TopToolbar,
    FilterButton,
    ExportButton,
} from 'react-admin';

import {
    Stack,
    Tooltip,
    Card,
    CardContent,
    Typography,
    Chip,
    Box,
} from '@mui/material';

import Grid from '@mui/material/Grid';

import { useCan } from '../../../components/permissions/user-can';
import { ListBreadcrumbs } from '../../../../ListBreadcrumbs';

const FixedAssetActions = () => (
    <TopToolbar>
        <FilterButton />
        <CreateButton
            variant="contained"
            sx={{ backgroundColor: 'primary.main', color: 'white', ml: 1, '&:hover': { backgroundColor: 'primary.dark' } }}
        />
        <ExportButton />
    </TopToolbar>
);

export const FixedAssetList = () => {
    const can = useCan();
    const resource = useResourceContext() ?? "fixed-assets";

    const canEdit = can(resource, "update");
    const canDelete = can(resource, "delete");

    return (
        <Box sx={{ p: 2 }}>
            <ListBreadcrumbs />
            <List
                title="Fixed Assets"
                actions={<FixedAssetActions />}
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
                    <DataTable.Col source="asset_code" label="Code">
                        <TextField source="asset_code" />
                    </DataTable.Col>

                    <DataTable.Col source="asset_name" label="Asset Name">
                        <TextField source="asset_name" />
                    </DataTable.Col>

                    <DataTable.Col
                        source="asset_category_id"
                        label="Category"
                    >
                        <TextField source="asset_category_id" />
                    </DataTable.Col>

                    <DataTable.NumberCol
                        source="book_value"
                        label="Book Value"
                    >
                        <NumberField source="book_value" />
                    </DataTable.NumberCol>

                    <DataTable.Col
                        source="current_location"
                        label="Location"
                    >
                        <TextField source="current_location" />
                    </DataTable.Col>

                    <DataTable.Col source="status">
                        <Chip
                            label="Active"
                            size="small"
                            color="success"
                        />
                    </DataTable.Col>

                    <DataTable.Col label="Actions">
                        <Stack
                            direction="row"
                            spacing={1}
                            alignItems="center"
                        >
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
                                                    '& .RaConfirm-confirm-button': {
                                                        color: 'error.main !important',
                                                    },
                                                    '& .RaConfirm-title': {
                                                        color: 'error.main !important',
                                                    },
                                                    '& .RaConfirm-content': {
                                                        color: 'error.main !important',
                                                    },
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