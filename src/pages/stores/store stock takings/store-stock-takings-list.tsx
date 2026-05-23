import { DataTable, DateField } from 'react-admin';
import { StoresListWrapper } from '../shared/stores-list-layout';

export const StoreStockTakingsList = () => (
    <StoresListWrapper title="Store Stock Takings" subtitle="Record physical stock counts and variances">
        <DataTable.Col source="stock_take_no" label="Stock Take No" />
        <DataTable.Col source="store_name" label="Store" />
        <DataTable.Col source="item_name" label="Item" />
        <DataTable.Col source="system_quantity" label="System Quantity" />
        <DataTable.Col source="physical_quantity" label="Physical Quantity" />
        <DataTable.Col source="variance_quantity" label="Variance" />
        <DataTable.Col source="remarks" label="Remarks" />
        <DataTable.Col source="stock_take_date" label="Date">
            <DateField source="stock_take_date" />
        </DataTable.Col>
    </StoresListWrapper>
);
