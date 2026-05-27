import {
    List,
    DataTable,
    EditButton,
    DeleteButton,
    TextInput,
    required,
    useResourceContext,
    TextField,
    DateField,
} from "react-admin";
import { CreateButton } from "../../../../components/forms/FormUtils";
import { Box, Card, CardContent, Typography, Stack, Tooltip } from '@mui/material';
import Grid from '@mui/material/Grid';
import { useCan } from "../../../../components/permissions/user-can";

export const OrganizationWalletsList = () => {
    const can = useCan();
    const resource = useResourceContext() ?? "organization-wallets";
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
                                Organization Wallets
                            </Typography>

                            <Typography
                                variant="body2"
                                color="text.secondary"
                            >
                                Manage all Organization Wallets records
                            </Typography>
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
                            <DataTable.Col source="wallet_type_id" label="Wallet Type ID">
                                <TextField source="wallet_type_id" />
                            </DataTable.Col>
                            <DataTable.Col source="wallet_type_name" label="Wallet Type Name">
                                <TextField source="wallet_type_name" />
                            </DataTable.Col>
                            <DataTable.Col source="wallet_id" label="Wallet ID">
                                <TextField source="wallet_id" />
                            </DataTable.Col>
                            <DataTable.Col source="wallet_name" label="Wallet Name">
                                <TextField source="wallet_name" />
                            </DataTable.Col>
                            <DataTable.Col source="created_at" label="Created At">
                                <DateField source="created_at" />
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