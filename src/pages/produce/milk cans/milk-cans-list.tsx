import { DataTable, FunctionField } from 'react-admin';
import { ProduceListWrapper } from '../shared/produce-list-layout';

type MilkCanRecord = {
    route_id?: number;
    route_name?: string;
};

export const MilkCansList = () => (
    <ProduceListWrapper
        title="Milk Cans"
        subtitle="Manage milk can inventory and specifications"
    >
        <DataTable.Col label="Route">
            <FunctionField
                render={(record: MilkCanRecord) =>
                    record?.route_name ?? (record?.route_id ? String(record.route_id) : '')
                }
            />
        </DataTable.Col>
        <DataTable.Col source="can_id" label="Can ID" />
        <DataTable.Col source="can_type" label="Can Type" />
        <DataTable.Col source="can_size" label="Can Size" />
        <DataTable.Col source="tare_weight" label="Tare Weight" />
    </ProduceListWrapper>
);
