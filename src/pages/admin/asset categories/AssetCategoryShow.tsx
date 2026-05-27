import {
    Show,
    SimpleShowLayout,
    TextField,
    NumberField,
} from "react-admin";
import { Box, Card, CardContent, Typography, Breadcrumbs, Link as MuiLink } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

export const AssetCategoryShow = () => {
    return (
        <Box sx={{ p: 2 }}>
            <Typography variant="h5" fontWeight="bold" gutterBottom>
                Asset Category Details
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
                <MuiLink underline="hover" color="inherit" href="/asset-categories">
                    Asset Categories
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
                            <TextField source="name" label="Category Name" />
                            <TextField source="description" label="Description" />
                            <NumberField source="asset_count" label="Asset Count" />
                        </SimpleShowLayout>
                    </Show>
                </CardContent>
            </Card>
        </Box>
    );
};