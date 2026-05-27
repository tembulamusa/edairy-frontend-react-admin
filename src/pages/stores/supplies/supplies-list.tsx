import { DataTable, DateField, NumberField, BooleanField } from 'react-admin';
import { StoresListWrapper } from '../shared/stores-list-layout';

export const SuppliesList = () => (
    <StoresListWrapper title="Supplies" subtitle="Record goods received from vendors into stores">
        <DataTable.Col source="reference" label="Reference" />
        <DataTable.Col source="supplied_date" label="Supplied Date">
            <DateField source="supplied_date" />
        </DataTable.Col>
        <DataTable.Col source="vendor_name" label="Vendor Name" />
        <DataTable.Col source="store_name" label="Store" />
        <DataTable.Col source="item_count" label="Items">
            <NumberField source="item_count" />
        </DataTable.Col>
        <DataTable.Col source="total_amount" label="Total Amount">
            <NumberField source="total_amount" />
        </DataTable.Col>
        <DataTable.Col source="settled" label="Settled">
            <BooleanField source="settled" />
        </DataTable.Col>
    </StoresListWrapper>
);
