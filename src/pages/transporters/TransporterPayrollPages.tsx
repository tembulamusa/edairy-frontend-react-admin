import { Create, Edit, Show, SimpleForm, SimpleShowLayout, TextInput, NumberInput, TextField, NumberField } from 'react-admin';

export const TransporterPayrollCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source="transporter_no" fullWidth />
            <TextInput source="period" fullWidth />
            <NumberInput source="gross_pay" fullWidth />
            <NumberInput source="total_deductions" fullWidth />
            <NumberInput source="net_pay" fullWidth />
        </SimpleForm>
    </Create>
);

export const TransporterPayrollEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="transporter_no" fullWidth />
            <TextInput source="period" fullWidth />
            <NumberInput source="gross_pay" fullWidth />
            <NumberInput source="total_deductions" fullWidth />
            <NumberInput source="net_pay" fullWidth />
        </SimpleForm>
    </Edit>
);

export const TransporterPayrollShow = () => (
    <Show>
        <SimpleShowLayout>
            <TextField source="id" />
            <TextField source="transporter_no" />
            <TextField source="period" />
            <NumberField source="gross_pay" />
            <NumberField source="total_deductions" />
            <NumberField source="net_pay" />
        </SimpleShowLayout>
    </Show>
);