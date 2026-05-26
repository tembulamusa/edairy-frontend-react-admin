import * as React from 'react';
import {
    List,
    TextField,
    DataTable,
    ReferenceField,
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

const smsContactFilters = [
    <TextInput key="Name" label="Search by Name" source="Name" />,
];

export const SmsContactsList = () => (
    <Box sx={{ p: 2 }}>
        <ListBreadcrumbs />
        <List actions={<ListActions />} filters={smsContactFilters}>
            <DataTable>
                <DataTable.Col source="id" label="ID">
                    <TextField source="id" />
                </DataTable.Col>
                <DataTable.Col source="Name" label="Name">
                    <TextField source="Name" />
                </DataTable.Col>
                <DataTable.Col source="PhoneNumber" label="Phone Number">
                    <TextField source="PhoneNumber" />
                </DataTable.Col>
                <DataTable.Col source="SMSGroupID" label="SMS Group">
                    <ReferenceField source="SMSGroupID" reference="sms-groups" link="show">
                        <TextField source="Name" />
                    </ReferenceField>
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