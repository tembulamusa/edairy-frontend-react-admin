import { Create, SimpleForm, TextInput, required, Toolbar, SaveButton, useRedirect, useNotify } from "react-admin";
import { Stack, Typography, Button, Box, Breadcrumbs, Link as MuiLink } from "@mui/material";
import { Link } from "react-router-dom";
import { useFormContext } from "react-hook-form";

const RoleCreateToolbar = () => {
    const redirect = useRedirect();
    const notify = useNotify();
    const { reset } = useFormContext();
    return (
        <Toolbar
            sx={{
                display: 'flex',
                justifyContent: 'space-between',
                backgroundColor: 'rgba(0, 0, 0, 0.05)',
                // Removed explicit horizontal padding from the toolbar itself
                py: 2,
                // borderRadius: 1,
                mt: 0,
                // maxWidth: 500,
                // mb: 4,
                // boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                mx: 'auto',
                border: '1px solid',
                borderColor: 'divider',
                '&.MuiToolbar-root': { minHeight: 'auto' }
            }}
        >
            <Box sx={{ display: 'flex', gap: 1 }}>
                <SaveButton />
                <SaveButton
                    label="Save and Add New"
                    variant="contained"
                    color="primary"
                    mutationOptions={{
                        onSuccess: () => {
                            notify('Role created successfully', { type: 'success' });
                            reset();
                        },
                    }}
                />
            </Box>
            <Button variant="outlined" onClick={() => redirect('/roles')}>
                Cancel
            </Button>
        </Toolbar>
    );
};

export const RoleCreate = () => (
    <Create
        title="Create Role"
        sx={{
            mt: 6,
            '& .RaCreate-main': {
                display: 'flex',
                justifyContent: 'center',
                p: { xs: 2, md: 4 },
            }
        }}
    >
        <Stack spacing={2} sx={{ width: '100%', maxWidth: 500 }}>
            <Breadcrumbs aria-label="breadcrumb">
                <MuiLink component={Link} underline="hover" color="inherit" to="/roles">
                    Roles
                </MuiLink>
                <Typography color="text.primary">Create New Role</Typography>
            </Breadcrumbs>

            <SimpleForm
                toolbar={<RoleCreateToolbar />}
                sx={{
                    // maxWidth: 500,
                    width: '100%',
                    mx: 'auto',
                    // mt: 4,
                    // boxShadow: '0 4px 20px 0 rgba(0,0,0,0.08)',
                    borderRadius: 2,
                    overflow: 'hidden',
                    '& .MuiCardContent-root': { padding: 4 },
                    '& .RaToolbar-root': {
                        margin: 0,
                        padding: '16px 32px', // Apply padding to match CardContent's horizontal padding (4 * 8px = 32px)
                    }
                }}
            >
                <Stack spacing={3} sx={{ width: '100%' }}>
                    <Typography
                        variant="h5"
                        component="h1"
                        sx={{
                            fontWeight: 700,
                            color: 'primary.main',
                            borderBottom: '1px solid',
                            borderColor: 'primary.main',
                            pb: 1,
                            mb: 2,
                            width: '100%'
                        }}
                    >
                        Create New Role
                    </Typography>
                    <TextInput
                        source="name"
                        label="Role Name"
                        validate={required()}
                        variant="outlined" // Changed to outlined variant for a more distinct look
                        fullWidth
                    />
                    <TextInput source="guard_name" defaultValue="web" sx={{ display: "none" }} />
                </Stack>
            </SimpleForm>
        </Stack>
    </Create>
);