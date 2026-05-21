import { List, Datagrid, TextField, DateField, EditButton, DeleteButton, SearchInput } from "react-admin";
import { Box, Typography, Breadcrumbs, Link } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

const strayMilkFilters = [
    <SearchInput source="q" alwaysOn />
];

export const StrayMilkCollectionsList = () => (
    <Box>
        <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb" sx={{ mb: 2, mt: 2 }}>
            <Link color="inherit" href="/" underline="hover">
                Home
            </Link>
            <Typography color="text.primary">Stray Milk Collections</Typography>
        </Breadcrumbs>
        <List filters={strayMilkFilters}>
            <Datagrid rowClick="edit">
                <TextField source="member_no" label="Member No" />
                <TextField source="member_name" label="Member Name" />
                <TextField source="member_route_name" label="Member Route" />
                <TextField source="journal_route_name" label="Journal Route" />
                <TextField source="quantity" label="Quantity" />
                <DateField source="journal_date" label="Date" />
                <TextField source="milk_delivery_shift" label="Milk Delivery Shift" />
                <EditButton />
                <DeleteButton />
            </Datagrid>
        </List>
    </Box>
);
