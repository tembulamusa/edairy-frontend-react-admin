import { useState } from "react";
import { List, DataTable, DateField, BooleanField } from "react-admin";
import { Button } from "@mui/material";

import { MemberCreateWizard } from "./create wizard/member-create-wizard";

export const MemberList = () => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <List
                title="Members"
                actions={
                    <Button variant="contained" onClick={() => setOpen(true)}>
                        Create Member
                    </Button>
                }
            >
                <DataTable>
                    <DataTable.NumberCol source="id" />
                    <DataTable.Col source="created_at">
                        <DateField source="created_at" />
                    </DataTable.Col>
                    <DataTable.Col source="updated_at">
                        <DateField source="updated_at" />
                    </DataTable.Col>
                    <DataTable.Col source="deleted_at" />
                    <DataTable.Col source="created_by">
                        <DateField source="created_by" />
                    </DataTable.Col>
                    <DataTable.Col source="member_no" />
                    <DataTable.Col source="first_name" />
                    <DataTable.Col source="last_name" />
                    <DataTable.Col source="other_names" />
                    <DataTable.Col source="idnumber" />
                    <DataTable.Col source="gender" />
                    <DataTable.Col source="date_of_birth">
                        <DateField source="date_of_birth" />
                    </DataTable.Col>
                    <DataTable.Col source="primary_phone" />
                    <DataTable.Col source="secondary_phone" />
                    <DataTable.Col source="email" />
                    <DataTable.Col source="tax_number" />
                    <DataTable.Col source="marital_status" />
                    <DataTable.Col source="status" />
                    <DataTable.NumberCol source="route_id" />
                    <DataTable.NumberCol source="member_type_id" />
                    <DataTable.NumberCol source="number_of_cows" />
                    <DataTable.Col source="next_of_kin_full_name" />
                    <DataTable.Col source="next_of_kin_phone" />
                    <DataTable.Col source="date_registered">
                        <DateField source="date_registered" />
                    </DataTable.Col>
                    <DataTable.Col source="passport_photo" />
                    <DataTable.Col source="id_front_photo" />
                    <DataTable.Col source="id_back_photo" />
                    <DataTable.Col source="updated_by" />
                    <DataTable.Col source="downloaded" />
                    <DataTable.Col source="birth_city" />
                    <DataTable.Col source="id_date_of_issue">
                        <DateField source="id_date_of_issue" />
                    </DataTable.Col>
                    <DataTable.Col source="title" />
                    <DataTable.Col source="cashout_enrolled">
                        <BooleanField source="cashout_enrolled" />
                    </DataTable.Col>
                    <DataTable.Col source="id" />
                </DataTable>
            </List>

            <MemberCreateWizard open={open} onClose={() => setOpen(false)} />
        </>
    );
};
