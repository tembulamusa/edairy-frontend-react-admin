import {
    List,
    DataTable,
    DateField,
    EditButton,
    DeleteButton,
    FunctionField,
    TextInput,
    SearchInput,
    CreateButton,
    TopToolbar,
    FilterButton,
    ExportButton,
    useResourceContext,
} from 'react-admin';
import {
    Box,
    Card,
    CardContent,
    Typography,
    Stack,
    Tooltip,
    Chip,
    Breadcrumbs,
    Link as MuiLink,
} from '@mui/material';
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { useCan } from '../../../components/permissions/user-can';

type AssetAssignmentRecord = {
    ReturnedAt?: string;
    returned_at?: string;
};

const formatReturnedAt = (returnedAt?: string) => {
    if (!returnedAt || returnedAt.startsWith("0001-01-01")) return "Not returned";
    return returnedAt;
};

const assignmentFilters = [
    <SearchInput source="q" alwaysOn placeholder="Search assignments..." key="search" />,
    <TextInput label="Asset Name" source="asset_name" key="asset_name" />,
];

const ListActions = ({ canCreate }: { canCreate: boolean }) => (
    <TopToolbar>
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
    </TopToolbar>
);

export const AssetAssignmentList = () => {
    const can = useCan();
    const resource = useResourceContext() ?? "asset-assignments";
    const canEdit = can(resource, "update");
    const canDelete = can(resource, "delete");
    const canCreate = can(resource, "create");

    return (
        <Box sx={{ p: 2 }}>
            <Typography variant="h5" fontWeight="bold" gutterBottom>
                Asset Assignments
            </Typography>
            <Breadcrumbs
                separator={<NavigateNextIcon fontSize="small" />}
                aria-label="breadcrumb"
                sx={{ mb: 3 }}
            >
                <MuiLink underline="hover" color="inherit" href="/">
                    Home
                </MuiLink>
                <MuiLink underline="hover" color="inherit" href="/admin">
                    Admin
                </MuiLink>
                <Typography color="text.primary" fontWeight="bold">
                    Asset Assignments
                </Typography>
            </Breadcrumbs>

            <Card
                sx={{
                    borderRadius: 3,
                    boxShadow: 3,
                    overflow: "hidden",
                }}
            >
                <CardContent>
                    <List
                        title={false}
                        filters={assignmentFilters}
                        actions={<ListActions canCreate={canCreate} />}
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
                                                <EditButton label={false} sx={{ minWidth: 36 }} />
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
                                                    sx={{ minWidth: 36 }}
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
