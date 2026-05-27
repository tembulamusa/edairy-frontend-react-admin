import { Create, Edit, Show, SimpleForm, SimpleShowLayout, TextInput, TextField } from 'react-admin';

export const CompanyTransporterCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source="company_name" fullWidth />
            <TextInput source="registration_no" fullWidth />
            <TextInput source="contact_person_name" fullWidth />
            <TextInput source="contact_person_phone" fullWidth />
        </SimpleForm>
    </Create>
);

export const CompanyTransporterEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="company_name" fullWidth />
            <TextInput source="registration_no" fullWidth />
            <TextInput source="contact_person_name" fullWidth />
            <TextInput source="contact_person_phone" fullWidth />
        </SimpleForm>
    </Edit>
);

export const CompanyTransporterShow = () => (
    <Show>
        <SimpleShowLayout>
            <TextField source="id" />
            <TextField source="company_name" />
            <TextField source="registration_no" />
            <TextField source="contact_person_name" />
            <TextField source="contact_person_phone" />
        </SimpleShowLayout>
    </Show>
);