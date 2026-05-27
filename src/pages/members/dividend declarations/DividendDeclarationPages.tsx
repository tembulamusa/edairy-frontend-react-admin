import { Create, Edit, Show, SimpleForm, SimpleShowLayout, TextInput, TextField, required } from 'react-admin';

export const DividendDeclarationCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source="fiscal_year" validate={[required()]} fullWidth />
            <TextInput source="period" validate={[required()]} fullWidth />
            <TextInput source="total_pool" validate={[required()]} fullWidth />
            <TextInput source="rate_per_share" validate={[required()]} fullWidth />
            <TextInput source="calculation_type" validate={[required()]} fullWidth />
            <TextInput source="status" validate={[required()]} fullWidth />
            <TextInput source="moses" validate={[]} fullWidth />
        </SimpleForm>
    </Create>
);

export const DividendDeclarationEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="fiscal_year" validate={[required()]} fullWidth />
            <TextInput source="period" validate={[required()]} fullWidth />
            <TextInput source="total_pool" validate={[required()]} fullWidth />
            <TextInput source="rate_per_share" validate={[required()]} fullWidth />
            <TextInput source="calculation_type" validate={[required()]} fullWidth />
            <TextInput source="status" validate={[required()]} fullWidth />
            <TextInput source="moses" validate={[]} fullWidth />
        </SimpleForm>
    </Edit>
);

export const DividendDeclarationShow = () => (
    <Show>
        <SimpleShowLayout>
            <TextField source="id" />
            <TextField source="fiscal_year" />
            <TextField source="period" />
            <TextField source="total_pool" />
            <TextField source="rate_per_share" />
            <TextField source="calculation_type" />
            <TextField source="status" />
            <TextField source="moses" />
            <TextField source="approved_by" />
        </SimpleShowLayout>
    </Show>
);