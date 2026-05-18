import {
    List,
    DataTable,
    EditButton,
    DeleteButton,
    TextInput,
    required,
} from "react-admin";
import { CreateButton } from "../../../../components/forms/FormUtils";

export const OrganizationLeadershipsList = () => (
    <List 
        title={"Organization Leaderships"}
        actions={
            <CreateButton resource="organization-leaderships" title="Organization Leadership">
                <TextInput source="first_name" validate={required()} fullWidth />
                <TextInput source="last_name" validate={required()} fullWidth />
                <TextInput source="position" validate={required()} fullWidth />
                <TextInput source="status" fullWidth />
                <TextInput source="phone" fullWidth />
            </CreateButton>
        }
    >
        <DataTable>

            <DataTable.Col source="first_name" label="First Name" />
            <DataTable.Col source="last_name" label="Last Name" />
            <DataTable.Col source="position" label="Position" />
            <DataTable.Col source="status" label="Status" />
            <DataTable.Col source="submitted" label="Submitted" />
            <DataTable.Col source="liveness_passed" label="Liveness Passed" />
            <DataTable.Col source="link_status" label="Link Status" />
            <DataTable.Col source="phone" label="Phone" />

            <DataTable.Col label="Actions">
                <EditButton />
                <DeleteButton />
            </DataTable.Col>

        </DataTable>
    </List>
);