import { List, Datagrid, TextField } from "react-admin";

export const SmsTemplatesList = () => (
    <List>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="templateName" />
            <TextField source="templateBody" />
        </Datagrid>
    </List>
);