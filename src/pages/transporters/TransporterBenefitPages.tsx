import { Create, Edit, Show, SimpleForm, SimpleShowLayout, TextInput, TextField, DateInput, DateField, NumberInput, NumberField } from 'react-admin';

export const TransporterBenefitCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source="name" fullWidth />
            <NumberInput source="rate" fullWidth />
            <NumberInput source="min_quantity" fullWidth />
            <TextInput source="route_name" fullWidth />
            <DateInput source="start_date" fullWidth />
            <DateInput source="end_date" fullWidth />
            <TextInput source="status" fullWidth />
        </SimpleForm>
    </Create>
);

export const TransporterBenefitEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="name" fullWidth />
            <NumberInput source="rate" fullWidth />
            <NumberInput source="min_quantity" fullWidth />
            <TextInput source="route_name" fullWidth />
            <DateInput source="start_date" fullWidth />
            <DateInput source="end_date" fullWidth />
            <TextInput source="status" fullWidth />
        </SimpleForm>
    </Edit>
);

export const TransporterBenefitShow = () => (
    <Show>
        <SimpleShowLayout>
            <TextField source="id" />
            <TextField source="name" />
            <NumberField source="rate" />
            <NumberField source="min_quantity" />
            <TextField source="route_name" />
            <DateField source="start_date" />
            <DateField source="end_date" />
            <TextField source="status" />
        </SimpleShowLayout>
    </Show>
);