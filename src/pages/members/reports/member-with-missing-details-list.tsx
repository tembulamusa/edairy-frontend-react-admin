
import { List, DataTable, TextField, DateField, EditButton } from 'react-admin';

export const MemberWithMissingDetailsList = () => (
    <List title="Member with Missing Details">
        <DataTable>
            <DataTable.Col source="MemberNo" label="Member No" />
            <DataTable.Col source="FirstName" label="First Name" />
            <DataTable.Col source="LastName" label="Last Name" />
            <DataTable.Col source="PrimaryPhone" label="Primary Phone" />
            <DataTable.Col source="MissingFields" label="Missing Fields" />
            <DataTable.Col source="Status" label="Status" />
            <DataTable.Col label="Actions">
                <EditButton />
            </DataTable.Col>
        </DataTable>
    </List>
);
