import { Create, Edit, Show, SimpleForm, SimpleShowLayout, TextInput, DateInput, NumberInput, TextField, DateField, NumberField } from 'react-admin';

export const TransporterStatementCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source="transporter_no" fullWidth />
            <DateInput source="date" fullWidth />
            <TextInput source="description" fullWidth />
            <NumberInput source="debit" fullWidth />
            <NumberInput source="credit" fullWidth />
            <NumberInput source="balance" fullWidth />
        </SimpleForm>
    </Create>
);

export const TransporterStatementEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="transporter_no" fullWidth />
            <DateInput source="date" fullWidth />
            <TextInput source="description" fullWidth />
            <NumberInput source="debit" fullWidth />
            <NumberInput source="credit" fullWidth />
            <NumberInput source="balance" fullWidth />
        </SimpleForm>
    </Edit>
);

export const TransporterStatementShow = () => (
    <Show>
        <SimpleShowLayout>
            <TextField source="id" />
            <TextField source="transporter_no" />
            <DateField source="date" />
            <TextField source="description" />
            <NumberField source="debit" />
            <NumberField source="credit" />
            <NumberField source="balance" />
        </SimpleShowLayout>
    </Show>
);