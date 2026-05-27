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
        <Typography variant="h5" fontWeight="bold" sx={{ mb: 1 }}>
            {title}
        </Typography>
        <Breadcrumbs aria-label="breadcrumb">
            <Link underline="hover" color="inherit" href="/">
                Home
            </Link>
            <Typography color="text.primary" fontWeight="bold">{title}</Typography>
        </Breadcrumbs>
    </Box>
);

const listFilters = [
    <SearchInput source="q" alwaysOn placeholder="Search..." />,
    <TextInput source="partner" label="Partner" />,
    <TextInput source="purpose" label="Purpose" />,
    <TextInput source="venue" label="Venue" />,
];

export const ExchangeVisitList = () => (
    <>
        <ListBreadcrumbs title="Exchange Visits" />
        <List filters={listFilters}>
            <Datagrid
                rowClick="show"
                sx={{
                    '& .RaDatagrid-headerCell': {
                        fontWeight: "bold",
                    },
                }}
            >
                <DateField source="created_at" label="Created At" />
                <TextField source="partner" label="Exchange Visit Partner" />
                <DateField source="visit_date" label="Exchange Visit Date" />
                <TextField source="purpose" label="Purpose" />
                <TextField source="venue" label="Venue" />
                <EditButton />
                <DeleteButton />
            </Datagrid>
        </List>
    </>
);
