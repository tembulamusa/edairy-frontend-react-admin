import { Create, SimpleForm, TextInput } from "react-admin";
import { Box, Typography, Breadcrumbs, Link } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

export const ProductGradeCreate = () => (
    <Box>
        <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb" sx={{ mb: 2, mt: 2 }}>
            <Link color="inherit" href="/" underline="hover">
                Home
            </Link>
            <Link color="inherit" href="#/product-grades" underline="hover">
                Product Grades
            </Link>
            <Typography color="text.primary">Create</Typography>
        </Breadcrumbs>
        <Create>
            <SimpleForm>
                <TextInput source="name" label="Name" />
                <TextInput source="description" label="Description" multiline rows={3} />
            </SimpleForm>
        </Create>
    </Box>
);