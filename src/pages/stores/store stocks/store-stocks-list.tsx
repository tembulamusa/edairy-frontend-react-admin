import { DataTable } from 'react-admin';
import { StoresListWrapper } from '../shared/stores-list-layout';

export const StoreStocksList = () => (
    <StoresListWrapper
        title="Store Stocks"
        subtitle="View stock balances and pricing by store"
        showCreateButton={false}
        showActions={false}
        rowClick={false}
    >
        <DataTable.Col source="item_name" label="Item" />
        <DataTable.Col source="store_name" label="Store" />
        <DataTable.Col source="quantity" label="Quantity" />
        <DataTable.Col source="unit" label="Unit" />
        <DataTable.Col source="buying_price" label="Buying Price" />
        <DataTable.Col source="selling_price" label="Selling Price" />
        <DataTable.Col source="credit_selling_price" label="Credit Selling Price" />
    </StoresListWrapper>
);
