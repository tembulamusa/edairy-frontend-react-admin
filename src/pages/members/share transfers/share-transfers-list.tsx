
import { List, DataTable, DateField, EditButton, DeleteButton } from 'react-admin';

export const ShareTransferList = () => (
    <List title="Share Transfers">
        <DataTable>
            <DataTable.Col source="CreatedAt" label="Created At">
                <DateField source="CreatedAt" />
            </DataTable.Col>
            <DataTable.Col source="FromMemberID" label="From Member ID" />
            <DataTable.Col source="ToMemberID" label="To Member ID" />
            <DataTable.Col source="Amount" label="Amount" />
            <DataTable.Col source="TransferDate" label="Transfer Date">
                <DateField source="TransferDate" />
            </DataTable.Col>
            <DataTable.Col label="Actions">
                <EditButton />
                <DeleteButton />
            </DataTable.Col>
        </DataTable>
    </List>
);
