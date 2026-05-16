import { List, DataTable, DateField, EditButton, DeleteButton } from 'react-admin';

export const AssetCategoryList = () => (
    <List title="Asset Categories">
        <DataTable>

            <DataTable.Col source="name" label="Name" />
            <DataTable.Col source="description" label="Description" />
            <DataTable.Col source="asset_count" label="Asset Count" />
            <DataTable.Col label="Actions">
                <EditButton />
                <DeleteButton />
            </DataTable.Col>
        </DataTable>
    </List>
);
