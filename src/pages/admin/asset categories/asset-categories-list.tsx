import { List, DataTable, EditButton, DeleteButton, TextInput, required } from 'react-admin';
import { CreateButton } from '../../../components/forms/FormUtils';

export const AssetCategoryList = () => (
    <List 
        title="Asset Categories"
        actions={
            <CreateButton resource="asset-categories" title="Asset Category">
                <TextInput source="name" validate={required()} fullWidth />
                <TextInput source="description" multiline fullWidth />
            </CreateButton>
        }
    >
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
