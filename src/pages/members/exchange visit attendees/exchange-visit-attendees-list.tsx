import {
    List,
    Datagrid,
    TextField,
    DateField,
    EditButton,
    DeleteButton,
    TextInput,
    SearchInput
} from "react-admin";
import { Box, Breadcrumbs, Link, Typography } from "@mui/material";

const ListBreadcrumbs = ({ title }: { title: string }) => (
    <Box sx={{ mb: 2, mt: 1 }}>
        <Breadcrumbs aria-label="breadcrumb">
            <Link underline="hover" color="inherit" href="/">
                Home
            </Link>
            <Typography color="text.primary">{title}</Typography>
        </Breadcrumbs>
    </Box>
);

const listFilters = [
    <SearchInput source="q" alwaysOn placeholder="Search..." />,
    <TextInput source="attendee" label="Attendee" />,
    <TextInput source="attendee_organization" label="Organization" />,
    <TextInput source="attendee_designation" label="Designation" />,
];

export const ExchangeVisitAttendeesList = () => (
    <>
        <ListBreadcrumbs title="Exchange Visit Attendees" />
        <List filters={listFilters}>
            <Datagrid rowClick="show">
                <DateField source="created_at" label="Created At" />
                <TextField source="exchange_visit_id" label="Exchange Visit ID" />
                <TextField source="attendee" label="Attendee" />
                <TextField source="attendee_organization" label="Attendee Organization" />
                <TextField source="attendee_designation" label="Attendee Designation" />
                <TextField source="comments" label="Comments" />
                <EditButton />
                <DeleteButton />
            </Datagrid>
        </List>
    </>
);
