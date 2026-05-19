import {
    DataTable,
    ListBase,
    useResourceContext,
    EditButton,
    DeleteButton,
    CreateButton,
    TextField,
    NumberField,
    ReferenceField,
    DateField,
    FilterButton,
    ExportButton,
    TextInput,
    Pagination,
} from 'react-admin';

import {
    Stack,
    Tooltip,
    Card,
    CardContent,
    Typography,
    Chip,
    Box,
} from '@mui/material';
import Grid from '@mui/material/Grid';

import { useCan } from '../../../components/permissions/user-can';
import { ListBreadcrumbs } from '../../../../ListBreadcrumbs';

const activityLogFilters = [
    <TextInput label="Search" source="q" alwaysOn />,
];

export const ActivityLogList = () => {

    const can = useCan();
    const resource = useResourceContext() ?? "fixed-assets";

    const canCreate = can(resource, "create");
    const canEdit = can(resource, "update");
    const canDelete = can(resource, "delete");

    return (
        <Box sx={{ p: 2 }}>
            <ListBase perPage={25} filters={activityLogFilters}>
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
                                <Typography
                                    variant="h5"
                                    fontWeight="bold"
                                >
                                    Activity Logs
                                </Typography>

                                <Typography
                                    variant="body2"
                                    color="text.secondary"
                                >
                                    Activity Log Records
                                </Typography>
                            </Grid>

                            <Grid size={{ xs: 12, md: "auto" }}>
                                <Stack direction="row" spacing={1} alignItems="center">
                                    <FilterButton />
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
                                    <ExportButton />
                                </Stack>
                            </Grid>
                        </Grid>

                        <DataTable
                            rowClick="show"
                            sx={{
                                '& .RaDataTable-headerCell': {
                                    fontWeight: "bold",
                                    backgroundColor: "#f5f5f5",
                                },
                            }}
                        >
                            <DataTable.Col source="id" />
                            <DataTable.Col source="created_at">
                                <DateField source="created_at" />
                            </DataTable.Col>
                            <DataTable.Col source="log_name" />
                            <DataTable.Col source="description" />
                            <DataTable.Col source="subject_type" />
                            <DataTable.Col source="batch_uuid" />
                            <DataTable.Col source="causer_type" />
                            <DataTable.Col source="causer_name" />
                            <DataTable.Col source="properties.index" />
                            <DataTable.Col source="event" />
                        </DataTable>
                        <Pagination sx={{ mt: 2 }} />
                    </CardContent>
                </Card>
            </ListBase>
        </Box>
    );
};