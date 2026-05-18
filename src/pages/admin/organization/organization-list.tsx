import { List, DataTable, DateField, EditButton, DeleteButton, TextInput } from "react-admin";
import { CreateButton } from "../../../components/forms/FormUtils";

export const createOrganizationList = (title: string, resource: string) => () => (
    <List 
        title={title}
        actions={<CreateButton resource={resource} title={title}>
            <TextInput source="name" fullWidth />
            <TextInput source="description" fullWidth multiline />
            <TextInput source="status" fullWidth />
        </CreateButton>}
    >
        <DataTable>
            <DataTable.Col source="created_at" label="Created At">
                <DateField source="created_at" />
            </DataTable.Col>
            <DataTable.Col source="name" label="Name" />
            <DataTable.Col source="description" label="Description" />
            <DataTable.Col source="status" label="Status" />
            <DataTable.Col label="Actions">
                <EditButton />
                <DeleteButton />
            </DataTable.Col>
        </DataTable>
    </List>
);
