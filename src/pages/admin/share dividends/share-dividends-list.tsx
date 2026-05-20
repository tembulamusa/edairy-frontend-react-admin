import { List, DataTable, FunctionField, TextInput, required, EditButton, DeleteButton, useResourceContext } from 'react-admin';
import { CreateButton } from '../../../components/forms/FormUtils';
import { Box, Card, CardContent, Typography, Stack, Tooltip } from '@mui/material';
import Grid from '@mui/material/Grid';
import { useCan } from '../../../components/permissions/user-can';

type ShareDividendRecord = {
    member_no?: string;
    first_name?: string;
    last_name?: string;
};

const formatMember = (firstName?: string, lastName?: string, memberNo?: string) => {
    const name = [firstName, lastName].filter(Boolean).join(" ");

    if (name && memberNo) return `${name}(${memberNo})`;
    if (name) return name;
    if (memberNo) return `(${memberNo})`;

    return "";
};

export const ShareDividendList = () => {
    const can = useCan();
    const resource = useResourceContext() ?? "share-dividends";
    const canCreate = can(resource, "create");
    const canEdit = can(resource, "update");
    const canDelete = can(resource, "delete");

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
                                Share Dividends
                            </Typography>

                            <Typography
                                variant="body2"
                                color="text.secondary"
                            >
                                Manage all Share Dividends records
                            </Typography>
                        </Grid>

                        <Grid size={{ xs: 12, md: "auto" }}>
                            {canCreate && (
                                <CreateButton 
                                    resource="share-dividends" 
                                    title="Share Dividend"
                                    sx={{
                                        backgroundColor: 'primary.main',
                                        color: 'white',
                                        '&:hover': {
                                            backgroundColor: 'primary.dark',
                                        },
                                    }}
                                >
                                    <TextInput source="member_no" validate={required()} fullWidth />
                                    <TextInput source="fiscal_year" validate={required()} fullWidth />
                                    <TextInput source="period" validate={required()} fullWidth />
                                    <TextInput source="share_units" validate={required()} fullWidth />
                                    <TextInput source="rate_per_share" validate={required()} fullWidth />
                                </CreateButton>
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
                            <DataTable.Col label="Member">
                                <FunctionField
                                    render={(record: ShareDividendRecord) =>
                                        formatMember(record?.first_name, record?.last_name, record?.member_no)
                                    }
                                />
                            </DataTable.Col>
                            <DataTable.Col source="fiscal_year" label="Fiscal Year" />
                            <DataTable.Col source="period" label="Period" />
                            <DataTable.Col source="share_units" label="Share Units" />
                            <DataTable.Col source="status" label="Status" />
                            <DataTable.Col source="rate_per_share" label="Rate Per Share" />
                            <DataTable.Col source="tax_amount" label="Tax Amount" />
                            <DataTable.Col source="net_amount" label="Net Amount" />
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

                                    {canDelete && (
                                        <Tooltip title="Delete Record">
                                            <span>
                                                <DeleteButton
                                                    label={false}
                                                    mutationMode="pessimistic"
                                                    confirmTitle="⚠️ Confirm deletion"
                                                    confirmContent="This will permanently remove the record."
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
