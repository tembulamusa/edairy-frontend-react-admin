import { Create, Edit, Show, SimpleForm, SimpleShowLayout, TextInput, TextField, DateInput, DateField, BooleanInput, BooleanField } from 'react-admin';

export const TransporterDriverAssignmentCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source="driver_name" fullWidth />
            <TextInput source="vehicle_reg_no" fullWidth />
            <DateInput source="assigned_from" fullWidth />
            <DateInput source="assigned_to" fullWidth />
            <TextInput source="assignment_type" fullWidth />
            <BooleanInput source="active" />
        </SimpleForm>
    </Create>
);

export const TransporterDriverAssignmentEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="driver_name" fullWidth />
            <TextInput source="vehicle_reg_no" fullWidth />
            <DateInput source="assigned_from" fullWidth />
            <DateInput source="assigned_to" fullWidth />
            <TextInput source="assignment_type" fullWidth />
            <BooleanInput source="active" />
        </SimpleForm>
    </Edit>
);

export const TransporterDriverAssignmentShow = () => (
    <Show>
        <SimpleShowLayout>
            <TextField source="id" />
            <TextField source="driver_name" />
            <TextField source="vehicle_reg_no" />
            <DateField source="assigned_from" />
            <DateField source="assigned_to" />
            <TextField source="assignment_type" />
            <BooleanField source="active" />
        </SimpleShowLayout>
    </Show>
);