
import { List, DataTable, TextField, DateField, EditButton } from 'react-admin';

export const MemberWithMissingDetailsList = () => (
    <List title="Member with Missing Details">
        <DataTable>
            <DataTable.Col source="member_no" label="Member No" />
            <DataTable.Col source="first_name" label="First Name" />
            <DataTable.Col source="last_name" label="Last Name" />
            <DataTable.Col source="primary_phone" label="Primary Phone" />
            <DataTable.Col source="missing_fields" label="Missing Fields" />
            <DataTable.Col source="status" label="Status" />
            <DataTable.Col label="Actions">
                <EditButton />
            </DataTable.Col>
        </DataTable>
    </List>
);
