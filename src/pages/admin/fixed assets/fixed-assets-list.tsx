import {
    DataTable,
    List,
    useResourceContext,
    EditButton,
    DeleteButton,
    CreateButton,
    TopToolbar,
} from 'react-admin';
import { Stack, Tooltip } from '@mui/material';
import { useCan } from '../../../components/permissions/user-can';

export const FixedAssetList = () => {
    const can = useCan();
    const resource = useResourceContext() ?? "fixed-assets";

    const canCreate = can(resource, "create");
    const canEdit = can(resource, "update");
    const canDelete = can(resource, "delete");

    return (
        <List
            title="Fixed Assets"
            actions={
                <TopToolbar>
                    {canCreate && <CreateButton />}
                </TopToolbar>
            }
        >
            <DataTable rowClick="show">
                <DataTable.Col source="asset_code" />
                <DataTable.Col source="asset_name" />
                <DataTable.Col source="asset_category_id" label="Category ID" />
                <DataTable.NumberCol source="book_value" />
                <DataTable.Col source="current_location" />
                <DataTable.Col source="status" />

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
};