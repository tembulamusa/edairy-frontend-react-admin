import { Show, SimpleShowLayout, TextField, NumberField } from "react-admin";
import { Box, Typography, Breadcrumbs, Link } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

export const MonthlyCollectionShow = () => (
    <Box>
        <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb" sx={{ mb: 2, mt: 2 }}>
            <Link color="inherit" href="/" underline="hover">
                Home
            </Link>
            <Link color="inherit" href="#/monthly-collections" underline="hover">
                Monthly Collections
            </Link>
            <Typography color="text.primary">Show</Typography>
        </Breadcrumbs>
        <Show>
            <SimpleShowLayout>
                <TextField source="member_no" label="Member No" />
                <TextField source="member_name" label="Member Name" />
                <TextField source="route_name" label="Route Name" />
                <TextField source="month" label="Month" />
                <TextField source="year" label="Year" />
                <NumberField source="quantity" label="Quantity" />
            </SimpleShowLayout>
        </Show>
    </Box>
);