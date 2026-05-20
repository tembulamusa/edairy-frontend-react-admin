import { List, DataTable, EditButton, DeleteButton, useResourceContext, CreateButton, ShowButton, TextInput } from 'react-admin';
import { Box, Card, CardContent, Typography, Stack, Tooltip } from '@mui/material';
import Grid from '@mui/material/Grid';
import { useCan } from '../../../components/permissions/user-can';

const TrainingFilters = [
    <TextInput
        source="venue"
        label="Venue"
        alwaysOn
    />,
    <TextInput
        source="topic"
        label="Topic"
        alwaysOn
    />,
    <TextInput
        source="facilitator"
        label="Facilitator"
        alwaysOn
    />,
];

export const TrainingList = () => {
    const can = useCan();
    const resource = useResourceContext() ?? "trainings";
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
                            <Typography
                                variant="h5"
                                fontWeight="bold"
                            >
                                Trainings
                            </Typography>

                            <Typography
                                variant="body2"
                                color="text.secondary"
                            >
                                Manage all training records
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
                    <List 
                        title={false}
                        filters={TrainingFilters}
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
                            <DataTable.Col source="created_at" label="Created At" />
                            <DataTable.Col source="venue" label="Venue" />
                            <DataTable.Col source="training_date" label="Training Date" />
                            <DataTable.Col source="topic" label="Topic" />
                            <DataTable.Col source="facilitator" label="Facilitator" />

                            <DataTable.Col label="Actions">
                                <Stack direction="row" spacing={1} alignItems="center">
                                    <Tooltip title="View Details">
                                        <span>
                                            <ShowButton label={false} sx={{ minWidth: 10 }} />
                                        </span>
                                    </Tooltip>

                                    {canEdit && (
                                        <Tooltip title="Edit Record">
                                            <span>
                                                <EditButton label={false} sx={{ minWidth: 10 }} />
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
