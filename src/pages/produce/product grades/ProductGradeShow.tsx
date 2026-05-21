import { Show, SimpleShowLayout, TextField } from "react-admin";
import { Box, Typography, Breadcrumbs, Link } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

export const ProductGradeShow = () => (
    <Box>
        <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb" sx={{ mb: 2, mt: 2 }}>
            <Link color="inherit" href="/" underline="hover">
                Home
            </Link>
            <Link color="inherit" href="#/product-grades" underline="hover">
                Product Grades
            </Link>
            <Typography color="text.primary">Show</Typography>
        </Breadcrumbs>
        <Show>
            <SimpleShowLayout>
                <TextField source="name" label="Name" />
                <TextField source="description" label="Description" />
            </SimpleShowLayout>
        </Show>
    </Box>
);