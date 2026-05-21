import { Create, Edit, Show, SimpleForm, SimpleShowLayout, TextInput, NumberInput, TextField, NumberField } from 'react-admin';

export const TransportVehicleCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source="registration_no" fullWidth />
            <TextInput source="make" fullWidth />
            <TextInput source="model" fullWidth />
            <NumberInput source="capacity" fullWidth />
        </SimpleForm>
    </Create>
);

export const TransportVehicleEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="registration_no" fullWidth />
            <TextInput source="make" fullWidth />
            <TextInput source="model" fullWidth />
            <NumberInput source="capacity" fullWidth />
        </SimpleForm>
    </Edit>
);

export const TransportVehicleShow = () => (
    <Show>
        <SimpleShowLayout>
            <TextField source="id" />
            <TextField source="registration_no" />
            <TextField source="make" />
            <TextField source="model" />
            <NumberField source="capacity" />
        </SimpleShowLayout>
    </Show>
);