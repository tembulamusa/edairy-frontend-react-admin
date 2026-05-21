import { useState } from "react";
import { List, DataTable, EditButton, DeleteButton, useResourceContext, CreateButton, Button, BooleanField, ImageField, ShowButton, TextInput, ReferenceInput, SelectInput } from 'react-admin';
import { Box, Card, CardContent, Typography, Stack, Tooltip } from '@mui/material';
import Grid from '@mui/material/Grid';
import { useCan } from '../../../components/permissions/user-can';


import { MemberCreateWizard } from "./create wizard/member-create-wizard";

const MemberFilters = [
    <TextInput
        source="member_no"
        label="Member No"
        alwaysOn
    />,

    <TextInput
        source="primary_phone"
        label="Phone"
        alwaysOn
    />,

    <ReferenceInput
        source="member_type_id"
        reference="member-types"
        alwaysOn
    >
        <SelectInput optionText="name" label="Member Type" />
    </ReferenceInput>,

    <ReferenceInput
        source="route_id"
        reference="routes"
        alwaysOn
    >
        <SelectInput optionText="name" label="Route" />
    </ReferenceInput>,
];

export const MemberList = () => {
    const [open, setOpen] = useState(false);
    const can = useCan();
    const resource = useResourceContext() ?? "members";
    const canEdit = can(resource, "update");
    const canDelete = can(resource, "delete");
    const canCreate = can(resource, "create");


    return (
        <Box sx={{ p: 2 }}>
            <Card
                sx={{
                    borderRadius: 3,
                    boxShadow: 3,
                    overflow: "hidden",
                }}
            >
                <CardContent>
                    <Grid
                        container
                        spacing={2}
                        alignItems="center"
                        justifyContent="space-between"
                        mb={2}
                    >
                        <Grid size={{ xs: 12, md: 6 }}>
                            <Typography
                                variant="h5"
                                fontWeight="bold"
                            >
                                Members
                            </Typography>

                            <Typography
                                variant="body2"
                                color="text.secondary"
                            >
                                Manage all member records
                            </Typography>
                        </Grid>

                        <Grid size={{ xs: 12, md: "auto" }}>
                            {canCreate && (
                                <CreateButton
                                    variant="contained"
                                    sx={{
                                        backgroundColor: 'primary.main',
                                        color: 'white',
                                        '&:hover': {
                                            backgroundColor: 'primary.dark',
                                        },
                                    }}
                                />
                            )}
                        </Grid>
                    </Grid>
                    <List
                        title="Members"
                        actions={false}
                        filters={MemberFilters}
                    >
                        <DataTable
                            rowClick="show"
                            sx={{
                                '& .RaDataTable-headerCell': {
                                    fontWeight: "bold",
                                    backgroundColor: "#f5f5f5",
                                },
                            }}
                        >

                            <DataTable.Col source="member_no" />
                            <DataTable.Col source="member_type_name" label="Type" />
                            <DataTable.Col source="route_name" label="Route" />
                            <DataTable.Col source="first_name" />
                            <DataTable.Col source="last_name" />
                            {/* <DataTable.Col source="gender" /> */}

                            <DataTable.Col source="primary_phone" label="Phone" />
                            {/* <DataTable.Col label="ID Back Photo">
                            <ImageField
                                source="id_front_photo"
                                sx={{
                                    "& .RaImageField-image": {
                                        width: 100,
                                        height: 50,
                                        objectFit: "cover",
                                        borderRadius: 2,
                                        border: "1px solid #ddd",
                                    },
                                }}
                            />
                        </DataTable.Col>
                        <DataTable.Col label="ID Back Photo">
                            <ImageField
                                source="id_back_photo"
                                sx={{
                                    "& .RaImageField-image": {
                                        width: 100,
                                        height: 50,
                                        objectFit: "cover",
                                        borderRadius: 2,
                                        border: "1px solid #ddd",
                                    },
                                }}
                            />
                        </DataTable.Col> */}


                            <DataTable.Col source="cashout_enrolled" label="Loan Status">
                                <BooleanField source="cashout_enrolled" />
                            </DataTable.Col>
                            <DataTable.Col source="status" />


                            <DataTable.Col label="Actions">
                                <Stack
                                    direction="row"
                                    spacing={1}
                                    alignItems="center"
                                >
                                    {(
                                        <Tooltip title="View Details">
                                            <span>
                                                <ShowButton
                                                    label={false}
                                                    sx={{
                                                        minWidth: 10,
                                                    }}
                                                />
                                            </span>
                                        </Tooltip>
                                    )}


                                    {canEdit && (
                                        <Tooltip title="Edit Record">
                                            <span>
                                                <EditButton
                                                    label={false}
                                                    sx={{
                                                        minWidth: 10,
                                                    }}
                                                />
                                            </span>
                                        </Tooltip>
                                    )}

                                    {canDelete && (
                                        <Tooltip title="Delete Record">
                                            <span>
                                                <DeleteButton
                                                    label={false}
                                                    mutationMode="pessimistic"
                                                    confirmTitle="⚠️ Confirm deletion"
                                                    confirmContent="This will permanently remove the record."
                                                    sx={{
                                                        minWidth: 10,
                                                    }}
                                                />
                                            </span>
                                        </Tooltip>
                                    )}
                                </Stack>
                            </DataTable.Col>
                        </DataTable>
                    </List>
                </CardContent>
            </Card>
        </Box>



    );
};
