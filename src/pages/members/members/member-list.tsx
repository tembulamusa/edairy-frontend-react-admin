import { useState } from "react";
import { List, DataTable, DateField, BooleanField, EditButton, DeleteButton, useResourceContext } from "react-admin";
import { Button } from "@mui/material";

import { MemberCreateWizard } from "./create wizard/member-create-wizard";
import { useCan } from "../../../components/permissions/user-can";
import Tooltip from '@mui/material/Tooltip';

export const MemberList = () => {
    const [open, setOpen] = useState(false);
    const can = useCan();
    const resource = useResourceContext() ?? "none";
    const canEdit = can(resource, "update");
    const canDelete = can(resource, "delete");
    const canCreate = can(resource, "create");
    return (
        <>
            <List
                title="Members"
                actions={
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={() => setOpen(true)}
                    >
                        Create Member
                    </Button>
                }
            >
                <DataTable>

                    <DataTable.Col source="member_no" />
                    <DataTable.Col source="first_name" />
                    <DataTable.Col source="last_name" />
                    <DataTable.Col source="gender" />

                    <DataTable.Col source="primary_phone" />
                    <DataTable.Col source="status" />
                    <DataTable.Col source="title" />
                    <DataTable.Col source="cashout_enrolled">
                        <BooleanField source="cashout_enrolled" />
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

            <MemberCreateWizard open={open} onClose={() => setOpen(false)} />
        </>
    );
};
