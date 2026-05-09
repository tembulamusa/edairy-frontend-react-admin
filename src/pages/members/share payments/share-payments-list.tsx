
import { List, DataTable, DateField, EditButton, DeleteButton } from 'react-admin';

export const SharePaymentList = () => (
    <List title="Share Payments">
        <DataTable>
            <DataTable.Col source="CreatedAt" label="Created At">
                <DateField source="CreatedAt" />
            </DataTable.Col>
            <DataTable.Col source="MemberNo" label="Member Number" />
            <DataTable.Col source="PaymentModeName" label="Payment Mode" />
            <DataTable.Col source="ShareUnits" label="Share Units" />
            <DataTable.Col source="AmountPaid" label="Amount Paid" />
            <DataTable.Col source="ReferenceNo" label="Reference Number" />
            <DataTable.Col source="TransactionDate" label="Payment Date">
                <DateField source="TransactionDate" />
            </DataTable.Col>
            <DataTable.Col label="Actions">
                <EditButton />
                <DeleteButton />
            </DataTable.Col>
        </DataTable>
    </List>
);
