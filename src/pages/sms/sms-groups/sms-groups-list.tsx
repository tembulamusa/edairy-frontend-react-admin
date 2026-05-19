import { List, Datagrid, TextField } from "react-admin";

export const SmsGroupsList = () => (
    <List>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="name" />
        </Datagrid>
    </List>
);