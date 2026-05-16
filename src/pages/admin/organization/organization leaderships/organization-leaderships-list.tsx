import {
    List,
    DataTable,
    EditButton,
    DeleteButton,
} from "react-admin";

export const OrganizationLeadershipsList = () => (
    <List title={"Organization Leaderships"}>
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