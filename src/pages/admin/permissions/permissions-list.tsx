import { List, DataTable, EditButton, DeleteButton, useResourceContext, CreateButton, TopToolbar, useCreatePath } from 'react-admin';

import Tooltip from '@mui/material/Tooltip';
import { Stack } from '@mui/material';
import { useCan } from '../../../components/permissions/user-can';


export const PermissionList = () => {

    const can = useCan();

    const resource = useResourceContext() ?? "none";
    const canEdit = can(resource, "update");
    const canDelete = can(resource, "delete");
    const canCreate = can(resource, "create");
    const createPath = useCreatePath();

    return (
        <List
            title="Permissions"
            actions={
                <TopToolbar>
                    {canCreate && (
                        <CreateButton label="Add New" variant="primary" color="primary" sx={{ backgroundColor: 'blue', color: 'white' }} to={createPath({ resource, type: 'create' })} />
                    )}
                </TopToolbar>
            }
        >
            <DataTable rowClick="show" title="Permissions">
                <DataTable.Col source="name" label="Name" />
                <DataTable.Col source="guard_name" label="Guard Name" />
                <DataTable.Col label="Actions">
                    <Stack direction="row" spacing={1} alignItems="center">

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
                    </Stack>

                </DataTable.Col>
            </DataTable>
        </List>
    );
}
