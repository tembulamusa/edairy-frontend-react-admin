import { Create, Edit, Show, SimpleForm, SimpleShowLayout, TextInput, DateInput, NumberInput, TextField, DateField, NumberField } from 'react-admin';

export const DeductionRecoveryCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source="transporter_no" fullWidth />
            <TextInput source="deduction_type" fullWidth />
            <NumberInput source="amount" fullWidth />
            <DateInput source="date" fullWidth />
        </SimpleForm>
    </Create>
);

export const DeductionRecoveryEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="transporter_no" fullWidth />
            <TextInput source="deduction_type" fullWidth />
            <NumberInput source="amount" fullWidth />
            <DateInput source="date" fullWidth />
        </SimpleForm>
    </Edit>
);

export const DeductionRecoveryShow = () => (
    <Show>
        <SimpleShowLayout>
            <TextField source="id" />
            <TextField source="transporter_no" />
            <TextField source="deduction_type" />
            <NumberField source="amount" />
            <DateField source="date" />
        </SimpleShowLayout>
    </Show>
);