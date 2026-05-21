import { Create, SimpleForm, TextInput, NumberInput, DateInput } from "react-admin";
import { Box, Typography, Breadcrumbs, Link } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

export const StrayMilkCollectionCreate = () => (
    <Box>
        <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb" sx={{ mb: 2, mt: 2 }}>
            <Link color="inherit" href="/" underline="hover">
                Home
            </Link>
            <Link color="inherit" href="#/stray-milk-collections" underline="hover">
                Stray Milk Collections
            </Link>
            <Typography color="text.primary">Create</Typography>
        </Breadcrumbs>
        <Create>
            <SimpleForm>
                <TextInput source="member_no" label="Member No" />
                <TextInput source="member_name" label="Member Name" />
                <TextInput source="member_route_name" label="Member Route" />
                <TextInput source="journal_route_name" label="Journal Route" />
                <NumberInput source="quantity" label="Quantity" />
                <DateInput source="journal_date" label="Date" />
                <TextInput source="milk_delivery_shift" label="Milk Delivery Shift" />
            </SimpleForm>
        </Create>
    </Box>
);