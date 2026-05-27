import {
    Edit,
    SimpleForm,
    TextInput,
    required,
} from "react-admin";
import { Box, Card, CardContent, Typography, Breadcrumbs, Link as MuiLink } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

export const OrganizationAddressEdit = () => {
    return (
        <Box sx={{ p: 2 }}>
            <Typography variant="h5" fontWeight="bold" gutterBottom>
                Edit Organization Address
            </Typography>
            <Breadcrumbs
                separator={<NavigateNextIcon fontSize="small" />}
                aria-label="breadcrumb"
                sx={{ mb: 3 }}
            >
                <MuiLink underline="hover" color="inherit" href="/">
                    Home
                </MuiLink>
                <MuiLink underline="hover" color="inherit" href="/admin">
                    Admin
                </MuiLink>
                <MuiLink underline="hover" color="inherit" href="/organization-addresses">
                    Organization Addresses
                </MuiLink>
                <Typography color="text.primary" fontWeight="bold">
                    Edit
                </Typography>
            </Breadcrumbs>

            <Card sx={{ borderRadius: 3, boxShadow: 3 }}>
                <CardContent>
                    <Edit title={false} mutationMode="pessimistic" redirect="list">
                        <SimpleForm sx={{ maxWidth: 600 }}>
                            <TextInput source="address_type" validate={[required()]} fullWidth />
                            <TextInput source="city" validate={[required()]} fullWidth />
                            <TextInput source="country" validate={[required()]} fullWidth />
                            <TextInput source="line1" validate={[required()]} fullWidth />
                            <TextInput source="line2" fullWidth />
                            <TextInput source="state" fullWidth />
                        </SimpleForm>
                    </Edit>
                </CardContent>
            </Card>
        </Box>
    );
};