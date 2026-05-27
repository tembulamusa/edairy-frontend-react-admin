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
    BooleanField,
    TextField,
    FunctionField,
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
    <TextInput source="document_type_name" label="Type" key="type" />
];

const ListActions = ({ canCreate, ...props }: any) => (
    <TopToolbar {...props}>
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

export const DocumentList = () => {
    const can = useCan();
    const resource = useResourceContext() ?? "documents";
    const canEdit = can(resource, "update");
    const canDelete = can(resource, "delete");
    const canCreate = can(resource, "create");

    return (
        <Box sx={{ p: 2 }}>
            <Typography variant="h5" fontWeight="bold" gutterBottom>
                Documents
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
                    Documents
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
                            <DataTable.Col source="astra_id" label="Astra ID">
                                <TextField source="astra_id" />
                            </DataTable.Col>
                            <DataTable.Col source="document_type_name" label="Type">
                                <TextField source="document_type_name" />
                            </DataTable.Col>
                            <DataTable.Col source="document_url" label="Document URL">
                                <FunctionField 
                                    source="document_url" 
                                    render={(record: any) => record?.document_url ? (
                                        <MuiLink href={`${import.meta.env.VITE_API_BASE_URL || ''}${record.document_url}`} target="_blank" rel="noopener">View Document</MuiLink>
                                    ) : null} 
                                />
                            </DataTable.Col>
                            <DataTable.Col source="submitted" label="Submitted">
                                <BooleanField source="submitted" />
                            </DataTable.Col>
                            <DataTable.Col source="created_at" label="Created At">
                                <DateField source="created_at" />
                            </DataTable.Col>
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
