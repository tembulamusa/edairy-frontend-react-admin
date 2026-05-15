import {
    List,
    DataTable,
    EditButton,
    DeleteButton,
} from "react-admin";

export const OrganizationLeadershipsList = () => (
    <List title={"Organization Leaderships"}>
        <DataTable>

            <DataTable.Col source="FirstName" label="First Name" />
            <DataTable.Col source="LastName" label="Last Name" />
            <DataTable.Col source="Position" label="Position" />
            <DataTable.Col source="Status" label="Status" />
            <DataTable.Col source="Submitted" label="Submitted" />
            <DataTable.Col source="LivenessPassed" label="Liveness Passed" />
            <DataTable.Col source="LinkStatus" label="Link Status" />
            <DataTable.Col source="Phone" label="Phone" />

            <DataTable.Col label="Actions">
                <EditButton />
                <DeleteButton />
            </DataTable.Col>

        </DataTable>
    </List>
);