import { DataTable, DateField, FunctionField } from 'react-admin';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import { ProduceListWrapper } from '../shared/produce-list-layout';

type CoolerMilkCollectionRecord = {
    confirmed?: number | boolean;
};

export const CoolerMilkCollectionList = () => (
    <ProduceListWrapper title="Cooler Milk Collection" subtitle="Manage cooler milk collection records">
        <DataTable.Col source="transaction_date" label="Transaction Date">
            <DateField source="transaction_date" />
        </DataTable.Col>
        <DataTable.Col source="quantity" label="Quantity" />
        <DataTable.Col source="vehicle_reg_no" label="Vehicle Reg No" />
        <DataTable.Col source="milk_delivery_shift" label="Milk Delivery Shift" />
        <DataTable.Col label="Confirmed">
            <FunctionField
                render={(record: CoolerMilkCollectionRecord) =>
                    record?.confirmed === 1 || record?.confirmed === true ? (
                        <CheckCircleOutlineIcon sx={{ color: 'success.main' }} fontSize="small" />
                    ) : (
                        <CancelOutlinedIcon sx={{ color: 'error.main' }} fontSize="small" />
                    )
                }
            />
        </DataTable.Col>
        <DataTable.Col source="transporter_no" label="Transporter No" />
        <DataTable.Col source="route_name" label="Route Name" />
    </ProduceListWrapper>
);
