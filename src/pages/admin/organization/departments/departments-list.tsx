
import { List, DataTable, TextField, DateField, EditButton, DeleteButton } from 'react-admin';

export const DepartmentList = () => (
    <List title="Departments">
        <DataTable>
            <DataTable.Col source="created_at" label="Created At">
                <DateField source="created_at" />
            </DataTable.Col>
            <DataTable.Col source="name" label="Name" />
            <DataTable.Col source="code" label="Code" />
            <DataTable.Col source="head_of_department" label="Head of Department" />
            <DataTable.Col label="Actions">
                <EditButton />
                <DeleteButton />
            </DataTable.Col>
        </DataTable>
    </List>
);
