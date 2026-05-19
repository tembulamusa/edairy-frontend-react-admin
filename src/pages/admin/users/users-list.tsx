import { useMemo, useState } from "react";
import {
    List,
    DataTable,
    useRecordContext,
    EditButton,
    DeleteButton,
    useResourceContext,
    CreateButton,
} from "react-admin";
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Button,
    Stack,
    Typography,
    Chip,
    Divider,
    Box,
    Card,
    CardContent,
    Tooltip,
} from "@mui/material";
import Grid from '@mui/material/Grid';
import { useCan } from "../../../components/permissions/user-can";

type NamedItem = {
    Name?: string;
    name?: string;
    PermissionName?: string;
};

type UserRecord = {
    Name?: string;
    Roles?: Array<string | NamedItem> | null;
    Permissions?: Array<string | NamedItem> | null;
    [key: string]: any;
};

const getItemName = (item: string | NamedItem) => {
    if (typeof item === "string") return item;
    return item?.Name || item?.name || item?.PermissionName || "";
};

const PreviewCell = ({
    source,
    onOpen,
    emptyLabel,
}: {
    source: string;
    onOpen: (record: UserRecord) => void;
    emptyLabel: string;
}) => {
    const record = useRecordContext<UserRecord>();

    if (!record) return null;

    const items = (record[source] || []).map(getItemName).filter(Boolean);
    const previewNames = items.slice(0, 3);
    const more = items.length > 3 ? items.length - 3 : 0;

    return (
        <Button
            variant="text"
            size="small"
            onClick={() => onOpen(record)}
            sx={{ textTransform: "none", justifyContent: "flex-start", px: 0 }}
        >
            <Stack direction="row" flexWrap="wrap" gap={1}>
                {previewNames.length > 0 ? (
                    <>
                        {previewNames.map((name: string) => (
                            <Chip key={name} label={name} size="small" />
                        ))}
                        {more > 0 ? (
                            <Chip
                                size="small"
                                variant="outlined"
                                label={`and ${more} more`}
                            />
                        ) : null}
                    </>
                ) : (
                    <Typography variant="body2" color="text.secondary">
                        {emptyLabel}
                    </Typography>
                )}
            </Stack>
        </Button>
    );
};

export const UserList = () => {
    const can = useCan();
    const resource = useResourceContext() ?? "users";
    const canEdit = can(resource, "update");
    const canDelete = can(resource, "delete");
    const canCreate = can(resource, "create");
    const [open, setOpen] = useState(false);
    const [selectedUser, setSelectedUser] = useState<UserRecord | null>(null);

    const roleNames = useMemo(
        () => (selectedUser?.Roles || selectedUser?.roles || []).map(getItemName).filter(Boolean),
        [selectedUser]
    );

    const permissionNames = useMemo(
        () => (selectedUser?.Permissions || selectedUser?.permissions || []).map(getItemName).filter(Boolean),
        [selectedUser]
    );

    const handleOpen = (record: UserRecord) => {
        setSelectedUser(record);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

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
                                Users
                            </Typography>

                            <Typography
                                variant="body2"
                                color="text.secondary"
                            >
                                Manage all users records
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
                            <DataTable.Col source="name" label="Name" />
                            <DataTable.Col label="Roles">
                                <PreviewCell source="roles" onOpen={handleOpen} emptyLabel="No roles" />
                            </DataTable.Col>
                            <DataTable.Col label="Permissions">
                                <PreviewCell source="permissions" onOpen={handleOpen} emptyLabel="No permissions" />
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

            <Dialog open={open} onClose={handleClose} fullWidth maxWidth="md">
                <DialogTitle>{`${selectedUser?.Name || selectedUser?.name || "User"} details`}</DialogTitle>
                <DialogContent dividers>
                    <Stack spacing={2}>
                        <div>
                            <Typography variant="overline" color="text.secondary">
                                User Name
                            </Typography>
                            <Typography variant="h6">
                                {selectedUser?.Name || selectedUser?.name || "Unnamed user"}
                            </Typography>
                        </div>

                        <Divider />

                        <div>
                            <Typography variant="overline" color="text.secondary">
                                Roles
                            </Typography>
                            <Stack direction="row" flexWrap="wrap" gap={1} mt={1}>
                                {roleNames.length > 0 ? (
                                    roleNames.map((role: string) => <Chip key={role} label={role} />)
                                ) : (
                                    <Typography variant="body2" color="text.secondary">
                                        No roles assigned.
                                    </Typography>
                                )}
                            </Stack>
                        </div>

                        <Divider />

                        <div>
                            <Typography variant="overline" color="text.secondary">
                                Permissions
                            </Typography>
                            <Stack direction="row" flexWrap="wrap" gap={1} mt={1}>
                                {permissionNames.length > 0 ? (
                                    permissionNames.map((permission: string) => (
                                        <Chip key={permission} label={permission} />
                                    ))
                                ) : (
                                    <Typography variant="body2" color="text.secondary">
                                        No permissions assigned.
                                    </Typography>
                                )}
                            </Stack>
                        </div>
                    </Stack>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Close</Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
};
