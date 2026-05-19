import { useMemo, useState } from "react";
import {
    List,
    DataTable,
    useRecordContext,
    EditButton,
    DeleteButton,
    useResourceContext,
} from "react-admin";
import Tooltip from '@mui/material/Tooltip';
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
} from "@mui/material";
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
    source: "Roles" | "Permissions";
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
                        {previewNames.map((name) => (
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
    const resource = useResourceContext() ?? "none";
    const canEdit = can(resource, "update");
    const canDelete = can(resource, "delete");
    const canCreate = can(resource, "create");
    const [open, setOpen] = useState(false);
    const [selectedUser, setSelectedUser] = useState<UserRecord | null>(null);

    const roleNames = useMemo(
        () => (selectedUser?.Roles || []).map(getItemName).filter(Boolean),
        [selectedUser]
    );

    const permissionNames = useMemo(
        () => (selectedUser?.Permissions || []).map(getItemName).filter(Boolean),
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
        <>
            <List
                title="Users"
            >
                <DataTable>
                    <DataTable.Col source="name" label="Name" />
                    <DataTable.Col label="Roles">
                        <PreviewCell source="roles" onOpen={handleOpen} emptyLabel="No roles" />
                    </DataTable.Col>
                    <DataTable.Col label="Permissions">
                        <PreviewCell source="permissions" onOpen={handleOpen} emptyLabel="No permissions" />
                    </DataTable.Col>
                    <DataTable.Col label="Actions">
                        {canEdit && (
                            <Tooltip title="Edit Record">
                                <span>
                                    <EditButton label={false} />
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
                    </DataTable.Col>
                </DataTable>
            </List>

            <Dialog open={open} onClose={handleClose} fullWidth maxWidth="md">
                <DialogTitle>{`${selectedUser?.Name || "User"} details`}</DialogTitle>
                <DialogContent dividers>
                    <Stack spacing={2}>
                        <div>
                            <Typography variant="overline" color="text.secondary">
                                User Name
                            </Typography>
                            <Typography variant="h6">
                                {selectedUser?.Name || "Unnamed user"}
                            </Typography>
                        </div>

                        <Divider />

                        <div>
                            <Typography variant="overline" color="text.secondary">
                                Roles
                            </Typography>
                            <Stack direction="row" flexWrap="wrap" gap={1} mt={1}>
                                {roleNames.length > 0 ? (
                                    roleNames.map((role) => <Chip key={role} label={role} />)
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
                                    permissionNames.map((permission) => (
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
        </>
    );
};
