import * as React from 'react';
import {
    List,
    TextInput,
    DataTable,
    CreateButton,
    ShowButton,
    EditButton,
    DeleteButton,
    useResourceContext,
} from "react-admin";
import {
    Stack,
    Typography,
    Tooltip,
    Box,
    Card,
    CardContent,
} from "@mui/material";
import Grid from '@mui/material/Grid';
import { useCan } from "../../../components/permissions/user-can";
import { ListBreadcrumbs } from "../../../../ListBreadcrumbs";

const UserFilters = [
    <TextInput source="q" label="Search" alwaysOn />,
    <TextInput source="name" label="Name" />,
    <TextInput source="email" label="Email" />,
];

export const UserList = () => {
    const can = useCan();
    const resource = useResourceContext() ?? "users";
    const canEdit = can(resource, "update");
    const canDelete = can(resource, "delete");
    const canCreate = can(resource, "create");

    return (
        <Box sx={{ p: 2 }}>
            <Grid
                container
                spacing={2}
                alignItems="center"
                justifyContent="space-between"
                mb={1}
            >
                <Grid size={{ xs: 12, md: 6 }}>
                    <Typography variant="h5" fontWeight="bold">
                        Users
                    </Typography>
                </Grid>
                <Grid size={{ xs: 12, md: "auto" }}>
                    {canCreate && (
                        <CreateButton
                            variant="contained"
                            sx={{
                                backgroundColor: 'primary.main',
                                color: 'white',
                                '&:hover': {
                                    backgroundColor: 'primary.dark',
                                },
                            }}
                        />
                    )}
                </Grid>
            </Grid>
            <ListBreadcrumbs />
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
                        filters={UserFilters}
                        actions={false}
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
                            <DataTable.Col source="id" label="ID" />
                            <DataTable.Col source="name" label="Name" />
                            <DataTable.Col source="email" label="Email" />

                            <DataTable.Col label="Actions">
                                <Stack direction="row" spacing={1} alignItems="center">
                                    <Tooltip title="View Details">
                                        <span>
                                            <ShowButton label={false} sx={{ minWidth: 36 }} />
                                        </span>
                                    </Tooltip>
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
