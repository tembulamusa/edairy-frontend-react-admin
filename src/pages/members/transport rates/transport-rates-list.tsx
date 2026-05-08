
import { List, DataTable, DateField, ReferenceField, TextField, NumberField, EditButton } from 'react-admin';

export const TransportRateList = () => (
    <List title="Transport Rates">
        <DataTable>
            <DataTable.Col source="Rate" label="Transport Rate" />
            <DataTable.Col source="RouteName" label="Route" />
            <DataTable.Col source="MemberNo" label="Member" />
            <DataTable.Col source="TransporterFirstName" label="Transporter" />
            <DataTable.Col source="Status" label="Status" />
            <DataTable.Col label="Actions">
                <EditButton />
            </DataTable.Col>
        </DataTable>
    </List >
);
