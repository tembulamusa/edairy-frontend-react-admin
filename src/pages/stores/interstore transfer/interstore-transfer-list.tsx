import { DataTable, DateField } from 'react-admin';
import { StoresListWrapper } from '../shared/stores-list-layout';

export const InterstoreTransferList = () => (
    <StoresListWrapper
        title="Inter Store Transfers"
        subtitle="Move stock between store locations"
        showDelete={false}
    >
        <DataTable.Col source="created_at" label="Created Date & Time">
            <DateField source="created_at" showTime options={{ hour12: false }} />
        </DataTable.Col>
        <DataTable.Col source="reference" label="Reference" />
        <DataTable.Col source="from_store_name" label="From Store" />
        <DataTable.Col source="to_store_name" label="To Store" />
        <DataTable.Col source="transfer_date" label="Transfer Date">
            <DateField source="transfer_date" />
        </DataTable.Col>
        <DataTable.Col source="status" label="Status" />
    </StoresListWrapper>
);
