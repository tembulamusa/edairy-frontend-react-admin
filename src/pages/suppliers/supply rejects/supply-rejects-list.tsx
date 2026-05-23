import { DataTable, DateField, NumberField } from 'react-admin';
import { StoresListWrapper } from '../../stores/shared/stores-list-layout';

export const SupplyRejectsList = () => (
    <StoresListWrapper title="Supply Rejects" subtitle="Record items rejected from supply deliveries">
        <DataTable.Col source="created_at" label="Date">
            <DateField source="created_at" />
        </DataTable.Col>
        <DataTable.Col source="supply_id" label="Supply ID">
            <NumberField source="supply_id" />
        </DataTable.Col>
        <DataTable.Col source="item_name" label="Item Name" />
        <DataTable.Col source="vendor_name" label="Vendor Name" />
        <DataTable.Col source="quantity" label="Quantity">
            <NumberField source="quantity" />
        </DataTable.Col>
        <DataTable.Col source="reason" label="Reason" />
    </StoresListWrapper>
);
