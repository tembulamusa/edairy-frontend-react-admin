import {
    Edit,
    SimpleForm,
    TextInput,
    required,
    ReferenceArrayInput,
    CheckboxGroupInput,
    useGetIdentity,
} from "react-admin";

import { Stack, Typography } from "@mui/material";

export const RoleEdit = () => {
    return (
        <Edit title="Edit Role">
            <SimpleForm>
                <Stack spacing={2} width="100%">

                    {/* ROLE NAME */}
                    <TextInput
                        source="name"
                        label="Role Name"
                        validate={required()}
                        fullWidth
                    />

                    {/* HIDDEN GUARD NAME */}
                    <TextInput
                        source="guard_name"
                        defaultValue="web"
                        sx={{ display: "none" }}
                    />

                    {/* PERMISSIONS */}
                    <Typography variant="subtitle1">
                        Permissions
                    </Typography>

                    <ReferenceArrayInput
                        source="permissions"
                        reference="permissions"
                    >
                        <CheckboxGroupInput optionText="name" />
                    </ReferenceArrayInput>

                </Stack>
            </SimpleForm>
        </Edit>
    );
};