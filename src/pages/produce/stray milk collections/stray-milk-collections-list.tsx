import { List, DataTable, DateField } from "react-admin";

export const StrayMilkCollectionsList = () => (
    <List title="Stray Milk Collections">
        <DataTable>
            <DataTable.Col source="MemberNo" label="Member No" />
            <DataTable.Col source="MemberName" label="Member Name" />
            <DataTable.Col source="MemberRouteName" label="Member Route" />
            <DataTable.Col source="JournalRouteName" label="Journal Route" />
            <DataTable.Col source="Quantity" label="Quantity" />
            <DataTable.Col source="JournalDate" label="Date">
                <DateField source="JournalDate" />
            </DataTable.Col>
            <DataTable.Col source="MilkDeliveryShift" label="Milk Delivery Shift" />
        </DataTable>
    </List>
);
