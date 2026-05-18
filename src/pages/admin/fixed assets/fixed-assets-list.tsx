import { BooleanField, DataTable, DateField, List, TextInput, required } from 'react-admin';
import { CreateButton } from '../../../components/forms/FormUtils';

export const FixedAssetList = () => (
    <List 
        title="Fixed Assets"
        actions={
            <CreateButton resource="fixed-assets" title="Fixed Asset">
                <TextInput source="asset_code" validate={required()} fullWidth />
                <TextInput source="asset_name" validate={required()} fullWidth />
                <TextInput source="serial_no" fullWidth />
            </CreateButton>
        }
    >
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