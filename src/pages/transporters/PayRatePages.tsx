import { Create, Edit, Show, SimpleForm, SimpleShowLayout, TextInput, DateInput, NumberInput, TextField, DateField, NumberField } from 'react-admin';

export const PayRateCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source="route_name" fullWidth />
            <NumberInput source="rate" fullWidth />
            <DateInput source="effective_date" fullWidth />
        </SimpleForm>
    </Create>
);

export const PayRateEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="route_name" fullWidth />
            <NumberInput source="rate" fullWidth />
            <DateInput source="effective_date" fullWidth />
        </SimpleForm>
    </Edit>
);

export const PayRateShow = () => (
    <Show>
        <SimpleShowLayout>
            <TextField source="id" />
            <TextField source="route_name" />
            <NumberField source="rate" />
            <DateField source="effective_date" />
        </SimpleShowLayout>
    </Show>
);