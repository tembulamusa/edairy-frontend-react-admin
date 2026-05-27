import {
    Show,
    SimpleShowLayout,
    TextField,
    DateField,
    BooleanField,
    FunctionField,
} from "react-admin";
import { Box, Card, CardContent, Typography, Breadcrumbs, Link as MuiLink } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

export const DocumentShow = () => {
    return (
        <Box sx={{ p: 2 }}>
            <Typography variant="h5" fontWeight="bold" gutterBottom>
                Document Details
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
                    Show
                </Typography>
            </Breadcrumbs>

            <Card sx={{ borderRadius: 3, boxShadow: 3 }}>
                <CardContent>
                    <Show title={false}>
                        <SimpleShowLayout>
                            <TextField source="id" />
                            <TextField source="astra_id" label="Astra ID" />
                            <TextField source="document_type_id" label="Document Type ID" />
                            <TextField source="document_type_name" label="Document Type Name" />
                            <FunctionField 
                                source="document_url" 
                                label="Document URL" 
                                render={(record: any) => record?.document_url ? (
                                    <MuiLink href={`${import.meta.env.VITE_API_BASE_URL || ''}${record.document_url}`} target="_blank" rel="noopener">View Document</MuiLink>
                                ) : null} 
                            />
                            <BooleanField source="submitted" label="Submitted" />
                            <DateField source="created_at" label="Created At" showTime />
                            <DateField source="updated_at" label="Updated At" showTime />
                        </SimpleShowLayout>
                    </Show>
                </CardContent>
            </Card>
        </Box>
    );
};