import * as React from 'react';
import {
    List,
    DataTable,
    TextField,
    TopToolbar,
    FilterButton,
    CreateButton,
    ExportButton,
    TextInput,
    EditButton,
    DeleteButton,
    ShowButton,
    DateField
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

const smsGroupFilters = [
    <TextInput key="Name" label="Search by Name" source="Name" />,
];

export const SmsGroupsList = () => (
    <Box sx={{ p: 2 }}>
        <ListBreadcrumbs />
        <List actions={<ListActions />} filters={smsGroupFilters}>
            <DataTable>
                <DataTable.Col source="id" label="ID">
                    <TextField source="id" />
                </DataTable.Col>
                <DataTable.Col source="Name" label="Name">
                    <TextField source="Name" />
                </DataTable.Col>
                <DataTable.Col source="Description" label="Description">
                    <TextField source="Description" />
                </DataTable.Col>
                <DataTable.Col source="CreatedAt" label="Created At">
                    <DateField source="CreatedAt" showTime emptyText="-" />
                </DataTable.Col>
                <DataTable.Col source="UpdatedAt" label="Updated At">
                    <DateField source="UpdatedAt" showTime emptyText="-" />
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