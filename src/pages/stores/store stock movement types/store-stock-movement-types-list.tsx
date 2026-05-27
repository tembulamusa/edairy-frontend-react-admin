import { DataTable, FunctionField } from 'react-admin';
import { StoresListWrapper } from '../shared/stores-list-layout';

const directionLabels: Record<string, string> = {
    IN: 'In',
    OUT: 'Out',
};

export const StoreStockMovementTypesList = () => (
    <StoresListWrapper title="Store Stock Movement Types" subtitle="Configure movement types used in the stock ledger">
        <DataTable.Col source="movement_code" label="Code" />
        <DataTable.Col source="movement_name" label="Movement Type" />
        <DataTable.Col label="Direction">
            <FunctionField
                render={(record: { direction?: string }) =>
                    directionLabels[String(record?.direction ?? '')] ?? record?.direction ?? '—'
                }
            />
        </DataTable.Col>
        <DataTable.Col source="description" label="Description" />
    </StoresListWrapper>
);
