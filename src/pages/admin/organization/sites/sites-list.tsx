import {
    List,
    DataTable,
    DateField,
    EditButton,
    DeleteButton,
    TextInput,
    SearchInput,
    CreateButton,
    TopToolbar,
    FilterButton,
    useResourceContext,
} from "react-admin";
import {
    Box,
    Card,
    CardContent,
    Typography,
    Stack,
    Tooltip,
    Breadcrumbs,
    Link as MuiLink,
} from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { useCan } from '../../../../components/permissions/user-can';

const siteFilters = [
    <SearchInput source="q" alwaysOn placeholder="Search sites..." key="search" />,
    <TextInput source="site_type" label="Site Type" key="type" />
];

const ListActions = ({ canCreate }: { canCreate: boolean }) => (
    <TopToolbar>
        <FilterButton />
        {canCreate && (
            <CreateButton
                variant="contained"
                sx={{
                    backgroundColor: "primary.main",
                    color: "white",
                    "&:hover": {
                        backgroundColor: "primary.dark",
                    },
                }}
            />
        )}
    </TopToolbar>
);

export const SiteList = () => {
    const can = useCan();
    const resource = useResourceContext() ?? "sites";
    const canEdit = can(resource, "update");
    const canDelete = can(resource, "delete");
    const canCreate = can(resource, "create");

    return (
        <Box sx={{ p: 2 }}>
            <Typography variant="h5" fontWeight="bold" gutterBottom>
                Sites
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
                    Sites
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
                        filters={siteFilters}
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
                            <DataTable.Col source="created_at" label="Created At">
                                <DateField source="created_at" />
                            </DataTable.Col>
                            <DataTable.Col source="name" label="Name" />
                            <DataTable.Col source="location" label="Location" />
                            <DataTable.Col source="site_type" label="Site Type" />
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
