import {
    List,
    DataTable,
    DateField,
    EditButton,
    DeleteButton,
    useResourceContext,
} from 'react-admin';
import { Box, Card, CardContent, Typography, Stack, Tooltip } from '@mui/material';
import Grid from '@mui/material/Grid';
import { useCan } from '../../../components/permissions/user-can';
import { ListBreadcrumbs } from '../../../../ListBreadcrumbs';
import { ListCreateButton } from '../../../components/forms/ListCreateButton';

export const PaymentModeList = () => {
    const can = useCan();
    const resource = useResourceContext() ?? 'payment-modes';
    const canEdit = can(resource, 'update');
    const canDelete = can(resource, 'delete');
    const canCreate = can(resource, 'create');

    return (
        <Box sx={{ p: 2 }}>
            <ListBreadcrumbs />
            <Card sx={{ borderRadius: 3, boxShadow: 3, overflow: 'hidden' }}>
                <CardContent>
                    <Grid
                        container
                        spacing={2}
                        alignItems="center"
                        justifyContent="space-between"
                        mb={2}
                    >
                        <Grid size={{ xs: 12, md: 6 }}>
                            <Typography variant="h5" fontWeight="bold">
                                Payment Modes
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Manage all payment method records
                            </Typography>
                        </Grid>
                        <Grid size={{ xs: 12, md: 'auto' }}>
                            {canCreate && (
                                <ListCreateButton
                                    resource={resource}
                                    sx={{
                                        backgroundColor: 'primary.main',
                                        color: 'white',
                                        '&:hover': { backgroundColor: 'primary.dark' },
                                    }}
                                />
                            )}
                        </Grid>
                    </Grid>
                    <List title={false} actions={false}>
                        <DataTable
                            rowClick="edit"
                            sx={{
                                '& .RaDataTable-headerCell': {
                                    fontWeight: 'bold',
                                    backgroundColor: '#f5f5f5',
                                },
                            }}
                        >
                            <DataTable.Col source="created_at" label="Created At">
                                <DateField source="created_at" />
                            </DataTable.Col>
                            <DataTable.Col source="code" label="Code" />
                            <DataTable.Col source="name" label="Name" />
                            <DataTable.Col label="Actions">
                                <Stack direction="row" spacing={1} alignItems="center">
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
                                                    confirmColor="error"
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
                    </List>
                </CardContent>
            </Card>
        </Box>
    );
};
