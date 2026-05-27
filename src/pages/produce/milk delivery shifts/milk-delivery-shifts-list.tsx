import { DataTable } from 'react-admin';
import { ProduceListWrapper } from '../shared/produce-list-layout';

export const MilkDeliveryShiftsList = () => (
    <ProduceListWrapper title="Milk Delivery Shifts" subtitle="Manage milk delivery shift definitions">
        <DataTable.Col source="name" label="Name" />
        <DataTable.Col source="description" label="Description" />
    </ProduceListWrapper>
);
