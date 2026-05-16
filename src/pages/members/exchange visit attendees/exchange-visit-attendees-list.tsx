
import { List, DataTable, DateField, EditButton, DeleteButton } from 'react-admin';

export const ExchangeVisitAttendeesList = () => (
    <List title="Exchange Visit Attendees">
        <DataTable>
            <DataTable.Col source="created_at" label="Created At">
                <DateField source="created_at" />
            </DataTable.Col>
            <DataTable.Col source="exchange_visit_id" label="Exchange Visit ID" />
            <DataTable.Col source="attendee" label="Attendee" />
            <DataTable.Col source="attendee_organization" label="Attendee Organization" />
            <DataTable.Col source="attendee_designation" label="Attendee Designation" />
            <DataTable.Col source="comments" label="Comments" />
            <DataTable.Col label="Actions">
                <EditButton />
                <DeleteButton />
            </DataTable.Col>
        </DataTable>
    </List>
);
