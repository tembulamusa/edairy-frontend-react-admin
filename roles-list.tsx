import * as React from 'react';
import {
    List,
    Datagrid,
    TextField,
    TopToolbar,
    FilterButton,
    CreateButton,
    ExportButton
} from 'react-admin';
import { Box } from '@mui/material';
import { ListBreadcrumbs } from './ListBreadcrumbs';

const ListActions = () => (
    <TopToolbar>
        <FilterButton />
        <CreateButton />
        <ExportButton />
    </TopToolbar>
);

export const RolesList = () => (
    <Box sx={{ p: 2 }}>
        <ListBreadcrumbs />
        <List actions={<ListActions />}>
            <Datagrid rowClick="edit">
                <TextField source="id" />
                <TextField source="name" />
                <TextField source="description" />
            </Datagrid>
        </List>
    </Box>
);