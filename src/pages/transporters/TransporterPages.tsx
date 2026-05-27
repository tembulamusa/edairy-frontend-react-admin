import { Create, Edit, Show, SimpleForm, SimpleShowLayout, TextInput, TextField } from 'react-admin';

export const TransporterCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source="transporter_no" fullWidth />
            <TextInput source="status" fullWidth />
        </SimpleForm>
    </Create>
);

export const TransporterEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="transporter_no" fullWidth />
            <TextInput source="status" fullWidth />
        </SimpleForm>
    </Edit>
);

export const TransporterShow = () => (
    <Show>
        <SimpleShowLayout>
            <TextField source="id" />
            <TextField source="transporter_no" />
            <TextField source="status" />
        </SimpleShowLayout>
    </Show>
);