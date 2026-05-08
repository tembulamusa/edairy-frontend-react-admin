
import { List, DataTable, DateField, TextField, EditButton, DeleteButton } from 'react-admin';

export const ShareTypeList = () => (
    <List title="Share Types">
        <DataTable>
            <DataTable.Col source="CreatedAt" label="Created At">
                <DateField source="CreatedAt" />
            </DataTable.Col>
            <DataTable.Col source="Name" label="Name" />
            <DataTable.Col source="Code" label="Code" />
            <DataTable.Col source="Description" label="Description" />
            <DataTable.Col source="MinAmount" label="Min Amount" />
            <DataTable.Col source="MaxAmount" label="Max Amount" />
            <DataTable.Col label="Actions">
                <EditButton />
                <DeleteButton />
            </DataTable.Col>
        </DataTable>
    </List>
);
