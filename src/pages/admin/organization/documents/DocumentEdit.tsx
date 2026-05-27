import {
    Edit,
    SimpleForm,
    TextInput,
    NumberInput,
    BooleanInput,
    FileInput,
    FileField,
    required,
} from "react-admin";
import { Box, Card, CardContent, Typography, Breadcrumbs, Link as MuiLink } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

export const DocumentEdit = () => {
    return (
        <Box sx={{ p: 2 }}>
            <Typography variant="h5" fontWeight="bold" gutterBottom>
                Edit Document
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
                    Edit
                </Typography>
            </Breadcrumbs>

            <Card sx={{ borderRadius: 3, boxShadow: 3 }}>
                <CardContent>
                    <Edit title={false} mutationMode="pessimistic" redirect="list">
                        <SimpleForm sx={{ maxWidth: 600 }}>
                            <TextInput source="id" disabled fullWidth />
                            <NumberInput source="astra_id" label="Astra ID" validate={[required()]} fullWidth />
                            <NumberInput source="document_type_id" label="Document Type ID" validate={[required()]} fullWidth />
                            <TextInput source="document_type_name" label="Document Type Name" fullWidth />
                            <FileInput source="file" label="Upload Document" fullWidth>
                                <FileField source="src" title="title" />
                            </FileInput>
                            <BooleanInput source="submitted" label="Submitted" />
                        </SimpleForm>
                    </Edit>
                </CardContent>
            </Card>
        </Box>
    );
};