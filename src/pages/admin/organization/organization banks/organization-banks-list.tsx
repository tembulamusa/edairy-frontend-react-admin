import {
    List,
    DataTable,
    EditButton,
    DeleteButton,
    TextInput,
    required,
    useResourceContext,
    useRecordContext,
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

export const OrganizationBanksList = () => {
    const can = useCan();
    const resource = useResourceContext() ?? "organization-banks";
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
                                Organization Banks
                            </Typography>

                            <Typography variant="body2" color="text.secondary">
                                Manage all Organization Bank records
                            </Typography>
                        </Grid>

                        <Grid size={{ xs: 12, md: "auto" }}>
                            {canCreate && (
                                <CreateButton
                                    resource="organization-banks"
                                    title="Organization Bank"
                                    sx={{
                                        backgroundColor: "primary.main",
                                        color: "white",
                                        "&:hover": {
                                            backgroundColor: "primary.dark",
                                        },
                                    }}
                                >
                                    <TextInput
                                        source="name"
                                        validate={required()}
                                        fullWidth
                                    />
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
