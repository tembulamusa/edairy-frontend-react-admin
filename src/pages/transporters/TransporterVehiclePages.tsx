import { Create, Edit, Show, SimpleForm, SimpleShowLayout, TextInput, TextField, BooleanInput, BooleanField } from 'react-admin';

export const TransporterVehicleCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source="registration_no" fullWidth />
            <TextInput source="vehicle_type" fullWidth />
            <TextInput source="capacity_litres" fullWidth />
            <BooleanInput source="active" />
        </SimpleForm>
    </Create>
);

export const TransporterVehicleEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="registration_no" fullWidth />
            <TextInput source="vehicle_type" fullWidth />
            <TextInput source="capacity_litres" fullWidth />
            <BooleanInput source="active" />
        </SimpleForm>
    </Edit>
);

export const TransporterVehicleShow = () => (
    <Show>
        <SimpleShowLayout>
            <TextField source="id" />
            <TextField source="registration_no" />
            <TextField source="vehicle_type" />
            <TextField source="capacity_litres" />
            <BooleanField source="active" />
        </SimpleShowLayout>
    </Show>
);