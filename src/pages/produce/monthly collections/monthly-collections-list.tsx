import { List, Datagrid, TextField, NumberField, EditButton, DeleteButton, SearchInput } from "react-admin";
import { Box, Typography, Breadcrumbs, Link } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

const monthlyCollectionFilters = [
    <SearchInput source="q" alwaysOn />
];

export const MonthlyCollectionList = () => (
    <Box>
        <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb" sx={{ mb: 2, mt: 2 }}>
            <Link color="inherit" href="/" underline="hover">
                Home
            </Link>
            <Typography color="text.primary">Monthly Collections</Typography>
        </Breadcrumbs>
        <List filters={monthlyCollectionFilters}>
            <Datagrid rowClick="edit">
                <TextField source="member_no" label="Member No" />
                <TextField source="member_name" label="Member Name" />
                <TextField source="route_name" label="Route Name" />
                <TextField source="month" label="Month" />
                <TextField source="year" label="Year" />
                <NumberField source="quantity" label="Quantity" />
                <EditButton />
                <DeleteButton />
            </Datagrid>
        </List>
    </Box>
);
