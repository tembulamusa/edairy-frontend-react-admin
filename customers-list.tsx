import * as React from 'react';
import {
    List,
    TextInput,
    useResourceContext,
    CreateButton,
    ShowButton,
    EditButton,
    DeleteButton,
    DataTable,
} from 'react-admin';
import { Box, Card, CardContent, Typography, Stack, Tooltip } from '@mui/material';
import Grid from '@mui/material/Grid';
import { ListBreadcrumbs } from './ListBreadcrumbs';

const CustomerFilters = [
    <TextInput source="q" label="Search" alwaysOn />,
    <TextInput source="name" label="Name" />,
    <TextInput source="email" label="Email" />,
];

export const CustomersList = () => {
    const resource = useResourceContext() ?? "customers";

    return (
        <Box sx={{ p: 2 }}>
            <ListBreadcrumbs />
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
                                Customers
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Manage all customer records
                            </Typography>
                        </Grid>
                        <Grid size={{ xs: 12, md: "auto" }}>
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
                        </Grid>
                    </Grid>
                    <List
                        title={false}
                        filters={CustomerFilters}
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
                                            <ShowButton label={false} sx={{ minWidth: 10 }} />
                                        </span>
                                    </Tooltip>
                                    <Tooltip title="Edit Record">
                                        <span>
                                            <EditButton label={false} sx={{ minWidth: 10 }} />
                                        </span>
                                    </Tooltip>
                                    <Tooltip title="Delete Record">
                                        <span>
                                            <DeleteButton
                                                label={false}
                                                mutationMode="pessimistic"
                                                confirmTitle="⚠️ Confirm deletion"
                                                confirmContent="This will permanently remove the record."
                                            />
                                        </span>
                                    </Tooltip>
                                </Stack>
                            </DataTable.Col>
                        </DataTable>
                    </List>
                </CardContent>
            </Card>
        </Box>
    );
};