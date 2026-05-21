import { Create, Edit, Show, SimpleForm, SimpleShowLayout, TextInput, DateInput, TextField, DateField } from 'react-admin';

export const MonthlyPayDateRangeCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source="month" fullWidth />
            <DateInput source="start_date" fullWidth />
            <DateInput source="end_date" fullWidth />
        </SimpleForm>
    </Create>
);

export const MonthlyPayDateRangeEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="month" fullWidth />
            <DateInput source="start_date" fullWidth />
            <DateInput source="end_date" fullWidth />
        </SimpleForm>
    </Edit>
);

export const MonthlyPayDateRangeShow = () => (
    <Show>
        <SimpleShowLayout>
            <TextField source="id" />
            <TextField source="month" />
            <DateField source="start_date" />
            <DateField source="end_date" />
        </SimpleShowLayout>
    </Show>
);