import {
    Edit,
    SimpleForm,
    TextInput,
    required,
} from "react-admin";
import { Box, Card, CardContent, Typography, Breadcrumbs, Link as MuiLink } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

export const OrganizationDocumentEdit = () => {
    return (
        <Box sx={{ p: 2 }}>
            <Typography variant="h5" fontWeight="bold" gutterBottom>
                Edit Organization Document
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
                <MuiLink underline="hover" color="inherit" href="/organization-documents">
                    Organization Documents
                </MuiLink>
                <Typography color="text.primary" fontWeight="bold">
                    Edit
                </Typography>
            </Breadcrumbs>

            <Card sx={{ borderRadius: 3, boxShadow: 3 }}>
                <CardContent>
                    <Edit title={false} mutationMode="pessimistic" redirect="list">
                        <SimpleForm sx={{ maxWidth: 600 }}>
                            <TextInput source="document_type" validate={[required()]} fullWidth />
                            <TextInput source="document" label="Document URL" validate={[required()]} fullWidth />
                            <TextInput source="submitted" fullWidth />
                            <TextInput source="astra_id" label="Astra ID" fullWidth />
                        </SimpleForm>
                    </Edit>
                </CardContent>
            </Card>
        </Box>
    );
};