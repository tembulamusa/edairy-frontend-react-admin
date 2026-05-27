import { DataTable, DateField, FunctionField } from 'react-admin';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import { ProduceListWrapper } from '../shared/produce-list-layout';

type MilkRejectRecord = {
    confirmed?: number | boolean;
};

export const MilkRejectsList = () => (
    <ProduceListWrapper title="Milk Rejects" subtitle="Manage rejected milk records">
        <DataTable.Col source="transaction_date" label="Date">
            <DateField source="transaction_date" />
        </DataTable.Col>
        <DataTable.Col source="route_name" label="Route Name" />
        <DataTable.Col source="quantity" label="Quantity" />
        <DataTable.Col source="transporter_name" label="Transporter Name" />
        <DataTable.Col source="member_name" label="Member Name" />
        <DataTable.Col label="Confirmed">
            <FunctionField
                render={(record: MilkRejectRecord) =>
                    record?.confirmed === 1 || record?.confirmed === true ? (
                        <CheckCircleOutlineIcon sx={{ color: 'success.main' }} fontSize="small" />
                    ) : (
                        <CancelOutlinedIcon sx={{ color: 'error.main' }} fontSize="small" />
                    )
                }
            />
        </DataTable.Col>
        <DataTable.Col source="reason" label="Reason" />
        <DataTable.Col source="description" label="Description" />
        <DataTable.Col source="milk_delivery_shift" label="Shift" />
    </ProduceListWrapper>
);
