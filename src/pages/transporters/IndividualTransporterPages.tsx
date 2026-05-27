import { Create, Edit, Show, SimpleForm, SimpleShowLayout, TextInput, TextField } from 'react-admin';

export const IndividualTransporterCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source="first_name" fullWidth />
            <TextInput source="last_name" fullWidth />
            <TextInput source="primary_phone" fullWidth />
        </SimpleForm>
    </Create>
);

export const IndividualTransporterEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="first_name" fullWidth />
            <TextInput source="last_name" fullWidth />
            <TextInput source="primary_phone" fullWidth />
        </SimpleForm>
    </Edit>
);

export const IndividualTransporterShow = () => (
    <Show>
        <SimpleShowLayout>
            <TextField source="id" />
            <TextField source="first_name" />
            <TextField source="last_name" />
            <TextField source="primary_phone" />
        </SimpleShowLayout>
    </Show>
);