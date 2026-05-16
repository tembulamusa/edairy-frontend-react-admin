
import { List, DataTable, DateField, EditButton, DeleteButton } from 'react-admin';

export const MemberShareList = () => (
    <List title="Member Shares">
        <DataTable>
            <DataTable.Col source="created_at" label="Created At">
                <DateField source="created_at" />
            </DataTable.Col>
            <DataTable.Col source="member_no" label="Member Number" />
            <DataTable.Col source="first_name" label="First Name" />
            <DataTable.Col source="last_name" label="Last Name" />
            <DataTable.Col source="share_type_name" label="Share Type" />
            <DataTable.Col source="status" label="Status" />
            <DataTable.Col label="Actions">
                <EditButton />
                <DeleteButton />
            </DataTable.Col>
        </DataTable>
    </List>
);
