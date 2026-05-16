
import { List, DataTable, DateField, TextField, EditButton, DeleteButton } from 'react-admin';

export const ExchangeVisitList = () => (
    <List title="Exchange Visits">
        <DataTable>
            <DataTable.Col source="created_at" label="Created At">
                <DateField source="created_at" />
            </DataTable.Col>
            <DataTable.Col source="partner" label="Exchange Visit Partner" />
            <DataTable.Col source="visit_date" label="Exchange Visit Date">
                <DateField source="visit_date" />
            </DataTable.Col>
            <DataTable.Col source="purpose" label="Purpose" />
            <DataTable.Col source="venue" label="Venue" />
            <DataTable.Col label="Actions">
                <EditButton />
                <DeleteButton />
            </DataTable.Col>
        </DataTable>
    </List>
);
