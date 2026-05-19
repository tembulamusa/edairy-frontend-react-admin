import {
    List,
    DataTable,
    DateField,
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

export const DepartmentList = () => {
    const can = useCan();
    const resource = useResourceContext() ?? "departments";
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
                                Departments
                            </Typography>

                            <Typography variant="body2" color="text.secondary">
                                Manage all Departments records
                            </Typography>
                        </Grid>

                        <Grid size={{ xs: 12, md: "auto" }}>
                            {canCreate && (
                                <CreateButton
                                    resource="departments"
                                    title="Department"
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
                                    <TextInput
                                        source="code"
                                        validate={required()}
                                        fullWidth
                                    />
                                    <TextInput source="head_of_department" fullWidth />
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
                            <DataTable.Col source="created_at" label="Created At">
                                <DateField source="created_at" />
                            </DataTable.Col>
                            <DataTable.Col source="name" label="Name" />
                            <DataTable.Col source="code" label="Code" />
                            <DataTable.Col
                                source="head_of_department"
                                label="Head of Department"
                            />
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
