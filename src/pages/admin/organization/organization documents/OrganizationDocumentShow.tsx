import {
    Show,
    SimpleShowLayout,
    TextField,
} from "react-admin";
import { Box, Card, CardContent, Typography, Breadcrumbs, Link as MuiLink } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

export const OrganizationDocumentShow = () => {
    return (
        <Box sx={{ p: 2 }}>
            <Typography variant="h5" fontWeight="bold" gutterBottom>
                Organization Document Details
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
                    Show
                </Typography>
            </Breadcrumbs>

            <Card sx={{ borderRadius: 3, boxShadow: 3 }}>
                <CardContent>
                    <Show title={false}>
                        <SimpleShowLayout>
                            <TextField source="id" />
                            <TextField source="document_type" label="Type" />
                            <TextField source="document" label="Document URL" />
                            <TextField source="submitted" />
                            <TextField source="astra_id" label="Astra ID" />
                        </SimpleShowLayout>
                    </Show>
                </CardContent>
            </Card>
        </Box>
    );
};