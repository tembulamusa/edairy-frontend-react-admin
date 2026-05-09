import { List, DataTable, DateField, EditButton, DeleteButton } from 'react-admin';

export const AssetDepreciationEntryList = () => (
    <List title="Asset Depreciation Entries">
        <DataTable>
            <DataTable.Col source="AssetName" label="Asset Name" />
            <DataTable.Col source="AssetCode" label="Asset Code" />
            <DataTable.Col source="DepreciationDate" label="Depreciation Date">
                <DateField source="DepreciationDate" />
            </DataTable.Col>
            <DataTable.Col source="DepreciationAmount" label="Depreciation Amount" />
            <DataTable.Col source="AccumulatedDepreciation" label="Accumulated Depreciation" />
            <DataTable.Col source="BookValue" label="Book Value" />
            <DataTable.Col label="Actions">
                <EditButton />
                <DeleteButton />
            </DataTable.Col>
        </DataTable>
    </List>
);
