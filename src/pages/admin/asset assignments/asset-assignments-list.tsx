import { List, DataTable, DateField, EditButton, DeleteButton, FunctionField } from 'react-admin';

type AssetAssignmentRecord = {
    ReturnedAt?: string;
};

const formatReturnedAt = (returnedAt?: string) => {
    if (!returnedAt || returnedAt.startsWith("0001-01-01")) return "Not returned";
    return returnedAt;
};

export const AssetAssignmentList = () => (
    <List title="Asset Assignments">
        <DataTable>
            <DataTable.Col source="AssetName" label="Asset Name" />
            <DataTable.Col source="AssetCode" label="Asset Code" />
            <DataTable.Col source="AssignedToName" label="Assigned To" />
            <DataTable.Col source="AssignedAt" label="Assigned At">
                <DateField source="AssignedAt" />
            </DataTable.Col>
            <DataTable.Col label="Returned At">
                <FunctionField
                    render={(record: AssetAssignmentRecord) =>
                        formatReturnedAt(record?.ReturnedAt)
                    }
                />
            </DataTable.Col>
            <DataTable.Col source="Status" label="Status" />
            <DataTable.Col label="Actions">
                <EditButton />
                <DeleteButton />
            </DataTable.Col>
        </DataTable>
    </List>
);
