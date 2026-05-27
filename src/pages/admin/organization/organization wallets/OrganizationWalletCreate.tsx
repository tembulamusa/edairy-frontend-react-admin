import {
    Create,
    SimpleForm,
    TextInput,
    required,
} from "react-admin";
import { Box, Card, CardContent, Typography, Breadcrumbs, Link as MuiLink } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

export const OrganizationWalletCreate = () => {
    return (
        <Box sx={{ p: 2 }}>
            <Typography variant="h5" fontWeight="bold" gutterBottom>
                Create Organization Wallet
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
                <MuiLink underline="hover" color="inherit" href="/organization-wallets">
                    Organization Wallets
                </MuiLink>
                <Typography color="text.primary" fontWeight="bold">
                    Create
                </Typography>
            </Breadcrumbs>

            <Card sx={{ borderRadius: 3, boxShadow: 3 }}>
                <CardContent>
                    <Create title={false} redirect="list">
                        <SimpleForm sx={{ maxWidth: 600 }}>
                            <TextInput source="wallet_id" label="Wallet ID" validate={[required()]} fullWidth />
                            <TextInput source="wallet_name" label="Wallet Name" validate={[required()]} fullWidth />
                            <TextInput source="wallet_type_name" label="Wallet Type Name" fullWidth />
                        </SimpleForm>
                    </Create>
                </CardContent>
            </Card>
        </Box>
    );
};