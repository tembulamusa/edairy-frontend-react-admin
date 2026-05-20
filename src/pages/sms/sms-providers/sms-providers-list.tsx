import { List, Datagrid, TextField } from "react-admin";

export const SmsProvidersList = () => (
    <List>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="providerName" />
        </Datagrid>
    </List>
);