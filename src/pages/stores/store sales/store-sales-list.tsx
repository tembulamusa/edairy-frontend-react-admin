import { useState } from 'react';
import { DataTable, DateField, NumberField, type Identifier } from 'react-admin';
import { TransporterListLayout, transporterDataTableSx } from '../../transporters/shared/TransporterListLayout';
import { StoreSaleDetailDialog } from './StoreSaleDetailDialog';

export const StoreSalesList = () => {
    const [detailOpen, setDetailOpen] = useState(false);
    const [selectedSaleId, setSelectedSaleId] = useState<Identifier | null>(null);

    const handleCloseDetail = () => {
        setDetailOpen(false);
        setSelectedSaleId(null);
    };

    return (
        <>
            <TransporterListLayout
                title="Store Sales"
                subtitle="View store sale transactions and record new sales at the POS"
                rowClick={false}
            >
                <DataTable
                    rowClick={(id) => {
                        setSelectedSaleId(id);
                        setDetailOpen(true);
                        return false;
                    }}
                    sx={{
                        ...transporterDataTableSx,
                        '& .RaDataTable-row': { cursor: 'pointer' },
                    }}
                >
                    <DataTable.Col source="created_at" label="Date & Time">
                        <DateField source="created_at" showTime options={{ hour12: false }} />
                    </DataTable.Col>
                    <DataTable.Col source="reference" label="Reference" />
                    <DataTable.Col source="store_name" label="Store" />
                    <DataTable.Col source="sale_type" label="Sale Type" />
                    <DataTable.Col source="customer_type" label="Customer Type" />
                    <DataTable.Col source="total_amount" label="Total Amount">
                        <NumberField source="total_amount" options={{ style: 'currency', currency: 'KES' }} />
                    </DataTable.Col>
                    <DataTable.Col source="amount_paid" label="Amount Paid">
                        <NumberField source="amount_paid" options={{ style: 'currency', currency: 'KES' }} />
                    </DataTable.Col>
                    <DataTable.Col source="amount_due" label="Amount Due">
                        <NumberField source="amount_due" options={{ style: 'currency', currency: 'KES' }} />
                    </DataTable.Col>
                </DataTable>
            </TransporterListLayout>

            <StoreSaleDetailDialog
                open={detailOpen}
                saleId={selectedSaleId}
                onClose={handleCloseDetail}
            />
        </>
    );
};
