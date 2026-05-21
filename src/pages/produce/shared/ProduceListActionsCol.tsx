import {
    DataTable,
    EditButton,
    DeleteButton,
    useResourceContext,
} from 'react-admin';
import { Stack, Tooltip } from '@mui/material';
import { useCan } from '../../../components/permissions/user-can';

type ProduceListActionsColProps = {
    showDelete?: boolean;
};

export const ProduceListActionsCol = ({ showDelete = true }: ProduceListActionsColProps) => {
    const resource = useResourceContext() ?? '';
    const can = useCan();
    const canEdit = can(resource, 'update');
    const canDelete = showDelete && can(resource, 'delete');

    return (
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
    );
};
