
import { List, DataTable, TextField, DateField, EditButton, DeleteButton } from 'react-admin';

export const DepartmentList = () => (
    <List title="Departments">
        <DataTable>
            <DataTable.Col source="CreatedAt" label="Created At">
                <DateField source="CreatedAt" />
            </DataTable.Col>
            <DataTable.Col source="Name" label="Name" />
            <DataTable.Col source="Code" label="Code" />
            <DataTable.Col source="HeadOfDepartment" label="Head of Department" />
            <DataTable.Col label="Actions">
                <EditButton />
                <DeleteButton />
            </DataTable.Col>
        </DataTable>
    </List>
);
