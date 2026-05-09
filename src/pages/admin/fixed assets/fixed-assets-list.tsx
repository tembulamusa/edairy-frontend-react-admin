import { BooleanField, DataTable, DateField, List } from 'react-admin';

export const FixedAssetList = () => (
    <List>
        <DataTable>
            <DataTable.Col source="AssetCode" />
            <DataTable.Col source="AssetName" />
            <DataTable.Col source="SerialNo" />

            <DataTable.Col source="CategoryName" />

            <DataTable.NumberCol source="BookValue" />
            <DataTable.Col source="CurrentLocation" />
            <DataTable.Col source="Status" />
        </DataTable>
    </List>
);