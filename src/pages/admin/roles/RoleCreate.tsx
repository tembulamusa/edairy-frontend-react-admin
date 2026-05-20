import * as React from 'react';
import { useState, useEffect } from 'react';
import {
    Create,
    SimpleForm,
    TextInput,
    required,
    Toolbar,
    SaveButton,
    useNotify,
    useRedirect,
    useGetList,
    useInput,
    Loading,
} from 'react-admin';

import {
    Card,
    CardContent,
    Typography,
    Divider,
    Stack,
    Box,
    Button,
    Checkbox,
    FormControlLabel,
    FormGroup,
    Pagination,
    InputAdornment,
    TextField,
} from '@mui/material';

import Grid from '@mui/material/Grid';
import SearchIcon from '@mui/icons-material/Search';

const RoleCreateToolbar = () => {
    const notify = useNotify();
    const redirect = useRedirect();

    return (
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', backgroundColor: 'transparent', px: 0 }}>
            <Box sx={{ display: 'flex', gap: 1 }}>
                <SaveButton label="Save" variant="contained" redirect="list" />
                <SaveButton
                    label="Save and Add New"
                    variant="contained"
                    mutationOptions={{
                        onSuccess: () => {
                            notify('Role created successfully', { type: 'success' });
                            redirect('create', 'roles');
                        },
                    }}
                />
            </Box>
            <Button
                variant="contained"
                sx={{
                    backgroundColor: 'grey.500',
                    color: 'white',
                    '&:hover': { backgroundColor: 'grey.700' }
                }}
                onClick={() => redirect('/roles')}
            >
                Cancel
            </Button>
        </Toolbar>
    );
};

const PermissionsSelector = () => {
    const { field } = useInput({ source: 'permission_ids' });
    const [search, setSearch] = useState('');
    const [page, setPage] = useState(1);
    const perPage = 16;

    const { data, total, isLoading } = useGetList('permissions', {
        pagination: { page, perPage },
        sort: { field: 'name', order: 'ASC' },
        filter: { q: search },
    });

    const selectedIds = field.value || [];

    const handleToggle = (id: any) => {
        const newValue = selectedIds.includes(id)
            ? selectedIds.filter((item: any) => item !== id)
            : [...selectedIds, id];
        field.onChange(newValue);
    };

    const handleSelectAllOnPage = () => {
        if (!data) return;
        const pageIds = data.map(p => p.id);
        const allPageSelected = pageIds.every(id => selectedIds.includes(id));

        let newValue;
        if (allPageSelected) {
            newValue = selectedIds.filter((id: any) => !pageIds.includes(id));
        } else {
            newValue = Array.from(new Set([...selectedIds, ...pageIds]));
        }
        field.onChange(newValue);
    };

    useEffect(() => {
        setPage(1);
    }, [search]);

    if (isLoading) return <Loading />;

    return (
        <Box sx={{ width: '100%', mt: 1 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2, gap: 2 }}>
                <TextField
                    label="Search Permissions"
                    variant="outlined"
                    size="small"
                    sx={{ flexGrow: 1 }}
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <SearchIcon fontSize="small" />
                            </InputAdornment>
                        ),
                    }}
                />
                <Button
                    variant="outlined"
                    size="small"
                    onClick={handleSelectAllOnPage}
                    disabled={!data || data.length === 0}
                >
                    {data && data.length > 0 && data.map(p => p.id).every(id => selectedIds.includes(id))
                        ? 'Unselect Page'
                        : 'Select All on Page'}
                </Button>
            </Box>

            <Typography variant="caption" color="text.secondary" sx={{ mb: 1, display: 'block' }}>
                Selected: {selectedIds.length} permissions
            </Typography>

            <FormGroup>
                <Grid container spacing={1}>
                    {data?.map((permission) => (
                        <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }} key={permission.id}>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        size="small"
                                        checked={selectedIds.includes(permission.id)}
                                        onChange={() => handleToggle(permission.id)}
                                    />
                                }
                                label={<Typography variant="body2">{permission.name}</Typography>}
                            />
                        </Grid>
                    ))}
                </Grid>
            </FormGroup>

            {total !== undefined && total > perPage && (
                <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
                    <Pagination
                        count={Math.ceil(total / perPage)}
                        page={page}
                        onChange={(_, p) => setPage(p)}
                        size="small"
                        color="primary"
                    />
                </Box>
            )}
        </Box>
    );
};

export const RoleCreate = () => {
    return (
        <Create
            title={false}
            transform={(data: any) => {
                const { permission_ids, ...payload } = data;
                return {
                    ...payload,
                    permissions: permission_ids,
                };
            }}
            sx={{
                "& .RaCreate-main": {
                    display: "flex",
                    justifyContent: "center",
                    padding: 2,
                },
            }}
        >
            <Card
                elevation={0}
                sx={{
                    borderRadius: 3,
                    width: '100%',
                    overflow: "hidden",
                }}
            >
                <CardContent sx={{ p: 4 }}>
                    <Grid
                        container
                        spacing={2}
                        alignItems="center"
                        justifyContent="space-between"
                        mb={2}
                    >
                        <Grid size={{ xs: 12, md: 12 }}>
                            <Typography
                                variant="h5"
                                fontWeight="bold"
                            >
                                Create Role
                            </Typography>

                            <Typography
                                variant="body2"
                                color="text.secondary"
                            >
                                Define a new system role and assign permissions.
                            </Typography>
                        </Grid>
                    </Grid>

                    <Divider sx={{ mb: 4 }} />

                    <SimpleForm
                        toolbar={<RoleCreateToolbar />}
                        sx={{
                            "& .RaSimpleForm-toolbar": {
                                mt: 3,
                                px: 0,
                                backgroundColor: 'transparent',
                            },
                            "& .MuiInputBase-root": {
                                borderRadius: 2,
                            },
                        }}
                    >
                        <Stack spacing={3} sx={{ width: '100%' }}>
                            <TextInput
                                source="name"
                                label="Role Name"
                                validate={required()} // Ensure validation is applied
                                variant="outlined"
                                fullWidth
                            />

                            <PermissionsSelector />

                            <TextInput
                                source="guard_name"
                                defaultValue="web"
                                sx={{ display: 'none' }}
                            />
                        </Stack>
                    </SimpleForm>
                </CardContent>
            </Card>
        </Create>
    );
};