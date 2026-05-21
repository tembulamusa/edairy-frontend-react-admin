import * as React from 'react';
import {
    List,
    Datagrid,
    TextField,
    NumberField,
    DateField,
    TopToolbar,
    FilterButton,
    CreateButton,
    ExportButton,
    EditButton,
    DeleteButton,
    TextInput
} from 'react-admin';
import { Box } from '@mui/material';
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { ListBreadcrumbs } from '../../../../ListBreadcrumbs';

const ListActions = () => (
    <TopToolbar>
        <FilterButton />
        <CreateButton />
        <ExportButton />
    </TopToolbar>
);

const filters = [
    <TextInput label="Search" source="q" alwaysOn />,
];

export const DailyMilkVariancesList = () => (
    <Box sx={{ p: { xs: 2, md: 3 } }}>
        <ListBreadcrumbs />
        <List actions={<ListActions />} filters={filters}>
            <Datagrid rowClick="show">
                <DateField source="day" label="Day" />
                <TextField source="month" label="Month" />
                <TextField source="transporter" label="Transporter" />
                <NumberField source="field_collections" label="Field Collections" />
                <NumberField source="mcc" label="MCC" />
                <NumberField source="cash_sales" label="Cash Sales" />
                <NumberField source="credit_sales" label="Credit Sales" />
                <NumberField source="rejects" label="Rejects" />
                <NumberField source="balance" label="Balance" />
                <EditButton label="" icon={<EditOutlinedIcon fontSize="small" />} sx={{ minWidth: 0, p: 0.5 }} />
                <DeleteButton label="" icon={<DeleteOutlineIcon fontSize="small" />} sx={{ minWidth: 0, p: 0.5 }} />
            </Datagrid>
        </List>
    </Box>
);
