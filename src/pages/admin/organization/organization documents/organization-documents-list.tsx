import {
    List,
    DataTable,
    EditButton,
    DeleteButton,
    useResourceContext,
    useRecordContext,
} from "react-admin";
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
import { ListCreateButton } from "../../../../components/forms/ListCreateButton";

const DocumentField = () => {
    const record = useRecordContext();
    if (!record?.document) return null;

    const url = record.document;
    const isImage = /\.(jpg|jpeg|png|gif|webp)$/i.test(url);

    return (
        <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            {isImage && (
                <img
                    src={url}
                    alt="document preview"
                    style={{
                        width: 60,
                        height: 60,
                        objectFit: "cover",
                        borderRadius: 6,
                        border: "1px solid #ddd",
                    }}
                />
            )}

            <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#1976d2", fontSize: 12 }}
            >
                Download
            </a>
        </div>
    );
};

export const OrganizationDocumentsList = () => {
    const can = useCan();
    const resource = useResourceContext() ?? "organization-documents";
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
                                Organization Documents
                            </Typography>

                            <Typography variant="body2" color="text.secondary">
                                Manage all Organization Document records
                            </Typography>
                        </Grid>

                        <Grid size={{ xs: 12, md: "auto" }}>
                            {canCreate && (
                                <ListCreateButton
                                    resource={resource}
                                    sx={{
                                        backgroundColor: "primary.main",
                                        color: "white",
                                        "&:hover": {
                                            backgroundColor: "primary.dark",
                                        },
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
                            <DataTable.Col source="document_type_name" label="Type" />
                            <DataTable.Col label="Document" source="document_url">
                                <DocumentField source="document_url" />
                            </DataTable.Col>
                            <DataTable.Col source="submitted" label="Submitted" />
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
        </Box >
    );
};
