
import { List, DataTable, DateField, EditButton, DeleteButton, FunctionField, useResourceContext, CreateButton } from 'react-admin';
import { Box, Card, CardContent, Typography, Stack, Tooltip } from '@mui/material';
import Grid from '@mui/material/Grid';
import { useCan } from '../../../components/permissions/user-can';
import { ListBreadcrumbs } from '../../../../ListBreadcrumbs';

type ShareTransferRecord = {
    FromMemberNo?: string;
    FromMemberFirstName?: string;
    FromMemberLastName?: string;
    ToMemberNo?: string;
    ToMemberFirstName?: string;
    ToMemberLastName?: string;
};

const formatMember = (firstName?: string, lastName?: string, memberNo?: string) => {
    const name = [firstName, lastName].filter(Boolean).join(" ");

    if (name && memberNo) return `${name}(${memberNo})`;
    if (name) return name;
    if (memberNo) return `(${memberNo})`;

    return "";
};

export const ShareTransferList = () => {
    const can = useCan();
    const resource = useResourceContext() ?? "share-transfers";
    const canEdit = can(resource, "update");
    const canDelete = can(resource, "delete");
    const canCreate = can(resource, "create");

    return (
        <Box sx={{ p: 2 }}>
            <ListBreadcrumbs />
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
                                Share Transfers
                            </Typography>

                            <Typography
                                variant="body2"
                                color="text.secondary"
                            >
                                Manage all member share unit transfer records
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
                        title={false}
                        actions={false}
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
                            <DataTable.Col source="created_at" label="Created At">
                                <DateField source="created_at" />
                            </DataTable.Col>
                            <DataTable.Col source="transaction_date" label="Transaction Date">
                                <DateField source="transaction_date" />
                            </DataTable.Col>
                            <DataTable.Col label="From">
                                <FunctionField
                                    render={(record: ShareTransferRecord) => formatMember(record?.from_member_first_name, record?.from_member_last_name, record?.from_member_no)}
                                />
                            </DataTable.Col>
                            <DataTable.Col label="To">
                                <FunctionField
                                    render={(record: ShareTransferRecord) => formatMember(record?.to_member_first_name, record?.to_member_last_name, record?.to_member_no)}
                                />
                            </DataTable.Col>
                            <DataTable.Col source="share_units" label="Share Units" />
                            <DataTable.Col source="transfer_amount" label="Transfer Amount" />
                            <DataTable.Col source="reference_no" label="Reference No" />
                            <DataTable.Col source="status" label="Status" />
                            <DataTable.Col source="approved_by_user_name" label="Approved By User" />
                            <DataTable.Col source="date_approved" label="Date Approved">
                                <DateField source="date_approved" />
                            </DataTable.Col>
                            <DataTable.Col label="Actions">
                                <Stack direction="row" spacing={1} alignItems="center">
                                    {canEdit && (
                                        <Tooltip title="Edit Record">
                                            <span>
                                                <EditButton
                                                    label={false}
                                                    sx={{
                                                        minWidth: 36,
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