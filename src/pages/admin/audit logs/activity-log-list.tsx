import {
    DataTable,
    List,
    TopToolbar,
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

const ActivityLogActions = () => (
    <TopToolbar>
        <FilterButton />
        <CreateButton
            variant="contained"
            sx={{ backgroundColor: 'primary.main', color: 'white', ml: 1, '&:hover': { backgroundColor: 'primary.dark' } }}
        />
        <ExportButton />
    </TopToolbar>
);

export const ActivityLogList = () => {
    const can = useCan();
    const resource = useResourceContext() ?? "activity-logs";

    return (
        <Box sx={{ p: 2 }}>
            <ListBreadcrumbs />
            <List
                title="Activity Logs"
                filters={activityLogFilters}
                actions={<ActivityLogActions />}
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
            </List>
        </Box>
    );
};