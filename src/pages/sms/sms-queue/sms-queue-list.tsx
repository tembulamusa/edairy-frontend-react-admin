import { List, Datagrid, TextField } from "react-admin";

export const SmsQueueList = () => (
    <List>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="status" />
        </Datagrid>
    </List>
);