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
    useRecordContext,
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

const documentFilters = [
    <SearchInput source="q" alwaysOn placeholder="Search documents..." key="search" />,
    <TextInput source="document_type" label="Type" key="type" />
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
            <Typography variant="h5" fontWeight="bold" gutterBottom>
                Organization Documents
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
                    Organization Documents
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
                        filters={documentFilters}
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
                            <DataTable.Col source="document_type" label="Type" />
                            <DataTable.Col label="Document">
                                <DocumentField />
                            </DataTable.Col>
                            <DataTable.Col source="submitted" label="Submitted" />
                            <DataTable.Col source="astra_id" label="Astra ID" />
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
