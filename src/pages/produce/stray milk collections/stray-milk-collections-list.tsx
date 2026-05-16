import { List, DataTable, DateField } from "react-admin";

export const StrayMilkCollectionsList = () => (
    <List title="Stray Milk Collections">
        <DataTable>
            <DataTable.Col source="member_no" label="Member No" />
            <DataTable.Col source="member_name" label="Member Name" />
            <DataTable.Col source="member_route_name" label="Member Route" />
            <DataTable.Col source="journal_route_name" label="Journal Route" />
            <DataTable.Col source="quantity" label="Quantity" />
            <DataTable.Col source="journal_date" label="Date">
                <DateField source="journal_date" />
            </DataTable.Col>
            <DataTable.Col source="milk_delivery_shift" label="Milk Delivery Shift" />
        </DataTable>
    </List>
);
