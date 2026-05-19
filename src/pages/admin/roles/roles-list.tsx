import { useMemo, useState } from "react";
import {
    ListBase,
    DataTable,
    useRecordContext,
    CreateButton,
    EditButton,
    DeleteButton,
    useResourceContext,
    FilterButton,
    ExportButton,
    TextInput,
    Pagination,
} from "react-admin";
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Button,
    Stack,
    Typography,
    Tooltip,
    Chip,
    Box,
    Card,
    CardContent,
} from "@mui/material";
import Grid from '@mui/material/Grid';
import { useCan } from "../../../components/permissions/user-can";
import { ListBreadcrumbs } from "../../../../ListBreadcrumbs";

const roleFilters = [
    <TextInput label="Search" source="q" alwaysOn />,
];

type RoleRecord = {
    Name?: string;
    Permissions?: Array<string | { Name?: string; name?: string; PermissionName?: string }>;
    permissions?: Array<string | { Name?: string; name?: string; PermissionName?: string }>;
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
    const permissions = (record?.permissions || []).map(getPermissionName).filter(Boolean);

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
    const can = useCan();
    const resource = useResourceContext() ?? "roles";
    const canEdit = can(resource, "update");
    const canDelete = can(resource, "delete");
    const canCreate = can(resource, "create");

    const permissions = useMemo(() => {
        const names = (selectedRole?.permissions || selectedRole?.Permissions || [])
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
        <Box sx={{ p: 2 }}>
            <ListBase perPage={25} filters={roleFilters}>
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
                                    Roles
                                </Typography>

                                <Typography
                                    variant="body2"
                                    color="text.secondary"
                                >
                                    Manage all user roles and permissions
                                </Typography>
                            </Grid>

                            <Grid size={{ xs: 12, md: "auto" }}>
                                <Stack direction="row" spacing={1} alignItems="center">
                                    <FilterButton />
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
                                    <ExportButton />
                                </Stack>
                            </Grid>
                        </Grid>

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
                            <DataTable.Col label="Permissions">
                                <PermissionPreview onOpen={handleOpen} />
                            </DataTable.Col>
                            <DataTable.Col label="Actions">
                                <Stack
                                    direction="row"
                                    spacing={1}
                                    alignItems="center"
                                >
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
                        <Pagination sx={{ mt: 2 }} />
                    </CardContent>
                </Card>

                <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
                    <DialogTitle>{`${selectedRole?.Name || selectedRole?.name || "Role"} permissions`}</DialogTitle>
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
            </ListBase>
        </Box>
    );
};
