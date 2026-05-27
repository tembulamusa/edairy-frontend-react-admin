import {
    Show,
    SimpleShowLayout,
    TextField,
    DateField,
} from "react-admin";
import { Box, Card, CardContent, Typography, Breadcrumbs, Link as MuiLink } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

export const BankShow = () => {
    return (
        <Box sx={{ p: 2 }}>
            <Typography variant="h5" fontWeight="bold" gutterBottom>
                Bank Details
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
                <MuiLink underline="hover" color="inherit" href="/banks">
                    Banks
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
                            <DateField source="created_at" label="Created At" showTime />
                            <TextField source="name" />
                            <TextField source="code" />
                            <TextField source="swift_code" label="Swift Code" />
                        </SimpleShowLayout>
                    </Show>
                </CardContent>
            </Card>
        </Box>
    );
};