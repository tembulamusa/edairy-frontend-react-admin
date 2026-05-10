import { List, DataTable, DateField } from "react-admin";

export const CanMovementsList = () => (
    <List title="Can Movements">
        <DataTable>
            <DataTable.Col source="MovementDate" label="Movement Date">
                <DateField source="MovementDate" />
            </DataTable.Col>
            <DataTable.Col source="CanCode" label="Can Code" />
            <DataTable.Col source="MovementType" label="Type" />
            <DataTable.Col source="Quantity" label="Quantity" />
            <DataTable.Col source="ConditionOnReturn" label="Condition Return" />
            <DataTable.Col source="ShiftName" label="Shift" />
            <DataTable.Col source="TransporterNo" label="Transporter No" />
            <DataTable.Col source="RouteName" label="Route" />
            {/* <DataTable.Col source="Remarks" label="Remarks" /> */}
        </DataTable>
    </List>
);
