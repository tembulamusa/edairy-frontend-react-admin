import { List, DataTable, DateField, EditButton, DeleteButton } from 'react-admin';

export const AssetCategoryList = () => (
    <List title="Asset Categories">
        <DataTable>

            <DataTable.Col source="Name" label="Name" />
            <DataTable.Col source="Description" label="Description" />
            <DataTable.Col source="AssetCount" label="Asset Count" />
            <DataTable.Col label="Actions">
                <EditButton />
                <DeleteButton />
            </DataTable.Col>
        </DataTable>
    </List>
);
