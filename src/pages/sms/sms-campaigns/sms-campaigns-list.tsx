import { List, Datagrid, TextField } from "react-admin";

export const SmsCampaignsList = () => (
    <List>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="status" />
        </Datagrid>
    </List>
);