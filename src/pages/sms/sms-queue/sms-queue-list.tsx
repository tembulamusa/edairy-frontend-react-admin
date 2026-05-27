import * as React from 'react';
import {
    List,
    DataTable,
    TextField,
    ChipField,
    DateField,
    TopToolbar,
    FilterButton,
    CreateButton,
    ExportButton,
    TextInput,
    EditButton,
    DeleteButton,
    ShowButton
} from 'react-admin';
import { Box } from '@mui/material';
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { ListBreadcrumbs } from '../../../../ListBreadcrumbs';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';

const ListActions = (props: any) => (
    <TopToolbar {...props}>
        <FilterButton />
        <CreateButton />
        <ExportButton />
    </TopToolbar>
);

const smsQueueFilters = [
    <TextInput key="search" label="Search" source="q" alwaysOn />,
];

export const SmsQueueList = () => (
    <Box sx={{ p: 2 }}>
        <ListBreadcrumbs />
        <List actions={<ListActions />} filters={smsQueueFilters}>
            <DataTable>
                <DataTable.Col source="id" label="ID">
                    <TextField source="id" />
                </DataTable.Col>
                <DataTable.Col source="sms_message_id" label="Message ID">
                    <TextField source="sms_message_id" />
                </DataTable.Col>
                <DataTable.Col source="processed" label="Processed">
                    <ChipField source="processed" />
                </DataTable.Col>
                <DataTable.Col source="processing_attempts" label="Attempts">
                    <TextField source="processing_attempts" />
                </DataTable.Col>
                <DataTable.Col source="last_attempt_at" label="Last Attempt">
                    <DateField source="last_attempt_at" showTime emptyText="-" />
                </DataTable.Col>
                <DataTable.Col label="Actions">
                    <ShowButton
                        label=""
                        icon={<VisibilityOutlinedIcon fontSize="small" />}
                        sx={{ minWidth: 0, p: 0.5 }}
                    />
                    <EditButton
                        label=""
                        icon={<EditOutlinedIcon fontSize="small" />}
                        sx={{ minWidth: 0, p: 0.5 }}
                    />
                    <DeleteButton
                        label=""
                        icon={<DeleteOutlineIcon fontSize="small" />}
                        sx={{ minWidth: 0, p: 0.5 }}
                    />
                </DataTable.Col>
            </DataTable>
        </List>
    </Box>
);