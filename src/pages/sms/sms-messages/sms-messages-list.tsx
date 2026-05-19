import { List, Datagrid, TextField } from "react-admin";

export const SmsMessagesList = () => (
    <List>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="message" />
            <TextField source="status" />
        </Datagrid>
    </List>
);