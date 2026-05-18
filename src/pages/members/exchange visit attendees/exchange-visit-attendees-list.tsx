
import { List, DataTable, DateField, EditButton, DeleteButton, TextInput, required } from 'react-admin';
import { CreateButton } from '../../../components/forms/FormUtils';

export const ExchangeVisitAttendeesList = () => (
    <List title="Exchange Visit Attendees" actions={
        <CreateButton resource="exchange-visit-attendees" title="Exchange Visit Attendee">
            <TextInput source="exchange_visit_id" validate={[required()]} fullWidth />
            <TextInput source="attendee" validate={[required()]} fullWidth />
            <TextInput source="attendee_organization" validate={[required()]} fullWidth />
            <TextInput source="attendee_designation" validate={[required()]} fullWidth />
            <TextInput source="comments" validate={[required()]} fullWidth />
        </CreateButton>
    }>
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
