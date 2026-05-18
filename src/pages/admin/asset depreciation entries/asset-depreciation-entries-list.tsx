import { List, DataTable, DateField, EditButton, DeleteButton, TextInput, required } from 'react-admin';
import { CreateButton } from '../../../components/forms/FormUtils';

export const AssetDepreciationEntryList = () => (
    <List 
        title="Asset Depreciation Entries"
        actions={
            <CreateButton resource="asset-depreciation-entries" title="Asset Depreciation Entry">
                <TextInput source="asset_id" validate={required()} fullWidth />
                <TextInput source="depreciation_amount" validate={required()} fullWidth />
            </CreateButton>
        }
    >
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
