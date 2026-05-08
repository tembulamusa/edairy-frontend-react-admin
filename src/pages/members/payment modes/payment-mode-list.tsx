
import { List, DataTable, DateField, TextField, EditButton, DeleteButton } from 'react-admin';

export const PaymentModeList = () => (
    <List title="Payment Modes">
        <DataTable>
            <DataTable.Col source="CreatedAt" label="Created At">
                <DateField source="CreatedAt" />
            </DataTable.Col>
            <DataTable.Col source="Code" label="Code" />
            <DataTable.Col source="Name" label="Name" />
            <DataTable.Col label="Actions">
                <EditButton />
                <DeleteButton />
            </DataTable.Col>
        </DataTable>
    </List>
);
