import { BooleanField, DataTable, DateField, List } from 'react-admin';

export const FixedAssetList = () => (
    <List>
        <DataTable>
            <DataTable.Col source="asset_code" />
            <DataTable.Col source="asset_name" />
            <DataTable.Col source="serial_no" />

            <DataTable.Col source="category_name" />

            <DataTable.NumberCol source="book_value" />
            <DataTable.Col source="current_location" />
            <DataTable.Col source="status" />
        </DataTable>
    </List>
);