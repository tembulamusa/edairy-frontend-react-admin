
import { List, DataTable, DateField, TextField, ReferenceField, EditButton, DeleteButton } from 'react-admin';

export const TrainingSessionAttendeesList = () => (
    <List title="Training Session Attendees">
        <DataTable>
            <DataTable.Col source="created_at" label="Created At">
                <DateField source="created_at" />
            </DataTable.Col>
            <DataTable.Col source="topic" label="Topic" />
            <DataTable.Col source="names" label="Names" />
            <DataTable.Col source="idnumber" label="ID Number" />
            <DataTable.Col source="membership_number" label="Membership Number" />
            <DataTable.Col source="comments" label="Comments" />
            <DataTable.Col label="Actions">
                <EditButton />
                <DeleteButton />
            </DataTable.Col>
        </DataTable>
    </List >
);
