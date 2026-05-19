import { Create, SimpleForm, TextInput, PasswordInput, required } from "react-admin";

export const UserCreate = () => (
    <Create title="Create User">
        <SimpleForm>
            <TextInput source="name" validate={required()} fullWidth />
            <TextInput source="email" validate={required()} fullWidth />
            <PasswordInput source="password" validate={required()} fullWidth />
        </SimpleForm>
    </Create>
);