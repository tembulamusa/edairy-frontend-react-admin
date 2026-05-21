import { Edit, SimpleForm, TextInput, DateInput, BooleanInput, NumberInput } from "react-admin";
import { Box, Typography, Breadcrumbs, Link } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

export const MilkRejectEdit = () => (
    <Box>
        <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb" sx={{ mb: 2, mt: 2 }}>
            <Link color="inherit" href="/" underline="hover">
                Home
            </Link>
            <Link color="inherit" href="#/milk-rejects" underline="hover">
                Milk Rejects
            </Link>
            <Typography color="text.primary">Edit</Typography>
        </Breadcrumbs>
        <Edit>
            <SimpleForm>
                <DateInput source="transaction_date" label="Date" />
                <TextInput source="route_name" label="Route Name" />
                <NumberInput source="quantity" label="Quantity" />
                <TextInput source="transporter_name" label="Transporter Name" />
                <TextInput source="member_name" label="Member Name" />
                <BooleanInput source="confirmed" label="Confirmed" />
                <TextInput source="reason" label="Reason" />
                <TextInput source="description" label="Description" multiline rows={3} />
                <TextInput source="milk_delivery_shift" label="Shift" />
            </SimpleForm>
        </Edit>
    </Box>
);