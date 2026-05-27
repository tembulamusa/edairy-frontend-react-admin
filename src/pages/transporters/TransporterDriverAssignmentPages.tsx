import { Create, Edit, Show, SimpleForm, SimpleShowLayout, TextInput, TextField, DateInput, DateField, BooleanInput, BooleanField, NumberInput, NumberField } from 'react-admin';

export const TransporterDriverAssignmentCreate = () => (
    <Create>
        <SimpleForm>
            <NumberInput source="transporter_driver_id" fullWidth />
            <TextInput source="driver_name" fullWidth />
            <TextInput source="driver_no" fullWidth />
            <NumberInput source="transporter_vehicle_id" fullWidth />
            <TextInput source="vehicle_reg_no" fullWidth />
            <DateInput source="assigned_from" fullWidth />
            <DateInput source="assigned_to" fullWidth />
            <TextInput source="assignment_type" fullWidth />
            <BooleanInput source="active" />
            <TextInput source="notes" multiline fullWidth />
        </SimpleForm>
    </Create>
);

export const TransporterDriverAssignmentEdit = () => (
    <Edit>
        <SimpleForm>
            <NumberInput source="transporter_driver_id" fullWidth />
            <TextInput source="driver_name" fullWidth />
            <TextInput source="driver_no" fullWidth />
            <NumberInput source="transporter_vehicle_id" fullWidth />
            <TextInput source="vehicle_reg_no" fullWidth />
            <DateInput source="assigned_from" fullWidth />
            <DateInput source="assigned_to" fullWidth />
            <TextInput source="assignment_type" fullWidth />
            <BooleanInput source="active" />
            <TextInput source="notes" multiline fullWidth />
        </SimpleForm>
    </Edit>
);

export const TransporterDriverAssignmentShow = () => (
    <Show>
        <SimpleShowLayout>
            <TextField source="id" />
            <NumberField source="transporter_driver_id" />
            <TextField source="driver_name" />
            <TextField source="driver_no" />
            <NumberField source="transporter_vehicle_id" />
            <TextField source="vehicle_reg_no" />
            <DateField source="assigned_from" showTime />
            <DateField source="assigned_to" showTime emptyText="-" />
            <TextField source="assignment_type" />
            <BooleanField source="active" />
            <TextField source="notes" />
            <DateField source="created_at" showTime />
        </SimpleShowLayout>
    </Show>
);