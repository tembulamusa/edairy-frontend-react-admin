import { Edit, SimpleForm, TextInput, NumberInput } from "react-admin";
import { Box, Typography, Breadcrumbs, Link } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

export const MonthlyCollectionEdit = () => (
    <Box>
        <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb" sx={{ mb: 2, mt: 2 }}>
            <Link color="inherit" href="/" underline="hover">
                Home
            </Link>
            <Link color="inherit" href="#/monthly-collections" underline="hover">
                Monthly Collections
            </Link>
            <Typography color="text.primary">Edit</Typography>
        </Breadcrumbs>
        <Edit>
            <SimpleForm>
                <TextInput source="member_no" label="Member No" />
                <TextInput source="member_name" label="Member Name" />
                <TextInput source="route_name" label="Route Name" />
                <TextInput source="month" label="Month" />
                <TextInput source="year" label="Year" />
                <NumberInput source="quantity" label="Quantity" />
            </SimpleForm>
        </Edit>
    </Box>
);