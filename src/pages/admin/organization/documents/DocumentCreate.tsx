import {
    Create,
    SimpleForm,
    TextInput,
    DateInput,
    required,
} from "react-admin";
import { Box, Card, CardContent, Typography, Breadcrumbs, Link as MuiLink } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

export const DocumentCreate = () => {
    return (
        <Box sx={{ p: 2 }}>
            <Typography variant="h5" fontWeight="bold" gutterBottom>
                Create Document
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
                <MuiLink underline="hover" color="inherit" href="/documents">
                    Documents
                </MuiLink>
                <Typography color="text.primary" fontWeight="bold">
                    Create
                </Typography>
            </Breadcrumbs>

            <Card sx={{ borderRadius: 3, boxShadow: 3 }}>
                <CardContent>
                    <Create title={false} redirect="list">
                        <SimpleForm sx={{ maxWidth: 600 }}>
                            <TextInput source="title" validate={[required()]} fullWidth />
                            <TextInput source="document_type" label="Type" validate={[required()]} fullWidth />
                            <DateInput source="expiry_date" label="Expiry Date" fullWidth />
                            <TextInput source="file" label="File URL/Path" fullWidth />
                        </SimpleForm>
                    </Create>
                </CardContent>
            </Card>
        </Box>
    );
};