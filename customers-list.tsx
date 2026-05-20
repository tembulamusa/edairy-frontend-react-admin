import * as React from 'react';
import {
    List,
    Datagrid,
    TextField,
    EmailField,
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

export const CustomersList = () => (
    <Box sx={{ p: 2 }}>
        <ListBreadcrumbs />
        <List actions={<ListActions />}>
            <Datagrid rowClick="edit">
                <TextField source="id" />
                <TextField source="name" />
                <EmailField source="email" />
            </Datagrid>
        </List>
    </Box>
);