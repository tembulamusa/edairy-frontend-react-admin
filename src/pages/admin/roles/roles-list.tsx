import { useMemo, useState } from "react";
import {
    List,
    DataTable,
    useRecordContext,
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
} from "@mui/material";

type RoleRecord = {
    Name?: string;
    Permissions?: Array<string | { Name?: string; name?: string; PermissionName?: string }>;
};

const getPermissionName = (permission: RoleRecord["Permissions"][number]) => {
    if (typeof permission === "string") return permission;
    return permission?.Name || permission?.name || permission?.PermissionName || "";
};

const PermissionPreview = ({
    onOpen,
}: {
    onOpen: (record: RoleRecord) => void;
}) => {
    const record = useRecordContext<RoleRecord>();
    const permissions = (record?.Permissions || []).map(getPermissionName).filter(Boolean);

    if (!record) return null;

    return (
        <Button
            variant="text"
            size="small"
            onClick={() => onOpen(record)}
            sx={{ textTransform: "none", justifyContent: "flex-start", px: 0 }}
        >
            <Stack direction="row" flexWrap="wrap" gap={1}>
                {permissions.length > 0 ? (
                    <>
                        {permissions.slice(0, 3).map((permission) => (
                            <Chip key={permission} label={permission} size="small" />
                        ))}
                        {permissions.length > 3 ? (
                            <Chip
                                size="small"
                                variant="outlined"
                                label={`and ${permissions.length - 3} more`}
                            />
                        ) : null}
                    </>
                ) : (
                    <Typography variant="body2" color="text.secondary">
                        No permissions
                    </Typography>
                )}
            </Stack>
        </Button>
    );
};

export const RoleList = () => {
    const [open, setOpen] = useState(false);
    const [selectedRole, setSelectedRole] = useState<RoleRecord | null>(null);

    const permissions = useMemo(() => {
        const names = (selectedRole?.Permissions || [])
            .map(getPermissionName)
            .filter(Boolean);

        return names;
    }, [selectedRole]);

    const handleOpen = (record: RoleRecord) => {
        setSelectedRole(record);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <List title="Roles">
                <DataTable>
                    <DataTable.Col source="Name" label="Name" />
                    <DataTable.Col label="Permissions">
                        <PermissionPreview onOpen={handleOpen} />
                    </DataTable.Col>
                </DataTable>
            </List>

            <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
                <DialogTitle>{`${selectedRole?.Name || "Role"} permissions`}</DialogTitle>
                <DialogContent dividers>
                    <Stack spacing={2}>

                        <div>
                            <Typography variant="overline" color="text.secondary">
                                Permissions
                            </Typography>
                            <Stack direction="row" flexWrap="wrap" gap={1} mt={1}>
                                {permissions.length > 0 ? (
                                    permissions.map((permission) => (
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
