import * as React from 'react';
import {
    List,
    Datagrid,
    TextField,
    NumberField,
    DateField,
    FunctionField,
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
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import { ListBreadcrumbs } from '../../../../ListBreadcrumbs';

type MilkDeliveryRecord = {
    confirmed?: number | boolean;
    invoiced?: number | boolean;
};

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

export const MilkDeliveryList = () => (
    <Box sx={{ p: { xs: 2, md: 3 } }}>
        <ListBreadcrumbs />
        <List actions={<ListActions />} filters={filters}>
            <Datagrid rowClick="show">
                <DateField source="transaction_date" label="Date" />
                <NumberField source="quantity_accepted" label="Quantity" />
                <NumberField source="amount" label="Amount" />
                <NumberField source="amount_paid" label="Paid" />
                <TextField source="delivery_note_number" label="Delivery Note Number" />
                <TextField source="customer_name" label="Customer" />
                <FunctionField
                    label="Invoiced"
                    render={(record: MilkDeliveryRecord) =>
                        record?.invoiced === 1 || record?.invoiced === true ? (
                            <CheckCircleOutlineIcon sx={{ color: "success.main" }} fontSize="small" />
                        ) : (
                            <CancelOutlinedIcon sx={{ color: "error.main" }} fontSize="small" />
                        )
                    }
                />
                <TextField source="route_name" label="Route" />
                <FunctionField
                    label="Confirmed"
                    render={(record: MilkDeliveryRecord) =>
                        record?.confirmed === 1 || record?.confirmed === true ? (
                            <CheckCircleOutlineIcon sx={{ color: "success.main" }} fontSize="small" />
                        ) : (
                            <CancelOutlinedIcon sx={{ color: "error.main" }} fontSize="small" />
                        )
                    }
                />
                <TextField source="transporter_name" label="Transporter" />
                <EditButton label="" icon={<EditOutlinedIcon fontSize="small" />} sx={{ minWidth: 0, p: 0.5 }} />
                <DeleteButton label="" icon={<DeleteOutlineIcon fontSize="small" />} sx={{ minWidth: 0, p: 0.5 }} />
            </Datagrid>
        </List>
    </Box>
);
