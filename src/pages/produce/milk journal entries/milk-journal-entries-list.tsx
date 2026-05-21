import { DataTable, DateField, FunctionField } from 'react-admin';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import { ProduceListWrapper } from '../shared/produce-list-layout';

export const MilkJournalEntriesList = () => (
    <ProduceListWrapper title="Milk Journal Entries" subtitle="Manage member entries on milk journal batches">
        <DataTable.Col source="member_no" label="Member No" />
        <DataTable.Col source="member_name" label="Member Name" />
        <DataTable.Col source="batch_no" label="Milk Journal Batch" />
        <DataTable.Col source="journal_date" label="Journal Date">
            <DateField source="journal_date" />
        </DataTable.Col>
        <DataTable.Col source="route_name" label="Route Name" />
        <DataTable.Col source="milk_delivery_shift" label="Milk Delivery Shift" />
        <DataTable.Col source="quantity" label="Quantity (L)" />
        <DataTable.Col label="Status">
            <FunctionField
                render={(record) =>
                    record?.status === 'CONFIRMED' ? (
                        <CheckCircleOutlineIcon sx={{ color: 'success.main' }} fontSize="small" />
                    ) : (
                        <CancelOutlinedIcon sx={{ color: 'error.main' }} fontSize="small" />
                    )
                }
            />
        </DataTable.Col>
    </ProduceListWrapper>
);
