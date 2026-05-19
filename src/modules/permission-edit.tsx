import { Edit, SimpleForm, TextInput, required } from "react-admin";

export const PermissionEdit = () => (
    <Edit title="Edit Permission">
        <SimpleForm>
            <TextInput source="name" validate={required()} fullWidth />
            <TextInput
                source="guard_name"
                defaultValue="web"
                sx={{ display: 'none' }}
            />
        </SimpleForm>
    </Edit>
);