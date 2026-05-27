import {
    DataTable,
    ShowButton,
    EditButton,
    DeleteButton,
    useResourceContext,
} from 'react-admin';
import { Stack, Tooltip } from '@mui/material';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import { useCan } from '../../../components/permissions/user-can';

type ProduceListActionsColProps = {
    showDelete?: boolean;
};

export const ProduceListActionsCol = ({ showDelete = true }: ProduceListActionsColProps) => {
    const resource = useResourceContext() ?? '';
    const can = useCan();
    const canView = can(resource, 'view');
    const canEdit = can(resource, 'edit');
    const canDelete = showDelete && can(resource, 'delete');

    return (
        <DataTable.Col label="Actions">
            <Stack direction="row" spacing={1} alignItems="center">
                {canView && (
                    <Tooltip title="View Record">
                        <span>
                            <ShowButton
                                label={false}
                                icon={<VisibilityOutlinedIcon fontSize="small" />}
                                sx={{ minWidth: 36 }}
                            />
                        </span>
                    </Tooltip>
                )}
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
