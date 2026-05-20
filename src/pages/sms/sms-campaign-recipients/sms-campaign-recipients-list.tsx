import { List, Datagrid, TextField } from "react-admin";

export const SmsCampaignRecipientsList = () => (
    <List>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="recipientName" />
            <TextField source="phoneNumber" />
        </Datagrid>
    </List>
);