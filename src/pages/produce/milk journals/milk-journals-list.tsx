import { DataTable, DateField, FunctionField } from 'react-admin';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import { ProduceListWrapper } from '../shared/produce-list-layout';

export const MilkJournalsList = () => (
    <ProduceListWrapper title="Milk Journals" subtitle="Manage milk collection journals by route and shift">
        <DataTable.Col source="journal" label="Journal" />
        <DataTable.Col source="journal_date" label="Journal Date">
            <DateField source="journal_date" />
        </DataTable.Col>
        <DataTable.Col source="milk_delivery_shift" label="Milk Delivery Shift" />
        <DataTable.Col source="route_name" label="Route Name" />
        <DataTable.Col source="entries_count" label="Entries Count" />
        <DataTable.Col source="total_collections" label="Total" />
        <DataTable.Col label="Confirmed">
            <FunctionField
                render={(record) =>
                    record?.confirmed ? (
                        <CheckCircleOutlineIcon sx={{ color: 'success.main' }} fontSize="small" />
                    ) : (
                        <CancelOutlinedIcon sx={{ color: 'error.main' }} fontSize="small" />
                    )
                }
            />
        </DataTable.Col>
    </ProduceListWrapper>
);
