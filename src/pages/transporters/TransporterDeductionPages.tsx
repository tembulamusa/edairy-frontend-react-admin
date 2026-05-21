import { Create, Edit, Show, SimpleForm, SimpleShowLayout, TextInput, DateInput, NumberInput, TextField, DateField, NumberField } from 'react-admin';

export const TransporterDeductionCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source="transporter_no" fullWidth />
            <TextInput source="deduction_name" fullWidth />
            <NumberInput source="amount" fullWidth />
            <DateInput source="date" fullWidth />
        </SimpleForm>
    </Create>
);

export const TransporterDeductionEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="transporter_no" fullWidth />
            <TextInput source="deduction_name" fullWidth />
            <NumberInput source="amount" fullWidth />
            <DateInput source="date" fullWidth />
        </SimpleForm>
    </Edit>
);

export const TransporterDeductionShow = () => (
    <Show>
        <SimpleShowLayout>
            <TextField source="id" />
            <TextField source="transporter_no" />
            <TextField source="deduction_name" />
            <NumberField source="amount" />
            <DateField source="date" />
        </SimpleShowLayout>
    </Show>
);