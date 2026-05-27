import {
    DataTable,
    List,
    DateField,
    TextInput,
} from 'react-admin';

import { Box } from '@mui/material';
import { ListBreadcrumbs } from '../../../../ListBreadcrumbs';

const activityLogFilters = [
    <TextInput label="Search" source="q" alwaysOn />,
];

export const ActivityLogList = () => {
    return (
        <Box sx={{ p: 2 }}>
            <ListBreadcrumbs />
            <List
                title="Activity Logs"
                filters={activityLogFilters}
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
