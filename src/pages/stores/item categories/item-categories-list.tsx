import { DataTable } from 'react-admin';
import { StoresListWrapper } from '../shared/stores-list-layout';

export const ItemCategoriesList = () => (
    <StoresListWrapper title="Item Categories" subtitle="Manage categories for store inventories and items">
        <DataTable.Col source="name" label="Name" />
        <DataTable.Col source="description" label="Description" />
        <DataTable.Col source="status" label="Status" />
    </StoresListWrapper>
);
