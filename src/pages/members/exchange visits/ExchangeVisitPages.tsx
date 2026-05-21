import { Create, Edit, Show, SimpleForm, SimpleShowLayout, TextInput, TextField, DateInput, DateField } from 'react-admin';

export const ExchangeVisitCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source="partner" fullWidth />
            <DateInput source="visit_date" fullWidth />
            <TextInput source="purpose" fullWidth />
            <TextInput source="venue" fullWidth />
        </SimpleForm>
    </Create>
);

export const ExchangeVisitEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="partner" fullWidth />
            <DateInput source="visit_date" fullWidth />
            <TextInput source="purpose" fullWidth />
            <TextInput source="venue" fullWidth />
        </SimpleForm>
    </Edit>
);

export const ExchangeVisitShow = () => (
    <Show>
        <SimpleShowLayout>
            <TextField source="id" />
            <DateField source="created_at" />
            <TextField source="partner" />
            <DateField source="visit_date" />
            <TextField source="purpose" />
            <TextField source="venue" />
        </SimpleShowLayout>
    </Show>
);