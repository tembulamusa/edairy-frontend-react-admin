import { List, Datagrid, TextField, EditButton, DeleteButton, SearchInput } from "react-admin";
import { Box, Typography, Breadcrumbs, Link } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

const productGradeFilters = [
    <SearchInput source="q" alwaysOn />
];

export const ProductGradesList = () => (
    <Box>
        <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb" sx={{ mb: 2, mt: 2 }}>
            <Link color="inherit" href="/" underline="hover">
                Home
            </Link>
            <Typography color="text.primary">Product Grades</Typography>
        </Breadcrumbs>
        <List filters={productGradeFilters}>
            <Datagrid rowClick="edit">
                <TextField source="name" label="Name" />
                <TextField source="description" label="Description" />
                <EditButton />
                <DeleteButton />
            </Datagrid>
        </List>
    </Box>
);
