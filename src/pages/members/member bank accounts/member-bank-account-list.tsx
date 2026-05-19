import { List, DataTable, EditButton, DeleteButton, useResourceContext, CreateButton, ShowButton, TextInput, ReferenceInput, SelectInput } from 'react-admin';
import { Box, Card, CardContent, Typography, Stack, Tooltip } from '@mui/material';
import Grid from '@mui/material/Grid';
import { useCan } from '../../../components/permissions/user-can';

const MemberBankAccountFilters = [
    <TextInput
        source="member_no"
        label="Member No"
        alwaysOn
    />,
    <TextInput
        source="first_name"
        label="First Name"
        alwaysOn
    />,
    <TextInput
        source="last_name"
        label="Last Name"
        alwaysOn
    />,
    <ReferenceInput
        source="bank_id"
        reference="banks"
        alwaysOn >
        <SelectInput optionText="bank_name" label="Banks" />

    </ReferenceInput>,
    <TextInput
        source="account_number"
        label="Account Number"
        alwaysOn
    />,
];

export const MemberBankAccountList = () => {
    const can = useCan();
    const resource = useResourceContext() ?? "member-bank-accounts";
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
                                Member Bank Accounts
                            </Typography>

                            <Typography
                                variant="body2"
                                color="text.secondary"
                            >
                                Manage all member bank account records
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
                        filters={MemberBankAccountFilters}
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
                            <DataTable.Col source="member_no" label="Member Number" />
                             <DataTable.Col source="first_name" label="First Name" />
                            <DataTable.Col source="last_name" label="Last Name" />
                            <DataTable.Col source="bank_name" label="Bank" />
                            <DataTable.Col source="account_number" label="Account Number" />
                            <DataTable.Col source="account_name" label="Account Name" />

                            <DataTable.Col label="Actions">
                                <Stack direction="row" spacing={1} alignItems="center">
                                    <Tooltip title="View Details">
                                        <span>
                                            <ShowButton label={false} sx={{ minWidth: 10 }} />
                                        </span>
                                    </Tooltip>

                                    {canEdit && (
                                        <Tooltip title="Edit Record">
                                            <span>
                                                <EditButton label={false} sx={{ minWidth: 10 }} />
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
