import {
    Show,
    SimpleShowLayout,
    TextField,
} from "react-admin";
import { Box, Card, CardContent, Typography, Breadcrumbs, Link as MuiLink } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

export const OrganizationLeadershipShow = () => {
    return (
        <Box sx={{ p: 2 }}>
            <Typography variant="h5" fontWeight="bold" gutterBottom>
                Organization Leadership Details
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
                <MuiLink underline="hover" color="inherit" href="/organization-leaderships">
                    Organization Leaderships
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
                            <TextField source="first_name" label="First Name" />
                            <TextField source="last_name" label="Last Name" />
                            <TextField source="position" />
                            <TextField source="status" />
                            <TextField source="submitted" />
                            <TextField source="liveness_passed" label="Liveness Passed" />
                            <TextField source="link_status" label="Link Status" />
                            <TextField source="phone" />
                        </SimpleShowLayout>
                    </Show>
                </CardContent>
            </Card>
        </Box>
    );
};