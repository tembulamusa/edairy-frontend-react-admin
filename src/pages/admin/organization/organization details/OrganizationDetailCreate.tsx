import {
    Create,
    SimpleForm,
    TextInput,
    required,
} from "react-admin";
import { Box, Card, CardContent, Typography, Breadcrumbs, Link as MuiLink } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

export const OrganizationDetailCreate = () => {
    return (
        <Box sx={{ p: 2 }}>
            <Typography variant="h5" fontWeight="bold" gutterBottom>
                Create Organization Detail
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
                <MuiLink underline="hover" color="inherit" href="/organization-details">
                    Organization Details
                </MuiLink>
                <Typography color="text.primary" fontWeight="bold">
                    Create
                </Typography>
            </Breadcrumbs>

            <Card sx={{ borderRadius: 3, boxShadow: 3 }}>
                <CardContent>
                    <Create title={false} redirect="list">
                        <SimpleForm sx={{ maxWidth: 600 }}>
                            <TextInput source="name" validate={[required()]} fullWidth />
                            <TextInput source="registration_number" validate={[required()]} fullWidth />
                            <TextInput source="tax_id" label="Tax ID" fullWidth />
                            <TextInput source="address" fullWidth />
                            <TextInput source="phone" fullWidth />
                            <TextInput source="email" type="email" fullWidth />
                        </SimpleForm>
                    </Create>
                </CardContent>
            </Card>
        </Box>
    );
};