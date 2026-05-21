import { Create, Edit, Show, SimpleForm, SimpleShowLayout, TextInput, TextField, required } from 'react-admin';

export const ShareDividendCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source="fiscal_year" validate={[required()]} fullWidth />
            <TextInput source="period" validate={[required()]} fullWidth />
            <TextInput source="calculation_type" validate={[required()]} fullWidth />
            <TextInput source="share_units" validate={[required()]} fullWidth />
            <TextInput source="calculation_amount" validate={[required()]} fullWidth />
            <TextInput source="dividend_amount" validate={[required()]} fullWidth />
            <TextInput source="include_in_milk" validate={[required()]} fullWidth />
            <TextInput source="status" validate={[required()]} fullWidth />
        </SimpleForm>
    </Create>
);

export const ShareDividendEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="fiscal_year" validate={[required()]} fullWidth />
            <TextInput source="period" validate={[required()]} fullWidth />
            <TextInput source="calculation_type" validate={[required()]} fullWidth />
            <TextInput source="share_units" validate={[required()]} fullWidth />
            <TextInput source="calculation_amount" validate={[required()]} fullWidth />
            <TextInput source="dividend_amount" validate={[required()]} fullWidth />
            <TextInput source="include_in_milk" validate={[required()]} fullWidth />
            <TextInput source="status" validate={[required()]} fullWidth />
        </SimpleForm>
    </Edit>
);

export const ShareDividendShow = () => (
    <Show>
        <SimpleShowLayout>
            <TextField source="id" />
            <TextField source="fiscal_year" />
            <TextField source="period" />
            <TextField source="calculation_type" />
            <TextField source="share_units" />
            <TextField source="calculation_amount" />
            <TextField source="dividend_amount" />
            <TextField source="include_in_milk" />
            <TextField source="status" />
        </SimpleShowLayout>
    </Show>
);