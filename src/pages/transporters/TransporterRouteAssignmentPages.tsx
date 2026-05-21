import { Create, Edit, Show, SimpleForm, SimpleShowLayout, TextInput, TextField, DateInput, DateField, BooleanInput, BooleanField } from 'react-admin';

export const TransporterRouteAssignmentCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source="transporter_no" fullWidth />
            <TextInput source="route_name" fullWidth />
            <DateInput source="start_date" fullWidth />
            <DateInput source="end_date" fullWidth />
            <BooleanInput source="active" />
        </SimpleForm>
    </Create>
);

export const TransporterRouteAssignmentEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="transporter_no" fullWidth />
            <TextInput source="route_name" fullWidth />
            <DateInput source="start_date" fullWidth />
            <DateInput source="end_date" fullWidth />
            <BooleanInput source="active" />
        </SimpleForm>
    </Edit>
);

export const TransporterRouteAssignmentShow = () => (
    <Show>
        <SimpleShowLayout>
            <TextField source="id" />
            <TextField source="transporter_no" />
            <TextField source="route_name" />
            <DateField source="start_date" />
            <DateField source="end_date" />
            <BooleanField source="active" />
        </SimpleShowLayout>
    </Show>
);