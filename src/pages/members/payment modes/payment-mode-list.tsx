
import { List, DataTable, DateField, TextField, EditButton, DeleteButton } from 'react-admin';

export const PaymentModeList = () => (
    <List title="Payment Modes">
        <DataTable>
            <DataTable.Col source="created_at" label="Created At">
                <DateField source="created_at" />
            </DataTable.Col>
            <DataTable.Col source="code" label="Code" />
            <DataTable.Col source="name" label="Name" />
            <DataTable.Col label="Actions">
                <EditButton />
                <DeleteButton />
            </DataTable.Col>
        </DataTable>
    </List>
);
