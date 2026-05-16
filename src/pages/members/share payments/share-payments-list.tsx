
import { List, DataTable, DateField, EditButton, DeleteButton } from 'react-admin';

export const SharePaymentList = () => (
    <List title="Share Payments">
        <DataTable>
            <DataTable.Col source="created_at" label="Created At">
                <DateField source="created_at" />
            </DataTable.Col>
            <DataTable.Col source="member_no" label="Member Number" />
            <DataTable.Col source="payment_mode_name" label="Payment Mode" />
            <DataTable.Col source="share_units" label="Share Units" />
            <DataTable.Col source="amount_paid" label="Amount Paid" />
            <DataTable.Col source="reference_no" label="Reference Number" />
            <DataTable.Col source="transaction_date" label="Payment Date">
                <DateField source="transaction_date" />
            </DataTable.Col>
            <DataTable.Col label="Actions">
                <EditButton />
                <DeleteButton />
            </DataTable.Col>
        </DataTable>
    </List>
);
