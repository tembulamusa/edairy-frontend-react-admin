
import { List, DataTable, DateField, TextField, ReferenceField, EditButton, DeleteButton } from 'react-admin';

export const TrainingSessionAttendeesList = () => (
    <List title="Training Session Attendees">
        <DataTable>
            <DataTable.Col source="CreatedAt" label="Created At">
                <DateField source="CreatedAt" />
            </DataTable.Col>
            <DataTable.Col source="Topic" label="Topic" />
            <DataTable.Col source="Names" label="Names" />
            <DataTable.Col source="IDNumber" label="ID Number" />
            <DataTable.Col source="MembershipNumber" label="Membership Number" />
            <DataTable.Col source="Comments" label="Comments" />
            <DataTable.Col label="Actions">
                <EditButton />
                <DeleteButton />
            </DataTable.Col>
        </DataTable>
    </List >
);
