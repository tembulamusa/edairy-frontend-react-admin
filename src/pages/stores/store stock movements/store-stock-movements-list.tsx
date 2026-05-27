import { DataTable, DateField, TextField } from 'react-admin';
import { StoresListWrapper } from '../shared/stores-list-layout';

export const StoreStockMovementsList = () => (
    <StoresListWrapper
        title="Store Stock Movements"
        subtitle="Ledger of stock ins, outs, and balances"
        rowClick="show"
    >
        <DataTable.Col source="transaction_date" label="Date">
            <DateField source="transaction_date" />
        </DataTable.Col>
        <DataTable.Col source="store_name" label="Store">
            <TextField source="store_name" />
        </DataTable.Col>
        <DataTable.Col source="movement_type" label="Movement Type">
            <TextField source="movement_type" />
        </DataTable.Col>
        <DataTable.Col source="remarks" label="Remarks">
            <TextField source="remarks" />
        </DataTable.Col>
    </StoresListWrapper>
);
