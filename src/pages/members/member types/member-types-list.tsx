
import { List, DataTable, TextField, EditButton } from 'react-admin';

export const MemberTypeList = () => (
    <List title="Member Types">
        <DataTable>
            <DataTable.Col source="name" label="Name" />
            <DataTable.Col source="description" label="Description" />
            <DataTable.Col label="Actions">
                <EditButton />
            </DataTable.Col>
        </DataTable>
    </List>
);
