import { Create, Edit, Show, SimpleForm, SimpleShowLayout, TextInput, DateInput, NumberInput, TextField, DateField, NumberField } from 'react-admin';

export const TransporterPaymentCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source="transporter_no" fullWidth />
            <NumberInput source="amount" fullWidth />
            <DateInput source="payment_date" fullWidth />
            <TextInput source="reference_no" fullWidth />
            <TextInput source="status" fullWidth />
        </SimpleForm>
    </Create>
);

export const TransporterPaymentEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="transporter_no" fullWidth />
            <NumberInput source="amount" fullWidth />
            <DateInput source="payment_date" fullWidth />
            <TextInput source="reference_no" fullWidth />
            <TextInput source="status" fullWidth />
        </SimpleForm>
    </Edit>
);

export const TransporterPaymentShow = () => (
    <Show>
        <SimpleShowLayout>
            <TextField source="id" />
            <TextField source="transporter_no" />
            <NumberField source="amount" />
            <DateField source="payment_date" />
            <TextField source="reference_no" />
            <TextField source="status" />
        </SimpleShowLayout>
    </Show>
);