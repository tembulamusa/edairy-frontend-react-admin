import { Create, Edit, Show, SimpleForm, SimpleShowLayout, TextInput, TextField } from 'react-admin';

export const TransporterDriverCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source="first_name" fullWidth />
            <TextInput source="last_name" fullWidth />
            <TextInput source="driver_no" fullWidth />
            <TextInput source="primary_phone" fullWidth />
            <TextInput source="driving_license_no" fullWidth />
            <TextInput source="status" fullWidth />
        </SimpleForm>
    </Create>
);

export const TransporterDriverEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="first_name" fullWidth />
            <TextInput source="last_name" fullWidth />
            <TextInput source="driver_no" fullWidth />
            <TextInput source="primary_phone" fullWidth />
            <TextInput source="driving_license_no" fullWidth />
            <TextInput source="status" fullWidth />
        </SimpleForm>
    </Edit>
);

export const TransporterDriverShow = () => (
    <Show>
        <SimpleShowLayout>
            <TextField source="id" />
            <TextField source="first_name" />
            <TextField source="last_name" />
            <TextField source="driver_no" />
            <TextField source="primary_phone" />
            <TextField source="driving_license_no" />
            <TextField source="status" />
        </SimpleShowLayout>
    </Show>
);