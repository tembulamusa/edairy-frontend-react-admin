import { Edit, SimpleForm, TextInput, PasswordInput, required } from "react-admin";

export const UserEdit = () => (
    <Edit title="Edit User">
        <SimpleForm>
            <TextInput source="name" validate={required()} fullWidth />
            <TextInput source="email" validate={required()} fullWidth />
            <PasswordInput source="password" validate={required()} fullWidth />
        </SimpleForm>
    </Edit>
);