import { Create, Edit, Show, SimpleForm, SimpleShowLayout, TextInput, TextField, DateField } from 'react-admin';

export const ExchangeVisitAttendeeCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source="exchange_visit_id" fullWidth />
            <TextInput source="attendee" fullWidth />
            <TextInput source="attendee_organization" fullWidth />
            <TextInput source="attendee_designation" fullWidth />
            <TextInput source="comments" fullWidth multiline />
        </SimpleForm>
    </Create>
);

export const ExchangeVisitAttendeeEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="exchange_visit_id" fullWidth />
            <TextInput source="attendee" fullWidth />
            <TextInput source="attendee_organization" fullWidth />
            <TextInput source="attendee_designation" fullWidth />
            <TextInput source="comments" fullWidth multiline />
        </SimpleForm>
    </Edit>
);

export const ExchangeVisitAttendeeShow = () => (
    <Show>
        <SimpleShowLayout>
            <TextField source="id" />
            <DateField source="created_at" />
            <TextField source="exchange_visit_id" />
            <TextField source="attendee" />
            <TextField source="attendee_organization" />
            <TextField source="attendee_designation" />
            <TextField source="comments" />
        </SimpleShowLayout>
    </Show>
);