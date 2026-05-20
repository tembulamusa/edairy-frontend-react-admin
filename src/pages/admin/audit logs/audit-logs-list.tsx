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
    Pagination,
} from 'react-admin';
import { Box, Card, CardContent, Typography, Stack, Tooltip } from '@mui/material';
import Grid from '@mui/material/Grid';
import { useCan } from '../../../components/permissions/user-can';
import { ListBreadcrumbs } from '../../../../ListBreadcrumbs';

const auditLogFilters = [
    <TextInput label="Search" source="q" alwaysOn />,
];

const AuditLogActions = () => (
    <TopToolbar>
        <FilterButton />
        <CreateButton
            variant="contained"
            sx={{ backgroundColor: 'primary.main', color: 'white', ml: 1, '&:hover': { backgroundColor: 'primary.dark' } }}
        />
        <ExportButton />
    </TopToolbar>
);

export const AuditLogList = () => {
    const can = useCan();
    const resource = useResourceContext() ?? "audit_logs";
    const canEdit = can(resource, "update");
    const canDelete = can(resource, "delete");

    return (
        <Box sx={{ p: 2 }}>
            <ListBreadcrumbs />
            <List
                title="Audit Logs"
                filters={auditLogFilters}
                actions={<AuditLogActions />}
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
                    <DataTable.Col source="id" label="ID" />
                    <DataTable.Col source="created_at" label="Created At">
                        <DateField source="created_at" />
                    </DataTable.Col>
                    <DataTable.Col source="name" label="Name" />
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
