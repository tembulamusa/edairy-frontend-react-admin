import { List, Datagrid, TextField } from "react-admin";

export const SmsContactsList = () => (
    <List>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="phoneNumber" />
        </Datagrid>
    </List>
);