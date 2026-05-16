import { List, DataTable, DateField, EditButton, DeleteButton } from 'react-admin';

export const AssetDepreciationEntryList = () => (
    <List title="Asset Depreciation Entries">
        <DataTable>
            <DataTable.Col source="asset_name" label="Asset Name" />
            <DataTable.Col source="asset_code" label="Asset Code" />
            <DataTable.Col source="depreciation_date" label="Depreciation Date">
                <DateField source="depreciation_date" />
            </DataTable.Col>
            <DataTable.Col source="depreciation_amount" label="Depreciation Amount" />
            <DataTable.Col source="accumulated_depreciation" label="Accumulated Depreciation" />
            <DataTable.Col source="book_value" label="Book Value" />
            <DataTable.Col label="Actions">
                <EditButton />
                <DeleteButton />
            </DataTable.Col>
        </DataTable>
    </List>
);
