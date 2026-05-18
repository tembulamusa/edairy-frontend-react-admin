import { useState } from "react";
import { List, DataTable, DateField, BooleanField, EditButton, DeleteButton } from "react-admin";
import { Button } from "@mui/material";

import { MemberCreateWizard } from "./create wizard/member-create-wizard";

export const MemberList = () => {
    const [open, setOpen] = useState(false);

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
                        <EditButton />
                        <DeleteButton />
                    </DataTable.Col>
                </DataTable>
            </List>

            <MemberCreateWizard open={open} onClose={() => setOpen(false)} />
        </>
    );
};
