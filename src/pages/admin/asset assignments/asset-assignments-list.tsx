import { List, DataTable, DateField, EditButton, DeleteButton, FunctionField, TextInput, required } from 'react-admin';
import { CreateButton } from '../../../components/forms/FormUtils';

type AssetAssignmentRecord = {
    ReturnedAt?: string;
    returned_at?: string;
};

const formatReturnedAt = (returnedAt?: string) => {
    if (!returnedAt || returnedAt.startsWith("0001-01-01")) return "Not returned";
    return returnedAt;
};

export const AssetAssignmentList = () => (
    <List 
        title="Asset Assignments"
        actions={
            <CreateButton resource="asset-assignments" title="Asset Assignment">
                <TextInput source="asset_id" validate={required()} fullWidth />
                <TextInput source="assigned_to_id" validate={required()} fullWidth />
                <TextInput source="status" fullWidth />
            </CreateButton>
        }
    >
        <DataTable>
            <DataTable.Col source="asset_name" label="Asset Name" />
            <DataTable.Col source="asset_code" label="Asset Code" />
            <DataTable.Col source="assigned_to_name" label="Assigned To" />
            <DataTable.Col source="assigned_at" label="Assigned At">
                <DateField source="assigned_at" />
            </DataTable.Col>
            <DataTable.Col label="Returned At">
                <FunctionField
                    render={(record: AssetAssignmentRecord) =>
                        formatReturnedAt(record?.returned_at)
                    }
                />
            </DataTable.Col>
            <DataTable.Col source="status" label="Status" />
            <DataTable.Col label="Actions">
                <EditButton />
                <DeleteButton />
            </DataTable.Col>
        </DataTable>
    </List>
);
