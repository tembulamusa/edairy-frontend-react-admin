import { List, DataTable, FunctionField, useResourceContext, EditButton, DeleteButton, CreateButton } from 'react-admin';
import { Box, Card, CardContent, Typography, Stack, Tooltip } from '@mui/material';
import Grid from '@mui/material/Grid';
import { useCan } from '../../../components/permissions/user-can';
import { ListBreadcrumbs } from '../../../../ListBreadcrumbs';

type DividendDeclarationRecord = {
    ApprovedBy?: number;
};

const formatApprovedBy = (approvedBy?: number) => {
    if (!approvedBy) return "Not approved";
    return String(approvedBy);
};

export const DividendDeclarationList = () => {
    const can = useCan();
    const resource = useResourceContext() ?? "dividend-declarations";
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
                                Dividend Declarations
                            </Typography>

                            <Typography
                                variant="body2"
                                color="text.secondary"
                            >
                                Manage all dividend declaration records
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
                            <DataTable.Col source="fiscal_year" label="Fiscal Year" />
                            <DataTable.Col source="period" label="Period" />
                            <DataTable.Col source="total_pool" label="Total Pool" />
                            <DataTable.Col source="rate_per_share" label="Rate Per Share" />
                            <DataTable.Col source="calculation_type" label="Calculation Type" />
                            <DataTable.Col source="status" label="Status" />
                            <DataTable.Col label="Approved By">
                                <FunctionField
                                    render={(record: DividendDeclarationRecord) =>
                                        formatApprovedBy(record?.approved_by)
                                    }
                                />
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

                                    {canDelete && (
                                        <Tooltip title="Delete Record">
                                            <span>
                                                <DeleteButton
                                                    label={false}
                                                    confirmColor="error"
                                                    mutationMode="pessimistic"
                                                    confirmTitle="⚠️ Confirm deletion"
                                                    confirmContent="This will permanently remove the record."
                                                    confirmProps={{
                                                        sx: {
                                                            '& .RaConfirm-confirm-button': {
                                                                color: 'error.main !important',
                                                            },
                                                            '& .RaConfirm-title': {
                                                                color: 'error.main !important',
                                                            },
                                                            '& .RaConfirm-content': {
                                                                color: 'error.main !important',
                                                            },
                                                        },
                                                    }}
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
