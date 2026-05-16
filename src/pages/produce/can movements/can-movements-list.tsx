import { List, DataTable, DateField } from "react-admin";

export const CanMovementsList = () => (
    <List title="Can Movements">
        <DataTable>
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
            {/* <DataTable.Col source="remarks" label="Remarks" /> */}
        </DataTable>
    </List>
);
