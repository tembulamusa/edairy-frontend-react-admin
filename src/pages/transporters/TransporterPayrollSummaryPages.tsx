import { Create, Edit, Show, SimpleForm, SimpleShowLayout, TextInput, NumberInput, TextField, NumberField } from 'react-admin';

export const TransporterPayrollSummaryCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source="period" fullWidth />
            <NumberInput source="total_transporters" fullWidth />
            <NumberInput source="total_gross" fullWidth />
            <NumberInput source="total_deductions" fullWidth />
            <NumberInput source="total_net" fullWidth />
        </SimpleForm>
    </Create>
);

export const TransporterPayrollSummaryEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="period" fullWidth />
            <NumberInput source="total_transporters" fullWidth />
            <NumberInput source="total_gross" fullWidth />
            <NumberInput source="total_deductions" fullWidth />
            <NumberInput source="total_net" fullWidth />
        </SimpleForm>
    </Edit>
);

export const TransporterPayrollSummaryShow = () => (
    <Show>
        <SimpleShowLayout>
            <TextField source="id" />
            <TextField source="period" />
            <NumberField source="total_transporters" />
            <NumberField source="total_gross" />
            <NumberField source="total_deductions" />
            <NumberField source="total_net" />
        </SimpleShowLayout>
    </Show>
);