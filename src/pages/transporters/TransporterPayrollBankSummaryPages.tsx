import { Create, Edit, Show, SimpleForm, SimpleShowLayout, TextInput, NumberInput, TextField, NumberField } from 'react-admin';

export const TransporterPayrollBankSummaryCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source="bank_name" fullWidth />
            <TextInput source="period" fullWidth />
            <NumberInput source="no_of_transactions" fullWidth />
            <NumberInput source="total_amount" fullWidth />
        </SimpleForm>
    </Create>
);

export const TransporterPayrollBankSummaryEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="bank_name" fullWidth />
            <TextInput source="period" fullWidth />
            <NumberInput source="no_of_transactions" fullWidth />
            <NumberInput source="total_amount" fullWidth />
        </SimpleForm>
    </Edit>
);

export const TransporterPayrollBankSummaryShow = () => (
    <Show>
        <SimpleShowLayout>
            <TextField source="id" />
            <TextField source="bank_name" />
            <TextField source="period" />
            <NumberField source="no_of_transactions" />
            <NumberField source="total_amount" />
        </SimpleShowLayout>
    </Show>
);