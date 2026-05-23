import * as React from 'react';
import {
    List,
    TextInput,
    DataTable,
    CreateButton,
    ShowButton,
    EditButton,
    DeleteButton,
    useResourceContext,
    Pagination,
    FunctionField,
} from 'react-admin';
import { Box, Card, CardContent, Typography, Stack, Tooltip } from '@mui/material';
import Grid from '@mui/material/Grid';
import { useCan } from '../../../components/permissions/user-can';
import { ListBreadcrumbs } from '../../../../ListBreadcrumbs';

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

const ShareDividendFilters = [
    <TextInput label="Search" source="q" alwaysOn />,
];

export const ShareDividendList = () => {
    const can = useCan();
    const resource = useResourceContext() ?? "share-dividends";
    const canEdit = can(resource, "update");
    const canDelete = can(resource, "delete");
    const canCreate = can(resource, "create");

    return (
        <Box sx={{ p: 2 }}>
            <Grid
                container
                spacing={2}
                alignItems="center"
                justifyContent="space-between"
                mb={1}
            >
                <Grid size={{ xs: 12, md: 6 }}>
                    <Typography variant="h5" fontWeight="bold">
                        Share Dividends
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
            <ListBreadcrumbs />
            <Card
                sx={{
                    borderRadius: 3,
                    boxShadow: 3,
                    overflow: "hidden",
                }}
            >
                <CardContent>
                    <List
                        title={false}
                        filters={ShareDividendFilters}
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
                                    <Tooltip title="View Details">
                                        <span>
                                            <ShowButton label={false} sx={{ minWidth: 36 }} />
                                        </span>
                                    </Tooltip>
                                    {canEdit && (
                                        <Tooltip title="Edit Record">
                                            <span>
                                                <EditButton label={false} sx={{ minWidth: 36 }} />
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
                                                    sx={{ minWidth: 36 }}
                                                />
                                            </span>
                                        </Tooltip>
                                    )}
                                </Stack>
                            </DataTable.Col>
                        </DataTable>
                        <Pagination sx={{ mt: 2 }} />
                    </List>
                </CardContent>
            </Card>
        </Box>
    );
};
