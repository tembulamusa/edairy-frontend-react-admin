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

const ListActions = () => (
    <TopToolbar>
        <FilterButton />
        <CreateButton />
        <ExportButton />
    </TopToolbar>
);

const smsQueueFilters = [
    <TextInput key="recipient" label="Search by Recipient" source="recipient" />,
];

export const SmsQueueList = () => (
    <Box sx={{ p: 2 }}>
        <ListBreadcrumbs />
        <List actions={<ListActions />} filters={smsQueueFilters}>
            <DataTable>
                <DataTable.Col source="id" label="ID">
                    <TextField source="id" />
                </DataTable.Col>
                <DataTable.Col source="recipient" label="Recipient">
                    <TextField source="recipient" />
                </DataTable.Col>
                <DataTable.Col source="message" label="Message">
                    <TextField source="message" />
                </DataTable.Col>
                <DataTable.Col source="status" label="Status">
                    <ChipField source="status" />
                </DataTable.Col>
                <DataTable.Col source="scheduled_for" label="Scheduled For">
                    <DateField source="scheduled_for" showTime />
                </DataTable.Col>
                <DataTable.Col source="attempts" label="Attempts">
                    <TextField source="attempts" />
                </DataTable.Col>
                <DataTable.Col source="created_at" label="Created At">
                    <DateField source="created_at" showTime />
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