import { DataTable, DateField, FunctionField } from 'react-admin';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import { ProduceListWrapper } from '../shared/produce-list-layout';

type MilkDeliveryRecord = {
    confirmed?: number | boolean;
    invoiced?: number | boolean;
};

export const MilkDeliveryList = () => (
    <ProduceListWrapper title="Milk Deliveries" subtitle="Manage milk delivery transactions">
        <DataTable.Col source="transaction_date" label="Date">
            <DateField source="transaction_date" />
        </DataTable.Col>
        <DataTable.Col source="quantity_accepted" label="Quantity" />
        <DataTable.Col source="amount" label="Amount" />
        <DataTable.Col source="amount_paid" label="Paid" />
        <DataTable.Col source="delivery_note_number" label="Delivery Note Number" />
        <DataTable.Col source="customer_name" label="Customer" />
        <DataTable.Col label="Invoiced">
            <FunctionField
                render={(record: MilkDeliveryRecord) =>
                    record?.invoiced === 1 || record?.invoiced === true ? (
                        <CheckCircleOutlineIcon sx={{ color: 'success.main' }} fontSize="small" />
                    ) : (
                        <CancelOutlinedIcon sx={{ color: 'error.main' }} fontSize="small" />
                    )
                }
            />
        </DataTable.Col>
        <DataTable.Col source="route_name" label="Route" />
        <DataTable.Col label="Confirmed">
            <FunctionField
                render={(record: MilkDeliveryRecord) =>
                    record?.confirmed === 1 || record?.confirmed === true ? (
                        <CheckCircleOutlineIcon sx={{ color: 'success.main' }} fontSize="small" />
                    ) : (
                        <CancelOutlinedIcon sx={{ color: 'error.main' }} fontSize="small" />
                    )
                }
            />
        </DataTable.Col>
        <DataTable.Col source="transporter_name" label="Transporter" />
    </ProduceListWrapper>
);
