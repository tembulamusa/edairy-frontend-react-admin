import { DataTable, DateField } from 'react-admin';
import { ProduceListWrapper } from '../shared/produce-list-layout';

export const DailyMilkVariancesList = () => (
    <ProduceListWrapper title="Daily Milk Variances" subtitle="Manage daily milk variance records">
        <DataTable.Col source="day" label="Day">
            <DateField source="day" />
        </DataTable.Col>
        <DataTable.Col source="month" label="Month" />
        <DataTable.Col source="transporter" label="Transporter" />
        <DataTable.Col source="field_collections" label="Field Collections" />
        <DataTable.Col source="mcc" label="MCC" />
        <DataTable.Col source="cash_sales" label="Cash Sales" />
        <DataTable.Col source="credit_sales" label="Credit Sales" />
        <DataTable.Col source="rejects" label="Rejects" />
        <DataTable.Col source="balance" label="Balance" />
    </ProduceListWrapper>
);
