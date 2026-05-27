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

const smsTemplateFilters = [
    <TextInput key="name" label="Search by Name" source="name" />,
];

export const SmsTemplatesList = () => (
    <Box sx={{ p: 2 }}>
        <ListBreadcrumbs />
        <List actions={<ListActions />} filters={smsTemplateFilters}>
            <DataTable>
                <DataTable.Col source="id" label="ID">
                    <TextField source="id" />
                </DataTable.Col>
                <DataTable.Col source="name" label="Name">
                    <TextField source="name" />
                </DataTable.Col>
                <DataTable.Col source="body" label="Body">
                    <TextField source="body" />
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