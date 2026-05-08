
import { List, DataTable, DateField, TextField, EditButton, DeleteButton } from 'react-admin';

export const ExchangeVisitList = () => (
    <List title="Exchange Visits">
        <DataTable>
            <DataTable.Col source="CreatedAt" label="Created At">
                <DateField source="CreatedAt" />
            </DataTable.Col>
            <DataTable.Col source="Partner" label="Exchange Visit Partner" />
            <DataTable.Col source="VisitDate" label="Exchange Visit Date">
                <DateField source="VisitDate" />
            </DataTable.Col>
            <DataTable.Col source="Purpose" label="Purpose" />
            <DataTable.Col source="Venue" label="Venue" />
            <DataTable.Col label="Actions">
                <EditButton />
                <DeleteButton />
            </DataTable.Col>
        </DataTable>
    </List>
);
