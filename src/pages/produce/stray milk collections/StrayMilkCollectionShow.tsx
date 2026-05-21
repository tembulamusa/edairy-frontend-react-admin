import { Show, SimpleShowLayout, TextField, DateField } from "react-admin";
import { Box, Typography, Breadcrumbs, Link } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

export const StrayMilkCollectionShow = () => (
    <Box>
        <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb" sx={{ mb: 2, mt: 2 }}>
            <Link color="inherit" href="/" underline="hover">
                Home
            </Link>
            <Link color="inherit" href="#/stray-milk-collections" underline="hover">
                Stray Milk Collections
            </Link>
            <Typography color="text.primary">Show</Typography>
        </Breadcrumbs>
        <Show>
            <SimpleShowLayout>
                <TextField source="member_no" label="Member No" />
                <TextField source="member_name" label="Member Name" />
                <TextField source="member_route_name" label="Member Route" />
                <TextField source="journal_route_name" label="Journal Route" />
                <TextField source="quantity" label="Quantity" />
                <DateField source="journal_date" label="Date" />
                <TextField source="milk_delivery_shift" label="Milk Delivery Shift" />
            </SimpleShowLayout>
        </Show>
    </Box>
);