import {
    List,
    DataTable,
    DateField,
    EditButton,
    DeleteButton,
    useResourceContext,
} from "react-admin";
import { Box, Card, CardContent, Typography, Stack, Tooltip } from "@mui/material";
import Grid from "@mui/material/Grid";
import { useCan } from "../../../components/permissions/user-can";
import { ListCreateButton } from "../../../components/forms/ListCreateButton";

export const OrganizationKybCommentsList = () => {
    const can = useCan();
    const resource = useResourceContext() ?? "organization-kyb-comments";
    const canCreate = can(resource, "create");
    const canEdit = can(resource, "update");
    const canDelete = can(resource, "delete");

    return (
        <Box sx={{ p: 2 }}>
            <Card sx={{ borderRadius: 3, boxShadow: 3, overflow: "hidden" }}>
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
                                Organization KYB Comments
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Manage all Organization KYB Comments records
                            </Typography>
                        </Grid>
                        <Grid size={{ xs: 12, md: "auto" }}>
                            {canCreate && (
                                <ListCreateButton
                                    resource={resource}
                                    sx={{
                                        backgroundColor: "primary.main",
                                        color: "white",
                                        "&:hover": { backgroundColor: "primary.dark" },
                                    }}
                                />
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
                            <DataTable.Col source="created_at" label="Created At">
                                <DateField source="created_at" />
                            </DataTable.Col>
                            <DataTable.Col source="name" label="Name" />
                            <DataTable.Col source="description" label="Description" />
                            <DataTable.Col source="status" label="Status" />
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
