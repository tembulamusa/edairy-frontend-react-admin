import { DataTable } from 'react-admin';
import { StoresListWrapper } from '../shared/stores-list-layout';

export const StoreStockMovementTypesList = () => (
    <StoresListWrapper title="Store Stock Movement Types" subtitle="Configure movement types used in the stock ledger">
        <DataTable.Col source="movement_name" label="Movement Type" />
        <DataTable.Col source="description" label="Description" />
    </StoresListWrapper>
);
