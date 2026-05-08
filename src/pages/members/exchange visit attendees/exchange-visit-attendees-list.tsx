
import { List, DataTable, DateField, EditButton, DeleteButton } from 'react-admin';

export const ExchangeVisitAttendeesList = () => (
    <List title="Exchange Visit Attendees">
        <DataTable>
            <DataTable.Col source="CreatedAt" label="Created At">
                <DateField source="CreatedAt" />
            </DataTable.Col>
            <DataTable.Col source="ExchangeVisitID" label="Exchange Visit ID" />
            <DataTable.Col source="Attendee" label="Attendee" />
            <DataTable.Col source="AttendeeOrganization" label="Attendee Organization" />
            <DataTable.Col source="AttendeeDesignation" label="Attendee Designation" />
            <DataTable.Col source="Comments" label="Comments" />
            <DataTable.Col label="Actions">
                <EditButton />
                <DeleteButton />
            </DataTable.Col>
        </DataTable>
    </List>
);
