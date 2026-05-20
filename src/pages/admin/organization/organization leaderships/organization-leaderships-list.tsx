import {
    List,
    DataTable,
    EditButton,
    DeleteButton,
    TextInput,
    required,
    useResourceContext,
} from "react-admin";
import { CreateButton } from "../../../../components/forms/FormUtils";
import {
    Box,
    Card,
    CardContent,
    Typography,
    Stack,
    Tooltip,
} from "@mui/material";
import Grid from "@mui/material/Grid";
import { useCan } from "../../../../components/permissions/user-can";

export const OrganizationLeadershipsList = () => {
    const can = useCan();
    const resource = useResourceContext() ?? "organization-leaderships";
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
                            <Typography variant="h5" fontWeight="bold">
                                Organization Leaderships
                            </Typography>

                            <Typography variant="body2" color="text.secondary">
                                Manage all Organization Leadership records
                            </Typography>
                        </Grid>

                        <Grid size={{ xs: 12, md: "auto" }}>
                            {canCreate && (
                                <CreateButton
                                    resource="organization-leaderships"
                                    title="Organization Leadership"
                                    sx={{
                                        backgroundColor: "primary.main",
                                        color: "white",
                                        "&:hover": {
                                            backgroundColor: "primary.dark",
                                        },
                                    }}
                                >
                                    <TextInput
                                        source="first_name"
                                        validate={required()}
                                        fullWidth
                                    />
                                    <TextInput
                                        source="last_name"
                                        validate={required()}
                                        fullWidth
                                    />
                                    <TextInput
                                        source="position"
                                        validate={required()}
                                        fullWidth
                                    />
                                    <TextInput source="status" fullWidth />
                                    <TextInput source="phone" fullWidth />
                                </CreateButton>
                            )}
                        </Grid>
                    </Grid>

                    <List title={false} actions={false}>
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
