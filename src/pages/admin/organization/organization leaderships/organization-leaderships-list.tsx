import {
    List,
    DataTable,
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
import { useCan } from "../../../../components/permissions/user-can";

const leadershipFilters = [
    <SearchInput source="q" alwaysOn placeholder="Search leaderships..." key="search" />,
    <TextInput source="position" label="Position" key="position" />
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

export const OrganizationLeadershipsList = () => {
    const can = useCan();
    const resource = useResourceContext() ?? "organization-leaderships";
    const canEdit = can(resource, "update");
    const canDelete = can(resource, "delete");
    const canCreate = can(resource, "create");

    return (
        <Box sx={{ p: 2 }}>
            <Typography variant="h5" fontWeight="bold" gutterBottom>
                Organization Leaderships
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
                    Organization Leaderships
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
                        filters={leadershipFilters}
                        actions={<ListActions canCreate={canCreate} />}
                    >
                        <DataTable
                            rowClick="show"
                            sx={{
                                "& .RaDataTable-headerCell": {
                                    fontWeight: "bold",
                                    backgroundColor: "#f5f5f5",
                                },
                            }}
                        >
                            <DataTable.Col source="first_name" label="First Name" />
                            <DataTable.Col source="last_name" label="Last Name" />
                            <DataTable.Col source="position" label="Position" />
                            <DataTable.Col source="status" label="Status" />
                            <DataTable.Col source="submitted" label="Submitted" />
                            <DataTable.Col source="liveness_passed" label="Liveness Passed" />
                            <DataTable.Col source="link_status" label="Link Status" />
                            <DataTable.Col source="phone" label="Phone" />
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
