import { List, DataTable, TextField, DateField, EditButton, DeleteButton } from 'react-admin';

export const SmsErrorCodeList = () => (
    <List title="Sms Error codes">
        <DataTable>
            <DataTable.Col source="ID" label="ID" />
            <DataTable.Col source="CreatedAt" label="Created At">
                <DateField source="CreatedAt" />
            </DataTable.Col>
            <DataTable.Col source="Name" label="Name" />
            <DataTable.Col label="Actions">
                <EditButton />
                <DeleteButton />
            </DataTable.Col>
        </DataTable>
    </List>
);
