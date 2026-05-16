
import { List, DataTable, TextField, DateField, EditButton, DeleteButton } from 'react-admin';

export const BankList = () => (
    <List title="Banks">
        <DataTable>
            <DataTable.Col source="created_at" label="Created At">
                <DateField source="created_at" />
            </DataTable.Col>
            <DataTable.Col source="name" label="Name" />
            <DataTable.Col source="code" label="Code" />
            <DataTable.Col source="swift_code" label="Swift Code" />
            <DataTable.Col label="Actions">
                <EditButton />
                <DeleteButton />
            </DataTable.Col>
        </DataTable>
    </List>
);
