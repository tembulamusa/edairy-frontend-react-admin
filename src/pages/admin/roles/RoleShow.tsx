import * as React from 'react';
import { Show, SimpleShowLayout, TextField, useRecordContext } from 'react-admin';
import { Card, CardContent, Typography, Divider, Box, Chip, Stack } from '@mui/material';
import Grid from '@mui/material/Grid';

const PermissionsList = () => {
    const record = useRecordContext();
    if (!record) return null;
    
    const permissions = record.permissions || record.Permissions || [];
    
    return (
        <Stack direction="row" flexWrap="wrap" gap={1} mt={1}>
            {permissions.length > 0 ? (
                permissions.map((permission: any, index: number) => {
                    const name = typeof permission === "string" ? permission : permission?.Name || permission?.name || permission?.PermissionName || "";
                    return <Chip key={index} label={name} size="small" />;
                })
            ) : (
                <Typography variant="body2" color="text.secondary">
                    No permissions assigned.
                </Typography>
            )}
        </Stack>
    );
};

export const RoleShow = () => (
    <Show title={false}>
        <Card
            elevation={0}
            sx={{
                borderRadius: 3,
                width: '100%',
                overflow: "hidden",
            }}
        >
            <CardContent sx={{ p: 4 }}>
                <Grid
                    container
                    spacing={2}
                    alignItems="center"
                    justifyContent="space-between"
                    mb={2}
                >
                    <Grid size={{ xs: 12, md: 12 }}>
                        <Typography variant="h5" fontWeight="bold">
                            Role Details
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            View the details and permissions of the role.
                        </Typography>
                    </Grid>
                </Grid>

                <Divider sx={{ mb: 4 }} />

                <SimpleShowLayout>
                    <TextField source="id" label="ID" />
                    <TextField source="name" label="Role Name" />
                    <TextField source="guard_name" label="Guard Name" />
                    
                    <Box mt={2}>
                        <Typography variant="overline" color="text.secondary" sx={{ mb: 1, display: 'block' }}>
                            Permissions
                        </Typography>
                        <PermissionsList />
                    </Box>
                </SimpleShowLayout>
            </CardContent>
        </Card>
    </Show>
);