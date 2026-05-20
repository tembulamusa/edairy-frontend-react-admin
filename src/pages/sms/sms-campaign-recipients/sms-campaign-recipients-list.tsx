import * as React from 'react';
import {
    List,
    TextField,
    DataTable,
    ReferenceField,
    DateField,
    TopToolbar,
    FilterButton,
    CreateButton,
    ExportButton,
    ChipField,
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

const smsCampaignRecipientFilters = [
    <TextInput key="phone_number" label="Search by Phone Number" source="phone_number" />,
];

export const SmsCampaignRecipientsList = () => (
    <Box sx={{ p: 2 }}>
        <ListBreadcrumbs />
        <List actions={<ListActions />} filters={smsCampaignRecipientFilters}>
            <DataTable>
                <DataTable.Col source="id" label="ID">
                    <TextField source="id" />
                </DataTable.Col>
                <DataTable.Col source="sms_campaign_id" label="Campaign">
                    <ReferenceField source="sms_campaign_id" reference="sms-campaigns" link="show">
                        <TextField source="name" />
                    </ReferenceField>
                </DataTable.Col>
                <DataTable.Col source="sms_contact_id" label="Contact">
                    <ReferenceField source="sms_contact_id" reference="sms-contacts" link="show">
                        <TextField source="name" />
                    </ReferenceField>
                </DataTable.Col>
                <DataTable.Col source="phone_number" label="Phone Number">
                    <TextField source="phone_number" />
                </DataTable.Col>
                <DataTable.Col source="delivery_status" label="Delivery Status">
                    <ChipField source="delivery_status" />
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