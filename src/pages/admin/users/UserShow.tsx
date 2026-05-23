import * as React from 'react';
import { Show, SimpleShowLayout, TextField, EmailField, useRecordContext } from 'react-admin';
import { Card, CardContent, Typography, Divider, Box, Chip, Stack } from '@mui/material';
import Grid from '@mui/material/Grid';

const RolesList = () => {
    const record = useRecordContext();
    if (!record) return null;
    
    const roles = record.roles || record.Roles || [];
    
    return (
        <Stack direction="row" flexWrap="wrap" gap={1} mt={1}>
            {roles.length > 0 ? (
                roles.map((role: any, index: number) => {
                    const name = typeof role === "string" ? role : role?.Name || role?.name || "";
                    return <Chip key={index} label={name} size="small" />;
                })
            ) : (
                <Typography variant="body2" color="text.secondary">
                    No roles assigned.
                </Typography>
            )}
        </Stack>
    );
};

export const UserShow = () => (
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
                            User Details
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            View the details and roles of the user.
                        </Typography>
                    </Grid>
                </Grid>

                <Divider sx={{ mb: 4 }} />

                <SimpleShowLayout>
                    <TextField source="id" label="ID" />
                    <TextField source="name" label="Full Name" />
                    <EmailField source="email" label="Email Address" />
                    
                    <Box mt={2}>
                        <Typography variant="overline" color="text.secondary" sx={{ mb: 1, display: 'block' }}>
                            Roles
                        </Typography>
                        <RolesList />
                    </Box>
                </SimpleShowLayout>
            </CardContent>
        </Card>
    </Show>
);