import { List, DataTable, useResourceContext, ShowButton, TextInput } from 'react-admin';
import { Box, Card, CardContent, Typography, Stack, Tooltip } from '@mui/material';
import Grid from '@mui/material/Grid';

const MissingDetailsFilters = [
    <TextInput source="member_no" label="Member No" alwaysOn />,
];

export const MemberWithMissingDetailsList = () => {
    const resource = useResourceContext() ?? "member-with-missing-details";

    return (
        <Box sx={{ p: 2 }}>
            <Card sx={{ borderRadius: 3, boxShadow: 3, overflow: "hidden" }}>
                <CardContent>
                    <Grid container spacing={2} alignItems="center" justifyContent="space-between" mb={2}>
                        <Grid size={{ xs: 12, md: 12 }}>
                            <Typography variant="h5" fontWeight="bold">Members with Missing Details</Typography>
                            <Typography variant="body2" color="text.secondary">Report of members requiring profile updates (Phone, Photo, ID, etc.)</Typography>
                        </Grid>
                    </Grid>
                    <List title={false} filters={MissingDetailsFilters} actions={false}>
                        <DataTable rowClick="show" sx={{ '& .RaDataTable-headerCell': { fontWeight: "bold", backgroundColor: "#f5f5f5" } }}>
                            <DataTable.Col source="member_no" label="Member No" />
                            <DataTable.Col source="first_name" label="First Name" />
                            <DataTable.Col source="last_name" label="Last Name" />
                            <DataTable.Col source="primary_phone" label="Phone" />
                            <DataTable.Col source="route_name" label="Route" />
                            <DataTable.Col label="Actions">
                                <Stack direction="row" spacing={1} alignItems="center">
                                    <Tooltip title="View Profile">
                                        <span>
                                            <ShowButton label={false} sx={{ minWidth: 10 }} resource="members" />
                                        </span>
                                    </Tooltip>
                                </Stack>
                            </DataTable.Col>
                        </DataTable>
                    </List>
                </CardContent>
            </Card>
        </Box>
    );
};
