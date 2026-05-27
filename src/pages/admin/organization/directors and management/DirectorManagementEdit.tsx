import {
    Edit,
    SimpleForm,
    TextInput,
    required,
} from "react-admin";
import { Box, Card, CardContent, Typography, Breadcrumbs, Link as MuiLink } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

export const DirectorManagementEdit = () => {
    return (
        <Box sx={{ p: 2 }}>
            <Typography variant="h5" fontWeight="bold" gutterBottom>
                Edit Director/Management
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
                <MuiLink underline="hover" color="inherit" href="/directors-and-management">
                    Directors and Management
                </MuiLink>
                <Typography color="text.primary" fontWeight="bold">
                    Edit
                </Typography>
            </Breadcrumbs>

            <Card sx={{ borderRadius: 3, boxShadow: 3 }}>
                <CardContent>
                    <Edit title={false} mutationMode="pessimistic" redirect="list">
                        <SimpleForm sx={{ maxWidth: 600 }}>
                            <TextInput source="full_name" validate={[required()]} fullWidth />
                            <TextInput source="position" validate={[required()]} fullWidth />
                            <TextInput source="idnumber" label="ID Number" fullWidth />
                            <TextInput source="phone" fullWidth />
                            <TextInput source="email" fullWidth />
                        </SimpleForm>
                    </Edit>
                </CardContent>
            </Card>
        </Box>
    );
};