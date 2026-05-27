import { DataTable, DateField } from 'react-admin';
import { ProduceListWrapper } from '../shared/produce-list-layout';

export const CanMovementsList = () => (
    <ProduceListWrapper title="Can Movements" subtitle="Track milk can movements across routes and transporters">
        <DataTable.Col source="movement_date" label="Movement Date">
            <DateField source="movement_date" />
        </DataTable.Col>
        <DataTable.Col source="can_code" label="Can Code" />
        <DataTable.Col source="movement_type" label="Type" />
        <DataTable.Col source="quantity" label="Quantity" />
        <DataTable.Col source="condition_on_return" label="Condition Return" />
        <DataTable.Col source="shift_name" label="Shift" />
        <DataTable.Col source="transporter_no" label="Transporter No" />
        <DataTable.Col source="route_name" label="Route" />
    </ProduceListWrapper>
);
