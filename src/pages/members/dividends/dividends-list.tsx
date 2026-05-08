
import { List, DataTable, DateField, EditButton, DeleteButton } from 'react-admin';

export const DividendList = () => (
    <List title="Dividends">
        <DataTable>
            <DataTable.Col source="CreatedAt" label="Created At">
                <DateField source="CreatedAt" />
            </DataTable.Col>
            <DataTable.Col source="MemberID" label="Member ID" />
            <DataTable.Col source="Amount" label="Amount" />
            <DataTable.Col source="FinancialYear" label="Financial Year" />
            <DataTable.Col source="Status" label="Status" />
            <DataTable.Col label="Actions">
                <EditButton />
                <DeleteButton />
            </DataTable.Col>
        </DataTable>
    </List>
);
